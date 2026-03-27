import { Link, useLocation, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

export function Paywall() {
  const { user, updatePlan, refreshUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const from = params.get('from') || '/profile/free';

  useEffect(() => {
    if (user?.plan === 'premium') {
      navigate('/profile/premium', { replace: true });
    }
  }, [navigate, user?.plan]);

  const handleUpgrade = async () => {
    if (!user) {
      navigate('/auth', { replace: true, state: { from: '/profile/premium', mode: 'register' } });
      return;
    }
    await updatePlan('premium');
    await refreshUser();
    navigate(from.startsWith('/analysis') ? '/analysis/premium' : '/profile/premium', { replace: true });
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[rgba(19,24,27,0.55)] px-4 py-10 backdrop-blur-[6px]">
      <motion.div
        className="w-full max-w-[620px] rounded-[36px] bg-white p-8 shadow-[0_24px_80px_rgba(31,31,31,0.18)] md:p-10"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
      >
        <p className="font-['DM_Sans'] text-[13px] uppercase tracking-[0.16em] text-[#02b1cc]/70">Premium</p>
        <h1 className="mt-4 font-['DM_Sans'] text-[34px] font-bold leading-[1.08] text-[#1f1f1f]">
          Спасибо за ваш интерес
        </h1>
        <p className="mt-5 font-['DM_Sans'] text-[16px] leading-[1.75] text-[#1f1f1f]/68">
          Спасибо, что оценили наш сервис и захотели приобрести полную версию продукта. На данный момент это учебная версия проекта, поэтому доступ к полному функционалу сейчас бесплатный
        </p>

        <button
          className="mt-8 w-full rounded-full bg-[#ff6647] px-6 py-4 font-['DM_Sans'] text-[16px] font-semibold text-white"
          onClick={() => void handleUpgrade()}
          type="button"
        >
          Перейти на Premium
        </button>

        <div className="mt-4 text-center">
          <Link className="font-['DM_Sans'] text-[14px] font-medium text-[#02b1cc]" to={from.startsWith('/analysis') ? '/analysis/free' : '/'}>
            Закрыть
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
