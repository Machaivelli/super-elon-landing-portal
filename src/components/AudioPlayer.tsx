import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Volume1, Volume } from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [showVolume, setShowVolume] = useState(false);
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

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const VolumeIcon = () => {
    if (volume === 0) return <VolumeX className="h-5 w-5 text-white/70" />;
    if (volume < 0.3) return <Volume className="h-5 w-5 text-neon-blue" />;
    if (volume < 0.7) return <Volume1 className="h-5 w-5 text-neon-blue" />;
    return <Volume2 className="h-5 w-5 text-neon-blue" />;
  };

  useEffect(() => {
    console.log("Initializing audio player...");
    // Use encodeURIComponent to handle spaces in the filename
    const audioPath = encodeURIComponent('zo staat het bestand nu in de public file.mp3');
    const audio = new Audio(`/${audioPath}`);
    audioRef.current = audio;
    audio.loop = true;
    audio.volume = volume;
    
    audio.addEventListener('canplay', () => {
      console.log("Audio can play now");
      audio.play()
        .then(() => {
          console.log("Audio playing successfully");
          setIsPlaying(true);
        })
        .catch(error => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
    });

    audio.addEventListener('error', (e) => {
      console.error("Audio error:", e);
    });
    
    return () => {
      console.log("Cleaning up audio player");
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  return (
    <div 
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2"
      onMouseEnter={() => setShowVolume(true)}
      onMouseLeave={() => setShowVolume(false)}
    >
      {showVolume && (
        <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-md p-2 w-32">
          <Slider
            value={[volume]}
            max={1}
            step={0.01}
            onValueChange={handleVolumeChange}
            className="w-full"
          />
        </div>
      )}
      <Button
        variant="outline"
        size="icon"
        className="bg-black/20 backdrop-blur-sm border border-white/10 hover:bg-black/30"
        onClick={togglePlay}
      >
        <VolumeIcon />
      </Button>
    </div>
  );
};