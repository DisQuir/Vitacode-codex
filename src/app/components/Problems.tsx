import { motion } from 'motion/react';

export function Problems() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-10">
        <motion.div 
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['DM_Sans'] font-bold text-[40px] md:text-[50px] leading-[1.1] text-[#1F1F1F] mb-6">
            С какими проблемами<br />к нам приходят
          </h2>
          <p className="font-['DM_Sans'] text-[16px] leading-[20px] text-[#1F1F1F]">
            Сервис помогает увидеть полную картину: что работает, что лишнее<br className="hidden md:block" />
            и где есть риски — без сложных терминов и навязывания новых покупок
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            className="bg-[#F5F5F5] rounded-[40px] p-8 md:p-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="font-['DM_Sans'] font-medium text-[24px] leading-[28px] text-[#1F1F1F] mb-3">
              Отсутствие системности
            </h3>
            <p className="font-['DM_Sans'] text-[16px] leading-[20px] text-[#1F1F1F]">
              Принимают добавки без системного анализа, не считают суммарные дозировки и не проверяют дубли
            </p>
          </motion.div>

          <motion.div
            className="bg-[#F5F5F5] rounded-[40px] p-8 md:p-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="font-['DM_Sans'] font-medium text-[50px] leading-[54.7px] text-[#1F1F1F]">94%</div>
                <div className="font-['DM_Sans'] font-medium text-[24px] leading-[28px] text-[#1F1F1F]">людей</div>
              </div>
              <div className="flex gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((bar, index) => (
                  <motion.div
                    key={bar}
                    className="w-6 bg-[#02B1CC] rounded-full"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${(5 - index) * 40}px` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  />
                ))}
              </div>
            </div>
            <p className="font-['DM_Sans'] text-[16px] leading-[20px] text-[#1F1F1F]">
              Сталкиваются с противоречивой информацией и не решаются принимать добавки
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
