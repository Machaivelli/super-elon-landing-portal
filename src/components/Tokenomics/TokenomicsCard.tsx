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
  emoji: string;
}

export const TokenomicsCard: React.FC<TokenomicsCardProps> = ({
  title,
  percentage,
  amount,
  description,
  icon: Icon,
  color,
  glowColor,
  emoji
}) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        y: -2,
        transition: { duration: 0.2 }
      }}
      className="glass-card p-2 relative overflow-hidden group rounded-lg border border-white/10"
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

      <div className="flex items-start gap-2">
        <div
          className={`p-1 rounded-lg bg-gradient-to-br ${color} text-white animate-pulse-glow relative group`}
        >
          <Icon className="w-3 h-3" />
          <span className="absolute -top-1 -right-1 text-xs transform group-hover:scale-125 transition-transform">
            {emoji}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-bold text-white mb-0.5 font-serif">{title}</h3>
          <div className="flex items-center gap-1 mb-0.5">
            <span className="text-base font-bold text-yellow-400">{percentage}%</span>
            <span className="text-xs text-gray-400">({amount})</span>
          </div>
          <p className={`text-xs text-gray-300 ${title !== "Team & Development" ? "line-clamp-2" : ""}`}>
            {description}
          </p>
        </div>
      </div>

      {/* Animated border glow */}
      <div className="absolute inset-0 -z-10 animate-pulse-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-xl" style={{
          background: `linear-gradient(45deg, ${glowColor}20, transparent)`,
        }} />
      </div>
    </motion.div>
  );
};