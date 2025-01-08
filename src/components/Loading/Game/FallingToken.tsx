import { motion } from 'framer-motion';

interface FallingTokenProps {
  id: number;
  x: number;
  onCollect: (id: number) => void;
}

export const FallingToken = ({ id, x, onCollect }: FallingTokenProps) => {
  return (
    <motion.div
      initial={{ y: -20 }}
      animate={{ y: window.innerHeight + 20 }}
      transition={{ duration: 4, ease: "linear" }}
      onAnimationComplete={() => onCollect(id)}
      className="absolute w-8 h-8 cursor-pointer"
      style={{ x }}
      onClick={() => onCollect(id)}
    >
      <img
        src="/lovable-uploads/e7edd27b-c9ce-47b8-8894-c588138f8495.png"
        alt="Collectible Token"
        className="w-full h-full object-contain animate-pulse"
      />
    </motion.div>
  );
};