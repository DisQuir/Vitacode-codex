import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Landing from '../../imports/Landing-16-223';
import { EnhancedLanding } from './EnhancedLanding';

export function ResponsiveLanding() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const designWidth = 1499;
      const windowWidth = window.innerWidth;
      
      // Calculate scale to fit the design
      // Minimum scale of 0.3 for very small screens
      if (windowWidth < designWidth) {
        const newScale = Math.max(0.3, windowWidth / designWidth);
        setScale(newScale);
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full bg-white overflow-x-hidden">
      <EnhancedLanding />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full flex justify-center"
        style={{
          transformOrigin: 'top center',
        }}
      >
        <div 
          className="relative"
          style={{
            width: `${1499 * scale}px`,
            height: `${5295 * scale}px`,
          }}
        >
          <div
            style={{
              width: '1499px',
              height: '5495px',
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
          >
            <Landing />
          </div>
        </div>
      </motion.div>
    </div>
  );
}