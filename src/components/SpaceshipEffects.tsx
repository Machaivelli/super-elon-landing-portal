import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

export const SpaceshipEffects = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating debris
    const createDebris = () => {
      const debris = document.createElement('div');
      debris.className = 'absolute w-2 h-2 bg-spaceship-metal/50 rounded-full breaking-apart';
      debris.style.setProperty('--translate-x', `${Math.random() * 200 - 100}px`);
      debris.style.setProperty('--translate-y', `${Math.random() * 200 - 100}px`);
      debris.style.setProperty('--rotate', `${Math.random() * 360}deg`);
      debris.style.left = `${Math.random() * 100}%`;
      debris.style.top = `${Math.random() * 100}%`;
      container.appendChild(debris);

      setTimeout(() => {
        debris.remove();
      }, 2000);
    };

    // Create warning lights
    const createWarningLight = () => {
      const light = document.createElement('div');
      light.className = 'warning-light';
      light.style.left = `${Math.random() * 100}%`;
      light.style.top = `${Math.random() * 100}%`;
      container.appendChild(light);

      setTimeout(() => {
        light.remove();
      }, 1000);
    };

    // Initialize animations
    const debrisInterval = setInterval(createDebris, 500);
    const warningInterval = setInterval(createWarningLight, 2000);

    // Shake effect
    const shakeAnimation = async () => {
      while (true) {
        await controls.start({
          x: [0, -5, 5, -5, 5, 0],
          rotate: [0, -1, 1, -1, 1, 0],
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          }
        });
        await new Promise(resolve => setTimeout(resolve, Math.random() * 3000 + 2000));
      }
    };

    shakeAnimation();

    return () => {
      clearInterval(debrisInterval);
      clearInterval(warningInterval);
    };
  }, [controls]);

  return (
    <motion.div 
      ref={containerRef}
      animate={controls}
      className="fixed inset-0 pointer-events-none z-50"
    >
      {/* Warning Panel */}
      <div className="absolute top-4 right-4 spaceship-panel p-2">
        <p className="spaceship-text animate-pulse">
          WARNING: STRUCTURAL INTEGRITY COMPROMISED
        </p>
      </div>

      {/* System Status */}
      <div className="absolute bottom-4 left-4 spaceship-panel p-2">
        <p className="spaceship-text">
          SYSTEM STATUS: CRITICAL
        </p>
      </div>
    </motion.div>
  );
};