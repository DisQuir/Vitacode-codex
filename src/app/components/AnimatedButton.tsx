import { motion } from 'motion/react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
}

export function AnimatedButton({ children, variant = 'primary', onClick, className = '' }: AnimatedButtonProps) {
  const baseStyles = "px-5 py-2.5 rounded-[44.5px] font-['DM_Sans'] font-medium text-[12.5px] leading-[21.9px] cursor-pointer";
  
  const variantStyles = {
    primary: 'btn-cyan text-white',
    secondary: 'bg-[#FF6647] text-white',
    outline: 'bg-transparent text-white border-[1.5px] border-white hover:bg-white hover:text-[#FF6647]'
  };

  const shadowStyles = {
    primary: {
      boxShadow: '0 4px 14px rgba(1, 196, 226, 0.3)'
    },
    secondary: {
      boxShadow: '0 4px 14px rgba(255, 102, 71, 0.3)'
    },
    outline: {}
  };

  const hoverShadows = {
    primary: '0 6px 20px rgba(1, 196, 226, 0.4)',
    secondary: '0 6px 20px rgba(255, 102, 71, 0.4)',
    outline: undefined
  };

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={shadowStyles[variant]}
      onClick={onClick}
      whileHover={{ 
        scale: 1.05,
        y: -2,
        boxShadow: hoverShadows[variant],
        transition: { duration: 0.2, ease: 'easeOut' }
      }}
      whileTap={{ 
        scale: 0.95,
        y: 0,
        transition: { duration: 0.1, ease: 'easeOut' }
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.button>
  );
}