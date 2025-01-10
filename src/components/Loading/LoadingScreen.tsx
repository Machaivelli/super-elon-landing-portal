import { motion } from 'framer-motion';
import { LoadingProgress } from './LoadingProgress';
import { LoadingImage } from './LoadingImage';
import { useLoadingState } from './useLoadingState';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const { progress, assetsLoaded, handleSkip } = useLoadingState({ onLoadingComplete });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-hero-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      <div className="relative flex flex-col items-center justify-center gap-8 w-full max-w-2xl px-4">
        <LoadingImage />
        <LoadingProgress progress={progress} assetsLoaded={assetsLoaded} />
      </div>
    </motion.div>
  );
};