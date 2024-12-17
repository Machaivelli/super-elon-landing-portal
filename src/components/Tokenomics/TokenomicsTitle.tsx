import { motion } from 'framer-motion';

export const TokenomicsTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center mb-8"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-white to-yellow-400">
          Tokenomics – Engineered for Success & Stability
        </span>
      </h2>
      <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
        A fair and transparent distribution, designed to take us to the moon and beyond.
      </p>
    </motion.div>
  );
};