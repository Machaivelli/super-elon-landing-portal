import { useState, useEffect } from 'react';

interface UseLoadingStateProps {
  onLoadingComplete: () => void;
}

export const useLoadingState = ({ onLoadingComplete }: UseLoadingStateProps) => {
  const [progress, setProgress] = useState(0);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const handleSkip = () => {
    if (assetsLoaded) {
      setProgress(100);
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }
  };

  useEffect(() => {
    const preloadAssets = async () => {
      const imageUrls = [
        '/lovable-uploads/a32878b2-036b-4b6d-8f77-b383e4508ba2.png',
        '/lovable-uploads/e342d9f7-711a-418c-9864-4f639ba1f221.png',
        '/lovable-uploads/d4ee9306-300a-4ace-bf6a-5db6a2d0663c.png',
        '/lovable-uploads/e7edd27b-c9ce-47b8-8894-c588138f8495.png',
        '/lovable-uploads/a3d0231f-607a-4a29-8dd8-5bb4d6a542cf.png',
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

        // Add audio preloading with proper error handling
        const audioPromise = new Promise((resolve, reject) => {
          const audio = new Audio('/lovable-uploads/zo staat het bestand nu in de public file.mp3');
          audio.addEventListener('canplaythrough', resolve, { once: true });
          audio.addEventListener('error', reject, { once: true });
          audio.load();
        });

        // Minimum loading time of 4 seconds for game enjoyment
        const minimumLoadingTime = new Promise(resolve => setTimeout(resolve, 4000));

        // Wait for all assets and minimum time
        await Promise.all([...imagePromises, audioPromise, minimumLoadingTime]);
        console.log('All assets loaded successfully');
        setAssetsLoaded(true);
      } catch (error) {
        console.error('Error preloading assets:', error);
        // Even if some assets fail, we should still allow the site to load
        setAssetsLoaded(true);
      }
    };

    preloadAssets();

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100;
        }

        // Smoother progress that reaches 100%
        const increment = assetsLoaded ? 5 : 2;
        const newProgress = Math.min(oldProgress + increment, assetsLoaded ? 100 : 90);

        if (newProgress >= 100) {
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
        }

        return newProgress;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete, assetsLoaded]);

  return { progress, assetsLoaded, handleSkip };
};