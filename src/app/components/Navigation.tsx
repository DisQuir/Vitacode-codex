import { motion } from 'motion/react';
import { Link } from 'react-router';
import { AnimatedButton } from './AnimatedButton';
import { useAuth } from '../context/AuthContext';

const TILDA_LANDING_URL = 'https://vitacode.tilda.ws/';

export function Navigation() {
  const { user, logout } = useAuth();

  return (
    <motion.nav
      animate={{ y: 0 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-black/6 bg-white/72 backdrop-blur-md"
      initial={{ y: -100 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-10">
        <div className="flex h-[75px] items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <a className="flex items-center gap-2" href={TILDA_LANDING_URL}>
              <div className="relative h-[22px] w-[22px] overflow-hidden rounded-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-[21.5px] w-[9px] rotate-[33deg] rounded-[25px] bg-[#02B1CC]" />
                </div>
                <svg className="absolute inset-[8.33%]" fill="none" height="16" viewBox="0 0 21 21" width="16">
                  <path
                    d="M19.3584 10.2486H17.0992C16.701 10.2477 16.3136 10.3773 15.9961 10.6175C15.6786 10.8577 15.4485 11.1953 15.341 11.5786L13.2002 19.1944C13.1864 19.2417 13.1576 19.2833 13.1182 19.3129C13.0787 19.3424 13.0308 19.3584 12.9815 19.3584C12.9322 19.3584 12.8843 19.3424 12.8449 19.3129C12.8055 19.2833 12.7767 19.2417 12.7629 19.1944L7.73425 1.30271C7.72046 1.2554 7.69169 1.21385 7.65226 1.18428C7.61284 1.15471 7.56489 1.13873 7.51562 1.13873C7.46634 1.13873 7.41839 1.15471 7.37897 1.18428C7.33955 1.21385 7.31078 1.2554 7.29698 1.30271L5.15617 8.91853C5.0491 9.30037 4.82036 9.63686 4.50469 9.8769C4.18902 10.1169 3.80365 10.2474 3.40708 10.2486H1.13873"
                    stroke="#FF6647"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.28"
                  />
                </svg>
              </div>
              <span className="text-[18.7px] font-semibold text-[#1F1F1F]">Vitacode</span>
            </a>

            <div className="hidden items-center gap-6 text-[12.5px] font-medium text-[#1F1F1F] md:flex">
              <a className="transition-colors hover:text-[#02B1CC]" href={TILDA_LANDING_URL}>
                Главная
              </a>
              <Link className="transition-colors hover:text-[#02B1CC]" to="/blog">
                Блог
              </Link>
              <Link className="transition-colors hover:text-[#02B1CC]" to="/analysis">
                Анализ
              </Link>
              <a className="transition-colors hover:text-[#02B1CC]" href={TILDA_LANDING_URL}>
                На лендинг
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <>
                <Link className="hidden text-[13px] font-medium text-[#1F1F1F] md:block" to="/profile">
                  {user.name}
                </Link>
                <button
                  className="hidden rounded-full border border-black/10 px-4 py-2 text-[13px] font-medium text-[#1F1F1F] transition hover:border-[#02B1CC] md:block"
                  onClick={logout}
                  type="button"
                >
                  Выйти
                </button>
                <Link to="/profile">
                  <motion.div
                    className="btn-cyan flex h-[37.5px] w-[37.5px] cursor-pointer items-center justify-center rounded-full"
                    whileHover={{ rotate: 10, scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                  >
                    <svg fill="none" height="19" viewBox="0 0 19 19" width="19">
                      <path
                        d="M14.8361 16.3978V14.8361C14.8361 14.0077 14.507 13.2133 13.9213 12.6275C13.3355 12.0418 12.5411 11.7127 11.7127 11.7127H7.02765C6.19928 11.7127 5.40484 12.0418 4.81909 12.6275C4.23334 13.2133 3.90428 14.0077 3.90428 14.8361V16.3978"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.56"
                      />
                      <path
                        d="M9.37018 8.58932C11.0952 8.58932 12.4936 7.19094 12.4936 5.46594C12.4936 3.74095 11.0952 2.34257 9.37018 2.34257C7.64519 2.34257 6.24681 3.74095 6.24681 5.46594C6.24681 7.19094 7.64519 8.58932 9.37018 8.58932Z"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.56"
                      />
                    </svg>
                  </motion.div>
                </Link>
              </>
            ) : (
              <Link to="/auth">
                <AnimatedButton variant="primary">Войти</AnimatedButton>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
