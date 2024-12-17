import { TokenomicsBackground } from './TokenomicsBackground';
import { TokenomicsTitle } from './TokenomicsTitle';
import { TokenomicsChart } from './TokenomicsChart';
import { TokenomicsCards } from './TokenomicsCards';
import { TokenomicsCTA } from './TokenomicsCTA';
import { motion } from 'framer-motion';

export const TokenomicsSection = () => {
  return (
    <section className="relative min-h-screen py-12 overflow-hidden">
      <TokenomicsBackground />
      
      <div className="relative container mx-auto px-4 z-20">
        <TokenomicsTitle />

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-3 gap-8 items-center mt-12"
        >
          <TokenomicsCards />
          <div className="lg:col-span-1 flex justify-center">
            <TokenomicsChart />
          </div>
        </motion.div>

        <TokenomicsCTA />
      </div>

      {/* Animated wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-24 fill-[#0f1729] transform rotate-180">
          <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
};