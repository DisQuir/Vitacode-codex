import { motion } from 'motion/react';

export function LandingInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed top-4 right-4 z-[100] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-gray-200 text-sm"
    >
      <p className="font-semibold text-[#1F1F1F] mb-1">✨ Pixel-Perfect Figma Design</p>
      <ul className="text-xs text-gray-600 space-y-1">
        <li>🎨 Цвета: #FF6647, #01C4E2, #1F1F1F</li>
        <li>📱 Адаптивный дизайн</li>
        <li>✨ Hover анимации</li>
        <li>🔤 Шрифт: DM Sans</li>
      </ul>
    </motion.div>
  );
}
