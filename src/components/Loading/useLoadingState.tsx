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
        // Preload images with proper error handling
        const imagePromises = imageUrls.map(url => {
          return new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => {
              console.error(`Failed to load image: ${url}`);
              resolve(); // Resolve anyway to prevent blocking
            };
            img.src = url;
          });
        });

        // Preload audio with better browser support
        const audioPromise = new Promise<void>((resolve) => {
          const audio = new Audio();
          
          const handleCanPlay = () => {
            console.log('Audio can play through');
            audio.removeEventListener('canplaythrough', handleCanPlay);
            resolve();
          };

          const handleError = (e: Event) => {
            console.error('Audio failed to load', e);
            audio.removeEventListener('error', handleError);
            resolve(); // Resolve anyway to prevent blocking
          };

          audio.addEventListener('canplaythrough', handleCanPlay);
          audio.addEventListener('error', handleError);

          // Set audio properties before loading
          audio.preload = 'auto';
          audio.src = '/lovable-uploads/zo staat het bestand nu in de public file.mp3';
          
          // Force load for some browsers
          audio.load();

          // Fallback timeout to prevent hanging
          setTimeout(() => {
            audio.removeEventListener('canplaythrough', handleCanPlay);
            audio.removeEventListener('error', handleError);
            console.log('Audio load timeout - continuing anyway');
            resolve();
          }, 5000);
        });

        // Add a minimum loading time for smooth experience
        const minimumLoadingTime = new Promise<void>(resolve => setTimeout(resolve, 2000));

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

    // Smoother progress updates
    const progressTimer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        
        // If assets are loaded, move faster to 100%
        const increment = assetsLoaded ? 5 : 1;
        const newProgress = Math.min(oldProgress + increment, assetsLoaded ? 100 : 90);

        // When we reach 100%, trigger completion
        if (newProgress >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
        }

        return newProgress;
      });
    }, 50); // Faster updates for smoother animation

    return () => {
      clearInterval(progressTimer);
    };
  }, [onLoadingComplete, assetsLoaded]);

  return { progress, assetsLoaded, handleSkip };
};