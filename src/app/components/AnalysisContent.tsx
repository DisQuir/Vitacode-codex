import { Link } from 'react-router';
import { motion } from 'motion/react';
import type { SavedAnalysis, UserPlan } from '../utils/questionnaireData';

interface AnalysisContentProps {
  analysis: SavedAnalysis;
  plan: UserPlan;
  isAuthenticated: boolean;
}

function AnalysisHero({ analysis, plan }: Pick<AnalysisContentProps, 'analysis' | 'plan'>) {
  return (
    <section className="rounded-[32px] bg-[linear-gradient(135deg,_#1f1f1f_0%,_#2c4d54_55%,_#02b1cc_100%)] p-8 text-white">
      <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-white/58">
        {plan === 'premium' ? 'Premium analysis' : 'Free analysis'}
      </p>
      <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="font-['DM_Sans'] text-[38px] font-bold leading-[1.02]">Персональный разбор схемы приема</h1>
          <p className="mt-4 max-w-[740px] font-['DM_Sans'] text-[16px] leading-[1.7] text-white/74">
            Анализ сформирован по вашему профилю, текущему списку добавок и целям. Результат можно сохранить в профиле и продолжить работу с ним позже.
          </p>
        </div>
        <div className="rounded-[28px] bg-white/10 px-6 py-5 backdrop-blur-sm">
          <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-white/55">Safety score</p>
          <p className="mt-2 font-['DM_Sans'] text-[54px] font-bold">{analysis.result.safetyScore}</p>
          <p className="font-['DM_Sans'] text-[14px] text-white/72">
            {new Date(analysis.date).toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </section>
  );
}

function FreeAnalysisContent({ analysis, isAuthenticated }: AnalysisContentProps) {
  const topRecommendations = analysis.result.recommendations.slice(0, 3);

  return (
    <div className="space-y-6">
      <AnalysisHero analysis={analysis} plan="free" />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-[30px] bg-white p-7 shadow-[0_20px_60px_rgba(31,31,31,0.06)]">
          <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/40">Базовая сводка</p>
          <h2 className="mt-2 font-['DM_Sans'] text-[28px] font-bold text-[#1f1f1f]">Что мы нашли</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-[22px] bg-[#f6f7f8] p-5">
              <p className="font-['DM_Sans'] text-[13px] text-[#1f1f1f]/45">Дубликаты</p>
              <p className="mt-2 font-['DM_Sans'] text-[30px] font-bold text-[#1f1f1f]">{analysis.result.duplicates.length}</p>
            </div>
            <div className="rounded-[22px] bg-[#f6f7f8] p-5">
              <p className="font-['DM_Sans'] text-[13px] text-[#1f1f1f]/45">Дозировки</p>
              <p className="mt-2 font-['DM_Sans'] text-[30px] font-bold text-[#1f1f1f]">{analysis.result.dosageWarnings.length}</p>
            </div>
            <div className="rounded-[22px] bg-[#f6f7f8] p-5">
              <p className="font-['DM_Sans'] text-[13px] text-[#1f1f1f]/45">Добавки</p>
              <p className="mt-2 font-['DM_Sans'] text-[30px] font-bold text-[#1f1f1f]">{analysis.supplements.length}</p>
            </div>
          </div>
          <div className="mt-6 rounded-[24px] bg-[#fff5f2] p-5">
            <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#ff6647]/70">Важно</p>
            <p className="mt-3 font-['DM_Sans'] text-[15px] leading-[1.7] text-[#1f1f1f]/68">
              В бесплатной версии доступны ключевые риски и краткие рекомендации. Полный блок взаимодействий, тайминг приема и расширенные инсайты доступны в Premium.
            </p>
          </div>
        </section>

        <section className="rounded-[30px] bg-white p-7 shadow-[0_20px_60px_rgba(31,31,31,0.06)]">
          <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/40">Рекомендации</p>
          <h2 className="mt-2 font-['DM_Sans'] text-[28px] font-bold text-[#1f1f1f]">Базовый персональный вывод</h2>
          <div className="mt-6 space-y-3">
            {topRecommendations.map((recommendation, index) => (
              <motion.div
                key={`${recommendation}-${index}`}
                className="rounded-[22px] bg-[#f6f7f8] px-5 py-4"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <p className="font-['DM_Sans'] text-[15px] leading-[1.7] text-[#1f1f1f]/72">{recommendation}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {isAuthenticated ? (
              <Link className="rounded-full bg-[#ff6647] px-6 py-3 font-['DM_Sans'] text-[15px] font-semibold text-white" to="/profile/free">
                Сохранить результат в профиле
              </Link>
            ) : (
              <Link className="rounded-full bg-[#ff6647] px-6 py-3 font-['DM_Sans'] text-[15px] font-semibold text-white" to="/auth" state={{ from: '/profile/free', mode: 'register' }}>
                Сохранить результат в профиле
              </Link>
            )}
            <Link className="rounded-full border border-[#02b1cc]/20 px-6 py-3 font-['DM_Sans'] text-[15px] font-semibold text-[#02b1cc]" to="/premium?from=/analysis/free">
              Перейти на Premium
            </Link>
          </div>
        </section>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-[30px] bg-white p-7 shadow-[0_20px_60px_rgba(31,31,31,0.06)]">
          <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/40">Текущий список</p>
          <h2 className="mt-2 font-['DM_Sans'] text-[28px] font-bold text-[#1f1f1f]">Добавки пользователя</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {analysis.supplements.map((supplement, index) => (
              <div className="rounded-[22px] bg-[#f6f7f8] px-5 py-4" key={`${supplement.name}-${index}`}>
                <p className="font-['DM_Sans'] text-[16px] font-semibold text-[#1f1f1f]">{supplement.name}</p>
                <p className="mt-1 font-['DM_Sans'] text-[13px] text-[#1f1f1f]/50">{supplement.dosage || 'Без дозировки'}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-dashed border-[#02b1cc]/28 bg-[#f7fdfe] p-7">
          <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#02b1cc]/70">Что даст Premium</p>
          <h2 className="mt-2 font-['DM_Sans'] text-[28px] font-bold text-[#1f1f1f]">Полная версия анализа уже готова</h2>
          <div className="mt-6 space-y-3">
            {[
              'Расписание приема по утру, дню и вечеру.',
              'Подробный блок взаимодействий и синергий.',
              'Расширенные рекомендации по целям и истории анализов.',
            ].map((item) => (
              <div className="rounded-[20px] bg-white px-5 py-4" key={item}>
                <p className="font-['DM_Sans'] text-[15px] text-[#1f1f1f]/72">{item}</p>
              </div>
            ))}
          </div>
          <Link className="mt-6 inline-flex rounded-full bg-[#02b1cc] px-6 py-3 font-['DM_Sans'] text-[15px] font-semibold text-white" to="/premium?from=/analysis/free">
            Перейти на Premium
          </Link>
        </section>
      </div>
    </div>
  );
}

function PremiumAnalysisContent({ analysis }: AnalysisContentProps) {
  return (
    <div className="space-y-6">
      <AnalysisHero analysis={analysis} plan="premium" />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[30px] bg-white p-7 shadow-[0_20px_60px_rgba(31,31,31,0.06)]">
          <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/40">Статус</p>
          <h2 className="mt-2 font-['DM_Sans'] text-[28px] font-bold text-[#1f1f1f]">Общий разбор схемы</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-[22px] bg-[#f6f7f8] p-5"><p className="font-['DM_Sans'] text-[13px] text-[#1f1f1f]/45">Дубликаты</p><p className="mt-2 font-['DM_Sans'] text-[30px] font-bold text-[#1f1f1f]">{analysis.result.duplicates.length}</p></div>
            <div className="rounded-[22px] bg-[#f6f7f8] p-5"><p className="font-['DM_Sans'] text-[13px] text-[#1f1f1f]/45">Взаимодействия</p><p className="mt-2 font-['DM_Sans'] text-[30px] font-bold text-[#1f1f1f]">{analysis.result.interactions.length}</p></div>
            <div className="rounded-[22px] bg-[#f6f7f8] p-5"><p className="font-['DM_Sans'] text-[13px] text-[#1f1f1f]/45">Дозировки</p><p className="mt-2 font-['DM_Sans'] text-[30px] font-bold text-[#1f1f1f]">{analysis.result.dosageWarnings.length}</p></div>
            <div className="rounded-[22px] bg-[#fff5f2] p-5"><p className="font-['DM_Sans'] text-[13px] text-[#ff6647]/60">Фокус</p><p className="mt-2 font-['DM_Sans'] text-[16px] font-semibold leading-[1.5] text-[#1f1f1f]">{analysis.questionnaireData.goals.join(', ') || 'Общий контроль схемы приема'}</p></div>
          </div>
          <div className="mt-6 space-y-3">
            {analysis.result.recommendations.map((recommendation, index) => (
              <motion.div key={`${recommendation}-${index}`} className="rounded-[22px] bg-[#f6f7f8] px-5 py-4" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.06 }}>
                <p className="font-['DM_Sans'] text-[15px] leading-[1.7] text-[#1f1f1f]/72">{recommendation}</p>
              </motion.div>
            ))}
          </div>
        </section>
        <section className="rounded-[30px] bg-white p-7 shadow-[0_20px_60px_rgba(31,31,31,0.06)]">
          <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/40">Расписание приема</p>
          <h2 className="mt-2 font-['DM_Sans'] text-[28px] font-bold text-[#1f1f1f]">Когда лучше принимать</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {([
              ['Утро', analysis.result.timingRecommendations.morning],
              ['День', analysis.result.timingRecommendations.day],
              ['Вечер', analysis.result.timingRecommendations.evening],
            ] as const).map(([label, items]) => (
              <div className="rounded-[24px] bg-[#f6f7f8] p-5" key={label}>
                <p className="font-['DM_Sans'] text-[16px] font-semibold text-[#1f1f1f]">{label}</p>
                <div className="mt-4 space-y-2">
                  {items.length > 0 ? items.map((item, index) => (
                    <div className="rounded-[16px] bg-white px-4 py-3" key={`${item.name}-${index}`}>
                      <p className="font-['DM_Sans'] text-[14px] font-semibold text-[#1f1f1f]">{item.name}</p>
                      <p className="mt-1 font-['DM_Sans'] text-[12px] text-[#02b1cc]">{item.note}</p>
                    </div>
                  )) : <p className="font-['DM_Sans'] text-[13px] text-[#1f1f1f]/50">Нет рекомендаций</p>}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export function AnalysisContent(props: AnalysisContentProps) {
  return props.plan === 'premium' ? <PremiumAnalysisContent {...props} /> : <FreeAnalysisContent {...props} />;
}
