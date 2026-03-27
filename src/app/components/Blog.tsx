import { motion } from 'motion/react';
import { AnimatedButton } from './AnimatedButton';

const blogPosts = [
  {
    id: 1,
    title: 'Как правильно подобрать витамины',
    category: 'Здоровье'
  },
  {
    id: 2,
    title: 'Топ-5 ошибок при приеме добавок',
    category: 'Советы'
  },
  {
    id: 3,
    title: 'Взаимодействие витаминов и минералов',
    category: 'Наука'
  }
];

export function Blog() {
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
            Блог
          </h2>
          <p className="font-['DM_Sans'] text-[16px] leading-[20px] text-[#1F1F1F]">
            Полезные статьи о здоровье и добавках
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-[#F5F5F5] rounded-[40px] overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="bg-[#FF6647] h-[331px] relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#FF6647] to-[#FF8A70]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-8 flex justify-end">
                <AnimatedButton variant="primary">
                  Читать
                </AnimatedButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
