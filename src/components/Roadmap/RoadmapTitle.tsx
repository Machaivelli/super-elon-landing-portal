import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export const RoadmapTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center mb-12 relative"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-yellow-400/5 blur-3xl rounded-full" />
      
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="flex items-center justify-center gap-3 mb-4"
      >
        <Rocket className="w-8 h-8 text-yellow-400 animate-pulse" />
        <h2 className="text-4xl md:text-5xl font-bold font-['Orbitron'] 
                     bg-clip-text text-transparent bg-gradient-to-r 
                     from-yellow-400 via-yellow-300 to-yellow-400
                     drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
          Our Mission: Step by Step
        </h2>
        <Rocket className="w-8 h-8 text-yellow-400 animate-pulse transform rotate-180" />
      </motion.div>
      
      <p className="text-lg text-white/90 font-light max-w-2xl mx-auto">
        Join us on an extraordinary journey as we revolutionize the future of finance
      </p>
    </motion.div>
  );
};