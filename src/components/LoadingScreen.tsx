import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';

export const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    // Preload only essential assets
    const preloadAssets = async () => {
      const imageUrls = [
        '/lovable-uploads/a32878b2-036b-4b6d-8f77-b383e4508ba2.png'
      ];

      try {
        const imagePromises = imageUrls.map(url => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = reject;
          });
        });

        await Promise.all(imagePromises);
        setAssetsLoaded(true);
      } catch (error) {
        console.error('Error preloading assets:', error);
        setAssetsLoaded(true);
      }
    };

    preloadAssets();

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const increment = assetsLoaded ? 8 : 4; // Faster increment
        const newProgress = oldProgress + increment;
        
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 300); // Reduced from 500ms to 300ms
        }
        return Math.min(newProgress, 100);
      });
    }, 30); // Reduced from 50ms to 30ms

    return () => clearInterval(timer);
  }, [onLoadingComplete, assetsLoaded]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-hero-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      
      <div className="relative w-full max-w-2xl px-4 mb-8">
        <motion.div 
          className="relative group"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-orange rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-gradient-flow" />
          <img
            src="/lovable-uploads/a32878b2-036b-4b6d-8f77-b383e4508ba2.png"
            alt="Super Elon"
            className="relative w-full h-auto rounded-lg shadow-2xl animate-float"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
        </motion.div>
      </div>

      <motion.div 
        className="w-full max-w-md px-4 space-y-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative">
          <Progress 
            value={progress} 
            className="h-2 bg-black/20 backdrop-blur-sm border border-white/10"
            indicatorClassName="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-orange animate-gradient-flow"
          />
          <div className="absolute -top-2 left-0 w-full">
            <div 
              className="h-4 w-4 bg-neon-blue rounded-full shadow-lg shadow-neon-blue/50 transform -translate-y-1/2"
              style={{ left: `${progress}%`, transition: 'left 0.3s ease-out' }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <motion.p 
            className="text-3xl font-bold text-center bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {progress}%
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-gray-400 text-center animate-pulse">
              {progress < 30 ? "Initializing..." :
               progress < 60 ? "Loading assets..." :
               progress < 90 ? "Preparing launch..." :
               "Ready for takeoff!"}
            </p>
            {assetsLoaded && (
              <p className="text-xs text-neon-blue mt-1">Assets loaded successfully</p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
