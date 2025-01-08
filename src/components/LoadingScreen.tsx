import { motion } from 'framer-motion';
import { LoadingProgress } from './Loading/LoadingProgress';
import { LoadingImage } from './Loading/LoadingImage';
import { useLoadingState } from './Loading/useLoadingState';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const { progress, assetsLoaded } = useLoadingState({ onLoadingComplete });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-hero-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      <LoadingImage />
      <LoadingProgress progress={progress} assetsLoaded={assetsLoaded} />
    </motion.div>
  );
};