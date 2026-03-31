import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import type { SavedAnalysis, UserPlan } from '../utils/questionnaireData';

interface AnalysisContentProps {
  analysis: SavedAnalysis;
  plan: UserPlan;
  isAuthenticated: boolean;
}

type StatusTone = 'ok' | 'warning' | 'danger';

function formatShortDate(value: string) {
  return new Date(value).toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

function overallStatus(analysis: SavedAnalysis): {
  tone: StatusTone;
  title: string;
  description: string;
} {
  const hasHardWarnings =
    analysis.result.dosageWarnings.some((item) => item.percentage > 100) ||
    analysis.result.interactions.some((item) => item.type === 'warning');

  if (analysis.result.duplicates.length > 0 || hasHardWarnings) {
    return {
      tone: 'danger',
      title: 'Есть зоны для корректировки',
      description:
        'Схема работает неравномерно: система нашла дубли компонентов, спорные сочетания или превышения дозировок.',
    };
  }

  if (analysis.result.interactions.length > 0 || analysis.result.dosageWarnings.length > 0) {
    return {
      tone: 'warning',
      title: 'Схема в целом стабильна',
      description:
        'Серьезных конфликтов не найдено, но есть моменты, которые стоит проверить и при необходимости уточнить.',
    };
  }

  return {
    tone: 'ok',
    title: 'Схема выглядит сбалансированной',
    description:
      'Анализ не показывает критических пересечений. Можно сохранить текущий план и отслеживать его в кабинете.',
  };
}

function statusPalette(tone: StatusTone) {
  if (tone === 'danger') {
    return {
      badge: 'bg-[#FFF1EC] text-[#FF6647]',
      icon: 'bg-[#FF6647] text-white',
      bar: 'bg-[#FF6647]',
      soft: 'bg-[#FFF6F2] border-[#FFD9CF]',
    };
  }

  if (tone === 'warning') {
    return {
      badge: 'bg-[#FFF8E8] text-[#C58A12]',
      icon: 'bg-[#F4B942] text-white',
      bar: 'bg-[#F4B942]',
      soft: 'bg-[#FFFBF0] border-[#F6E1A7]',
    };
  }

  return {
    badge: 'bg-[#EAF9F8] text-[#128072]',
    icon: 'bg-[#1AB3A6] text-white',
    bar: 'bg-[#1AB3A6]',
    soft: 'bg-[#F2FCFB] border-[#C9F1EC]',
  };
}

function supplementStatusMap(analysis: SavedAnalysis) {
  const map = new Map<string, { label: string; tone: StatusTone }>();

  analysis.supplements.forEach((supplement) => {
    map.set(supplement.name, { label: 'ОК', tone: 'ok' });
  });

  analysis.result.dosageWarnings.forEach((warning) => {
    map.set(warning.name, {
      label: warning.percentage > 100 ? 'Доза' : 'Контроль',
      tone: warning.percentage > 100 ? 'danger' : 'warning',
    });
  });

  analysis.result.duplicates.forEach((duplicate) => {
    map.set(duplicate.name, { label: 'Дубль', tone: 'danger' });
  });

  analysis.result.interactions.forEach((interaction) => {
    interaction.supplements.forEach((name) => {
      if (!map.has(name) || map.get(name)?.tone !== 'danger') {
        map.set(name, {
          label: interaction.type === 'warning' ? 'Риск' : 'Синергия',
          tone: interaction.type === 'warning' ? 'danger' : 'warning',
        });
      }
    });
  });

  return map;
}

function supplementBadge(tone: StatusTone) {
  if (tone === 'danger') {
    return 'bg-[#FFF1EC] text-[#FF6647]';
  }

  if (tone === 'warning') {
    return 'bg-[#FFF7E8] text-[#C58A12]';
  }

  return 'bg-[#EAF9F8] text-[#128072]';
}

function dosageBarColor(percentage: number) {
  if (percentage > 100) return 'bg-[#FF6647]';
  if (percentage > 75) return 'bg-[#F4B942]';
  return 'bg-[#1AB3A6]';
}

function buildProfileLink(plan: UserPlan) {
  return plan === 'premium' ? '/profile/premium' : '/profile/free';
}

function HeaderBlock({ analysis }: { analysis: SavedAnalysis }) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/42">Персональный разбор</p>
        <h1 className="mt-3 font-['DM_Sans'] text-[36px] font-bold leading-[1.05] text-[#1f1f1f] md:text-[44px]">
          Ваш анализ добавок
        </h1>
        <p className="mt-4 max-w-[780px] font-['DM_Sans'] text-[16px] leading-[1.7] text-[#1f1f1f]/62">
          Результат собран по вашей анкете, текущему списку добавок и найденным пересечениям по дозировкам и сочетаниям.
        </p>
      </div>
      <div className="rounded-[28px] border border-[#dfe8ea] bg-white px-6 py-5 shadow-[0_16px_40px_rgba(31,31,31,0.06)]">
        <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/42">Дата анализа</p>
        <p className="mt-2 font-['DM_Sans'] text-[18px] font-semibold text-[#1f1f1f]">{formatShortDate(analysis.date)}</p>
      </div>
    </div>
  );
}

