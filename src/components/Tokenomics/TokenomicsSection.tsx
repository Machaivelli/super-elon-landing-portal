import { TokenomicsBackground } from './TokenomicsBackground';
import { TokenomicsTitle } from './TokenomicsTitle';
import { TokenomicsChart } from './TokenomicsChart';
import { TokenomicsCard } from './TokenomicsCard';
import { TokenomicsCTA } from './TokenomicsCTA';
import { Database, Wallet, Shield, TrendingUp } from 'lucide-react';

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
    <section className="relative min-h-screen py-8 overflow-hidden">
      <TokenomicsBackground />
      
      <div className="relative container mx-auto px-4 z-20">
        <TokenomicsTitle />

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <TokenomicsChart data={tokenomicsData} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tokenomicsData.map((item, index) => (
              <TokenomicsCard key={index} {...item} />
            ))}
          </div>
        </div>

        <TokenomicsCTA />
      </div>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f1729] to-transparent z-10" />
    </section>
  );
};