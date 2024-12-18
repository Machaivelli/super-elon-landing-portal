import { TokenomicsBackground } from './TokenomicsBackground';
import { TokenomicsTitle } from './TokenomicsTitle';
import { TokenomicsChart } from './TokenomicsChart';
import { TokenomicsCard } from './TokenomicsCard';
import { TokenomicsCTA } from './TokenomicsCTA';
import { Rocket, Wallet, Shield, Megaphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const tokenomicsData = [
  {
    title: "Liquidity Pool",
    percentage: 70,
    amount: "700,000,000 SEC",
    description: "Added to a locked liquidity pool on launch. Stability ensured with a 12-month lock via smart contract.",
    icon: Rocket,
    color: "from-yellow-400 to-yellow-600",
    glowColor: "#FFD700",
    emoji: "🚀"
  },
  {
    title: "Community & Staking",
    percentage: 15,
    amount: "150,000,000 SEC",
    description: "For community airdrops and staking rewards to foster growth and long-term HODLing.",
    icon: Wallet,
    color: "from-blue-400 to-blue-600",
    glowColor: "#00f3ff",
    emoji: "💰"
  },
  {
    title: "Team & Development",
    percentage: 10,
    amount: "100,000,000 SEC",
    description: "Reserved for the team, with a 6-month lock and gradual monthly releases (10%). Ensuring long-term commitment.",
    icon: Shield,
    color: "from-purple-400 to-purple-600",
    glowColor: "#8b5cf6",
    emoji: "🛠️"
  },
  {
    title: "Marketing",
    percentage: 3,
    amount: "30,000,000 SEC",
    description: "For partnerships, influencer campaigns, and community-building. Fully transparent wallet reports.",
    icon: Megaphone,
    color: "from-orange-400 to-orange-600",
    glowColor: "#ff7e33",
    emoji: "📣"
  },
  {
    title: "Reserve",
    percentage: 2,
    amount: "20,000,000 SEC",
    description: "Held for emergencies, future listings, and upgrades. Community consultation guaranteed.",
    icon: Shield,
    color: "from-cyan-400 to-cyan-600",
    glowColor: "#00f3ff",
    emoji: "🛡️"
  }
];

const ElonBadge = () => {
  const particles = Array.from({ length: 8 }, (_, i) => i);
  
  return (
    <motion.div 
      className="fixed top-20 right-4 group cursor-pointer z-50 
                 md:scale-75 lg:scale-100 
                 md:opacity-70 lg:opacity-100
                 md:hover:opacity-100"
      whileHover={{ scale: 1.15 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Particle effects - only show on desktop */}
      <AnimatePresence>
        {particles.map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100 hidden lg:block"
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
                   transition-all duration-500
                   md:scale-90 lg:scale-100"
        whileHover={{
          rotateZ: [0, -5, 5, -5, 5, 0],
          transition: { duration: 0.5 }
        }}
      >
        {/* Rainbow border effect - only show on desktop */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 hidden lg:block"
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
            className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg object-cover group-hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          />
          <motion.div 
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.span 
              className="text-xs lg:text-sm font-bold text-white bg-black/60 px-2 py-1 rounded"
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
          className="text-[10px] md:text-xs lg:text-sm text-white/80 mt-2 font-bold relative z-10
                     group-hover:text-neon-blue group-hover:font-extrabold
                     transition-all duration-300"
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

export const TokenomicsSection = () => {
  return (
    <section className="relative min-h-screen py-16 overflow-hidden bg-gradient-to-b from-[#0f1729] via-[#1a0f29] to-[#0f1729]">
      <TokenomicsBackground />
      
      <div className="relative container mx-auto px-4 z-20">
        <TokenomicsTitle />

        <div className="grid lg:grid-cols-3 gap-8 items-start mt-12">
          <div className="lg:col-span-1">
            <TokenomicsChart data={tokenomicsData} />
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {tokenomicsData.map((item, index) => (
              <TokenomicsCard key={index} {...item} />
            ))}
          </div>
        </div>

        <TokenomicsCTA />
        <ElonBadge />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f1729] to-transparent z-10" />
    </section>
  );
};
