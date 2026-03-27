export type UserPlan = 'free' | 'premium';

export interface QuestionnaireData {
  supplements: Array<{
    name: string;
    dosage?: string;
  }>;
  age: string;
  gender: string;
  goals: string[];
  name: string;
  email: string;
  healthConditions: string[];
}

export interface AnalysisResult {
  safetyScore: number;
  duplicates: Array<{
    name: string;
    count: number;
    sources: string[];
  }>;
  dosageWarnings: Array<{
    name: string;
    currentDosage: string;
    recommendedDosage: string;
    percentage: number;
    warning?: string;
  }>;
  recommendations: string[];
  timingRecommendations: {
    morning: Array<{ name: string; note: string }>;
    day: Array<{ name: string; note: string }>;
    evening: Array<{ name: string; note: string }>;
  };
  interactions: Array<{
    type: 'warning' | 'synergy';
    supplements: string[];
    interaction: string;
    recommendation: string;
  }>;
}

export interface SavedAnalysis {
  id: string;
  userId: string;
  date: string;
  supplements: Array<{ name: string; dosage?: string }>;
  result: AnalysisResult;
  questionnaireData: QuestionnaireData;
}

export interface UserRecord {
  id: string;
  name: string;
  email: string;
  plan: UserPlan;
  createdAt: string;
  updatedAt: string;
  questionnaireData: QuestionnaireData;
}

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  plan: UserPlan;
}

const API_BASE = '/api';
const SESSION_KEY = 'vitacode-session-token';
const GUEST_QUESTIONNAIRE_KEY = 'vitacode-guest-questionnaire';
const GUEST_ANALYSES_KEY = 'vitacode-guest-analyses';
export const FREE_ANALYSIS_LIMIT = 3;

function createEmptyQuestionnaire(name = '', email = ''): QuestionnaireData {
  return {
    supplements: [],
    age: '',
    gender: '',
    goals: [],
    name,
    email,
    healthConditions: [],
  };
}

function getToken() {
  return localStorage.getItem(SESSION_KEY);
}

function setToken(token: string | null) {
  if (token) {
    localStorage.setItem(SESSION_KEY, token);
  } else {
    localStorage.removeItem(SESSION_KEY);
  }
}

function getGuestQuestionnaire(): QuestionnaireData {
  const raw = localStorage.getItem(GUEST_QUESTIONNAIRE_KEY);
  if (!raw) {
    return createEmptyQuestionnaire();
  }
  try {
    return { ...createEmptyQuestionnaire(), ...JSON.parse(raw) };
  } catch {
    return createEmptyQuestionnaire();
  }
}

function setGuestQuestionnaire(data: QuestionnaireData) {
  localStorage.setItem(GUEST_QUESTIONNAIRE_KEY, JSON.stringify(data));
}

function getGuestAnalyses(): SavedAnalysis[] {
  const raw = localStorage.getItem(GUEST_ANALYSES_KEY);
  if (!raw) {
    return [];
  }
  try {
    return JSON.parse(raw) as SavedAnalysis[];
  } catch {
    return [];
  }
}

function setGuestAnalyses(data: SavedAnalysis[]) {
  localStorage.setItem(GUEST_ANALYSES_KEY, JSON.stringify(data));
}

function clearGuestState() {
  localStorage.removeItem(GUEST_QUESTIONNAIRE_KEY);
  localStorage.removeItem(GUEST_ANALYSES_KEY);
}

