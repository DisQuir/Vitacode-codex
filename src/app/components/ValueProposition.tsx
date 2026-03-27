import { motion } from 'motion/react';
import imgImage36 from "figma:asset/81f59418d37bc16e388e157fcf36b227993b893e.png";
import imgUnion from "figma:asset/8c077e286a718e7c67c9eba6aaa3d58737e6fc79.png";
import imgImage41 from "figma:asset/05a9ef2919b53b7472a64f77927a21d4d4e1ed4b.png";
import { AnimatedButton } from './AnimatedButton';

const features = [
  {
    title: 'Безопасность под контролем',
    description: 'Проверяем дубли, превышения дозировок и потенциальные конфликты веществ, чтобы снизить риски для здоровья'
  },
  {
    title: 'Экономия денег',
    description: 'Помогаем увидеть лишние\nили дублирующие добавки,\nчтобы вы не тратили средства впустую'
  },
  {
    title: 'Осознанный подход\nк приёму добавок',
    description: ''
  }
];

export function ValueProposition() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-10">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['DM_Sans'] font-bold text-[40px] md:text-[50px] leading-[1.1] text-[#1F1F1F] mb-6">
            Витакод — проверь свои БАДы<br />и принимай их осознанно
          </h2>
          <p className="font-['DM_Sans'] text-[16px] leading-[20px] text-[#1F1F1F]">
            Сервис помогает увидеть полную картину:<br className="hidden md:block" />
            что работает, что лишнее и где есть риски —<br className="hidden md:block" />
            без сложных терминов и навязывания новых покупок
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 - with pills image */}
          <motion.div
            className="bg-[#F5F5F5] rounded-[55px] p-8 md:p-10 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative z-10">
              <h3 className="font-['DM_Sans'] font-medium text-[24px] leading-[28px] text-[#1F1F1F] mb-3">
                {features[0].title}
              </h3>
              <p className="font-['DM_Sans'] text-[16px] leading-[20px] text-[#1F1F1F] mb-6">
                {features[0].description}
              </p>
            </div>
            <div className="mt-auto">
              <img src={imgUnion} alt="" className="w-full h-auto" />
            </div>
          </motion.div>

          {/* Feature 2 - with capsule */}
          <motion.div
            className="bg-[#FF6647] rounded-[55px] p-8 md:p-10 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(255, 102, 71, 0.3)' }}
          >
            <div className="relative z-10">
              <h3 className="font-['DM_Sans'] font-medium text-[24px] leading-[28px] text-white mb-3">
                {features[1].title}
              </h3>
              <p className="font-['DM_Sans'] text-[16px] leading-[20px] text-white whitespace-pre-line">
                {features[1].description}
              </p>
            </div>
            <motion.div 
              className="mt-6 opacity-50 mix-blend-soft-light"
              animate={{
                rotate: [0, 5, 0, -5, 0],
                y: [0, -5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <img src={imgImage36} alt="" className="w-4/5 h-auto mx-auto" />
            </motion.div>
          </motion.div>

          {/* Feature 3 - with report screenshot */}
          <motion.div
            className="bg-[#F5F5F5] rounded-[55px] overflow-hidden relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="p-8 md:p-10">
              <h3 className="font-['DM_Sans'] font-medium text-[24px] leading-[28px] text-[#1F1F1F] mb-3 whitespace-pre-line">
                {features[2].title}
              </h3>
              <p className="font-['DM_Sans'] text-[16px] leading-[20px] text-[#1F1F1F] mb-3">
                Вы получаете чёткие выводы<br />
                и рекомендации, простые для чтения
              </p>
            </div>
            <div className="mt-auto">
              <img src={imgImage41} alt="" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 md:mt-12 flex flex-col md:flex-row gap-6 items-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div
            className="bg-[#F5F5F5] rounded-[55px] p-6 md:p-8 flex items-center gap-6 md:gap-8"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="font-['DM_Sans'] font-medium text-[24px] leading-[28px] text-[#1F1F1F] whitespace-nowrap">
              Понятный отчёт<br />без сложных терминов
            </h3>
            <motion.div
              className="btn-cyan rounded-full px-6 py-3 flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              <span className="text-white font-['DM_Sans'] font-medium text-[16px]">→</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white rounded-[55px] border border-[#F5F5F5] p-6 md:p-8 flex items-center justify-center"
            whileHover={{ borderColor: '#02B1CC' }}
          >
            <AnimatedButton variant="primary">
              Как это работает?
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}