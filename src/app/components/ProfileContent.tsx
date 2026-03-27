import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { FREE_ANALYSIS_LIMIT, type SavedAnalysis, type UserRecord } from '../utils/questionnaireData';

interface ProfileContentProps {
  user: UserRecord;
  latestAnalysis: SavedAnalysis | null;
  analysisHistory: SavedAnalysis[];
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: 'long',
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

  return goals.length > 0 ? goals.map((goal) => labels[goal] || goal).join(', ') : 'Цели пока не выбраны';
}

function genderLabel(value: string) {
  if (value === 'male') return 'Мужской';
  if (value === 'female') return 'Женский';
  return 'Не указан';
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[22px] bg-[#f6f7f8] p-5">
      <p className="font-['DM_Sans'] text-[13px] text-[#1f1f1f]/45">{label}</p>
      <p className="mt-2 font-['DM_Sans'] text-[16px] font-semibold leading-[1.5] text-[#1f1f1f]">{value}</p>
    </div>
  );
}

function AnalysisHistorySection({ analysisHistory }: { analysisHistory: SavedAnalysis[] }) {
  return (
    <section className="rounded-[30px] bg-white p-7 shadow-[0_20px_60px_rgba(31,31,31,0.06)]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/40">История анализов</p>
          <h2 className="mt-2 font-['DM_Sans'] text-[28px] font-bold text-[#1f1f1f]">Все проведенные анализы</h2>
          <p className="mt-3 max-w-[760px] font-['DM_Sans'] text-[15px] leading-[1.7] text-[#1f1f1f]/64">
            Здесь хранится полная история расчетов. Каждый анализ можно открыть и посмотреть подробнее на отдельной странице.
          </p>
        </div>
        <div className="rounded-[24px] bg-[#f6f7f8] px-5 py-4 text-left lg:min-w-[220px] lg:text-right">
          <p className="font-['DM_Sans'] text-[13px] text-[#1f1f1f]/45">Всего анализов</p>
          <p className="mt-1 font-['DM_Sans'] text-[36px] font-bold text-[#1f1f1f]">{analysisHistory.length}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-3 md:grid-cols-2">
        {analysisHistory.length > 0 ? (
          analysisHistory.map((analysis, index) => (
            <motion.div
              key={analysis.id}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[24px] border border-black/6 bg-[#fbfcfc] p-5"
              initial={{ opacity: 0, y: 12 }}
              transition={{ delay: index * 0.04 }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-['DM_Sans'] text-[13px] text-[#1f1f1f]/45">Дата</p>
                  <p className="mt-1 font-['DM_Sans'] text-[16px] font-semibold text-[#1f1f1f]">{formatDate(analysis.date)}</p>
                </div>
                <span className="rounded-full bg-[#eefafc] px-3 py-1.5 font-['DM_Sans'] text-[13px] font-semibold text-[#02b1cc]">
                  Score {analysis.result.safetyScore}
                </span>
              </div>
              <p className="mt-4 font-['DM_Sans'] text-[14px] leading-[1.6] text-[#1f1f1f]/62">
                Добавок в анализе: {analysis.supplements.length}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {analysis.supplements.slice(0, 3).map((supplement) => (
                  <span key={`${analysis.id}-${supplement.name}`} className="rounded-full bg-white px-3 py-1.5 font-['DM_Sans'] text-[13px] font-medium text-[#1f1f1f] shadow-[0_8px_18px_rgba(31,31,31,0.04)]">
                    {supplement.name}
                  </span>
                ))}
                {analysis.supplements.length > 3 && (
                  <span className="rounded-full bg-[#f1f4f5] px-3 py-1.5 font-['DM_Sans'] text-[13px] font-medium text-[#1f1f1f]/60">
                    +{analysis.supplements.length - 3}
                  </span>
                )}
              </div>
              <Link className="mt-5 inline-flex rounded-full bg-[#1f1f1f] px-4 py-2.5 font-['DM_Sans'] text-[14px] font-semibold text-white transition hover:bg-[#2b2b2b]" to={`/analysis?id=${analysis.id}`}>
                Открыть подробнее
              </Link>
            </motion.div>
          ))
        ) : (
          <div className="rounded-[24px] bg-[#f6f7f8] p-5 md:col-span-2 xl:col-span-3">
            <p className="font-['DM_Sans'] text-[15px] text-[#1f1f1f]/60">После первого расчета история анализов появится здесь.</p>
          </div>
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
    <section className="rounded-[30px] border border-[#ff6647]/18 bg-white p-7 shadow-[0_20px_60px_rgba(31,31,31,0.05)]">
      <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#ff6647]/70">Аккаунт</p>
      <h2 className="mt-2 font-['DM_Sans'] text-[28px] font-bold text-[#1f1f1f]">Удаление аккаунта</h2>
      <p className="mt-3 max-w-[760px] font-['DM_Sans'] text-[15px] leading-[1.7] text-[#1f1f1f]/65">
        В конце страницы вы можете полностью удалить аккаунт вместе с анкетой, историей анализов и персональными данными.
      </p>
      {error && <p className="mt-4 rounded-[18px] bg-[#fff3ef] px-4 py-3 font-['DM_Sans'] text-[14px] text-[#d14a2d]">{error}</p>}
      <button
        className="mt-6 rounded-full border border-[#ff6647]/30 px-6 py-3 font-['DM_Sans'] text-[15px] font-semibold text-[#d14a2d] transition hover:bg-[#fff5f2] disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isDeleting}
        onClick={() => void handleDelete()}
        type="button"
      >
        {isDeleting ? 'Удаляем аккаунт...' : 'Удалить аккаунт'}
      </button>
    </section>
  );
}

function FreeProfileContent({ user, latestAnalysis, analysisHistory }: ProfileContentProps) {
  const remaining = Math.max(0, FREE_ANALYSIS_LIMIT - analysisHistory.length);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-[32px] bg-[#1f1f1f] p-8 text-white">
          <p className="mb-3 font-['DM_Sans'] text-[13px] uppercase tracking-[0.16em] text-white/55">Free plan</p>
          <h1 className="font-['DM_Sans'] text-[38px] font-bold leading-[1.02]">{user.name}, ваш кабинет готов.</h1>
          <p className="mt-4 max-w-[620px] font-['DM_Sans'] text-[16px] leading-[1.7] text-white/72">
            Здесь хранится ваша анкета, последние результаты анализа и текущий список добавок. Базовый кабинет остается компактным,
            чтобы быстрее ориентироваться в данных.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="rounded-full bg-[#ff6647] px-6 py-3 font-['DM_Sans'] text-[15px] font-semibold text-white" to="/questionnaire/step1">
              Запустить новый анализ
            </Link>
            <Link className="rounded-full border border-white/18 px-6 py-3 font-['DM_Sans'] text-[15px] font-semibold text-white" to="/premium?from=/profile/free">
              Открыть Premium
            </Link>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
          <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(31,31,31,0.06)]">
            <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/40">Анализы</p>
            <p className="mt-3 font-['DM_Sans'] text-[44px] font-bold text-[#1f1f1f]">{remaining}</p>
            <p className="font-['DM_Sans'] text-[14px] text-[#1f1f1f]/62">из {FREE_ANALYSIS_LIMIT} бесплатных запусков осталось</p>
          </div>
          <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(31,31,31,0.06)]">
            <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/40">Цели</p>
            <p className="mt-3 font-['DM_Sans'] text-[20px] font-semibold leading-[1.35] text-[#1f1f1f]">{goalsLabel(user.questionnaireData.goals)}</p>
          </div>
          <div className="rounded-[28px] bg-[linear-gradient(135deg,_#02b1cc_0%,_#0293aa_100%)] p-6 text-white shadow-[0_20px_60px_rgba(2,177,204,0.25)]">
            <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-white/60">Последний score</p>
            <p className="mt-3 font-['DM_Sans'] text-[44px] font-bold">{latestAnalysis?.result.safetyScore ?? '--'}</p>
            <p className="font-['DM_Sans'] text-[14px] text-white/78">
              {latestAnalysis ? `Обновлен ${formatDate(latestAnalysis.date)}` : 'Появится после первого анализа'}
            </p>
          </div>
        </section>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-[30px] bg-white p-7 shadow-[0_20px_60px_rgba(31,31,31,0.06)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/40">Профиль</p>
              <h2 className="mt-2 font-['DM_Sans'] text-[28px] font-bold text-[#1f1f1f]">Персональные данные</h2>
            </div>
            <span className="rounded-full bg-[#fff4ee] px-4 py-2 font-['DM_Sans'] text-[13px] font-semibold text-[#ff6647]">Free</span>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <InfoCard label="Email" value={user.email} />
            <InfoCard
              label="Возраст и пол"
              value={`${user.questionnaireData.age || 'Не указан'}${user.questionnaireData.age ? ' • ' : ''}${genderLabel(user.questionnaireData.gender)}`}
            />
            <div className="rounded-[22px] bg-[#f6f7f8] p-5 md:col-span-2">
              <p className="font-['DM_Sans'] text-[13px] text-[#1f1f1f]/45">Особенности здоровья</p>
              <p className="mt-2 font-['DM_Sans'] text-[16px] font-semibold leading-[1.5] text-[#1f1f1f]">
                {user.questionnaireData.healthConditions.join(', ') || 'Пока не заполнены'}
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[30px] bg-white p-7 shadow-[0_20px_60px_rgba(31,31,31,0.06)]">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/40">Добавки</p>
              <h2 className="mt-2 font-['DM_Sans'] text-[28px] font-bold text-[#1f1f1f]">Текущий список</h2>
            </div>
            <p className="rounded-full bg-[#eefafc] px-4 py-2 font-['DM_Sans'] text-[13px] font-semibold text-[#02b1cc]">
              {user.questionnaireData.supplements.length} позиций
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {user.questionnaireData.supplements.length > 0 ? user.questionnaireData.supplements.map((supplement, index) => (
              <motion.div
                key={`${supplement.name}-${index}`}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-[22px] bg-[#f6f7f8] px-5 py-4"
                initial={{ opacity: 0, y: 12 }}
                transition={{ delay: index * 0.04 }}
              >
                <p className="font-['DM_Sans'] text-[16px] font-semibold text-[#1f1f1f]">{supplement.name}</p>
                <p className="mt-1 font-['DM_Sans'] text-[13px] text-[#1f1f1f]/50">{supplement.dosage || 'Без указанной дозировки'}</p>
              </motion.div>
            )) : <div className="rounded-[22px] bg-[#f6f7f8] p-5 sm:col-span-2"><p className="font-['DM_Sans'] text-[15px] text-[#1f1f1f]/60">Добавки появятся здесь после заполнения анкеты.</p></div>}
          </div>
        </section>
      </div>

      <section className="rounded-[30px] border border-dashed border-[#02b1cc]/30 bg-[#f7fdfe] p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#02b1cc]/70">Premium unlock</p>
            <h2 className="mt-2 font-['DM_Sans'] text-[28px] font-bold text-[#1f1f1f]">Расширенная версия кабинета уже готова</h2>
            <p className="mt-3 max-w-[760px] font-['DM_Sans'] text-[15px] leading-[1.7] text-[#1f1f1f]/65">
              В premium-версии появляются полная история анализов, приоритеты по целям, тайминг приема, расширенные рекомендации
              и подробный блок взаимодействий.
            </p>
          </div>
          <Link className="rounded-full bg-[#02b1cc] px-6 py-3 font-['DM_Sans'] text-[15px] font-semibold text-white" to="/premium?from=/profile/free">
            Перейти на Premium
          </Link>
        </div>
      </section>

      <AccountDangerZone />
    </div>
  );
}

function PremiumProfileContent({ user, latestAnalysis, analysisHistory }: ProfileContentProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-[32px] bg-[linear-gradient(135deg,_#1f1f1f_0%,_#263e45_52%,_#02b1cc_100%)] p-8 text-white">
          <p className="mb-3 font-['DM_Sans'] text-[13px] uppercase tracking-[0.16em] text-white/60">Premium space</p>
          <h1 className="font-['DM_Sans'] text-[38px] font-bold leading-[1.02]">{user.name}, это расширенная версия вашего кабинета.</h1>
          <p className="mt-4 max-w-[620px] font-['DM_Sans'] text-[16px] leading-[1.7] text-white/74">
            Все анкеты и анализы персонализированы, связаны с аккаунтом и сохраняются в базе. Здесь собрана более подробная картина по добавкам.
          </p>
        </section>
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-2">
          <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(31,31,31,0.06)]">
            <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/40">Последний score</p>
            <p className="mt-3 font-['DM_Sans'] text-[44px] font-bold text-[#1f1f1f]">{latestAnalysis?.result.safetyScore ?? '--'}</p>
          </div>
          <div className="rounded-[28px] bg-[#fff5f2] p-6 shadow-[0_20px_60px_rgba(255,102,71,0.12)]">
            <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#ff6647]/60">Фокус</p>
            <p className="mt-3 font-['DM_Sans'] text-[22px] font-semibold leading-[1.35] text-[#1f1f1f]">{goalsLabel(user.questionnaireData.goals)}</p>
          </div>
        </section>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-[30px] bg-white p-7 shadow-[0_20px_60px_rgba(31,31,31,0.06)]">
          <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/40">Профиль</p>
          <h2 className="mt-2 font-['DM_Sans'] text-[28px] font-bold text-[#1f1f1f]">Персональные данные</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <InfoCard label="Имя" value={user.name} />
            <InfoCard label="Email" value={user.email} />
            <InfoCard label="Возраст" value={user.questionnaireData.age || 'Не указан'} />
            <InfoCard label="Пол" value={genderLabel(user.questionnaireData.gender)} />
            <div className="rounded-[22px] bg-[#f6f7f8] p-5 md:col-span-2">
              <p className="font-['DM_Sans'] text-[13px] text-[#1f1f1f]/45">Особенности здоровья</p>
              <p className="mt-2 font-['DM_Sans'] text-[16px] font-semibold leading-[1.5] text-[#1f1f1f]">
                {user.questionnaireData.healthConditions.join(', ') || 'Пока не заполнены'}
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[30px] bg-white p-7 shadow-[0_20px_60px_rgba(31,31,31,0.06)]">
          <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#1f1f1f]/40">Добавки</p>
          <h2 className="mt-2 font-['DM_Sans'] text-[28px] font-bold text-[#1f1f1f]">Актуальный набор</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {user.questionnaireData.supplements.length > 0 ? user.questionnaireData.supplements.map((supplement, index) => (
              <motion.div
                key={`${supplement.name}-${index}`}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-full bg-[#f6f7f8] px-4 py-2.5 font-['DM_Sans'] text-[14px] font-medium text-[#1f1f1f]"
                initial={{ opacity: 0, y: 10 }}
                transition={{ delay: index * 0.03 }}
              >
                {supplement.name}
              </motion.div>
            )) : <p className="font-['DM_Sans'] text-[15px] text-[#1f1f1f]/60">Список появится после заполнения анкеты.</p>}
          </div>
          {latestAnalysis && (
            <div className="mt-6 rounded-[22px] bg-[#f6f7f8] p-5">
              <p className="font-['DM_Sans'] text-[13px] text-[#1f1f1f]/45">Последнее обновление</p>
              <p className="mt-2 font-['DM_Sans'] text-[16px] font-semibold text-[#1f1f1f]">{formatDate(latestAnalysis.date)}</p>
            </div>
          )}
        </section>
      </div>

      <AnalysisHistorySection analysisHistory={analysisHistory} />
      <AccountDangerZone />
    </div>
  );
}

export function ProfileContent(props: ProfileContentProps) {
  return props.user.plan === 'premium' ? <PremiumProfileContent {...props} /> : <FreeProfileContent {...props} />;
}
