import { Rocket, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlayButtonProps {
  isPlaying: boolean;
  onClick: () => void;
}

export const PlayButton = ({ isPlaying, onClick }: PlayButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-8 h-8 flex items-center justify-center",
        "hover:scale-110 transition-all duration-200",
        "text-yellow-400 relative",
        "after:absolute after:inset-0 after:rounded-full",
        "after:animate-pulse-glow after:blur-md after:-z-10"
      )}
      aria-label={isPlaying ? "Pause" : "Play"}
    >
      {isPlaying ? (
        <Pause className="w-4 h-4" />
      ) : (
        <Rocket className="w-4 h-4 rotate-45 -translate-y-[2px]" />
      )}
    </button>
  );
};