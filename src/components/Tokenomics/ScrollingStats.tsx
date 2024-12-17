import React from 'react';
import { motion } from 'framer-motion';

export const ScrollingStats = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 inline-block"
    >
      <p className="text-yellow-400 font-bold flex items-center gap-2">
        <span className="animate-pulse">🔥</span>
        700,000,000 SEC Locked for Stability – Don't Miss the Moon Launch!
      </p>
    </motion.div>
  );
};