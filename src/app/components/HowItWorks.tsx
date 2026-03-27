import { motion } from 'motion/react';

const steps = [
  {
    number: 1,
    title: 'Заполните короткую анкету',
    description: 'Указываете добавки, дозировки\nи частоту приёма, что занимает\nвсего несколько минут'
  },
  {
    number: 2,
    title: 'Автоматический анализ',
    description: 'Сервис проверяет дубли, превышения норм\nи возможные конфликты веществ'
  },
  {
    number: 3,
    title: 'Понятные рекомендации',
    description: 'Отчёт показывает, что безопасно,\nчто стоит пересмотреть\nи как упростить схему приёма'
  }
];

export function HowItWorks() {
  return (
    <section className="bg-white py-16 md:py-24" id="how-it-works">
      <div className="container mx-auto px-4 md:px-8 lg:px-10">
        <motion.h2
          className="font-['DM_Sans'] font-bold text-[40px] md:text-[50px] leading-[1.1] text-[#1F1F1F] mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          Как это работает?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-[#F5F5F5] rounded-[40px] p-8 md:p-10 h-full">
                <motion.div 
                  className="mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative w-[68.7px] h-[68.7px]">
                    <svg className="w-full h-full" viewBox="0 0 69 69" fill="none">
                      <circle cx="34.36" cy="34.36" r="33.58" stroke="#02B1CC" strokeWidth="1.56" />
                      <circle cx="34.36" cy="34.36" r="22.64" fill="#02B1CC" />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center font-['DM_Sans'] font-bold text-white text-[24px]">
                      {step.number}
                    </span>
                  </div>
                </motion.div>
                <h3 className="font-['DM_Sans'] font-medium text-[24px] leading-[28px] text-[#1F1F1F] mb-3">
                  {step.title}
                </h3>
                <p className="font-['DM_Sans'] text-[16px] leading-[20px] text-[#1F1F1F] whitespace-pre-line">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}