function OverallStatusCard({ analysis }: { analysis: SavedAnalysis }) {
  const summary = overallStatus(analysis);
  const palette = statusPalette(summary.tone);

  return (
    <section className="rounded-[32px] border border-[#dfe8ea] bg-white p-7 shadow-[0_20px_60px_rgba(31,31,31,0.06)] md:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-[680px]">
          <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/42">Общий статус</p>
          <div className="mt-4 flex items-center gap-4">
            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl text-[20px] font-bold ${palette.icon}`}>
              !
            </div>
            <div>
              <h2 className="font-['DM_Sans'] text-[28px] font-bold leading-[1.1] text-[#1f1f1f] md:text-[32px]">{summary.title}</h2>
              <span className={`mt-3 inline-flex rounded-full px-3 py-1 text-[13px] font-semibold ${palette.badge}`}>
                Безопасность {analysis.result.safetyScore}/100
              </span>
            </div>
          </div>
          <p className="mt-5 font-['DM_Sans'] text-[15px] leading-[1.75] text-[#1f1f1f]/68">{summary.description}</p>
        </div>

        <div className="min-w-[220px] rounded-[28px] bg-[#F6F8F9] px-6 py-5">
          <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/42">Safety score</p>
          <p className="mt-2 font-['DM_Sans'] text-[52px] font-bold leading-none text-[#1f1f1f]">{analysis.result.safetyScore}</p>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#DFE8EA]">
            <div
              className={`h-full rounded-full ${palette.bar}`}
              style={{ width: `${Math.max(8, Math.min(analysis.result.safetyScore, 100))}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CurrentSupplementsCard({ analysis }: { analysis: SavedAnalysis }) {
  const statuses = supplementStatusMap(analysis);

  return (
    <section className="rounded-[32px] border border-[#dfe8ea] bg-white p-7 shadow-[0_20px_60px_rgba(31,31,31,0.06)] md:p-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/42">Мой текущий список</p>
          <h2 className="mt-2 font-['DM_Sans'] text-[28px] font-bold text-[#1f1f1f]">Добавки в анализе</h2>
        </div>
        <p className="font-['DM_Sans'] text-[14px] text-[#1f1f1f]/48">{analysis.supplements.length} позиций</p>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {analysis.supplements.map((supplement, index) => {
          const status = statuses.get(supplement.name) ?? { label: 'ОК', tone: 'ok' as StatusTone };
          return (
            <div
              className="flex items-start justify-between gap-4 rounded-[24px] bg-[#F6F8F9] px-5 py-4"
              key={`${supplement.name}-${index}`}
            >
              <div>
                <p className="font-['DM_Sans'] text-[16px] font-semibold text-[#1f1f1f]">{supplement.name}</p>
                <p className="mt-1 font-['DM_Sans'] text-[13px] text-[#1f1f1f]/50">{supplement.dosage || 'Дозировка не указана'}</p>
              </div>
              <span className={`rounded-full px-3 py-1 text-[12px] font-semibold ${supplementBadge(status.tone)}`}>
                {status.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function DuplicatesCard({ analysis }: { analysis: SavedAnalysis }) {
  return (
    <section className="rounded-[32px] border border-[#dfe8ea] bg-white p-7 shadow-[0_20px_60px_rgba(31,31,31,0.06)] md:p-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/42">Дубликаты компонентов</p>
          <h2 className="mt-2 font-['DM_Sans'] text-[28px] font-bold text-[#1f1f1f]">Что повторяется в схеме</h2>
        </div>
        <p className="font-['DM_Sans'] text-[14px] text-[#1f1f1f]/48">{analysis.result.duplicates.length} совпадений</p>
      </div>

      {analysis.result.duplicates.length > 0 ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {analysis.result.duplicates.map((duplicate) => (
            <div className="rounded-[24px] border border-[#FFE0D7] bg-[#FFF6F2] p-5" key={duplicate.name}>
              <div className="flex items-center justify-between gap-3">
                <p className="font-['DM_Sans'] text-[18px] font-semibold text-[#1f1f1f]">{duplicate.name}</p>
                <span className="rounded-full bg-white px-3 py-1 text-[12px] font-semibold text-[#FF6647]">x{duplicate.count}</span>
              </div>
              <p className="mt-4 font-['DM_Sans'] text-[13px] uppercase tracking-[0.12em] text-[#FF6647]/75">Источники</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {duplicate.sources.map((source) => (
                  <span className="rounded-full bg-white px-3 py-1 text-[12px] text-[#1f1f1f]/62" key={`${duplicate.name}-${source}`}>
                    {source}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-[24px] border border-[#C9F1EC] bg-[#F2FCFB] p-5">
          <p className="font-['DM_Sans'] text-[15px] leading-[1.7] text-[#1f1f1f]/68">
            Повторяющихся компонентов не найдено. Список выглядит чистым по составу и не перегружен дублями.
          </p>
        </div>
      )}
    </section>
  );
}

function DosageCard({ analysis }: { analysis: SavedAnalysis }) {
  return (
    <section className="rounded-[32px] border border-[#dfe8ea] bg-white p-7 shadow-[0_20px_60px_rgba(31,31,31,0.06)] md:p-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/42">Проверка дозировок</p>
          <h2 className="mt-2 font-['DM_Sans'] text-[28px] font-bold text-[#1f1f1f]">Текущий уровень по каждой добавке</h2>
        </div>
        <p className="font-['DM_Sans'] text-[14px] text-[#1f1f1f]/48">{analysis.result.dosageWarnings.length} проверок</p>
      </div>

      {analysis.result.dosageWarnings.length > 0 ? (
        <div className="mt-6 space-y-4">
          {analysis.result.dosageWarnings.map((warning) => {
            const width = Math.max(12, Math.min(warning.percentage, 100));
            return (
              <div className="rounded-[24px] bg-[#F6F8F9] px-5 py-4" key={`${warning.name}-${warning.currentDosage}`}>
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="font-['DM_Sans'] text-[17px] font-semibold text-[#1f1f1f]">{warning.name}</p>
                    <p className="mt-1 font-['DM_Sans'] text-[13px] text-[#1f1f1f]/54">
                      Текущая дозировка: {warning.currentDosage} · Рекомендуемая: {warning.recommendedDosage}
                    </p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-[12px] font-semibold ${warning.percentage > 100 ? 'bg-[#FFF1EC] text-[#FF6647]' : 'bg-[#FFF7E8] text-[#C58A12]'}`}>
                    {warning.percentage}%
                  </span>
                </div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-white">
                  <div className={`h-full rounded-full ${dosageBarColor(warning.percentage)}`} style={{ width: `${width}%` }} />
                </div>
                <p className="mt-3 font-['DM_Sans'] text-[14px] leading-[1.65] text-[#1f1f1f]/66">
                  {warning.warning || 'Дозировка близка к верхней границе. Лучше отслеживать динамику и самочувствие.'}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mt-6 rounded-[24px] border border-[#C9F1EC] bg-[#F2FCFB] p-5">
          <p className="font-['DM_Sans'] text-[15px] leading-[1.7] text-[#1f1f1f]/68">
            По распознанным дозировкам система не видит отклонений выше рекомендованных значений.
          </p>
        </div>
      )}
    </section>
  );
}

function SidebarCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-[32px] border border-[#dfe8ea] bg-white p-6 shadow-[0_20px_60px_rgba(31,31,31,0.06)] md:p-7">
      <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/42">{title}</p>
      {children}
    </section>
  );
}

function AnalysisSidebar({ analysis, plan, isAuthenticated }: AnalysisContentProps) {
  const profileLink = buildProfileLink(plan);
  const saveProps = isAuthenticated
    ? { to: profileLink }
    : { to: '/auth', state: { from: profileLink, mode: 'register' as const } };

  return (
    <div className="space-y-5">
      <SidebarCard title="Рекомендации">
        <div className="mt-4 space-y-3">
          {analysis.result.recommendations.slice(0, 4).map((recommendation, index) => (
            <motion.div
              key={`${recommendation}-${index}`}
              className="rounded-[22px] bg-[#F6F8F9] px-4 py-4"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.06 }}
            >
              <p className="font-['DM_Sans'] text-[15px] leading-[1.7] text-[#1f1f1f]/70">{recommendation}</p>
            </motion.div>
          ))}
        </div>
      </SidebarCard>

      <section className="rounded-[32px] bg-[#FF7B5D] p-6 text-white shadow-[0_24px_70px_rgba(255,102,71,0.28)] md:p-7">
        <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-white/70">Действия</p>
        <h2 className="mt-3 font-['DM_Sans'] text-[28px] font-bold leading-[1.08]">Сохраните разбор в профиле</h2>
        <p className="mt-3 font-['DM_Sans'] text-[15px] leading-[1.7] text-white/82">
          Так вы закрепите анализ за своим аккаунтом, сможете вернуться к нему позже и сравнивать новые результаты.
        </p>
        <div className="mt-6 space-y-3">
          <Link
            className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-[15px] font-semibold text-[#FF6647] transition-transform duration-200 hover:-translate-y-0.5"
            {...saveProps}
          >
            Сохранить результат в профиле
          </Link>
          {plan === 'free' && (
            <Link
              className="inline-flex w-full items-center justify-center rounded-full border border-white/30 px-5 py-3 text-[15px] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
              to="/premium?from=/analysis/free"
            >
              Перейти на Premium
            </Link>
          )}
          <button
            className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-5 py-3 text-[15px] font-semibold text-white/84 transition-transform duration-200 hover:-translate-y-0.5"
            type="button"
          >
            Скачать отчет PDF
          </button>
        </div>
      </section>

      <SidebarCard title="О сервисе">
        <div className="mt-4 space-y-3 text-[15px] leading-[1.7] text-[#1f1f1f]/68">
          <p>Анализ собирает повторы, проверяет дозировки и подсказывает, где схема приема выглядит перегруженной.</p>
          <p>Итог зависит от вашей анкеты, текущего списка добавок, целей и найденных сочетаний между компонентами.</p>
        </div>
      </SidebarCard>
    </div>
  );
}

export function AnalysisContent(props: AnalysisContentProps) {
  return (
    <div className="space-y-6">
      <HeaderBlock analysis={props.analysis} />

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_380px] xl:items-start">
        <div className="space-y-6">
          <OverallStatusCard analysis={props.analysis} />
          <CurrentSupplementsCard analysis={props.analysis} />
          <DuplicatesCard analysis={props.analysis} />
          <DosageCard analysis={props.analysis} />
        </div>

        <AnalysisSidebar {...props} />
      </div>
    </div>
  );
}
