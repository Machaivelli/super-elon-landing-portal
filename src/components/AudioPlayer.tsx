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
          // Create user interaction context for autoplay
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                setIsPlaying(true);
                toast.success('Playing music');
              })
              .catch(error => {
                console.error("Play error:", error);
                toast.error('Could not play audio. Please try again.');
                setIsPlaying(false);
              });
          }
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
    const audioPath = '/lovable-uploads/zo staat het bestand nu in de public file.mp3';
    console.log("Loading audio from:", audioPath);
    
    const audio = new Audio();
    audio.preload = 'auto';
    audioRef.current = audio;
    audio.loop = true;
    
    const handleCanPlay = () => {
      console.log("Audio can play now");
    };

    const handleError = (e: ErrorEvent) => {
      console.error("Audio error:", e);
      toast.error('Error loading audio file');
      setIsPlaying(false);
    };

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);
    
    // Set source after adding event listeners
    audio.src = audioPath;
    audio.load();
    
    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
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