import { useState, useRef, useEffect } from 'react';
import { Rocket, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
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
    audio.loop = true; // Enable looping
    
    // Try to autoplay when component mounts
    const attemptAutoplay = async () => {
      try {
        await audio.play();
        console.log("Autoplay successful");
      } catch (e) {
        console.warn("Autoplay failed:", e);
        setIsPlaying(false);
      }
    };

    attemptAutoplay();
    
    audio.addEventListener('error', (e) => {
      console.error("Audio error:", e);
      setIsPlaying(false);
    });

    audio.addEventListener('ended', () => {
      // This shouldn't trigger due to loop=true, but just in case
      if (isPlaying) {
        audio.play().catch(console.error);
      }
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
          "w-12 h-12 flex items-center justify-center rounded-full",
          "bg-black/20 backdrop-blur-sm border border-white/10",
          "hover:scale-110 transition-all duration-200",
          "text-yellow-400 relative",
          "after:absolute after:inset-0 after:rounded-full",
          "after:animate-pulse-glow after:blur-md after:-z-10",
          "shadow-lg hover:shadow-yellow-400/20"
        )}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Rocket className="w-6 h-6 rotate-45 -translate-y-[1px]" />
        )}
      </button>
    </div>
  );
};