async function apiRequest<T>(path: string, init: RequestInit = {}): Promise<T> {
  const token = getToken();
  const headers = new Headers(init.headers);
  headers.set('Content-Type', 'application/json');
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const response = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers,
  });

  if (!response.ok) {
    const payload = (await response.json().catch(() => null)) as { error?: string } | null;
    throw new Error(payload?.error || 'Ошибка запроса к серверу.');
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

export async function registerUser(payload: RegisterPayload): Promise<UserRecord> {
  const response = await apiRequest<{ token: string; user: UserRecord }>('/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  setToken(response.token);
  return response.user;
}

export async function loginUser(email: string, password: string): Promise<UserRecord> {
  const response = await apiRequest<{ token: string; user: UserRecord }>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  setToken(response.token);
  return response.user;
}

export function logoutUser() {
  setToken(null);
}

export async function deleteCurrentUser() {
  await apiRequest<void>('/users/me', {
    method: 'DELETE',
  });
  setToken(null);
}

export async function getCurrentUser(): Promise<UserRecord | null> {
  const token = getToken();
  if (!token) {
    return null;
  }

  try {
    return await apiRequest<UserRecord>('/auth/me');
  } catch {
    setToken(null);
    return null;
  }
}

export async function updateCurrentUserPlan(plan: UserPlan) {
  return apiRequest<UserRecord>('/users/me/plan', {
    method: 'PATCH',
    body: JSON.stringify({ plan }),
  });
}

export async function saveQuestionnaireData(data: Partial<QuestionnaireData>) {
  if (!getToken()) {
    const existing = getGuestQuestionnaire();
    const updated = {
      ...existing,
      ...data,
    };
    setGuestQuestionnaire(updated);
    return updated;
  }

  return apiRequest<UserRecord>('/questionnaire', {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export async function getQuestionnaireData(): Promise<QuestionnaireData> {
  if (!getToken()) {
    return getGuestQuestionnaire();
  }
  return apiRequest<QuestionnaireData>('/questionnaire');
}

export async function clearQuestionnaireData() {
  if (!getToken()) {
    localStorage.removeItem(GUEST_QUESTIONNAIRE_KEY);
    return;
  }
  await apiRequest<void>('/questionnaire', {
    method: 'DELETE',
  });
}

export async function saveAnalysis(): Promise<string> {
  if (!getToken()) {
    const questionnaire = getGuestQuestionnaire();
    if (!questionnaire.supplements.length) {
      throw new Error('Сначала заполните анкету с добавками.');
    }

    const analysis: SavedAnalysis = {
      id: crypto.randomUUID(),
      userId: 'guest',
      date: new Date().toISOString(),
      supplements: questionnaire.supplements,
      questionnaireData: questionnaire,
      result: analyzeSupplements(questionnaire),
    };

    const history = getGuestAnalyses();
    history.unshift(analysis);
    setGuestAnalyses(history);
    return analysis.id;
  }

  const response = await apiRequest<{ id: string }>('/analyses/run', {
    method: 'POST',
  });
  return response.id;
}

export async function getAnalysisHistory(): Promise<SavedAnalysis[]> {
  if (!getToken()) {
    return getGuestAnalyses();
  }
  return apiRequest<SavedAnalysis[]>('/analyses');
}

export async function getAnalysisById(id: string): Promise<SavedAnalysis | null> {
  if (!getToken()) {
    return getGuestAnalyses().find((item) => item.id === id) || null;
  }
  return apiRequest<SavedAnalysis | null>(`/analyses/${id}`);
}

export async function getLatestAnalysis(): Promise<SavedAnalysis | null> {
  if (!getToken()) {
    return getGuestAnalyses()[0] || null;
  }
  return apiRequest<SavedAnalysis | null>('/analyses/latest');
}

export async function clearAnalysisHistory() {
  if (!getToken()) {
    localStorage.removeItem(GUEST_ANALYSES_KEY);
    return;
  }
  await apiRequest<void>('/analyses', {
    method: 'DELETE',
  });
}

export async function syncGuestDataToAccount() {
  const token = getToken();
  if (!token) {
    return;
  }

  const guestQuestionnaire = getGuestQuestionnaire();
  const guestAnalyses = getGuestAnalyses();

  if (
    guestQuestionnaire.supplements.length === 0 &&
    !guestQuestionnaire.age &&
    !guestQuestionnaire.gender &&
    guestQuestionnaire.goals.length === 0 &&
    !guestQuestionnaire.name &&
    !guestQuestionnaire.email &&
    guestQuestionnaire.healthConditions.length === 0 &&
    guestAnalyses.length === 0
  ) {
    return;
  }

  await apiRequest<void>('/guest/import', {
    method: 'POST',
    body: JSON.stringify({
      questionnaireData: guestQuestionnaire,
      analyses: guestAnalyses,
    }),
  });

  clearGuestState();
}

const supplementDatabase: Record<
  string,
  {
    recommended: string;
    timing: 'morning' | 'day' | 'evening';
    note: string;
    interactsWith?: string[];
    synergizesWith?: string[];
  }
> = {
  'Витамин D3': { recommended: '4000 МЕ', timing: 'morning', note: 'С завтраком' },
  'Витамин D': { recommended: '4000 МЕ', timing: 'morning', note: 'С завтраком' },
  'Витамин С': { recommended: '1000 мг', timing: 'morning', note: 'Натощак', synergizesWith: ['Железо'] },
  'Витамин C': { recommended: '1000 мг', timing: 'morning', note: 'Натощак', synergizesWith: ['Железо'] },
  'Омега-3': { recommended: '2000 мг', timing: 'evening', note: 'С ужином' },
  'Магний': { recommended: '400 мг', timing: 'day', note: 'С обедом' },
  'Цинк': { recommended: '25 мг', timing: 'day', note: 'После еды' },
  'Железо': {
    recommended: '18 мг',
    timing: 'morning',
    note: 'За 30 мин до еды',
    interactsWith: ['Кальций'],
    synergizesWith: ['Витамин С', 'Витамин C'],
  },
  'Кальций': {
    recommended: '1000 мг',
    timing: 'evening',
    note: 'Перед сном',
    interactsWith: ['Железо'],
    synergizesWith: ['Витамин D3', 'Витамин D'],
  },
  'Витамин B12': { recommended: '2.4 мкг', timing: 'morning', note: 'С едой' },
  'Мультивитамины': { recommended: '1 таблетка', timing: 'morning', note: 'С завтраком' },
  'Витамин E': { recommended: '400 МЕ', timing: 'morning', note: 'С едой', interactsWith: ['Витамин K'] },
  'Витамин K': { recommended: '120 мкг', timing: 'morning', note: 'С едой', interactsWith: ['Витамин E'] },
};

export function analyzeSupplements(data: QuestionnaireData): AnalysisResult {
  const supplements = data.supplements || [];
  const supplementCounts: Record<string, number> = {};
  const duplicates: AnalysisResult['duplicates'] = [];

  supplements.forEach((supplement) => {
    supplementCounts[supplement.name] = (supplementCounts[supplement.name] || 0) + 1;
  });

  Object.entries(supplementCounts).forEach(([name, count]) => {
    if (count > 1) {
      duplicates.push({
        name,
        count,
        sources: [`Указано ${count} раз`],
      });
    }
  });

  const commonDuplicates = [
    { name: 'Магний', count: 3, sources: ['Multi-Complex', 'Magnesium Plus', 'Sleep Formula'] },
    { name: 'Витамин B6', count: 2, sources: ['Multi-Complex', 'B-Complex Advanced'] },
    { name: 'Цинк', count: 2, sources: ['Immune Support', 'Multi-Complex'] },
  ];

  const dosageWarnings: AnalysisResult['dosageWarnings'] = [];
  supplements.forEach((supplement) => {
    const dbInfo = supplementDatabase[supplement.name];
    if (!dbInfo) return;

    const mockDosages: Record<string, { current: string; percent: number; warning?: string }> = {
      'Витамин D3': { current: '5000 МЕ', percent: 125, warning: 'Превышение рекомендованной дозы на 25%' },
      'Витамин D': { current: '5000 МЕ', percent: 125, warning: 'Превышение рекомендованной дозы на 25%' },
      'Витамин С': { current: '500 мг', percent: 50 },
      'Витамин C': { current: '500 мг', percent: 50 },
      'Омега-3': { current: '1200 мг', percent: 60 },
      'Магний': { current: '450 мг', percent: 112, warning: 'Превышение рекомендованной дозы на 12%' },
    };

    const dosageInfo = mockDosages[supplement.name];
    if (!dosageInfo) return;

    dosageWarnings.push({
      name: supplement.name,
      currentDosage: dosageInfo.current,
      recommendedDosage: dbInfo.recommended,
      percentage: dosageInfo.percent,
      warning: dosageInfo.warning,
    });
  });

  const recommendations: string[] = [];
  if (data.goals.includes('immunity')) recommendations.push('Для поддержки иммунитета стоит регулярно принимать витамин D и цинк.');
  if (data.goals.includes('energy')) recommendations.push('Для энергии важно проверить уровень B12 и железа, особенно при хронической усталости.');
  if (data.goals.includes('sleep')) recommendations.push('Магний лучше перенести на вечерний прием, чтобы усилить эффект расслабления.');
  if (duplicates.length > 0) recommendations.push('Есть повторяющиеся компоненты. Стоит сократить дубли, чтобы не перегружать схему приема.');
  recommendations.push('Жирорастворимые витамины A, D, E и K лучше принимать вместе с едой.');
  if (supplements.some((item) => item.name === 'Витамин С' || item.name === 'Витамин C')) {
    recommendations.push('Витамин C помогает усвоению железа, их можно принимать в одном окне.');
  }

  const timingRecommendations = {
    morning: [] as Array<{ name: string; note: string }>,
    day: [] as Array<{ name: string; note: string }>,
    evening: [] as Array<{ name: string; note: string }>,
  };

  supplements.forEach((supplement) => {
    const dbInfo = supplementDatabase[supplement.name];
    if (!dbInfo) return;
    timingRecommendations[dbInfo.timing].push({ name: supplement.name, note: dbInfo.note });
  });

  const interactions: AnalysisResult['interactions'] = [];
  const processedPairs = new Set<string>();

  supplements.forEach((supplement) => {
    const dbInfo = supplementDatabase[supplement.name];
    if (!dbInfo) return;

    (dbInfo.interactsWith || []).forEach((interactName) => {
      if (!supplements.some((item) => item.name === interactName)) return;
      const pairKey = [supplement.name, interactName].sort().join('-');
      if (processedPairs.has(pairKey)) return;
      processedPairs.add(pairKey);

      if (supplement.name === 'Железо' && interactName === 'Кальций') {
        interactions.push({
          type: 'warning',
          supplements: ['Железо', 'Кальций'],
          interaction: 'Конкурируют за усвоение',
          recommendation: 'Разнесите прием минимум на 2 часа.',
        });
      }
      if (supplement.name === 'Витамин E' && interactName === 'Витамин K') {
        interactions.push({
          type: 'warning',
          supplements: ['Витамин E', 'Витамин K'],
          interaction: 'Высокие дозы витамина E могут снижать эффект витамина K',
          recommendation: 'Следите за дозировкой витамина E и не превышайте 400 МЕ без рекомендации врача.',
        });
      }
    });

    (dbInfo.synergizesWith || []).forEach((synergyName) => {
      if (!supplements.some((item) => item.name === synergyName)) return;
      const pairKey = [supplement.name, synergyName].sort().join('-');
      if (processedPairs.has(pairKey)) return;
      processedPairs.add(pairKey);

      if ((supplement.name === 'Витамин D3' || supplement.name === 'Витамин D') && synergyName === 'Кальций') {
        interactions.push({
          type: 'synergy',
          supplements: ['Витамин D', 'Кальций'],
          interaction: 'Усиливают действие друг друга',
          recommendation: 'Можно оставлять в одной схеме приема для лучшего усвоения.',
        });
      }
      if ((supplement.name === 'Витамин С' || supplement.name === 'Витамин C') && synergyName === 'Железо') {
        interactions.push({
          type: 'synergy',
          supplements: ['Витамин C', 'Железо'],
          interaction: 'Витамин C улучшает усвоение железа',
          recommendation: 'Комбинация особенно полезна при цели на энергию и восполнение дефицитов.',
        });
      }
    });
  });

  let safetyScore = 100;
  safetyScore -= duplicates.length * 5;
  dosageWarnings.forEach((warning) => {
    if (warning.warning) safetyScore -= (warning.percentage - 100) * 0.2;
  });
  interactions.forEach((interaction) => {
    if (interaction.type === 'warning') safetyScore -= 3;
  });
  safetyScore = Math.max(50, Math.min(100, Math.round(safetyScore)));

  return {
    safetyScore,
    duplicates: duplicates.length > 0 ? duplicates : commonDuplicates,
    dosageWarnings,
    recommendations: recommendations.slice(0, 6),
    timingRecommendations,
    interactions,
  };
}
