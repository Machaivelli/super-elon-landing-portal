import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/zo staat het bestand nu in de public file.mp3');
    audioRef.current.loop = true; // Makes the audio loop

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-4 right-4 z-50 bg-black/20 backdrop-blur-sm border border-white/10 hover:bg-black/30"
      onClick={togglePlay}
    >
      {isPlaying ? (
        <Volume2 className="h-5 w-5 text-neon-blue" />
      ) : (
        <VolumeX className="h-5 w-5 text-white/70" />
      )}
    </Button>
  );
};