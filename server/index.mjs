import crypto from 'node:crypto';
import http from 'node:http';
import { URL } from 'node:url';
import { analyzeSupplements, createEmptyQuestionnaire, FREE_ANALYSIS_LIMIT } from './analysis-engine.mjs';
import { db, mapAnalysis, mapUser } from './db.mjs';

const PORT = Number(process.env.PORT || 3001);

function json(response, status, payload) {
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET,POST,PATCH,DELETE,OPTIONS',
  });
  response.end(JSON.stringify(payload));
}

function noContent(response) {
  response.writeHead(204, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET,POST,PATCH,DELETE,OPTIONS',
  });
  response.end();
}

function parseBody(request) {
  return new Promise((resolve, reject) => {
    let body = '';
    request.on('data', (chunk) => {
      body += chunk;
    });
    request.on('end', () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error('Некорректный JSON в запросе.'));
      }
    });
    request.on('error', reject);
  });
}

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

function findUserByEmail(email) {
  const row = db.prepare('SELECT * FROM users WHERE email = ?').get(normalizeEmail(email));
  return row || null;
}

function getSessionUser(request) {
  const authHeader = request.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

  if (!token) {
    return null;
  }

  const row = db
    .prepare(
      `SELECT users.* FROM sessions
       JOIN users ON users.id = sessions.user_id
       WHERE sessions.token = ?`,
    )
    .get(token);

  return row ? mapUser(row) : null;
}

function requireUser(request, response) {
  const user = getSessionUser(request);
  if (!user) {
    json(response, 401, { error: 'Требуется авторизация.' });
    return null;
  }
  return user;
}

function saveSession(userId) {
  const token = crypto.randomUUID();
  db.prepare('INSERT INTO sessions (token, user_id, created_at) VALUES (?, ?, ?)')
    .run(token, userId, new Date().toISOString());
  return token;
}

function updateUserRecord(userId, patch) {
  const currentRow = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
  const currentUser = mapUser(currentRow);
  const nextQuestionnaire = {
    ...createEmptyQuestionnaire(currentUser.name, currentUser.email),
    ...currentUser.questionnaireData,
    ...patch.questionnaireData,
  };
  const updatedName = patch.name ?? currentUser.name;
  const updatedEmail = patch.email ?? currentUser.email;

  db.prepare(
    `UPDATE users
     SET name = ?, email = ?, plan = ?, questionnaire_json = ?, updated_at = ?
     WHERE id = ?`,
  ).run(
    updatedName,
    updatedEmail,
    patch.plan ?? currentUser.plan,
    JSON.stringify({
      ...nextQuestionnaire,
      name: nextQuestionnaire.name || updatedName,
      email: nextQuestionnaire.email || updatedEmail,
    }),
    new Date().toISOString(),
    userId,
  );

  return mapUser(db.prepare('SELECT * FROM users WHERE id = ?').get(userId));
}

function getAnalysesForUser(userId) {
  const rows = db.prepare('SELECT * FROM analyses WHERE user_id = ? ORDER BY date DESC').all(userId);
  return rows.map(mapAnalysis);
}

