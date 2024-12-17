import { TokenomicsBackground } from './TokenomicsBackground';
import { TokenomicsTitle } from './TokenomicsTitle';
import { TokenomicsChart } from './TokenomicsChart';
import { TokenomicsCard } from './TokenomicsCard';
import { TokenomicsCTA } from './TokenomicsCTA';
import { ElonBadge } from './ElonBadge';
import { useIsMobile } from '@/hooks/use-mobile';
import { tokenomicsData } from './tokenomicsData';

export const TokenomicsSection = () => {
  const isMobile = useIsMobile();

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
        {!isMobile && <ElonBadge />}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f1729] to-transparent z-10" />
    </section>
  );
};