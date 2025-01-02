import { TokenomicsTitle } from './TokenomicsTitle';
import { TokenomicsChart } from './TokenomicsChart';
import { TokenomicsCard } from './TokenomicsCard';
import { TokenomicsCTA } from './TokenomicsCTA';
import { Rocket, Wallet, Shield, Megaphone, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const tokenDistribution = [
  {
    title: 'Liquidity Pool',
    percentage: 70,
    color: 'from-yellow-500 to-yellow-600',
    glowColor: '#FFD700',
    emoji: '💧'
  },
  {
    title: 'Community & Airdrops',
    percentage: 15,
    color: 'from-purple-500 to-purple-600',
    glowColor: '#8A2BE2',
    emoji: '🎁'
  },
  {
    title: 'Team & Development',
    percentage: 10,
    color: 'from-blue-500 to-blue-600',
    glowColor: '#4169E1',
    emoji: '👥'
  },
  {
    title: 'Marketing',
    percentage: 3,
    color: 'from-green-500 to-green-600',
    glowColor: '#32CD32',
    emoji: '📢'
  },
  {
    title: 'Reserve',
    percentage: 2,
    color: 'from-red-500 to-red-600',
    glowColor: '#DC143C',
    emoji: '🏦'
  }
];

const cardData = [
  {
    title: 'Liquidity Pool',
    percentage: 70,
    amount: '700,000,000 SEC',
    description: 'Added to DEX liquidity pool at launch, locked for 12 months via smart contract for stability and trust.',
    icon: Wallet,
    color: 'from-yellow-500 to-yellow-600',
    glowColor: '#FFD700',
    emoji: '💧'
  },
  {
    title: 'Community & Airdrops',
    percentage: 15,
    amount: '150,000,000 SEC',
    description: 'Allocated for airdrops and staking rewards to encourage holding and ecosystem growth.',
    icon: Users,
    color: 'from-purple-500 to-purple-600',
    glowColor: '#8A2BE2',
    emoji: '🎁'
  },
  {
    title: 'Team & Development',
    percentage: 10,
    amount: '100,000,000 SEC',
    description: '6-month lock with 10% monthly release, ensuring long-term commitment to success.',
    icon: Rocket,
    color: 'from-blue-500 to-blue-600',
    glowColor: '#4169E1',
    emoji: '👥'
  },
  {
    title: 'Marketing & Partnerships',
    percentage: 3,
    amount: '30,000,000 SEC',
    description: 'Strategic partnerships and community-building with transparent expenditure reporting.',
    icon: Megaphone,
    color: 'from-green-500 to-green-600',
    glowColor: '#32CD32',
    emoji: '📢'
  }
];

export const TokenomicsSection = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 backdrop-blur-sm" />
      
      <div className="relative container mx-auto px-4 z-20">
        <TokenomicsTitle />

        <div className="grid lg:grid-cols-3 gap-8 items-start mt-12">
          <div className="lg:col-span-1">
            <TokenomicsChart data={tokenDistribution} />
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {cardData.map((card, index) => (
              <TokenomicsCard key={index} {...card} />
            ))}
          </div>
        </div>

        <TokenomicsCTA />
      </div>
    </section>
  );
};