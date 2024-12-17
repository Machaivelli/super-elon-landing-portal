import { motion } from 'framer-motion';
import { Database, Wallet, Shield, TrendingUp, Rocket } from 'lucide-react';

const tokenomicsData = [
  {
    title: "Liquidity Pool",
    percentage: 70,
    amount: "700,000,000 SEC",
    description: "Added to a locked liquidity pool on launch. Stability ensured with a 12-month lock via smart contract.",
    icon: Rocket,
    color: "from-yellow-400 to-yellow-600",
    glowColor: "#FFD700"
  },
  {
    title: "Community & Staking",
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
    description: "Reserved for the team, with a 6-month lock and gradual monthly releases.",
    icon: Shield,
    color: "from-purple-400 to-purple-600",
    glowColor: "#8b5cf6"
  },
  {
    title: "Marketing",
    percentage: 3,
    amount: "30,000,000 SEC",
    description: "For partnerships, influencer campaigns, and community-building.",
    icon: TrendingUp,
    color: "from-orange-400 to-orange-600",
    glowColor: "#ff7e33"
  }
];

export const TokenomicsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:col-span-2">
      {tokenomicsData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          className="glass-card p-4 relative overflow-hidden group"
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            style={{ background: `linear-gradient(45deg, ${item.glowColor}, transparent)` }}
          />

          <div className="flex items-start gap-3">
            <div
              className={`p-2 rounded-lg bg-gradient-to-br ${item.color} text-white`}
            >
              <item.icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl font-bold text-yellow-400">{item.percentage}%</span>
                <span className="text-sm text-gray-400">({item.amount})</span>
              </div>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};