import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { ProfileContent } from '../components/ProfileContent';
import { getAnalysisHistory, getLatestAnalysis } from '../utils/questionnaireData';

export function Profile() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [latestAnalysis, setLatestAnalysis] = useState<Awaited<ReturnType<typeof getLatestAnalysis>>>(null);
  const [analysisHistory, setAnalysisHistory] = useState<Awaited<ReturnType<typeof getAnalysisHistory>>>([]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [latest, history] = await Promise.all([getLatestAnalysis(), getAnalysisHistory()]);
        setLatestAnalysis(latest);
        setAnalysisHistory(history);
      } finally {
        setLoading(false);
      }
    };

    void loadData();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#fcfcfc_0%,_#f4f7f8_100%)]">
      <div className="mx-auto max-w-[1380px] px-4 pb-10 pt-28 md:px-8 md:pb-12 md:pt-32">
        {loading ? (
          <div className="flex min-h-[50vh] items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-[#02b1cc]" />
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <ProfileContent analysisHistory={analysisHistory} latestAnalysis={latestAnalysis} user={user} />
          </motion.div>
        )}
      </div>
    </div>
  );
}
