import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { syncGuestDataToAccount, type UserPlan } from '../utils/questionnaireData';

type AuthMode = 'login' | 'register';

export function Auth() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, register, user } = useAuth();
  const [mode, setMode] = useState<AuthMode>('register');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [plan, setPlan] = useState<UserPlan>('free');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const redirectTarget = useMemo(() => {
    const state = location.state as { from?: string; mode?: AuthMode } | null;
    return state?.from || '/profile';
  }, [location.state]);

  useEffect(() => {
    const state = location.state as { from?: string; mode?: AuthMode } | null;
    if (state?.mode) {
      setMode(state.mode);
    }
  }, [location.state]);

  useEffect(() => {
    if (user) {
      navigate('/profile', { replace: true });
    }
  }, [navigate, user]);

  const handleSubmit = async () => {
    setError('');
    setSubmitting(true);

    try {
      if (mode === 'login') {
        await login(email, password);
        await syncGuestDataToAccount();
        navigate(redirectTarget, { replace: true });
      } else {
        await register({ name, email, password, plan });
        await syncGuestDataToAccount();
        navigate(redirectTarget, { replace: true });
      }
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Не удалось выполнить запрос.');
    } finally {
      setSubmitting(false);
    }
  };

  const isValid =
    mode === 'login'
      ? email.trim().length > 3 && password.trim().length >= 6
      : name.trim().length > 1 && email.trim().length > 3 && password.trim().length >= 6;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(2,177,204,0.18),_transparent_32%),linear-gradient(135deg,_#fff7f2_0%,_#ffffff_45%,_#eefafc_100%)] px-4 py-24">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="rounded-[36px] bg-[#1f1f1f] p-8 text-white md:p-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 font-['DM_Sans'] text-[14px] uppercase tracking-[0.2em] text-white/60">Vitacode Account</p>
          <h1 className="mb-4 max-w-[520px] font-['DM_Sans'] text-[40px] font-bold leading-[1.05]">
            Регистрация открывает персональный кабинет и историю анализа в базе.
          </h1>
          <p className="max-w-[520px] font-['DM_Sans'] text-[17px] leading-[1.6] text-white/72">
            После входа данные анкеты, добавки и результаты анализа сохраняются за конкретным пользователем. Бесплатный
            и платный тарифы получают разные версии кабинета и аналитики.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-[24px] bg-white/8 p-5">
              <p className="mb-2 font-['DM_Sans'] text-[18px] font-semibold">Бесплатный</p>
              <p className="font-['DM_Sans'] text-[14px] leading-[1.6] text-white/68">
                Базовый профиль, 3 анализа, ключевые рекомендации и обзор рисков.
              </p>
            </div>
            <div className="rounded-[24px] bg-[#02b1cc] p-5">
              <p className="mb-2 font-['DM_Sans'] text-[18px] font-semibold text-white">Premium</p>
              <p className="font-['DM_Sans'] text-[14px] leading-[1.6] text-white/88">
                Полная аналитика, история, расписание приема, блок взаимодействий и приоритеты по целям.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="rounded-[36px] border border-black/5 bg-white p-8 shadow-[0_24px_80px_rgba(31,31,31,0.08)] md:p-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <div className="mb-8 flex rounded-full bg-[#f2f5f5] p-1">
            <button
              className={`flex-1 rounded-full px-4 py-3 font-['DM_Sans'] text-[15px] font-medium transition-colors ${
                mode === 'register' ? 'bg-[#1f1f1f] text-white' : 'text-[#1f1f1f]/65'
              }`}
              onClick={() => setMode('register')}
              type="button"
            >
              Регистрация
            </button>
            <button
              className={`flex-1 rounded-full px-4 py-3 font-['DM_Sans'] text-[15px] font-medium transition-colors ${
                mode === 'login' ? 'bg-[#1f1f1f] text-white' : 'text-[#1f1f1f]/65'
              }`}
              onClick={() => setMode('login')}
              type="button"
            >
              Вход
            </button>
          </div>

          <div className="space-y-4">
            {mode === 'register' && (
              <label className="block">
                <span className="mb-2 block font-['DM_Sans'] text-[14px] font-medium text-[#1f1f1f]">Имя</span>
                <input
                  className="w-full rounded-[20px] border border-black/8 bg-[#f8fbfb] px-5 py-4 font-['DM_Sans'] text-[15px] outline-none transition focus:border-[#02b1cc]"
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Как к вам обращаться"
                  value={name}
                />
              </label>
            )}

            <label className="block">
              <span className="mb-2 block font-['DM_Sans'] text-[14px] font-medium text-[#1f1f1f]">Email</span>
              <input
                className="w-full rounded-[20px] border border-black/8 bg-[#f8fbfb] px-5 py-4 font-['DM_Sans'] text-[15px] outline-none transition focus:border-[#02b1cc]"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                type="email"
                value={email}
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-['DM_Sans'] text-[14px] font-medium text-[#1f1f1f]">Пароль</span>
              <input
                className="w-full rounded-[20px] border border-black/8 bg-[#f8fbfb] px-5 py-4 font-['DM_Sans'] text-[15px] outline-none transition focus:border-[#02b1cc]"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Минимум 6 символов"
                type="password"
                value={password}
              />
            </label>

            {mode === 'register' && (
              <div>
                <p className="mb-3 font-['DM_Sans'] text-[14px] font-medium text-[#1f1f1f]">Тариф кабинета</p>
                <div className="grid gap-3 md:grid-cols-2">
                  {([
                    {
                      id: 'free',
                      title: 'Free',
                      text: 'Подходит для первого знакомства и базовых проверок.',
                    },
                    {
                      id: 'premium',
                      title: 'Premium',
                      text: 'Открывает расширенную версию кабинета и анализа.',
                    },
                  ] as Array<{ id: UserPlan; title: string; text: string }>).map((item) => (
                    <button
                      key={item.id}
                      className={`rounded-[24px] border p-4 text-left transition ${
                        plan === item.id
                          ? item.id === 'premium'
                            ? 'border-[#02b1cc] bg-[#ecfbfd]'
                            : 'border-[#ff6647] bg-[#fff5f2]'
                          : 'border-black/8 bg-white'
                      }`}
                      onClick={() => setPlan(item.id)}
                      type="button"
                    >
                      <p className="font-['DM_Sans'] text-[16px] font-semibold text-[#1f1f1f]">{item.title}</p>
                      <p className="mt-2 font-['DM_Sans'] text-[13px] leading-[1.5] text-[#1f1f1f]/65">{item.text}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {error && <p className="rounded-[18px] bg-[#fff3ef] px-4 py-3 font-['DM_Sans'] text-[14px] text-[#d14a2d]">{error}</p>}

            <button
              className="w-full rounded-full bg-[#ff6647] px-6 py-4 font-['DM_Sans'] text-[16px] font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!isValid || submitting}
              onClick={handleSubmit}
              type="button"
            >
              {submitting ? 'Сохраняем...' : mode === 'login' ? 'Войти в кабинет' : 'Создать аккаунт'}
            </button>
          </div>

          <p className="mt-6 font-['DM_Sans'] text-[13px] leading-[1.6] text-[#1f1f1f]/60">
            Продолжая, вы соглашаетесь на хранение данных в локальной базе браузера для персонализации кабинета и анализа.
          </p>
          <Link className="mt-6 inline-block font-['DM_Sans'] text-[14px] font-medium text-[#02b1cc]" to="/">
            Вернуться на главную
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
