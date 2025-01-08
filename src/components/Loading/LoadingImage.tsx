import { motion } from 'framer-motion';

export const LoadingImage = () => {
  return (
    <div className="w-full max-w-2xl px-4 mb-8">
      <motion.div 
        className="relative group"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-orange rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-gradient-flow" />
        <img
          src="/lovable-uploads/a32878b2-036b-4b6d-8f77-b383e4508ba2.png"
          alt="Super Elon"
          className="relative w-full h-auto rounded-lg shadow-2xl animate-float"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      </motion.div>
    </div>
  );
};