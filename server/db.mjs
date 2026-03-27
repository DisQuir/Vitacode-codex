import fs from 'node:fs';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { createEmptyQuestionnaire } from './analysis-engine.mjs';

const dataDirectory = path.resolve(process.cwd(), 'server', 'data');
const databasePath = path.join(dataDirectory, 'vitacode.sqlite');

fs.mkdirSync(dataDirectory, { recursive: true });

export const db = new DatabaseSync(databasePath);

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    plan TEXT NOT NULL CHECK(plan IN ('free', 'premium')),
    questionnaire_json TEXT NOT NULL,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS sessions (
    token TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    created_at TEXT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS analyses (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    date TEXT NOT NULL,
    supplements_json TEXT NOT NULL,
    questionnaire_json TEXT NOT NULL,
    result_json TEXT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
  );
`);

export function mapUser(row) {
  if (!row) {
    return null;
  }

  return {
    id: row.id,
    name: row.name,
    email: row.email,
    plan: row.plan,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    questionnaireData: JSON.parse(row.questionnaire_json || JSON.stringify(createEmptyQuestionnaire(row.name, row.email))),
  };
}

export function mapAnalysis(row) {
  if (!row) {
    return null;
  }

  return {
    id: row.id,
    userId: row.user_id,
    date: row.date,
    supplements: JSON.parse(row.supplements_json),
    questionnaireData: JSON.parse(row.questionnaire_json),
    result: JSON.parse(row.result_json),
  };
}
