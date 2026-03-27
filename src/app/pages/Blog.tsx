import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const blogPosts = [
  {
    id: 1,
    title: 'Витамин D: Полное руководство',
    excerpt: 'Все что нужно знать о витамине D: дозировки, время приема, совместимость с другими добавками.',
    date: '15 марта 2026',
    category: 'Витамины',
    readTime: '5 мин',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80'
  },
  {
    id: 2,
    title: 'Омега-3: Как выбрать качественную добавку',
    excerpt: 'Разбираемся в формах EPA и DHA, дозировках и производителях омега-3 жирных кислот.',
    date: '14 марта 2026',
    category: 'Добавки',
    readTime: '7 мин',
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80'
  },
  {
    id: 3,
    title: 'Магний: 7 признаков дефицита',
    excerpt: 'Узнайте основные симптомы нехватки магния и как правильно восполнить его запасы.',
    date: '13 марта 2026',
    category: 'Здоровье',
    readTime: '4 мин',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&q=80'
  },
  {
    id: 4,
    title: 'Пробиотики и пребиотики: В чем разница',
    excerpt: 'Подробный разбор различий между про- и пребиотиками и их влияния на здоровье кишечника.',
    date: '12 марта 2026',
    category: 'Пищеварение',
    readTime: '6 мин',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80'
  },
  {
    id: 5,
    title: 'Коллаген: Мифы и реальность',
    excerpt: 'Научный подход к вопросу эффективности коллагена для кожи, волос и суставов.',
    date: '11 марта 2026',
    category: 'Красота',
    readTime: '8 мин',
    image: 'https://images.unsplash.com/photo-1556228841-e0d6c26d4de0?w=800&q=80'
  },
  {
    id: 6,
    title: 'Железо: Правила приема и усвоения',
    excerpt: 'Как правильно принимать железо, что помогает и что мешает его усвоению.',
    date: '10 марта 2026',
    category: 'Витамины',
    readTime: '5 мин',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80'
  }
];

const categories = ['Все', 'Витамины', 'Добавки', 'Здоровье', 'Пищеварение', 'Красота'];

export function Blog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FF6647] to-[#ff8469] py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-['DM_Sans'] font-bold text-[48px] md:text-[64px] leading-[1.1] text-white mb-6">
              Блог о здоровье и БАДах
            </h1>
            <p className="font-['DM_Sans'] text-[18px] md:text-[20px] leading-[1.5] text-white/90">
              Научные статьи, практические советы и актуальные исследования о биологически активных добавках
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 md:px-8 lg:px-10 py-6">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className="goal-tag bg-[#F5F5F5] rounded-full px-6 py-2.5 font-['DM_Sans'] font-medium text-[14px] text-[#1F1F1F] whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="relative h-[240px] overflow-hidden">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-[#FF6647] px-4 py-2 rounded-full font-['DM_Sans'] font-medium text-[12px]">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3 text-[#1F1F1F]/60">
                        <span className="font-['DM_Sans'] text-[13px]">{post.date}</span>
                        <span>•</span>
                        <span className="font-['DM_Sans'] text-[13px]">{post.readTime}</span>
                      </div>
                      <h3 className="font-['DM_Sans'] font-bold text-[22px] leading-[1.3] text-[#1F1F1F] mb-3 group-hover:text-[#FF6647] transition-colors">
                        {post.title}
                      </h3>
                      <p className="font-['DM_Sans'] text-[15px] leading-[1.6] text-[#1F1F1F]/70">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#F5F5F5] py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-10">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-['DM_Sans'] font-bold text-[36px] md:text-[44px] leading-[1.2] text-[#1F1F1F] mb-4">
              Подпишитесь на рассылку
            </h2>
            <p className="font-['DM_Sans'] text-[16px] leading-[1.6] text-[#1F1F1F]/70 mb-8">
              Получайте новые статьи и эксклюзивные материалы первыми
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 bg-white rounded-full px-6 py-4 font-['DM_Sans'] text-[15px] text-[#1F1F1F] placeholder:text-[#1F1F1F]/40 outline-none focus:ring-2 focus:ring-[#01C4E2]"
              />
              <motion.button
                className="btn-cyan px-8 py-4 rounded-full text-white font-['DM_Sans'] font-medium text-[15px] whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Подписаться
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
