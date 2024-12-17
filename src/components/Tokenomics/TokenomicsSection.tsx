import React from 'react';
import { motion } from 'framer-motion';
import { Database, Wallet, Shield, TrendingUp } from 'lucide-react';
import { TokenomicsChart } from './TokenomicsChart';
import { TokenomicsCard } from './TokenomicsCard';
import { ScrollingStats } from './ScrollingStats';

const tokenomicsData = [
  {
    title: "Liquidity Pool",
    percentage: 70,
    amount: "700,000,000 SEC",
    description: "Added to a locked liquidity pool on launch. Stability ensured with a 12-month lock via smart contract.",
    icon: Database,
    color: "from-yellow-400 to-yellow-600",
    glowColor: "#FFD700"
  },
  {
    title: "Community, Airdrops & Staking",
    percentage: 15,
    amount: "150,000,000 SEC",
    description: "For community airdrops and staking rewards to foster growth and long-term HODLing.",
    icon: Wallet,
    color: "from-blue-400 to-blue-600",
    glowColor: "#00f3ff"
  },
  {
    title: "Team & Development",
    percentage: 10,
    amount: "100,000,000 SEC",
    description: "Reserved for the team, with a 6-month lock and gradual monthly releases (10%). Ensuring long-term commitment.",
    icon: Shield,
    color: "from-purple-400 to-purple-600",
    glowColor: "#8b5cf6"
  },
  {
    title: "Marketing & Partnerships",
    percentage: 3,
    amount: "30,000,000 SEC",
    description: "For partnerships, influencer campaigns, and community-building. Fully transparent wallet reports.",
    icon: TrendingUp,
    color: "from-orange-400 to-orange-600",
    glowColor: "#ff7e33"
  },
  {
    title: "Reserve / Buffer",
    percentage: 2,
    amount: "20,000,000 SEC",
    description: "Held for emergencies, future listings, and upgrades. Community consultation guaranteed.",
    icon: Database,
    color: "from-cyan-400 to-cyan-600",
    glowColor: "#00f3ff"
  }
];

export const TokenomicsSection = () => {
  return (
    <section className="relative min-h-screen py-12 overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-[url('/lovable-uploads/e7edd27b-c9ce-47b8-8894-c588138f8495.png')] bg-cover bg-center bg-fixed"
        style={{ 
          transform: 'scale(1.1)',
          willChange: 'transform'
        }}
      />
      
      {/* Enhanced gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 backdrop-blur-sm" />

      {/* Content Container */}
      <div className="relative container mx-auto px-4 z-20">
        {/* Title Section with refined animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-white to-yellow-400 font-serif drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]">
            Tokenomics – Engineered for Success & Stability
          </h2>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            A fair and transparent distribution, designed to take us to the moon and beyond.
          </p>
        </motion.div>

        {/* Chart and Cards Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Chart Section with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <TokenomicsChart data={tokenomicsData} />
          </motion.div>

          {/* Cards Grid with staggered animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tokenomicsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                <TokenomicsCard {...item} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scrolling Stats and CTA with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <ScrollingStats />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full text-lg font-bold text-white shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 animate-pulse-glow"
          >
            Buy Now – Secure Your Spot in the Moon Mission!
          </motion.button>
        </motion.div>
      </div>

      {/* Wave transition at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f1729] to-transparent z-10" />
    </section>
  );
};