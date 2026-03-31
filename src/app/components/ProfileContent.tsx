import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { FREE_ANALYSIS_LIMIT, type SavedAnalysis, type UserRecord } from '../utils/questionnaireData';

interface ProfileContentProps {
  user: UserRecord;
  latestAnalysis: SavedAnalysis | null;
  analysisHistory: SavedAnalysis[];
}

type StatusTone = 'ok' | 'warning' | 'danger';

function formatShortDate(value: string) {
  return new Date(value).toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

function goalsLabel(goals: string[]) {
  const labels: Record<string, string> = {
    health: 'Общее здоровье',
    immunity: 'Иммунитет',
    energy: 'Энергия',
    sleep: 'Сон',
    beauty: 'Красота и кожа',
    digestion: 'Пищеварение',
    sport: 'Спорт',
    stress: 'Стресс',
    focus: 'Концентрация',
  };

  return goals.length > 0 ? goals.map((goal) => labels[goal] || goal).join(', ') : 'Цель пока не выбрана';
}

function ageLabel(age: string) {
  if (!age) return 'Возраст не указан';
  return `${age} ${Number(age) < 5 ? 'года' : 'лет'}`;
}

function statusBadge(status: StatusTone) {
  if (status === 'danger') {
    return {
      label: 'Есть риски',
      className: 'bg-[#ffe8e3] text-[#ff6647]',
    };
  }
  if (status === 'warning') {
    return {
      label: 'Нужен контроль',
      className: 'bg-[#fff4d8] text-[#c58b00]',
    };
  }
  return {
    label: 'Норма',
    className: 'bg-[#e0f7fa] text-[#02b1cc]',
  };
}

function analysisStatus(analysis: SavedAnalysis | null): StatusTone {
  if (!analysis) {
    return 'warning';
  }

  if (analysis.result.duplicates.length > 0 || analysis.result.interactions.some((item) => item.type === 'warning')) {
    return 'danger';
  }

  if (analysis.result.dosageWarnings.length > 0 || analysis.result.interactions.length > 0) {
    return 'warning';
  }

  return 'ok';
}

function supplementStatusMap(analysis: SavedAnalysis | null) {
  const result = new Map<string, StatusTone>();

  if (!analysis) {
    return result;
  }

  analysis.result.duplicates.forEach((item) => {
    result.set(item.name.toLowerCase(), 'danger');
  });

  analysis.result.interactions.forEach((item) => {
    item.supplements.forEach((name) => {
      const key = name.toLowerCase();
      const current = result.get(key);
      if (item.type === 'warning') {
        result.set(key, 'danger');
      } else if (!current) {
        result.set(key, 'warning');
      }
    });
  });

  analysis.result.dosageWarnings.forEach((item) => {
    const key = item.name.toLowerCase();
    if (!result.has(key)) {
      result.set(key, item.warning ? 'danger' : 'warning');
    }
  });

  return result;
}

function StatusPill({ status }: { status: StatusTone }) {
  const badge = statusBadge(status);
  return <span className={`rounded-full px-3 py-2 text-[13px] font-medium ${badge.className}`}>{badge.label}</span>;
}

function SectionIcon({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex size-6 items-center justify-center text-[#1f1f1f]">{children}</span>;
}

function HeroSection({ user, analysisHistory }: { user: UserRecord; analysisHistory: SavedAnalysis[] }) {
  const summaryValue = user.plan === 'premium' ? analysisHistory.length : Math.max(0, FREE_ANALYSIS_LIMIT - analysisHistory.length);
  const summaryLabel = user.plan === 'premium' ? 'Всего анализов' : 'Осталось анализов';

  return (
    <section className="rounded-[32px] bg-[#10b0ca] px-8 py-7 text-white">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="font-['Inter'] text-[40px] font-medium leading-[1.1]">Личный кабинет</h1>
          <p className="mt-3 font-['Inter'] text-[18px] leading-[1.55] text-white/88">Управляйте анализами и отслеживайте изменения по персональной схеме пользователя.</p>
          <p className="mt-3 font-['DM_Sans'] text-[15px] leading-[1.6] text-white/78">Профиль привязан к анкете, истории запусков и последнему результату нейроанализа.</p>
        </div>

        <div className="flex flex-col items-start gap-5 lg:items-end">
          <div className="text-left lg:text-right">
            <p className="font-['Inter'] text-[18px] leading-[1.25] text-white/86">{summaryLabel}</p>
            <p className="mt-1 font-['Inter'] text-[48px] font-semibold leading-none">{summaryValue}</p>
          </div>
          <Link className="rounded-[54px] bg-[#ff6647] px-8 py-4 font-['DM_Sans'] text-[16px] font-medium text-white transition hover:bg-[#f15b3b]" to="/questionnaire/step1">
            Проверить новые БАДы
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProfileSummary({ user, latestAnalysis }: { user: UserRecord; latestAnalysis: SavedAnalysis | null }) {
  const score = latestAnalysis?.result.safetyScore ?? 0;
  const latestStatus = analysisStatus(latestAnalysis);
  const badge = statusBadge(latestStatus);

  return (
    <section className="rounded-[24px] bg-[#f5f5f5] px-8 py-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <SectionIcon>
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
              <path d="M20 21V19C20 17.94 19.58 16.92 18.83 16.17C18.08 15.42 17.06 15 16 15H8C6.94 15 5.92 15.42 5.17 16.17C4.42 16.92 4 17.94 4 19V21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </SectionIcon>
          <h2 className="font-['Inter'] text-[32px] font-semibold text-[#1f1f1f]">{user.name}</h2>
        </div>
        <Link className="rounded-[36px] border-2 border-[#1f1f1f] px-6 py-3 font-['DM_Sans'] text-[14px] font-medium text-[#1f1f1f] transition hover:bg-white" to="/questionnaire/step1">
          Редактировать
        </Link>
      </div>

      <div className="mt-5 rounded-[16px] bg-white p-5">
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <p className="text-[14px] text-[#6b6b6b]">Email: {user.email}</p>
            <p className="mt-2 text-[14px] text-[#6b6b6b]">Возраст: {ageLabel(user.questionnaireData.age)}</p>
          </div>
          <div>
            <p className="text-[14px] text-[#6b6b6b]">Пол: {user.questionnaireData.gender === 'female' ? 'Женский' : user.questionnaireData.gender === 'male' ? 'Мужской' : 'Не указан'}</p>
            <p className="mt-2 text-[14px] text-[#6b6b6b]">Цель: {goalsLabel(user.questionnaireData.goals)}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <SectionIcon>
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
            <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M14 7H21V14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </SectionIcon>
        <h3 className="font-['Inter'] text-[30px] font-semibold text-[#1f1f1f]">Последний анализ</h3>
      </div>

      <div className="mt-4 rounded-[16px] bg-white p-6">
        {latestAnalysis ? (
          <>
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="flex items-end gap-2">
                  <span className="font-['Inter'] text-[56px] font-semibold leading-none text-[#1f1f1f]">{score}</span>
                  <span className="pb-1 text-[16px] text-[#6b6b6b]">/100</span>
                  <span className="pb-1 text-[14px] text-[#6b6b6b]">{formatShortDate(latestAnalysis.date)}</span>
                </div>
                <div className="mt-4 inline-flex rounded-full px-3 py-2 text-[13px] font-medium" style={{ backgroundColor: badge.className.includes('ffe8e3') ? '#ffe8e3' : badge.className.includes('fff4d8') ? '#fff4d8' : '#e0f7fa', color: badge.className.includes('ff6647') ? '#ff6647' : badge.className.includes('c58b00') ? '#c58b00' : '#02b1cc' }}>
                  {badge.label}
                </div>
              </div>

              <div
                className="relative size-[76px] rounded-full"
                style={{
                  background: `conic-gradient(#ff6647 ${Math.max(score, 8)}%, #f1f1f1 0)`,
                }}
              >
                <div className="absolute inset-[8px] rounded-full bg-white" />
              </div>
            </div>

            <Link className="mt-6 inline-flex w-full items-center justify-center rounded-[54px] bg-[#ff6647] px-8 py-4 font-['DM_Sans'] text-[16px] font-medium text-white transition hover:bg-[#f15b3b]" to={`/analysis?id=${latestAnalysis.id}`}>
              Посмотреть подробнее
            </Link>
          </>
        ) : (
          <div className="space-y-4">
            <p className="text-[15px] leading-[1.6] text-[#6b6b6b]">После первого запуска здесь появится персональный результат анализа по вашей анкете.</p>
            <Link className="inline-flex rounded-[54px] bg-[#ff6647] px-8 py-4 font-['DM_Sans'] text-[16px] font-medium text-white transition hover:bg-[#f15b3b]" to="/questionnaire/step1">
              Запустить первый анализ
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function CurrentSupplements({ user, latestAnalysis }: { user: UserRecord; latestAnalysis: SavedAnalysis | null }) {
  const statusMap = supplementStatusMap(latestAnalysis);

  return (
    <section className="rounded-[24px] bg-[#f5f5f5] px-8 py-8">
      <div className="flex items-center gap-3">
        <SectionIcon>
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
            <path d="M14 3V7C14 7.55 14.45 8 15 8H19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M5 12V5C5 4.45 5.45 4 6 4H14L19 9V19C19 19.55 18.55 20 18 20H11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M3 15L6 18L11 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </SectionIcon>
        <h2 className="font-['Inter'] text-[32px] font-semibold text-[#1f1f1f]">Мой текущий список</h2>
      </div>

      <div className="mt-5 space-y-3">
        {user.questionnaireData.supplements.length > 0 ? (
          user.questionnaireData.supplements.map((supplement, index) => {
            const status = statusMap.get(supplement.name.toLowerCase()) || 'ok';
            const badge = statusBadge(status);
            return (
              <div key={`${supplement.name}-${index}`} className="flex items-center justify-between gap-4 rounded-[16px] bg-white px-4 py-4">
                <div>
                  <p className="font-['DM_Sans'] text-[16px] font-medium text-[#1f1f1f]">{supplement.name}</p>
                  <p className="mt-1 text-[14px] text-[#6b6b6b]">{supplement.dosage || 'Без дозировки'}</p>
                </div>
                <span className={`rounded-full px-3 py-2 text-[13px] font-medium ${badge.className}`}>{badge.label}</span>
              </div>
            );
          })
        ) : (
          <div className="rounded-[16px] bg-white px-4 py-5 text-[15px] text-[#6b6b6b]">Список добавок появится после заполнения анкеты.</div>
        )}
      </div>
    </section>
  );
}

function AnalysisHistorySection({ analysisHistory }: { analysisHistory: SavedAnalysis[] }) {
  return (
    <section className="rounded-[24px] bg-[#f5f5f5] px-8 py-8">
      <div className="flex items-center gap-3">
        <SectionIcon>
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
            <path d="M12 8V12L15 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M3.05 11C3.27 6.5 7.02 3 11.56 3C16.24 3 20.05 6.81 20.05 11.5C20.05 16.19 16.24 20 11.56 20C7.41 20 3.95 17.03 3.2 13.1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </SectionIcon>
        <h2 className="font-['Inter'] text-[32px] font-semibold text-[#1f1f1f]">История анализов</h2>
      </div>

      <div className="mt-5 space-y-4">
        {analysisHistory.length > 0 ? (
          analysisHistory.map((analysis) => {
            const status = analysisStatus(analysis);
            const badge = statusBadge(status);
            return (
              <div key={analysis.id} className="flex flex-col gap-4 rounded-[16px] bg-white px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-wrap items-center gap-5 text-[16px] text-[#1f1f1f]">
                  <span className="inline-flex items-center gap-2 text-[#4f4f4f]">
                    <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                      <path d="M6.67 1.67V5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                      <path d="M13.33 1.67V5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                      <path d="M2.5 8.33H17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                      <path d="M17.5 7.08V14.17C17.5 16.67 16.25 18.33 13.33 18.33H6.67C3.75 18.33 2.5 16.67 2.5 14.17V7.08C2.5 4.58 3.75 2.92 6.67 2.92H13.33C16.25 2.92 17.5 4.58 17.5 7.08Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                    </svg>
                    {new Date(analysis.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  <span className="text-[#6b6b6b]">{analysis.supplements.length} БАДов</span>
                  <span className="font-medium">Оценка: {analysis.result.safetyScore}/100</span>
                  <span className={`rounded-full px-3 py-2 text-[14px] font-medium ${badge.className}`}>{badge.label}</span>
                </div>

                <Link className="inline-flex items-center justify-center rounded-[36px] border-2 border-[#02b1cc] px-6 py-3 text-[14px] font-medium text-[#02b1cc] transition hover:bg-[#ecfbfd]" to={`/analysis?id=${analysis.id}`}>
                  Посмотреть подробнее
                </Link>
              </div>
            );
          })
        ) : (
          <div className="rounded-[16px] bg-white px-6 py-5 text-[15px] text-[#6b6b6b]">После первого анализа история появится здесь.</div>
        )}
      </div>
    </section>
  );
}

function AccountDangerZone() {
  const navigate = useNavigate();
  const { deleteAccount } = useAuth();
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState('');

  const handleDelete = async () => {
    const confirmed = window.confirm('Удалить аккаунт и все сохраненные данные без возможности восстановления?');
    if (!confirmed) {
      return;
    }

    setError('');
    setIsDeleting(true);
    try {
      await deleteAccount();
      navigate('/', { replace: true });
    } catch (deleteError) {
      setError(deleteError instanceof Error ? deleteError.message : 'Не удалось удалить аккаунт.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <section className="rounded-[24px] bg-[#f5f5f5] px-8 py-8">
      <p className="text-[14px] uppercase tracking-[0.12em] text-[#ff6647]">Аккаунт</p>
      <h2 className="mt-2 font-['Inter'] text-[28px] font-semibold text-[#1f1f1f]">Удаление аккаунта</h2>
      <p className="mt-3 max-w-[760px] text-[15px] leading-[1.7] text-[#6b6b6b]">
        В конце страницы вы можете полностью удалить аккаунт вместе с анкетой, историей анализов и персональными данными.
      </p>
      {error && <p className="mt-4 rounded-[16px] bg-[#fff3ef] px-4 py-3 text-[14px] text-[#d14a2d]">{error}</p>}
      <button
        className="mt-6 rounded-[54px] border border-[#ff6647]/35 px-6 py-3 text-[15px] font-medium text-[#d14a2d] transition hover:bg-[#fff0eb] disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isDeleting}
        onClick={() => void handleDelete()}
        type="button"
      >
        {isDeleting ? 'Удаляем аккаунт...' : 'Удалить аккаунт'}
      </button>
    </section>
  );
}

function ProfileContentLayout({ user, latestAnalysis, analysisHistory }: ProfileContentProps) {
  return (
    <div className="space-y-8">
      <HeroSection analysisHistory={analysisHistory} user={user} />
      <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
        <ProfileSummary latestAnalysis={latestAnalysis} user={user} />
        <CurrentSupplements latestAnalysis={latestAnalysis} user={user} />
      </div>
      <AnalysisHistorySection analysisHistory={analysisHistory} />
      <AccountDangerZone />
    </div>
  );
}

export function ProfileContent(props: ProfileContentProps) {
  return <ProfileContentLayout {...props} />;
}
