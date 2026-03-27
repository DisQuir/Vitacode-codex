import { motion } from 'motion/react';
import { Link } from 'react-router';

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF6647] to-[#ff8469] flex items-center justify-center px-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-white text-[120px] md:text-[180px] font-['DM_Sans'] font-bold leading-none mb-4"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          404
        </motion.div>
        <h1 className="font-['DM_Sans'] font-bold text-[32px] md:text-[44px] text-white mb-4">
          Страница не найдена
        </h1>
        <p className="font-['DM_Sans'] text-[18px] text-white/90 mb-8 max-w-md mx-auto">
          Кажется, вы попали на несуществующую страницу. Давайте вернемся на главную!
        </p>
        <Link to="/">
          <motion.button
            className="bg-white text-[#FF6647] px-8 py-4 rounded-full font-['DM_Sans'] font-bold text-[16px] shadow-xl"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            На главную
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
