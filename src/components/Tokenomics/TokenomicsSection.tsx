import { TokenomicsBackground } from './TokenomicsBackground';
import { TokenomicsTitle } from './TokenomicsTitle';
import { TokenomicsChart } from './TokenomicsChart';
import { TokenomicsCard } from './TokenomicsCard';
import { TokenomicsCTA } from './TokenomicsCTA';
import { Rocket, Wallet, Shield, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';

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

const ElonBadge = () => (
  <motion.div 
    className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm rounded-xl p-3 border border-white/10 cursor-pointer"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <div className="relative group">
      <img 
        src="/lovable-uploads/e7edd27b-c9ce-47b8-8894-c588138f8495.png" 
        alt="Elon Musk" 
        className="w-16 h-16 rounded-lg object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-sm font-bold text-white bg-black/60 px-2 py-1 rounded animate-bounce">
          HODL & Chill
        </span>
      </div>
    </div>
    <p className="text-xs text-white/80 mt-2 font-bold">Elon Musk<br/>Chief Meme Officer 🚀</p>
  </motion.div>
);

export const TokenomicsSection = () => {
  return (
    <section className="relative min-h-screen py-16 overflow-hidden">
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