import { motion } from 'framer-motion';

export const TokenomicsTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center mb-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2 font-serif drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-white to-yellow-400 animate-pulse">
          Tokenomics – Engineered for Success & Laughs! 🚀
        </span>
      </h2>
      <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
        Because even rocket scientists need numbers... and memes. 🧮✨
      </p>
    </motion.div>
  );
};