import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

export const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 2;
        if (newProgress === 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 500); // Give a small delay after reaching 100%
        }
        return Math.min(newProgress, 100);
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="relative w-full max-w-2xl px-4 mb-8">
        <img
          src="/lovable-uploads/a32878b2-036b-4b6d-8f77-b383e4508ba2.png"
          alt="Super Elon"
          className="w-full h-auto rounded-lg shadow-2xl animate-float"
        />
      </div>
      <div className="w-full max-w-md px-4">
        <Progress 
          value={progress} 
          className="h-2 bg-gray-700"
          indicatorClassName="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-orange"
        />
        <p className="mt-4 text-center text-neon-blue font-orbitron">
          Loading... {progress}%
        </p>
      </div>
    </div>
  );
};