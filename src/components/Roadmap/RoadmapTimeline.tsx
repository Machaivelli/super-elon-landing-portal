import { Rocket, ArrowUp, Lightbulb, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const phases = [
  {
    phase: 1,
    title: "Launch",
    description: "Initiating our journey with strong foundations",
    milestones: [
      "Token creation and smart contract deployment",
      "Official whitepaper publication",
      "Core community establishment",
      "Exchange listings"
    ],
    icon: Rocket,
    color: "bg-purple-500"
  },
  {
    phase: 2,
    title: "Growth",
    description: "Expanding through strategic partnerships",
    milestones: [
      "Blockchain project partnerships",
      "Strategic marketing campaigns",
      "Cross-chain integration",
      "Conference participation"
    ],
    icon: ArrowUp,
    color: "bg-blue-500"
  },
  {
    phase: 3,
    title: "Innovation",
    description: "Introducing advanced DeFi capabilities",
    milestones: [
      "Staking mechanisms launch",
      "NFT marketplace development",
      "Advanced smart contracts",
      "Real-world use cases"
    ],
    icon: Lightbulb,
    color: "bg-yellow-500"
  },
  {
    phase: 4,
    title: "Global Impact",
    description: "Making worldwide difference through blockchain",
    milestones: [
      "Sustainability projects",
      "Financial inclusion initiatives",
      "DAO establishment",
      "Global education programs"
    ],
    icon: Globe,
    color: "bg-green-500"
  }
];

export const RoadmapTimeline = () => {
  return (
    <div className="max-w-6xl mx-auto my-12">
      <div className="flex flex-nowrap overflow-x-auto gap-4 pb-6 px-4 hide-scrollbar">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-none w-[280px] glass-card p-4 relative group"
          >
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className={`${phase.color} bg-opacity-20 p-3 rounded-lg mb-4 
                                transition-all duration-300 cursor-pointer
                                group-hover:bg-opacity-30`}>
                  <phase.icon className="w-6 h-6 text-white" />
                </div>
              </HoverCardTrigger>
              <HoverCardContent 
                className="w-80 bg-black/80 backdrop-blur-lg border-white/10"
                side="top"
              >
                <ul className="space-y-2">
                  {phase.milestones.map((milestone, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${phase.color}`} />
                      {milestone}
                    </li>
                  ))}
                </ul>
              </HoverCardContent>
            </HoverCard>

            <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent 
                         bg-gradient-to-r from-theme-primary to-theme-light">
              Phase {phase.phase}: {phase.title}
            </h3>
            <p className="text-sm text-gray-300">{phase.description}</p>

            {/* Connecting line */}
            {index < phases.length - 1 && (
              <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-theme-primary/30" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};