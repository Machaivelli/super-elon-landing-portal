import { useState, useRef, useEffect } from 'react';
import { PlayButton } from './PlayButton';
import { ProgressBar } from './ProgressBar';
import { toast } from 'sonner';

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
        setIsPlaying(false);
        toast.info('Music paused');
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            toast.success('Playing music');
          })
          .catch(e => {
            console.error("Play error:", e);
            toast.error('Could not play audio. Please try again.');
            setIsPlaying(false);
          });
      }
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
    const audioPath = '/lovable-uploads/zo staat het bestand nu in de public file.mp3';
    console.log("Loading audio from:", audioPath);
    
    const audio = new Audio(audioPath);
    audioRef.current = audio;
    audio.loop = true;
    
    audio.addEventListener('canplay', () => {
      console.log("Audio can play now");
      setDuration(formatTime(audio.duration));
    });

    audio.addEventListener('error', (e) => {
      console.error("Audio error:", e);
      toast.error('Error loading audio file');
      setIsPlaying(false);
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
    <div className="fixed top-24 left-4 z-50 flex flex-col gap-1 backdrop-blur-sm rounded-lg p-3 border border-purple-500/20 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 min-w-[200px] group">
      <div className="text-[10px] font-mono text-white/70 text-center">
        Super Elon Theme
      </div>
      
      <div className="flex items-center gap-3">
        <PlayButton isPlaying={isPlaying} onClick={togglePlay} />
        <ProgressBar 
          progress={progress}
          onProgressClick={handleProgressClick}
          currentTime={currentTime}
          duration={duration}
        />
      </div>
    </div>
  );
};