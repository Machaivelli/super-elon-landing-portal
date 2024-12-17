import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

interface TokenomicsChartProps {
  data: Array<{
    title: string;
    percentage: number;
    color: string;
    glowColor: string;
    emoji: string;
  }>;
}

export const TokenomicsChart: React.FC<TokenomicsChartProps> = ({ data }) => {
  const chartData = data.map(item => ({
    name: item.title,
    value: item.percentage,
    color: item.glowColor,
    emoji: item.emoji
  }));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full max-w-[280px] aspect-square relative mx-auto"
    >
      {/* Enhanced glow effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse-glow" />
      
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius="80%"
            innerRadius="60%"
            dataKey="value"
            animationBegin={0}
            animationDuration={1500}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                className="hover:opacity-80 transition-opacity duration-300 cursor-pointer hover:scale-105 transform"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))'
                }}
              >
                <animate
                  attributeName="opacity"
                  values="0.7;1;0.7"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </Cell>
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-black/80 backdrop-blur-sm p-2 rounded-lg border border-white/10 text-sm"
                  >
                    <p className="text-white font-bold flex items-center gap-2 text-base">
                      {payload[0].payload.emoji} {payload[0].name}
                    </p>
                    <p className="text-yellow-400 font-mono text-lg">
                      {payload[0].value}%
                    </p>
                  </motion.div>
                );
              }
              return null;
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Emoji Overlays */}
      {chartData.map((item, index) => {
        const angle = (360 / chartData.length) * index;
        const radius = 100; // Adjust based on chart size
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <motion.div
            key={`emoji-${index}`}
            className="absolute text-xl transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
            whileHover={{ scale: 1.2 }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {item.emoji}
          </motion.div>
        );
      })}
    </motion.div>
  );
};