import { motion } from 'motion/react';
import { AnimatedButton } from './AnimatedButton';

const plans = [
  {
    name: 'Бесплатно',
    price: '0 ₽',
    oldPrice: '199 ₽',
    description: 'Тестовый анализ\nпринимаемых добавок',
    highlighted: true
  },
  {
    name: 'Минимум',
    price: '599 ₽',
    description: 'Пакет на 3 анализа\nпринимаемых добавок',
    highlighted: false
  },
  {
    name: '10 анализов',
    price: '1 699 ₽',
    description: 'Пакет на 10 анализов\nпринимаемых добавок',
    highlighted: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-10">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['DM_Sans'] font-bold text-[40px] md:text-[50px] leading-[1.1] text-[#1F1F1F] mb-4">
            Тарифы
          </h2>
          <p className="font-['DM_Sans'] text-[16px] leading-[20px] text-[#1F1F1F]">
            Выберите подходящий план
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`bg-[#F5F5F5] rounded-[25px] p-8 relative transition-all duration-300 ${
                plan.highlighted ? 'border-[1.56px] border-[#FF6647]' : ''
              }`}
              style={plan.highlighted ? { boxShadow: '0 4px 14px rgba(255, 102, 71, 0.2)' } : {}}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: plan.highlighted 
                  ? '0 20px 40px rgba(255, 102, 71, 0.3)' 
                  : '0 10px 30px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3 }
              }}
            >
              {plan.highlighted && (
                <motion.div
                  className="absolute -top-3 -right-3 bg-[#FF6647] text-white px-4 py-1 rounded-full font-['DM_Sans'] font-medium text-[10px]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: 'spring' }}
                >
                  ПОПУЛЯРНЫЙ
                </motion.div>
              )}
              <div className="mb-4">
                {plan.oldPrice ? (
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-['Inter'] font-medium text-[42.88px] leading-[47.6px] text-[#1F1F1F]">
                      {plan.price}
                    </span>
                    <span className="font-['DM_Sans'] font-semibold text-[23.8px] leading-[33.4px] text-[rgba(31,31,31,0.5)] line-through">
                      {plan.oldPrice}
                    </span>
                  </div>
                ) : (
                  <span className="font-['Inter'] font-medium text-[42.88px] leading-[47.6px] text-[#1F1F1F] block mb-2">
                    {plan.price}
                  </span>
                )}
              </div>
              <h3 className="font-['DM_Sans'] font-medium text-[24px] leading-[28px] text-[#1F1F1F] mb-2">
                {plan.name}
              </h3>
              <p className="font-['DM_Sans'] text-[16px] leading-[20px] text-[#1F1F1F] whitespace-pre-line">
                {plan.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatedButton variant="primary">
            Начать
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
}