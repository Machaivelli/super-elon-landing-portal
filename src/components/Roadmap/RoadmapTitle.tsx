import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export const RoadmapTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center mb-8 relative"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="flex items-center justify-center gap-2 mb-2"
      >
        <Rocket className="w-6 h-6 text-yellow-400 animate-pulse" />
        <h2 className="text-2xl md:text-3xl font-bold font-['Orbitron'] 
                     bg-clip-text text-transparent bg-gradient-to-r 
                     from-yellow-400 via-yellow-300 to-yellow-400">
          Our Mission: Step by Step
        </h2>
        <Rocket className="w-6 h-6 text-yellow-400 animate-pulse transform rotate-180" />
      </motion.div>
      
      <p className="text-sm text-white/90 font-light max-w-xl mx-auto">
        Join us on an extraordinary journey as we revolutionize the future of finance
      </p>
    </motion.div>
  );
};