import { useState, useRef, useEffect } from 'react';
import { Rocket, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
          toast.info('Music paused');
        } else {
          await audioRef.current.play();
          setIsPlaying(true);
          toast.success('Playing music');
        }
      } catch (error) {
        console.error('Playback error:', error);
        toast.error('Could not play audio. Please try again.');
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    console.log("Initializing audio player...");
    // Fix: Use the correct path format without a colon
    const audio = new Audio('/lovable-uploads/zo staat het bestand nu in de public file.mp3');
    audioRef.current = audio;
    audio.loop = true;
    
    // Don't try to autoplay initially, wait for user interaction
    setIsPlaying(false);
    
    audio.addEventListener('error', (e) => {
      console.error("Audio error:", e);
      toast.error('Error loading audio file');
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