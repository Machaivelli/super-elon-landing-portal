import { Progress } from '../ui/progress';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  progress: number;
  onProgressClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  currentTime: string;
  duration: string;
}

export const ProgressBar = ({ progress, onProgressClick, currentTime, duration }: ProgressBarProps) => {
  return (
    <div className="flex-1 space-y-1">
      <div 
        className="relative cursor-pointer group"
        onClick={onProgressClick}
      >
        <Progress 
          value={progress} 
          className="h-1 bg-purple-900/20"
          indicatorClassName="bg-gradient-to-r from-yellow-400 to-yellow-600 relative"
        />
        <div 
          className="absolute top-1/2 -translate-y-1/2"
          style={{ left: `${progress}%` }}
        >
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-x-1/2 shadow-lg shadow-yellow-500/50" />
        </div>
      </div>

      <div className="flex justify-between text-[8px] font-mono text-purple-300/70">
        <span>{currentTime}</span>
        <span>{duration}</span>
      </div>
    </div>
  );
};