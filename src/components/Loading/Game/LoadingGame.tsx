import { useState, useEffect, useCallback } from 'react';
import { GameCharacter } from './GameCharacter';
import { FallingToken } from './FallingToken';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface LoadingGameProps {
  onSkip: () => void;
  progress: number;
}

export const LoadingGame = ({ onSkip, progress }: LoadingGameProps) => {
  const [score, setScore] = useState(0);
  const [characterPosition, setCharacterPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight - 100 });
  const [tokens, setTokens] = useState<{ id: number; x: number }[]>([]);
  const [nextTokenId, setNextTokenId] = useState(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setCharacterPosition({ x: e.clientX - 24, y: window.innerHeight - 100 });
  }, []);

  const spawnToken = useCallback(() => {
    const newToken = {
      id: nextTokenId,
      x: Math.random() * (window.innerWidth - 32),
    };
    setTokens(prev => [...prev, newToken]);
    setNextTokenId(prev => prev + 1);
  }, [nextTokenId]);

  const collectToken = useCallback((id: number) => {
    setTokens(prev => prev.filter(token => token.id !== id));
    setScore(prev => prev + 10);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    const interval = setInterval(spawnToken, 1000);
    return () => clearInterval(interval);
  }, [spawnToken]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-4 left-4 z-50 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white font-mono"
      >
        Score: {score}
        <br />
        Loading: {progress}%
      </motion.div>

      <Button
        onClick={onSkip}
        className="absolute top-4 right-4 z-50"
        variant="secondary"
      >
        Skip to Website
      </Button>

      <GameCharacter position={characterPosition} onClick={() => {}} />
      
      {tokens.map(token => (
        <FallingToken
          key={token.id}
          id={token.id}
          x={token.x}
          onCollect={collectToken}
        />
      ))}
    </div>
  );
};