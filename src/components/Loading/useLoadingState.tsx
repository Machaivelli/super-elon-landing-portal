import { useState, useEffect } from 'react';

interface UseLoadingStateProps {
  onLoadingComplete: () => void;
}

export const useLoadingState = ({ onLoadingComplete }: UseLoadingStateProps) => {
  const [progress, setProgress] = useState(0);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    const preloadAssets = async () => {
      const imageUrls = [
        '/lovable-uploads/a32878b2-036b-4b6d-8f77-b383e4508ba2.png',
        '/lovable-uploads/e342d9f7-711a-418c-9864-4f639ba1f221.png',
        '/lovable-uploads/d4ee9306-300a-4ace-bf6a-5db6a2d0663c.png',
        '/lovable-uploads/e7edd27b-c9ce-47b8-8894-c588138f8495.png'
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

        const minimumLoadingTime = new Promise(resolve => setTimeout(resolve, 3500));
        await Promise.all([...imagePromises, minimumLoadingTime]);
        setAssetsLoaded(true);
      } catch (error) {
        console.error('Error preloading assets:', error);
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

        const increment = assetsLoaded ? 10 : 2;
        const newProgress = Math.min(oldProgress + increment, assetsLoaded ? 100 : 70);

        if (newProgress >= 100) {
          setTimeout(() => {
            onLoadingComplete();
          }, 800);
        }

        return newProgress;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete, assetsLoaded]);

  return { progress, assetsLoaded };
};