const server = http.createServer(async (request, response) => {
  if (!request.url) {
    json(response, 404, { error: 'Не найдено.' });
    return;
  }

  if (request.method === 'OPTIONS') {
    noContent(response);
    return;
  }

  const url = new URL(request.url, `http://localhost:${PORT}`);

  try {
    if (url.pathname === '/api/health' && request.method === 'GET') {
      json(response, 200, { ok: true });
      return;
    }

    if (url.pathname === '/api/auth/register' && request.method === 'POST') {
      const body = await parseBody(request);
      const email = normalizeEmail(body.email);
      if (!body.name || !email || !body.password) {
        json(response, 400, { error: 'Заполните имя, email и пароль.' });
        return;
      }
      if (findUserByEmail(email)) {
        json(response, 409, { error: 'Пользователь с таким email уже существует.' });
        return;
      }

      const userId = crypto.randomUUID();
      const now = new Date().toISOString();
      db.prepare(
        `INSERT INTO users (id, name, email, password_hash, plan, questionnaire_json, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      ).run(
        userId,
        body.name.trim(),
        email,
        hashPassword(body.password),
        body.plan === 'premium' ? 'premium' : 'free',
        JSON.stringify(createEmptyQuestionnaire(body.name.trim(), email)),
        now,
        now,
      );

      const token = saveSession(userId);
      json(response, 201, {
        token,
        user: mapUser(db.prepare('SELECT * FROM users WHERE id = ?').get(userId)),
      });
      return;
    }

    if (url.pathname === '/api/auth/login' && request.method === 'POST') {
      const body = await parseBody(request);
      const row = findUserByEmail(body.email);
      if (!row || row.password_hash !== hashPassword(body.password || '')) {
        json(response, 401, { error: 'Неверный email или пароль.' });
        return;
      }

      const token = saveSession(row.id);
      json(response, 200, { token, user: mapUser(row) });
      return;
    }

    if (url.pathname === '/api/auth/me' && request.method === 'GET') {
      const user = requireUser(request, response);
      if (!user) {
        return;
      }
      json(response, 200, user);
      return;
    }

    if (url.pathname === '/api/users/me/plan' && request.method === 'PATCH') {
      const user = requireUser(request, response);
      if (!user) {
        return;
      }
      const body = await parseBody(request);
      const nextPlan = body.plan === 'premium' ? 'premium' : 'free';
      const updatedUser = updateUserRecord(user.id, { plan: nextPlan });
      json(response, 200, updatedUser);
      return;
    }

    if (url.pathname === '/api/users/me' && request.method === 'DELETE') {
      const user = requireUser(request, response);
      if (!user) {
        return;
      }

      db.prepare('DELETE FROM sessions WHERE user_id = ?').run(user.id);
      db.prepare('DELETE FROM analyses WHERE user_id = ?').run(user.id);
      db.prepare('DELETE FROM users WHERE id = ?').run(user.id);
      noContent(response);
      return;
    }

    if (url.pathname === '/api/guest/import' && request.method === 'POST') {
      const user = requireUser(request, response);
      if (!user) {
        return;
      }
      const body = await parseBody(request);
      const questionnaireData = body.questionnaireData || createEmptyQuestionnaire(user.name, user.email);
      const analyses = Array.isArray(body.analyses) ? body.analyses : [];

      updateUserRecord(user.id, {
        questionnaireData: {
          ...questionnaireData,
          name: questionnaireData.name || user.name,
          email: questionnaireData.email || user.email,
        },
      });

      const existingIds = new Set(
        db.prepare('SELECT id FROM analyses WHERE user_id = ?').all(user.id).map((row) => row.id),
      );

      analyses.forEach((analysis) => {
        if (!analysis?.id || existingIds.has(analysis.id)) {
          return;
        }

        db.prepare(
          `INSERT INTO analyses (id, user_id, date, supplements_json, questionnaire_json, result_json)
           VALUES (?, ?, ?, ?, ?, ?)`,
        ).run(
          analysis.id,
          user.id,
          analysis.date || new Date().toISOString(),
          JSON.stringify(analysis.supplements || []),
          JSON.stringify(analysis.questionnaireData || questionnaireData),
          JSON.stringify(analysis.result || analyzeSupplements(questionnaireData)),
        );
      });

      noContent(response);
      return;
    }

    if (url.pathname === '/api/questionnaire' && request.method === 'GET') {
      const user = requireUser(request, response);
      if (!user) {
        return;
      }
      json(response, 200, user.questionnaireData);
      return;
    }

    if (url.pathname === '/api/questionnaire' && request.method === 'PATCH') {
      const user = requireUser(request, response);
      if (!user) {
        return;
      }
      const body = await parseBody(request);
      const updatedUser = updateUserRecord(user.id, {
        name: body.name ? body.name.trim() : undefined,
        email: body.email ? normalizeEmail(body.email) : undefined,
        questionnaireData: body,
      });
      json(response, 200, updatedUser);
      return;
    }

    if (url.pathname === '/api/questionnaire' && request.method === 'DELETE') {
      const user = requireUser(request, response);
      if (!user) {
        return;
      }
      updateUserRecord(user.id, {
        questionnaireData: createEmptyQuestionnaire(user.name, user.email),
      });
      noContent(response);
      return;
    }

    if (url.pathname === '/api/analyses' && request.method === 'GET') {
      const user = requireUser(request, response);
      if (!user) {
        return;
      }
      json(response, 200, getAnalysesForUser(user.id));
      return;
    }

    if (url.pathname === '/api/analyses' && request.method === 'DELETE') {
      const user = requireUser(request, response);
      if (!user) {
        return;
      }
      db.prepare('DELETE FROM analyses WHERE user_id = ?').run(user.id);
      noContent(response);
      return;
    }

    if (url.pathname === '/api/analyses/latest' && request.method === 'GET') {
      const user = requireUser(request, response);
      if (!user) {
        return;
      }
      const latestRow = db.prepare('SELECT * FROM analyses WHERE user_id = ? ORDER BY date DESC LIMIT 1').get(user.id);
      json(response, 200, mapAnalysis(latestRow));
      return;
    }

    if (url.pathname === '/api/analyses/run' && request.method === 'POST') {
      const user = requireUser(request, response);
      if (!user) {
        return;
      }

      const analyses = getAnalysesForUser(user.id);
      if (user.plan === 'free' && analyses.length >= FREE_ANALYSIS_LIMIT) {
        json(response, 403, { error: 'Лимит бесплатных анализов достигнут.' });
        return;
      }

      const questionnaire = user.questionnaireData;
      if (!questionnaire.supplements.length) {
        json(response, 400, { error: 'Сначала заполните анкету с добавками.' });
        return;
      }

      const analysisId = crypto.randomUUID();
      const createdAt = new Date().toISOString();
      const result = analyzeSupplements(questionnaire);

      db.prepare(
        `INSERT INTO analyses (id, user_id, date, supplements_json, questionnaire_json, result_json)
         VALUES (?, ?, ?, ?, ?, ?)`,
      ).run(
        analysisId,
        user.id,
        createdAt,
        JSON.stringify(questionnaire.supplements),
        JSON.stringify(questionnaire),
        JSON.stringify(result),
      );

      json(response, 201, { id: analysisId });
      return;
    }

    if (url.pathname.startsWith('/api/analyses/') && request.method === 'GET') {
      const user = requireUser(request, response);
      if (!user) {
        return;
      }
      const id = url.pathname.replace('/api/analyses/', '');
      const row = db.prepare('SELECT * FROM analyses WHERE id = ? AND user_id = ?').get(id, user.id);
      json(response, 200, mapAnalysis(row));
      return;
    }

    json(response, 404, { error: 'Маршрут не найден.' });
  } catch (error) {
    json(response, 500, { error: error instanceof Error ? error.message : 'Внутренняя ошибка сервера.' });
  }
});

server.listen(PORT, () => {
  console.log(`Vitacode API running on http://localhost:${PORT}`);
});
