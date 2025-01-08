import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';

interface LoadingProgressProps {
  progress: number;
  assetsLoaded: boolean;
}

export const LoadingProgress = ({ progress, assetsLoaded }: LoadingProgressProps) => {
  return (
    <motion.div 
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4 space-y-4 z-50"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="relative">
        <Progress 
          value={progress} 
          className="h-2 bg-black/20 backdrop-blur-sm border border-white/10"
          indicatorClassName="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-orange animate-gradient-flow"
        />
        <div className="absolute -top-2 left-0 w-full">
          <div 
            className="h-4 w-4 bg-neon-blue rounded-full shadow-lg shadow-neon-blue/50 transform -translate-y-1/2"
            style={{ left: `${progress}%`, transition: 'left 0.3s ease-out' }}
          />
        </div>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <motion.p 
          className="text-3xl font-bold text-center bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {progress}%
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center"
        >
          <p className="text-sm text-gray-400 text-center animate-pulse">
            {progress < 30 ? "Initializing Super Elon..." :
             progress < 60 ? "Loading assets..." :
             progress < 90 ? "Preparing for launch..." :
             "Ready for takeoff! 🚀"}
          </p>
          {assetsLoaded && (
            <p className="text-xs text-neon-blue mt-1">Assets loaded successfully</p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};