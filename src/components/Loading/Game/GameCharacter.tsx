import { useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

interface GameCharacterProps {
  position: { x: number; y: number };
  onClick: () => void;
}

export const GameCharacter = ({ position, onClick }: GameCharacterProps) => {
  const x = useMotionValue(position.x);
  const y = useMotionValue(position.y);

  useEffect(() => {
    x.set(position.x);
    y.set(position.y);
  }, [position.x, position.y]);

  return (
    <motion.div
      className="absolute w-12 h-12 cursor-pointer"
      style={{ x, y }}
      onClick={onClick}
      animate={{
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <img
        src="/lovable-uploads/a3d0231f-607a-4a29-8dd8-5bb4d6a542cf.png"
        alt="Game Character"
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
};