import { motion } from 'motion/react';
import imgImage40 from 'figma:asset/f4d91bef9eb5781dbc2a619d438775373844082b.png';
import { SubtractShape } from './SubtractShape';

function scrollToQuestionnaire() {
  const questionnaireSection = document.querySelector<HTMLElement>('[data-name="Анкета"]');
  if (!questionnaireSection) {
    window.location.assign('/questionnaire/step1');
    return;
  }

  const top = questionnaireSection.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-24" id="home">
      <div className="absolute left-[3.13%] top-[96.82px] h-[1418px] w-[93.75%]">
        <SubtractShape />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid items-start gap-8 pt-12 md:grid-cols-2 md:gap-12 md:pt-20">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="max-w-[682px] text-white"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="mb-6 text-[40px] font-bold leading-[54.66px] md:text-[50px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Здоровье не должно
              <br />
              превращаться
              <br />
              в источник стресса
            </h1>
            <p className="mb-12 text-[16px] font-normal leading-[20px] opacity-95" style={{ fontVariationSettings: "'opsz' 14" }}>
              Сложная запись, непонятные результаты
              <br />
              и постоянная тревога мешают заботиться о себе
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                className="btn-cyan whitespace-nowrap rounded-[44.508px] px-[18.74px] py-[9.37px] text-[12.493px] font-medium leading-[21.864px] text-white"
                onClick={scrollToQuestionnaire}
                style={{ fontVariationSettings: "'opsz' 14" }}
                transition={{ duration: 0.18 }}
                whileHover={{ scale: 1.04, y: -3, boxShadow: '0 18px 36px rgba(1, 196, 226, 0.35)' }}
                whileTap={{ scale: 0.98, y: 0 }}
              >
                Попробовать
              </motion.button>

              <motion.button
                className="relative whitespace-nowrap rounded-[44.508px] px-[18.74px] py-[9.37px] text-[12.493px] font-medium leading-[21.864px] text-white"
                onClick={scrollToQuestionnaire}
                style={{ fontVariationSettings: "'opsz' 14" }}
                transition={{ duration: 0.18 }}
                whileHover={{ scale: 1.04, y: -3, backgroundColor: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.98, y: 0 }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-[44.508px] border-[1.562px] border-solid border-white" />
                Зарегистрироваться
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="relative mt-8 h-[406px] w-full md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img alt="Supplement capsule" className="pointer-events-none absolute inset-0 h-full w-full object-cover" src={imgImage40} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
