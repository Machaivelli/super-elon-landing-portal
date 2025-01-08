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
        '/lovable-uploads/e7edd27b-c9ce-47b8-8894-c588138f8495.png',
        '/lovable-uploads/a3d0231f-607a-4a29-8dd8-5bb4d6a542cf.png', // Logo
        '/lovable-uploads/1579688f-26be-4125-8ccb-379b008563a4.png', // Telegram
        '/lovable-uploads/3ff0e98c-3fd3-45f4-9e15-4dfc38624c96.png', // X
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

        // Add audio preloading
        const audioPromise = new Promise((resolve) => {
          const audio = new Audio('/lovable-uploads/zo staat het bestand nu in de public file.mp3');
          audio.addEventListener('canplaythrough', resolve, { once: true });
          audio.load();
        });

        // Minimum loading time of 3.5 seconds for visual appeal
        const minimumLoadingTime = new Promise(resolve => setTimeout(resolve, 3500));

        // Wait for all assets and minimum time
        await Promise.all([...imagePromises, audioPromise, minimumLoadingTime]);
        setAssetsLoaded(true);
      } catch (error) {
        console.error('Error preloading assets:', error);
        setAssetsLoaded(true); // Continue even if some assets fail to load
      }
    };

    preloadAssets();

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100;
        }

        // Slower progress if assets aren't loaded
        const increment = assetsLoaded ? 10 : 2;
        const newProgress = Math.min(oldProgress + increment, assetsLoaded ? 100 : 70);

        if (newProgress >= 100) {
          setTimeout(() => {
            onLoadingComplete();
          }, 800); // Delay before completing
        }

        return newProgress;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete, assetsLoaded]);

  return { progress, assetsLoaded };
};