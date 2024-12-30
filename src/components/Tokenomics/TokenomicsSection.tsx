import { TokenomicsTitle } from './TokenomicsTitle';
import { TokenomicsChart } from './TokenomicsChart';
import { TokenomicsCard } from './TokenomicsCard';
import { TokenomicsCTA } from './TokenomicsCTA';
import { Rocket, Wallet, Shield, Megaphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const tokenDistribution = [
  {
    title: 'Liquidity Pool',
    percentage: 40,
    color: 'from-yellow-500 to-yellow-600',
    glowColor: '#FFD700',
    emoji: '💧'
  },
  {
    title: 'Development',
    percentage: 20,
    color: 'from-blue-500 to-blue-600',
    glowColor: '#4169E1',
    emoji: '🚀'
  },
  {
    title: 'Marketing',
    percentage: 15,
    color: 'from-purple-500 to-purple-600',
    glowColor: '#8A2BE2',
    emoji: '📢'
  },
  {
    title: 'Team',
    percentage: 10,
    color: 'from-green-500 to-green-600',
    glowColor: '#32CD32',
    emoji: '👥'
  },
  {
    title: 'Reserve',
    percentage: 15,
    color: 'from-red-500 to-red-600',
    glowColor: '#DC143C',
    emoji: '🏦'
  }
];

const cardData = [
  {
    title: 'Liquidity Pool',
    percentage: 40,
    amount: '400,000,000 SEC',
    description: 'Ensuring stable trading and price discovery through deep liquidity.',
    icon: Wallet,
    color: 'from-yellow-500 to-yellow-600',
    glowColor: '#FFD700',
    emoji: '💧'
  },
  {
    title: 'Development',
    percentage: 20,
    amount: '200,000,000 SEC',
    description: 'Funding continuous platform improvements and new features.',
    icon: Rocket,
    color: 'from-blue-500 to-blue-600',
    glowColor: '#4169E1',
    emoji: '🚀'
  },
  {
    title: 'Marketing',
    percentage: 15,
    amount: '150,000,000 SEC',
    description: 'Growing our community and expanding market presence.',
    icon: Megaphone,
    color: 'from-purple-500 to-purple-600',
    glowColor: '#8A2BE2',
    emoji: '📢'
  },
  {
    title: 'Security',
    percentage: 10,
    amount: '100,000,000 SEC',
    description: 'Maintaining robust security measures and regular audits.',
    icon: Shield,
    color: 'from-green-500 to-green-600',
    glowColor: '#32CD32',
    emoji: '🛡️'
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