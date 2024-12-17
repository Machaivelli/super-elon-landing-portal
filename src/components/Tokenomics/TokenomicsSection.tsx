import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Wallet, Shield, TrendingUp, Database } from 'lucide-react';
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
    glowColor: "#F97316"
  },
  {
    title: "Community, Airdrops & Staking",
    percentage: 15,
    amount: "150,000,000 SEC",
    description: "For community airdrops and staking rewards to foster growth and long-term HODLing.",
    icon: Wallet,
    color: "from-blue-400 to-blue-600",
    glowColor: "#0EA5E9"
  },
  {
    title: "Team & Development",
    percentage: 10,
    amount: "100,000,000 SEC",
    description: "Reserved for the team, with a 6-month lock and gradual monthly releases (10%). Ensuring long-term commitment.",
    icon: Shield,
    color: "from-purple-400 to-purple-600",
    glowColor: "#8B5CF6"
  },
  {
    title: "Marketing & Partnerships",
    percentage: 3,
    amount: "30,000,000 SEC",
    description: "For partnerships, influencer campaigns, and community-building. Fully transparent wallet reports.",
    icon: TrendingUp,
    color: "from-orange-400 to-orange-600",
    glowColor: "#F97316"
  },
  {
    title: "Reserve / Buffer",
    percentage: 2,
    amount: "20,000,000 SEC",
    description: "Held for emergencies, future listings, and upgrades. Community consultation guaranteed.",
    icon: Database,
    color: "from-cyan-400 to-cyan-600",
    glowColor: "#06B6D4"
  }
];

export const TokenomicsSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-blue-900 to-black py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/ea0304be-238c-4b4c-ba06-e3ab934f8388.png')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      {/* Content Container */}
      <div className="relative container mx-auto px-4">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-orbitron animate-pulse-glow">
            Tokenomics – Built for Trust and Stability
          </h2>
          <p className="text-xl text-gray-300">
            Here's how we fuel the Super Elon Coin rocket for a community-first moon mission.
          </p>
        </motion.div>

        {/* Chart and Cards Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Chart Section */}
          <div className="flex justify-center">
            <TokenomicsChart data={tokenomicsData} />
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6">
            {tokenomicsData.map((item, index) => (
              <TokenomicsCard key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Scrolling Stats and CTA */}
        <div className="text-center">
          <ScrollingStats />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full text-xl font-bold text-white shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 animate-pulse-glow"
          >
            Join the Mission – Buy Super Elon Coin Now!
          </motion.button>
        </div>
      </div>
    </section>
  );
};