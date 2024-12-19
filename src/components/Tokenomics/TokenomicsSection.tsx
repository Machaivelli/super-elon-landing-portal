import React from 'react';
import { TokenomicsTitle } from './TokenomicsTitle';
import { TokenomicsChart } from './TokenomicsChart';
import { TokenomicsCTA } from './TokenomicsCTA';
import { ScrollingStats } from './ScrollingStats';
import { TokenomicsBackground } from './TokenomicsBackground';
import { SplineBackground } from '../SplineBackground';

export const TokenomicsSection = () => {
  const tokenomicsData = [
    {
      title: "Community",
      percentage: 40,
      color: "#FFD700",
      glowColor: "rgba(255, 215, 0, 0.5)",
      emoji: "🌟"
    },
    {
      title: "Development",
      percentage: 25,
      color: "#FF69B4",
      glowColor: "rgba(255, 105, 180, 0.5)",
      emoji: "⚙️"
    },
    {
      title: "Marketing",
      percentage: 20,
      color: "#00FF00",
      glowColor: "rgba(0, 255, 0, 0.5)",
      emoji: "📢"
    },
    {
      title: "Team",
      percentage: 15,
      color: "#4169E1",
      glowColor: "rgba(65, 105, 225, 0.5)",
      emoji: "👥"
    }
  ];

  return (
    <>
      <SplineBackground />
      <TokenomicsBackground />
      <div className="relative container mx-auto px-4 z-20">
        <TokenomicsTitle />
        <TokenomicsChart data={tokenomicsData} />
        <ScrollingStats />
        <TokenomicsCTA />
      </div>
    </>
  );
};