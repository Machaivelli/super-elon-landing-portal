import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

export const ElonBadge = () => {
  const isMobile = useIsMobile();
  const particles = Array.from({ length: 8 }, (_, i) => i);
  
  return (
    <motion.div 
      className={`fixed ${isMobile ? 'bottom-20 right-4' : 'top-20 right-4'} group cursor-pointer z-50`}
      whileHover={{ scale: 1.15 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Particle effects */}
      <AnimatePresence>
        {particles.map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100"
            initial={{ x: 0, y: 0, scale: 0 }}
            animate={{
              x: Math.cos(i * (Math.PI / 4)) * 50,
              y: Math.sin(i * (Math.PI / 4)) * 50,
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Main badge container */}
      <motion.div 
        className="relative bg-black/40 backdrop-blur-sm rounded-xl p-3 border border-white/10 overflow-hidden
                   group-hover:shadow-[0_0_30px_5px_rgba(0,243,255,0.5)]
                   transition-all duration-500"
        whileHover={{
          rotateZ: [0, -5, 5, -5, 5, 0],
          transition: { duration: 0.5 }
        }}
      >
        {/* Rainbow border effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          animate={{
            background: [
              'linear-gradient(0deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
              'linear-gradient(360deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)'
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundSize: '400% 400%',
          }}
        />

        {/* Image container */}
        <div className="relative group">
          <motion.img 
            src="/lovable-uploads/e7edd27b-c9ce-47b8-8894-c588138f8495.png" 
            alt="Chief Meme Officer" 
            className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'} rounded-lg object-cover group-hover:shadow-lg transition-all duration-300`}
            whileHover={{ scale: 1.1 }}
          />
          <motion.div 
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.span 
              className="text-sm font-bold text-white bg-black/60 px-2 py-1 rounded"
              animate={{
                y: [0, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              HODL & Chill
            </motion.span>
          </motion.div>
        </div>

        {/* Text with glow effect */}
        <motion.p 
          className={`${isMobile ? 'text-[10px]' : 'text-xs'} text-white/80 mt-2 font-bold relative z-10
                     group-hover:text-neon-blue group-hover:font-extrabold
                     transition-all duration-300`}
          animate={{
            textShadow: [
              "0 0 4px rgba(0,243,255,0)",
              "0 0 8px rgba(0,243,255,0.8)",
              "0 0 4px rgba(0,243,255,0)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          Elon Musk<br/>
          <span className="group-hover:animate-pulse">Chief Meme Officer 🚀</span>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};