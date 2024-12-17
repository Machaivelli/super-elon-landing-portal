import { motion } from 'framer-motion';

export const TokenomicsBackground = () => {
  return (
    <>
      {/* Parallax Background */}
      <div className="absolute right-0 top-20 w-64 h-64 opacity-20 rotate-12">
        <img 
          src="/lovable-uploads/e7edd27b-c9ce-47b8-8894-c588138f8495.png"
          alt="Decorative Tokenomics"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 backdrop-blur-sm" />
      
      {/* Animated particles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </motion.div>
    </>
  );
};