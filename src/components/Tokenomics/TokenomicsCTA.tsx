import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export const TokenomicsCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mt-6"
    >
      <p className="text-sm text-yellow-400 font-bold mb-2 animate-pulse">
        🔥 700,000,000 SEC Already Locked – Don't Miss Out!
      </p>
      <motion.button
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
        className="group relative px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full text-sm font-bold text-white shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
      >
        Buy Now – Secure Your Spot!
        <motion.div
          className="absolute -top-1 -right-1 text-yellow-400"
          whileHover={{
            y: -20,
            x: 20,
            rotate: -45,
            transition: { duration: 0.3 }
          }}
        >
          <Rocket className="w-3 h-3" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};