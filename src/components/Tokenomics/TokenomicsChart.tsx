import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

interface TokenomicsChartProps {
  data: Array<{
    title: string;
    percentage: number;
    color: string;
    glowColor: string;
  }>;
}

export const TokenomicsChart: React.FC<TokenomicsChartProps> = ({ data }) => {
  const chartData = data.map(item => ({
    name: item.title,
    value: item.percentage,
    color: item.glowColor
  }));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-md aspect-square relative"
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
            onMouseEnter={(data, index) => {
              // Handle hover animation if needed
            }}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                className="hover:opacity-80 transition-opacity duration-300"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))'
                }}
              />
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card p-4 rounded-lg border border-white/10"
                  >
                    <p className="text-white font-bold font-serif">{payload[0].name}</p>
                    <p className="text-yellow-400">{`${payload[0].value}%`}</p>
                  </motion.div>
                );
              }
              return null;
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
};