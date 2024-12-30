import { TokenomicsTitle } from './TokenomicsTitle';
import { TokenomicsChart } from './TokenomicsChart';
import { TokenomicsCard } from './TokenomicsCard';
import { TokenomicsCTA } from './TokenomicsCTA';
import { Rocket, Wallet, Shield, Megaphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const tokenDistribution = [
  { name: 'Liquidity', value: 40 },
  { name: 'Development', value: 20 },
  { name: 'Marketing', value: 15 },
  { name: 'Team', value: 10 },
  { name: 'Reserve', value: 15 },
];

const cardData = [
  {
    title: 'Liquidity',
    description: 'Ensuring stability and growth through liquidity.',
    icon: Wallet,
  },
  {
    title: 'Development',
    description: 'Continuous improvement and feature additions.',
    icon: Rocket,
  },
  {
    title: 'Marketing',
    description: 'Expanding our reach and community engagement.',
    icon: Megaphone,
  },
  {
    title: 'Security',
    description: 'Prioritizing user safety and smart contract audits.',
    icon: Shield,
  },
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
