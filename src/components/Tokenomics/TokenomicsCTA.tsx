import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export const TokenomicsCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mt-8 mb-4"
    >
      <p className="text-sm text-yellow-400 font-bold mb-4 animate-pulse">
        🔥 700,000,000 SEC Already Locked – Don't Miss Out!
      </p>
      <motion.button
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
        className="group relative px-6 py-3 text-base bg-gradient-to-r from-yellow-400 to-yellow-600 
                 rounded-full font-bold text-white shadow-lg hover:shadow-yellow-500/50 
                 transition-all duration-300"
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
          <Rocket className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};