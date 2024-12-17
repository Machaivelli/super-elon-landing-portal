import { Rocket, Users, Lock, Gift, Coins } from 'lucide-react';

export const tokenomicsData = [
  {
    title: "Community Rewards",
    percentage: 35,
    amount: "245,000,000 SEC",
    description: "Distributed to our amazing community through various initiatives and rewards programs",
    icon: Gift,
    color: "from-purple-500 to-purple-700",
    glowColor: "#a855f7",
    emoji: "🎁"
  },
  {
    title: "Liquidity Pool",
    percentage: 25,
    amount: "175,000,000 SEC",
    description: "Locked to ensure stable trading and price discovery",
    icon: Lock,
    color: "from-blue-500 to-blue-700",
    glowColor: "#3b82f6",
    emoji: "🔒"
  },
  {
    title: "Development",
    percentage: 20,
    amount: "140,000,000 SEC",
    description: "Allocated for technical development and platform improvements",
    icon: Rocket,
    color: "from-yellow-500 to-yellow-700",
    glowColor: "#eab308",
    emoji: "🚀"
  },
  {
    title: "Marketing",
    percentage: 10,
    amount: "70,000,000 SEC",
    description: "For promotional activities and expanding our reach",
    icon: Rocket,
    color: "from-red-500 to-red-700",
    glowColor: "#ef4444",
    emoji: "🔥"
  },
  {
    title: "Team",
    percentage: 7,
    amount: "49,000,000 SEC",
    description: "Reserved for team members and advisors",
    icon: Users,
    color: "from-green-500 to-green-700",
    glowColor: "#22c55e",
    emoji: "👥"
  },
  {
    title: "Treasury",
    percentage: 3,
    amount: "21,000,000 SEC",
    description: "Strategic reserves for future opportunities",
    icon: Coins,
    color: "from-orange-500 to-orange-700",
    glowColor: "#f97316",
    emoji: "💰"
  }
];