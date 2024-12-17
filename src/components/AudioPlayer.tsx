import { useState, useRef, useEffect } from 'react';
import { Rocket, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  useEffect(() => {
    console.log("Initializing audio player...");
    const audio = new Audio('/lovable-uploads/zo staat het bestand nu in de public file.mp3');
    audioRef.current = audio;
    audio.loop = true;
    
    audio.addEventListener('error', (e) => {
      console.error("Audio error:", e);
    });

    audio.addEventListener('ended', () => {
      setIsPlaying(false);
    });
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  return (
    <div className="fixed top-24 left-4 z-50">
      <button
        onClick={togglePlay}
        className={cn(
          "w-8 h-8 flex items-center justify-center rounded-full",
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
          <Rocket className="w-4 h-4 rotate-45 -translate-y-[1px]" />
        )}
      </button>
    </div>
  );
};