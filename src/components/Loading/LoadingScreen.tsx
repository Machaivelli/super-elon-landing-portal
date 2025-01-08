import { motion } from 'framer-motion';
import { LoadingProgress } from './LoadingProgress';
import { LoadingGame } from './Game/LoadingGame';
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
      className="fixed inset-0 z-50 bg-hero-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      <LoadingGame progress={progress} onSkip={handleSkip} />
      <LoadingProgress progress={progress} assetsLoaded={assetsLoaded} />
    </motion.div>
  );
};