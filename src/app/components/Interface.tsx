import { motion } from 'motion/react';
import { AnimatedButton } from './AnimatedButton';
import imgImage38 from "figma:asset/5866addb87e97a1692901ebcb06792fd250ac33e.png";

export function Interface() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-['DM_Sans'] font-bold text-[40px] md:text-[50px] leading-[1.1] text-[#1F1F1F] mb-6">
              Подробный<br />
              анализ добавок —<br />
              все на одном экране
            </h2>
            <p className="font-['DM_Sans'] text-[16px] leading-[20px] text-[#1F1F1F] mb-8">
              Сервис расскажет о том, какие добавки можно заменить,<br className="hidden md:block" />
              какие убрать, а какие добавить, чтобы принимать<br className="hidden md:block" />
              их правильно и максимально эффективно
            </p>
            <AnimatedButton variant="primary">
              Получить разбор
            </AnimatedButton>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={imgImage38} alt="Interface preview" className="w-full h-auto" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
