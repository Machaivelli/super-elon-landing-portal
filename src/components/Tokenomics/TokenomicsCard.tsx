import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TokenomicsCardProps {
  title: string;
  percentage: number;
  amount: string;
  description: string;
  icon: LucideIcon;
  color: string;
  glowColor: string;
}

export const TokenomicsCard: React.FC<TokenomicsCardProps> = ({
  title,
  percentage,
  amount,
  description,
  icon: Icon,
  color,
  glowColor
}) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="glass-card p-4 relative overflow-hidden group"
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Enhanced glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        style={{ background: `linear-gradient(45deg, ${glowColor}, transparent)` }}
      />

      <div className="flex items-start gap-3">
        <div
          className={`p-2 rounded-lg bg-gradient-to-br ${color} text-white animate-pulse-glow`}
        >
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-1 font-serif">{title}</h3>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl font-bold text-yellow-400">{percentage}%</span>
            <span className="text-sm text-gray-400">({amount})</span>
          </div>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};