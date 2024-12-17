import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { Progress } from './ui/progress';
import { cn } from '@/lib/utils';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressInterval = useRef<number>();

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

  const updateProgress = () => {
    if (audioRef.current) {
      const percentage = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(percentage || 0);
    }
  };

  useEffect(() => {
    console.log("Initializing audio player...");
    const audio = new Audio('/lovable-uploads/zo staat het bestand nu in de public file.mp3');
    audioRef.current = audio;
    audio.loop = true;
    
    audio.addEventListener('canplay', () => {
      console.log("Audio can play now");
    });

    audio.addEventListener('error', (e) => {
      console.error("Audio error:", e);
    });

    audio.addEventListener('ended', () => {
      setIsPlaying(false);
      setProgress(0);
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
    <div className="fixed top-4 left-4 z-50 flex items-center gap-3 bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-md rounded-full p-2 border border-white/10 shadow-lg hover:shadow-neon-blue/20 transition-all duration-300">
      <button
        onClick={togglePlay}
        className={cn(
          "w-8 h-8 flex items-center justify-center rounded-full",
          "bg-gradient-to-r from-neon-orange to-neon-yellow",
          "hover:scale-110 transition-transform duration-200",
          "text-black shadow-lg"
        )}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <Pause className="w-4 h-4" />
        ) : (
          <Play className="w-4 h-4 ml-0.5" />
        )}
      </button>
      
      <div className="w-20 md:w-24">
        <Progress 
          value={progress} 
          className="h-1.5 bg-white/10"
          indicatorClassName="bg-gradient-to-r from-neon-orange to-neon-yellow"
        />
      </div>
    </div>
  );
};