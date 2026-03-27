import { motion } from 'motion/react';
import svgPaths from "../../imports/svg-p2jajmkv1k";

export function Footer() {
  return (
    <footer className="bg-[#F5F5F5] py-16 md:py-20 relative overflow-hidden">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 right-0 h-[252px] -scale-y-100 opacity-30">
        {/* SVG removed */}
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-10 relative z-10">
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-[45.67px] h-[45.67px] rounded-full overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[18.81px] h-[44.86px] bg-[#02B1CC] rounded-[25px] rotate-[33deg]" />
            </div>
            <svg className="absolute inset-[8.33%]" width="38" height="38" viewBox="0 0 43 43" fill="none">
              <path d={svgPaths.p106f0200} stroke="#FF6647" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.76" />
            </svg>
          </div>
          <span className="font-semibold text-[39.15px] leading-[52.2px] text-[#1F1F1F]">Витакод</span>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h3 className="font-['DM_Sans'] font-semibold text-[16px] text-[#1F1F1F] mb-4">О сервисе</h3>
            <ul className="space-y-2 font-['DM_Sans'] text-[14px] text-[#1F1F1F]/70">
              <li><a href="#" className="hover:text-[#02B1CC] transition-colors">Как это работает</a></li>
              <li><a href="#" className="hover:text-[#02B1CC] transition-colors">Преимущества</a></li>
              <li><a href="#" className="hover:text-[#02B1CC] transition-colors">О нас</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-['DM_Sans'] font-semibold text-[16px] text-[#1F1F1F] mb-4">Поддержка</h3>
            <ul className="space-y-2 font-['DM_Sans'] text-[14px] text-[#1F1F1F]/70">
              <li><a href="#" className="hover:text-[#02B1CC] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#02B1CC] transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-[#02B1CC] transition-colors">Помощь</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-['DM_Sans'] font-semibold text-[16px] text-[#1F1F1F] mb-4">Юридическое</h3>
            <ul className="space-y-2 font-['DM_Sans'] text-[14px] text-[#1F1F1F]/70">
              <li><a href="#" className="hover:text-[#02B1CC] transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-[#02B1CC] transition-colors">Условия использования</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-['DM_Sans'] font-semibold text-[16px] text-[#1F1F1F] mb-4">Соцсети</h3>
            <div className="flex gap-4">
              {['VK', 'TG', 'IG'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-['DM_Sans'] font-medium text-[12px] text-[#1F1F1F]"
                  whileHover={{ scale: 1.1, backgroundColor: '#02B1CC', color: '#fff' }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 pt-8 border-t border-[#1F1F1F]/10 text-center font-['DM_Sans'] text-[14px] text-[#1F1F1F]/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          © 2026 Витакод. Все права защищены.
        </motion.div>
      </div>
    </footer>
  );
}