import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SplineBackground = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Delay loading of Spline to improve initial page load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // Wait for 1 second after component mount

    return () => {
      clearTimeout(timer);
      setIsMounted(false);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <iframe 
              src="https://my.spline.design/rocket-07177cc99841504934e7c640f257a32e"
              className="w-full h-full scale-[1.25] translate-y-[-10%] translate-x-[2%] md:scale-150 lg:scale-[1.75]"
              style={{ 
                border: 'none',
                background: 'transparent',
                pointerEvents: 'none',
                position: 'relative',
                zIndex: -1,
                overflow: 'hidden',
                clipPath: 'inset(0 0 60px 0)',
                transform: 'translate3d(2%, -10%, 0) scale(1.25)',
              }}
              title="Rocket 3D Animation"
              loading="lazy"
              allow="autoplay"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};