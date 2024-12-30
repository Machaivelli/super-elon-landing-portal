import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export const RoadmapCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mt-8 mb-4"
    >
      <h3 className="text-xl font-bold text-yellow-400 mb-4 font-['Orbitron']">
        Be Part of the Revolution
      </h3>
      
      <motion.button
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 20px rgba(250, 204, 21, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        className="group relative px-6 py-2 text-sm bg-gradient-to-r from-yellow-400 to-yellow-500 
                 rounded-full font-bold text-black shadow-lg hover:shadow-yellow-500/50 
                 transition-all duration-300"
      >
        <span className="relative z-10 flex items-center gap-2">
          Explore the Whitepaper
          <motion.div
            className="text-black"
            animate={{
              x: [0, 4, 0],
              rotate: [-45, -45, -45]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Rocket className="w-4 h-4" />
          </motion.div>
        </span>
      </motion.button>
    </motion.div>
  );
};