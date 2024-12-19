import React from 'react';
import { TokenomicsTitle } from './TokenomicsTitle';
import { TokenomicsChart } from './TokenomicsChart';
import { TokenomicsCTA } from './TokenomicsCTA';
import { ScrollingStats } from './ScrollingStats';
import { TokenomicsBackground } from './TokenomicsBackground';
import { SplineBackground } from '../SplineBackground';

export const TokenomicsSection = () => {
  return (
    <>
      <SplineBackground />
      <TokenomicsBackground />
      <div className="relative container mx-auto px-4 z-20">
        <TokenomicsTitle />
        <TokenomicsChart />
        <ScrollingStats />
        <TokenomicsCTA />
      </div>
    </>
  );
};