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

const API_BASE = 'https://vitacode-codex.onrender.com/api';
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
    throw new Error(payload?.error || '\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443.');
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
      throw new Error('\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0430\u043d\u043a\u0435\u0442\u0443 \u0441 \u0434\u043e\u0431\u0430\u0432\u043a\u0430\u043c\u0438.');
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
  '\u0412\u0438\u0442\u0430\u043c\u0438\u043d D3': { recommended: '4000 \u041c\u0415', timing: 'morning', note: '\u0421 \u0437\u0430\u0432\u0442\u0440\u0430\u043a\u043e\u043c' },
  '\u0412\u0438\u0442\u0430\u043c\u0438\u043d D': { recommended: '4000 \u041c\u0415', timing: 'morning', note: '\u0421 \u0437\u0430\u0432\u0442\u0440\u0430\u043a\u043e\u043c' },
  '\u0412\u0438\u0442\u0430\u043c\u0438\u043d \u0421': { recommended: '1000 \u043c\u0433', timing: 'morning', note: '\u041d\u0430\u0442\u043e\u0449\u0430\u043a', synergizesWith: ['\u0416\u0435\u043b\u0435\u0437\u043e'] },
  '\u0412\u0438\u0442\u0430\u043c\u0438\u043d C': { recommended: '1000 \u043c\u0433', timing: 'morning', note: '\u041d\u0430\u0442\u043e\u0449\u0430\u043a', synergizesWith: ['\u0416\u0435\u043b\u0435\u0437\u043e'] },
  '\u041e\u043c\u0435\u0433\u0430-3': { recommended: '2000 \u043c\u0433', timing: 'evening', note: '\u0421 \u0443\u0436\u0438\u043d\u043e\u043c' },
  '\u041c\u0430\u0433\u043d\u0438\u0439': { recommended: '400 \u043c\u0433', timing: 'day', note: '\u0421 \u043e\u0431\u0435\u0434\u043e\u043c' },
  '\u0426\u0438\u043d\u043a': { recommended: '25 \u043c\u0433', timing: 'day', note: '\u041f\u043e\u0441\u043b\u0435 \u0435\u0434\u044b' },
  '\u0416\u0435\u043b\u0435\u0437\u043e': {
    recommended: '18 \u043c\u0433',
    timing: 'morning',
    note: '\u0417\u0430 30 \u043c\u0438\u043d \u0434\u043e \u0435\u0434\u044b',
    interactsWith: ['\u041a\u0430\u043b\u044c\u0446\u0438\u0439'],
    synergizesWith: ['\u0412\u0438\u0442\u0430\u043c\u0438\u043d \u0421', '\u0412\u0438\u0442\u0430\u043c\u0438\u043d C'],
  },
  '\u041a\u0430\u043b\u044c\u0446\u0438\u0439': {
    recommended: '1000 \u043c\u0433',
    timing: 'evening',
    note: '\u041f\u0435\u0440\u0435\u0434 \u0441\u043d\u043e\u043c',
    interactsWith: ['\u0416\u0435\u043b\u0435\u0437\u043e'],
    synergizesWith: ['\u0412\u0438\u0442\u0430\u043c\u0438\u043d D3', '\u0412\u0438\u0442\u0430\u043c\u0438\u043d D'],
  },
  '\u0412\u0438\u0442\u0430\u043c\u0438\u043d B12': { recommended: '2.4 \u043c\u043a\u0433', timing: 'morning', note: '\u0421 \u0435\u0434\u043e\u0439' },
  '\u041c\u0443\u043b\u044c\u0442\u0438\u0432\u0438\u0442\u0430\u043c\u0438\u043d\u044b': { recommended: '1 \u0442\u0430\u0431\u043b\u0435\u0442\u043a\u0430', timing: 'morning', note: '\u0421 \u0437\u0430\u0432\u0442\u0440\u0430\u043a\u043e\u043c' },
  '\u0412\u0438\u0442\u0430\u043c\u0438\u043d E': { recommended: '400 \u041c\u0415', timing: 'morning', note: '\u0421 \u0435\u0434\u043e\u0439', interactsWith: ['\u0412\u0438\u0442\u0430\u043c\u0438\u043d K'] },
  '\u0412\u0438\u0442\u0430\u043c\u0438\u043d K': { recommended: '120 \u043c\u043a\u0433', timing: 'morning', note: '\u0421 \u0435\u0434\u043e\u0439', interactsWith: ['\u0412\u0438\u0442\u0430\u043c\u0438\u043d E'] },
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
        sources: [`\u0423\u043a\u0430\u0437\u0430\u043d\u043e ${count} \u0440\u0430\u0437`],
      });
    }
  });

  const commonDuplicates = [
    { name: '\u041c\u0430\u0433\u043d\u0438\u0439', count: 3, sources: ['Multi-Complex', 'Magnesium Plus', 'Sleep Formula'] },
    { name: '\u0412\u0438\u0442\u0430\u043c\u0438\u043d B6', count: 2, sources: ['Multi-Complex', 'B-Complex Advanced'] },
    { name: '\u0426\u0438\u043d\u043a', count: 2, sources: ['Immune Support', 'Multi-Complex'] },
  ];

  const dosageWarnings: AnalysisResult['dosageWarnings'] = [];
  supplements.forEach((supplement) => {
    const dbInfo = supplementDatabase[supplement.name];
    if (!dbInfo) return;

    const mockDosages: Record<string, { current: string; percent: number; warning?: string }> = {
      '\u0412\u0438\u0442\u0430\u043c\u0438\u043d D3': { current: '5000 \u041c\u0415', percent: 125, warning: '\u041f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u0438\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0434\u043e\u0437\u044b \u043d\u0430 25%' },
      '\u0412\u0438\u0442\u0430\u043c\u0438\u043d D': { current: '5000 \u041c\u0415', percent: 125, warning: '\u041f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u0438\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0434\u043e\u0437\u044b \u043d\u0430 25%' },
      '\u0412\u0438\u0442\u0430\u043c\u0438\u043d \u0421': { current: '500 \u043c\u0433', percent: 50 },
      '\u0412\u0438\u0442\u0430\u043c\u0438\u043d C': { current: '500 \u043c\u0433', percent: 50 },
      '\u041e\u043c\u0435\u0433\u0430-3': { current: '1200 \u043c\u0433', percent: 60 },
      '\u041c\u0430\u0433\u043d\u0438\u0439': { current: '450 \u043c\u0433', percent: 112, warning: '\u041f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u0438\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0434\u043e\u0437\u044b \u043d\u0430 12%' },
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
  if (data.goals.includes('immunity')) recommendations.push('\u0414\u043b\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u0438\u043c\u043c\u0443\u043d\u0438\u0442\u0435\u0442\u0430 \u0441\u0442\u043e\u0438\u0442 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0432\u0438\u0442\u0430\u043c\u0438\u043d D \u0438 \u0446\u0438\u043d\u043a.');
  if (data.goals.includes('energy')) recommendations.push('\u0414\u043b\u044f \u044d\u043d\u0435\u0440\u0433\u0438\u0438 \u0432\u0430\u0436\u043d\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0443\u0440\u043e\u0432\u0435\u043d\u044c B12 \u0438 \u0436\u0435\u043b\u0435\u0437\u0430, \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u043f\u0440\u0438 \u0445\u0440\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0443\u0441\u0442\u0430\u043b\u043e\u0441\u0442\u0438.');
  if (data.goals.includes('sleep')) recommendations.push('\u041c\u0430\u0433\u043d\u0438\u0439 \u043b\u0443\u0447\u0448\u0435 \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0442\u0438 \u043d\u0430 \u0432\u0435\u0447\u0435\u0440\u043d\u0438\u0439 \u043f\u0440\u0438\u0435\u043c, \u0447\u0442\u043e\u0431\u044b \u0443\u0441\u0438\u043b\u0438\u0442\u044c \u044d\u0444\u0444\u0435\u043a\u0442 \u0440\u0430\u0441\u0441\u043b\u0430\u0431\u043b\u0435\u043d\u0438\u044f.');
  if (duplicates.length > 0) recommendations.push('\u0415\u0441\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u044e\u0449\u0438\u0435\u0441\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b. \u0421\u0442\u043e\u0438\u0442 \u0441\u043e\u043a\u0440\u0430\u0442\u0438\u0442\u044c \u0434\u0443\u0431\u043b\u0438, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u043f\u0435\u0440\u0435\u0433\u0440\u0443\u0436\u0430\u0442\u044c \u0441\u0445\u0435\u043c\u0443 \u043f\u0440\u0438\u0435\u043c\u0430.');
  recommendations.push('\u0416\u0438\u0440\u043e\u0440\u0430\u0441\u0442\u0432\u043e\u0440\u0438\u043c\u044b\u0435 \u0432\u0438\u0442\u0430\u043c\u0438\u043d\u044b A, D, E \u0438 K \u043b\u0443\u0447\u0448\u0435 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0435\u0434\u043e\u0439.');
  if (supplements.some((item) => item.name === '\u0412\u0438\u0442\u0430\u043c\u0438\u043d \u0421' || item.name === '\u0412\u0438\u0442\u0430\u043c\u0438\u043d C')) {
    recommendations.push('\u0412\u0438\u0442\u0430\u043c\u0438\u043d C \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0443\u0441\u0432\u043e\u0435\u043d\u0438\u044e \u0436\u0435\u043b\u0435\u0437\u0430, \u0438\u0445 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0432 \u043e\u0434\u043d\u043e\u043c \u043e\u043a\u043d\u0435.');
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

      if (supplement.name === '\u0416\u0435\u043b\u0435\u0437\u043e' && interactName === '\u041a\u0430\u043b\u044c\u0446\u0438\u0439') {
        interactions.push({
          type: 'warning',
          supplements: ['\u0416\u0435\u043b\u0435\u0437\u043e', '\u041a\u0430\u043b\u044c\u0446\u0438\u0439'],
          interaction: '\u041a\u043e\u043d\u043a\u0443\u0440\u0438\u0440\u0443\u044e\u0442 \u0437\u0430 \u0443\u0441\u0432\u043e\u0435\u043d\u0438\u0435',
          recommendation: '\u0420\u0430\u0437\u043d\u0435\u0441\u0438\u0442\u0435 \u043f\u0440\u0438\u0435\u043c \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u043d\u0430 2 \u0447\u0430\u0441\u0430.',
        });
      }
      if (supplement.name === '\u0412\u0438\u0442\u0430\u043c\u0438\u043d E' && interactName === '\u0412\u0438\u0442\u0430\u043c\u0438\u043d K') {
        interactions.push({
          type: 'warning',
          supplements: ['\u0412\u0438\u0442\u0430\u043c\u0438\u043d E', '\u0412\u0438\u0442\u0430\u043c\u0438\u043d K'],
          interaction: '\u0412\u044b\u0441\u043e\u043a\u0438\u0435 \u0434\u043e\u0437\u044b \u0432\u0438\u0442\u0430\u043c\u0438\u043d\u0430 E \u043c\u043e\u0433\u0443\u0442 \u0441\u043d\u0438\u0436\u0430\u0442\u044c \u044d\u0444\u0444\u0435\u043a\u0442 \u0432\u0438\u0442\u0430\u043c\u0438\u043d\u0430 K',
          recommendation: '\u0421\u043b\u0435\u0434\u0438\u0442\u0435 \u0437\u0430 \u0434\u043e\u0437\u0438\u0440\u043e\u0432\u043a\u043e\u0439 \u0432\u0438\u0442\u0430\u043c\u0438\u043d\u0430 E \u0438 \u043d\u0435 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0439\u0442\u0435 400 \u041c\u0415 \u0431\u0435\u0437 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438 \u0432\u0440\u0430\u0447\u0430.',
        });
      }
    });

    (dbInfo.synergizesWith || []).forEach((synergyName) => {
      if (!supplements.some((item) => item.name === synergyName)) return;
      const pairKey = [supplement.name, synergyName].sort().join('-');
      if (processedPairs.has(pairKey)) return;
      processedPairs.add(pairKey);

      if ((supplement.name === '\u0412\u0438\u0442\u0430\u043c\u0438\u043d D3' || supplement.name === '\u0412\u0438\u0442\u0430\u043c\u0438\u043d D') && synergyName === '\u041a\u0430\u043b\u044c\u0446\u0438\u0439') {
        interactions.push({
          type: 'synergy',
          supplements: ['\u0412\u0438\u0442\u0430\u043c\u0438\u043d D', '\u041a\u0430\u043b\u044c\u0446\u0438\u0439'],
          interaction: '\u0423\u0441\u0438\u043b\u0438\u0432\u0430\u044e\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430',
          recommendation: '\u041c\u043e\u0436\u043d\u043e \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0432 \u043e\u0434\u043d\u043e\u0439 \u0441\u0445\u0435\u043c\u0435 \u043f\u0440\u0438\u0435\u043c\u0430 \u0434\u043b\u044f \u043b\u0443\u0447\u0448\u0435\u0433\u043e \u0443\u0441\u0432\u043e\u0435\u043d\u0438\u044f.',
        });
      }
      if ((supplement.name === '\u0412\u0438\u0442\u0430\u043c\u0438\u043d \u0421' || supplement.name === '\u0412\u0438\u0442\u0430\u043c\u0438\u043d C') && synergyName === '\u0416\u0435\u043b\u0435\u0437\u043e') {
        interactions.push({
          type: 'synergy',
          supplements: ['\u0412\u0438\u0442\u0430\u043c\u0438\u043d C', '\u0416\u0435\u043b\u0435\u0437\u043e'],
          interaction: '\u0412\u0438\u0442\u0430\u043c\u0438\u043d C \u0443\u043b\u0443\u0447\u0448\u0430\u0435\u0442 \u0443\u0441\u0432\u043e\u0435\u043d\u0438\u0435 \u0436\u0435\u043b\u0435\u0437\u0430',
          recommendation: '\u041a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044f \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u043f\u043e\u043b\u0435\u0437\u043d\u0430 \u043f\u0440\u0438 \u0446\u0435\u043b\u0438 \u043d\u0430 \u044d\u043d\u0435\u0440\u0433\u0438\u044e \u0438 \u0432\u043e\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u0435\u0444\u0438\u0446\u0438\u0442\u043e\u0432.',
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
