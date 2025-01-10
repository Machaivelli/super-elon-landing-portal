import { useState, useEffect } from 'react';
import { toast } from 'sonner';

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
        // Preload images
        const imagePromises = imageUrls.map(url => {
          return new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => {
              console.error(`Failed to load image: ${url}`);
              resolve();
            };
            img.src = url;
          });
        });

        // Preload audio with better error handling
        const audioPromise = new Promise<void>((resolve) => {
          const audio = new Audio();
          audio.preload = 'auto';
          
          const handleCanPlay = () => {
            console.log('Audio can play through');
            audio.removeEventListener('canplaythrough', handleCanPlay);
            resolve();
          };

          const handleError = (e: Event) => {
            console.error('Audio failed to load:', e);
            toast.error('Error loading audio file. Music will be disabled.');
            audio.removeEventListener('error', handleError);
            resolve();
          };

          audio.addEventListener('canplaythrough', handleCanPlay);
          audio.addEventListener('error', handleError);

          // Set audio source
          audio.src = '/lovable-uploads/zo staat het bestand nu in de public file.mp3';
          audio.load();

          // Fallback timeout
          setTimeout(() => {
            audio.removeEventListener('canplaythrough', handleCanPlay);
            audio.removeEventListener('error', handleError);
            console.log('Audio load timeout - continuing anyway');
            resolve();
          }, 5000);
        });

        // Add a minimum loading time for smooth experience
        const minimumLoadingTime = new Promise<void>(resolve => setTimeout(resolve, 2000));

        // Update progress smoothly while assets load
        const progressInterval = setInterval(() => {
          setProgress(prev => {
            if (prev >= 90) return prev;
            return prev + 1;
          });
        }, 50);

        // Wait for all assets and minimum time
        await Promise.all([...imagePromises, audioPromise, minimumLoadingTime]);
        
        clearInterval(progressInterval);
        console.log('All assets loaded successfully');
        setAssetsLoaded(true);
        setProgress(100);

      } catch (error) {
        console.error('Error preloading assets:', error);
        toast.error('Some assets failed to load');
        setAssetsLoaded(true);
      }
    };

    preloadAssets();
  }, [onLoadingComplete]);

  return { progress, assetsLoaded, handleSkip };
};