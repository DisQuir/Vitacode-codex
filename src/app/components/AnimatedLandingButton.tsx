import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface AnimatedLandingButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'white';
  onClick?: () => void;
  className?: string;
}

export function AnimatedLandingButton({ 
  children, 
  variant = 'primary',
  onClick,
  className = ''
}: AnimatedLandingButtonProps) {
  const baseStyles = "relative cursor-pointer rounded-[44.508px] font-['DM_Sans:Medium','Noto_Sans:Medium',sans-serif] font-medium";
  
  const variantStyles = {
    primary: 'btn-cyan text-white',
    secondary: 'border-[1.562px] border-solid border-white text-white hover:bg-white/10',
    white: 'bg-white text-[#fd6546] hover:bg-[#f5f5f5]'
  };

  return (
    <motion.div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
}