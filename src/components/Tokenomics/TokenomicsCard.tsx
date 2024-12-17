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
      whileHover={{ scale: 1.02 }}
      className="glass-card p-6 relative overflow-hidden group border border-white/10"
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Glow Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        style={{ background: `linear-gradient(45deg, ${glowColor}, transparent)` }}
      />

      <div className="flex items-start gap-4">
        <div
          className={`p-3 rounded-lg bg-gradient-to-br ${color} text-white animate-pulse-glow`}
        >
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1 font-serif">{title}</h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl font-bold text-yellow-400">{percentage}%</span>
            <span className="text-gray-400">({amount})</span>
          </div>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};