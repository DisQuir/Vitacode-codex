export const FREE_ANALYSIS_LIMIT = 3;

const supplementDatabase = {
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

export function createEmptyQuestionnaire(name = '', email = '') {
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

export function analyzeSupplements(data) {
  const supplements = data.supplements || [];
  const supplementCounts = {};
  const duplicates = [];

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

  const dosageWarnings = [];
  supplements.forEach((supplement) => {
    const dbInfo = supplementDatabase[supplement.name];
    if (!dbInfo) {
      return;
    }

    const mockDosages = {
      'Витамин D3': { current: '5000 МЕ', percent: 125, warning: 'Превышение рекомендованной дозы на 25%' },
      'Витамин D': { current: '5000 МЕ', percent: 125, warning: 'Превышение рекомендованной дозы на 25%' },
      'Витамин С': { current: '500 мг', percent: 50 },
      'Витамин C': { current: '500 мг', percent: 50 },
      'Омега-3': { current: '1200 мг', percent: 60 },
      'Магний': { current: '450 мг', percent: 112, warning: 'Превышение рекомендованной дозы на 12%' },
    };

    const dosageInfo = mockDosages[supplement.name];
    if (!dosageInfo) {
      return;
    }

    dosageWarnings.push({
      name: supplement.name,
      currentDosage: dosageInfo.current,
      recommendedDosage: dbInfo.recommended,
      percentage: dosageInfo.percent,
      warning: dosageInfo.warning,
    });
  });

  const recommendations = [];
  if (data.goals.includes('immunity')) {
    recommendations.push('Для поддержки иммунитета стоит регулярно принимать витамин D и цинк.');
  }
  if (data.goals.includes('energy')) {
    recommendations.push('Для энергии важно проверить уровень B12 и железа, особенно при хронической усталости.');
  }
  if (data.goals.includes('sleep')) {
    recommendations.push('Магний лучше перенести на вечерний прием, чтобы усилить эффект расслабления.');
  }
  if (duplicates.length > 0) {
    recommendations.push('Есть повторяющиеся компоненты. Стоит сократить дубли, чтобы не перегружать схему приема.');
  }
  recommendations.push('Жирорастворимые витамины A, D, E и K лучше принимать вместе с едой.');
  if (supplements.some((item) => item.name === 'Витамин С' || item.name === 'Витамин C')) {
    recommendations.push('Витамин C помогает усвоению железа, их можно принимать в одном окне.');
  }

  const timingRecommendations = {
    morning: [],
    day: [],
    evening: [],
  };

  supplements.forEach((supplement) => {
    const dbInfo = supplementDatabase[supplement.name];
    if (!dbInfo) {
      return;
    }
    timingRecommendations[dbInfo.timing].push({
      name: supplement.name,
      note: dbInfo.note,
    });
  });

  const interactions = [];
  const processedPairs = new Set();

  supplements.forEach((supplement) => {
    const dbInfo = supplementDatabase[supplement.name];
    if (!dbInfo) {
      return;
    }

    (dbInfo.interactsWith || []).forEach((interactName) => {
      if (!supplements.some((item) => item.name === interactName)) {
        return;
      }
      const pairKey = [supplement.name, interactName].sort().join('-');
      if (processedPairs.has(pairKey)) {
        return;
      }
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
      if (!supplements.some((item) => item.name === synergyName)) {
        return;
      }
      const pairKey = [supplement.name, synergyName].sort().join('-');
      if (processedPairs.has(pairKey)) {
        return;
      }
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
    if (warning.warning) {
      safetyScore -= (warning.percentage - 100) * 0.2;
    }
  });
  interactions.forEach((interaction) => {
    if (interaction.type === 'warning') {
      safetyScore -= 3;
    }
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
