import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import {
  FREE_ANALYSIS_LIMIT,
  getAnalysisById,
  getAnalysisHistory,
  getLatestAnalysis,
  saveAnalysis,
  type SavedAnalysis,
} from '../utils/questionnaireData';
import { AnalysisContent } from '../components/AnalysisContent';

export function Analysis() {
  const { user } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [analysis, setAnalysis] = useState<SavedAnalysis | null>(null);
  const [limitReached, setLimitReached] = useState(false);

  useEffect(() => {
    const loadAnalysis = async () => {
      setLoading(true);
      setLimitReached(false);

      try {
        const requestedId = searchParams.get('id');
        const shouldRunNew = searchParams.get('run') === '1';

        if (requestedId) {
          const requestedAnalysis = await getAnalysisById(requestedId);
          setAnalysis(requestedAnalysis);
          return;
        }

        const history = await getAnalysisHistory();

        if (shouldRunNew) {
          if (user?.plan === 'free' && history.length >= FREE_ANALYSIS_LIMIT) {
            setLimitReached(true);
            setAnalysis(history[0] ?? null);
            return;
          }

          try {
            const analysisId = await saveAnalysis();
            const createdAnalysis = await getAnalysisById(analysisId);
            setAnalysis(createdAnalysis);
            setSearchParams(
              () => {
                const params = new URLSearchParams();
                params.set('id', analysisId);
                return params;
              },
              { replace: true },
            );
            return;
          } catch (error) {
            if (error instanceof Error && error.message.includes('Лимит')) {
              setLimitReached(true);
              setAnalysis(history[0] ?? null);
              return;
            }
            throw error;
          }
        }

        const latestAnalysis = await getLatestAnalysis();
        setAnalysis(latestAnalysis);
      } finally {
        setLoading(false);
      }
    };

    void loadAnalysis();
  }, [searchParams, setSearchParams, user?.plan]);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#fcfcfc_0%,_#f5f8f8_100%)]">
      <div className="mx-auto max-w-[1380px] px-4 pb-10 pt-28 md:px-8 md:pb-12 md:pt-32">
        {loading ? (
          <div className="flex min-h-[50vh] items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-[#02b1cc]" />
          </div>
        ) : limitReached ? (
          <motion.div
            className="rounded-[32px] border border-[#ff6647]/20 bg-[#fff5f2] p-8"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#ff6647]/70">Лимит free-тарифа</p>
            <h1 className="mt-3 font-['DM_Sans'] text-[34px] font-bold leading-[1.08] text-[#1f1f1f]">
              Бесплатные анализы закончились.
            </h1>
            <p className="mt-4 max-w-[760px] font-['DM_Sans'] text-[16px] leading-[1.7] text-[#1f1f1f]/68">
              Вы уже использовали {FREE_ANALYSIS_LIMIT} бесплатных запуска. Последний сохраненный анализ по-прежнему доступен,
              а полная версия кабинета снимает лимит и открывает расширенную аналитику.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="rounded-full bg-[#ff6647] px-6 py-3 font-['DM_Sans'] text-[15px] font-semibold text-white" to="/profile">
                Открыть кабинет
              </Link>
              {analysis && (
                <Link className="rounded-full border border-[#ff6647]/20 px-6 py-3 font-['DM_Sans'] text-[15px] font-semibold text-[#ff6647]" to={`/analysis?id=${analysis.id}`}>
                  Смотреть последний анализ
                </Link>
              )}
            </div>
          </motion.div>
        ) : analysis ? (
          <AnalysisContent analysis={analysis} isAuthenticated={Boolean(user)} plan={user?.plan || 'free'} />
        ) : (
          <motion.div
            className="rounded-[32px] border border-dashed border-[#02b1cc]/30 bg-[#f7fdfe] p-8"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.14em] text-[#02b1cc]/70">Нет данных</p>
            <h1 className="mt-3 font-['DM_Sans'] text-[34px] font-bold leading-[1.08] text-[#1f1f1f]">
              Сначала нужно заполнить анкету.
            </h1>
            <p className="mt-4 max-w-[760px] font-['DM_Sans'] text-[16px] leading-[1.7] text-[#1f1f1f]/68">
              После анкеты система создаст персонализированный анализ и сможет сохранить его в профиле.
            </p>
            <Link className="mt-7 inline-flex rounded-full bg-[#02b1cc] px-6 py-3 font-['DM_Sans'] text-[15px] font-semibold text-white" to="/questionnaire/step1">
              Перейти к анкете
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
