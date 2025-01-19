import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    console.log('Initializing audio player...');
    const audio = new Audio('/lovable-uploads/zo staat het bestand nu in de public file.mp3');
    audioRef.current = audio;
    audio.loop = true;
    
    const handleCanPlay = () => {
      console.log('Audio can play now');
      if (isPlaying) {
        audio.play().catch(error => {
          console.error('Audio error:', error);
        });
      }
    };

    audio.addEventListener('canplay', handleCanPlay);
    console.log('Loading audio from:', audio.src);

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error('Audio error:', error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        variant="outline"
        size="icon"
        className="bg-theme-dark/80 border-theme-primary hover:bg-theme-primary/20 transition-all duration-300"
        onClick={toggleMute}
      >
        {isMuted ? (
          <VolumeX className="h-4 w-4 text-theme-primary" />
        ) : (
          <Volume2 className="h-4 w-4 text-theme-primary" />
        )}
      </Button>
    </div>
  );
};

export default AudioPlayer;