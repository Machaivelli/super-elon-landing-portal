import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

export const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 1; // Slower increment (was 2)
        if (newProgress === 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 1000); // Longer delay after reaching 100%
        }
        return Math.min(newProgress, 100);
      });
    }, 100); // Slower interval (was 50)

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-hero-pattern">
      <div className="relative w-full max-w-2xl px-4 mb-8">
        <div className="relative group">
          <img
            src="/lovable-uploads/a32878b2-036b-4b6d-8f77-b383e4508ba2.png"
            alt="Super Elon"
            className="w-full h-auto rounded-lg shadow-2xl animate-float"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
        </div>
      </div>
      <div className="w-full max-w-md px-4 space-y-4">
        <Progress 
          value={progress} 
          className="h-2 bg-gray-700"
          indicatorClassName="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-orange animate-gradient-flow"
        />
        <div className="flex flex-col items-center space-y-2">
          <p className="text-2xl font-bold text-center bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Loading... {progress}%
          </p>
          <p className="text-sm text-gray-400 text-center animate-pulse">
            Preparing for launch...
          </p>
        </div>
      </div>
    </div>
  );
};