import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { Progress } from './ui/progress';
import { cn } from '@/lib/utils';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressInterval = useRef<number>();

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Play error:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const bounds = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const width = bounds.width;
      const percentage = (x / width) * 100;
      const time = (percentage / 100) * audioRef.current.duration;
      audioRef.current.currentTime = time;
      setProgress(percentage);
    }
  };

  const updateProgress = () => {
    if (audioRef.current) {
      const percentage = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(percentage || 0);
      setCurrentTime(formatTime(audioRef.current.currentTime));
      setDuration(formatTime(audioRef.current.duration));
    }
  };

  useEffect(() => {
    console.log("Initializing audio player...");
    const audio = new Audio('/lovable-uploads/zo staat het bestand nu in de public file.mp3');
    audioRef.current = audio;
    audio.loop = true;
    
    audio.addEventListener('canplay', () => {
      console.log("Audio can play now");
      setDuration(formatTime(audio.duration));
    });

    audio.addEventListener('error', (e) => {
      console.error("Audio error:", e);
    });

    audio.addEventListener('ended', () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime("0:00");
    });
    
    return () => {
      if (progressInterval.current) {
        window.clearInterval(progressInterval.current);
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  useEffect(() => {
    if (progressInterval.current) {
      window.clearInterval(progressInterval.current);
    }

    if (isPlaying) {
      progressInterval.current = window.setInterval(updateProgress, 100);
    }

    return () => {
      if (progressInterval.current) {
        window.clearInterval(progressInterval.current);
      }
    };
  }, [isPlaying]);

  return (
    <div className="fixed top-24 left-4 z-50 flex flex-col gap-2 bg-gradient-to-r from-black/90 to-black/70 backdrop-blur-lg rounded-xl p-4 border border-white/10 shadow-lg hover:shadow-neon-blue/20 transition-all duration-300 min-w-[240px]">
      {/* Title */}
      <div className="text-xs font-mono text-white/70 text-center mb-1">
        Super Elon Theme
      </div>
      
      <div className="flex items-center gap-4">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className={cn(
            "w-10 h-10 flex items-center justify-center rounded-full",
            "bg-gradient-to-r from-neon-orange to-neon-yellow",
            "hover:scale-110 transition-all duration-200",
            "text-black shadow-lg relative",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-gradient-to-r after:from-neon-orange/20 after:to-neon-yellow/20",
            "after:animate-pulse-glow after:blur-md after:-z-10"
          )}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </button>

        {/* Progress and Time Display */}
        <div className="flex-1 space-y-1">
          {/* Progress Bar */}
          <div 
            className="relative cursor-pointer group"
            onClick={handleProgressClick}
          >
            <Progress 
              value={progress} 
              className="h-1.5 bg-white/5"
              indicatorClassName="bg-gradient-to-r from-neon-orange to-neon-yellow relative"
            />
            <div 
              className="absolute top-1/2 -translate-y-1/2"
              style={{ left: `${progress}%` }}
            >
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-neon-orange to-neon-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-x-1/2" />
            </div>
          </div>

          {/* Time Display */}
          <div className="flex justify-between text-[10px] font-mono text-white/50">
            <span>{currentTime}</span>
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};