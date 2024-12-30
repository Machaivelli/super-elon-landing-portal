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
        <Rocket className="w-5 h-5 text-theme-primary animate-pulse" />
        <h2 className="text-xl md:text-2xl font-bold font-['Orbitron'] 
                     bg-clip-text text-transparent bg-gradient-to-r 
                     from-theme-primary via-theme-secondary to-theme-primary">
          Our Mission: Step by Step
        </h2>
        <Rocket className="w-5 h-5 text-theme-primary animate-pulse transform rotate-180" />
      </motion.div>
      
      <p className="text-sm text-white/90 font-light max-w-xl mx-auto">
        Join us on an extraordinary journey as we revolutionize the future of finance
      </p>
    </motion.div>
  );
};