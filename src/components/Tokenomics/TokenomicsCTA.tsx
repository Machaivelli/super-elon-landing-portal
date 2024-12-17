import { motion } from 'framer-motion';

export const TokenomicsCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mt-12"
    >
      <p className="text-lg text-yellow-400 font-bold mb-4 animate-pulse">
        🔥 700,000,000 SEC Already Locked – Don't Miss Out!
      </p>
      <motion.button
        whileHover={{ 
          scale: 1.05,
          rotate: [0, -1, 1, -1, 0],
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full text-lg font-bold text-white shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
      >
        Buy Now – Secure Your Spot in the Moon Mission!
      </motion.button>
    </motion.div>
  );
};