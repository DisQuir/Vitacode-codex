import { motion } from 'motion/react';
import { AnimatedButton } from './AnimatedButton';
import imgImage39 from "figma:asset/201660d43c8682904e4680ff0e931ff9077c00c5.png";

const goals = [
  'Общее здоровье',
  'Иммунитет',
  'Энергия',
  'Сон',
  'Кожа и волосы',
  'Пищеварение',
  'Спорт'
];

export function Questionnaire() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-10">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['DM_Sans'] font-bold text-[40px] md:text-[50px] leading-[1.1] text-[#1F1F1F] mb-4">
            Начни уже сейчас
          </h2>
          <p className="font-['DM_Sans'] text-[16px] leading-[20px] text-[#1F1F1F]">
            Ответь на пару вопросов и получи разбор
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="bg-[#F5F5F5] rounded-[40px] p-8 md:p-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Supplement input */}
            <div className="mb-6">
              <label className="font-['DM_Sans'] font-semibold text-[15.6px] text-[#1F1F1F] block mb-2">
                Добавьте препараты
              </label>
              <div className="bg-white rounded-[46.85px] p-4 flex items-center gap-3">
                <svg className="w-4 h-4 opacity-40" viewBox="0 0 16 16" fill="none">
                  <circle cx="7.16" cy="7.16" r="5.21" stroke="#1F1F1F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.665 13.665L10.867 10.867" stroke="#1F1F1F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Начните вводить название БАДа..."
                  className="flex-1 bg-transparent font-['DM_Sans'] text-[12.5px] text-[#1F1F1F] placeholder:text-[rgba(31,31,31,0.5)] outline-none"
                />
                <motion.button
                  className="bg-[#FF6647] text-white px-4 py-2 rounded-full font-['DM_Sans'] font-medium text-[12.5px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Добавить
                </motion.button>
              </div>
            </div>

            {/* Additional info */}
            <div className="mb-6">
              <h3 className="font-['DM_Sans'] font-semibold text-[15.6px] text-[#1F1F1F] mb-1">
                Дополнительная информация
              </h3>
              <p className="font-['DM_Sans'] text-[10.9px] text-[#1F1F1F] opacity-60 mb-3">
                Опционально — поможет сделать анализ более точным
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="font-['DM_Sans'] font-medium text-[10.9px] text-[#1F1F1F] opacity-60 block mb-2">
                    Имя
                  </label>
                  <input 
                    type="text" 
                    placeholder="Введите ваше имя"
                    className="w-full bg-white rounded-[43.7px] px-4 py-2.5 font-['DM_Sans'] text-[12.5px] text-[#1F1F1F] placeholder:text-[rgba(31,31,31,0.5)] outline-none"
                  />
                </div>
                <div>
                  <label className="font-['DM_Sans'] font-medium text-[10.9px] text-[#1F1F1F] opacity-60 block mb-2">
                    Почта
                  </label>
                  <input 
                    type="email" 
                    placeholder="Введите ваш email"
                    className="w-full bg-white rounded-[43.7px] px-4 py-2.5 font-['DM_Sans'] text-[12.5px] text-[#1F1F1F] placeholder:text-[rgba(31,31,31,0.5)] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-['DM_Sans'] font-medium text-[10.9px] text-[#1F1F1F] opacity-60 block mb-2">
                  Цели приема
                </label>
                <div className="flex flex-wrap gap-2">
                  {goals.map((goal, index) => (
                    <motion.button
                      key={goal}
                      className="goal-tag bg-white rounded-full px-4 py-2 font-['DM_Sans'] font-medium text-[10.9px] text-[#1F1F1F]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      {goal}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <AnimatedButton variant="primary">
                Рассчитать
              </AnimatedButton>
            </div>
          </motion.div>

          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={imgImage39} alt="" className="w-full h-auto rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}