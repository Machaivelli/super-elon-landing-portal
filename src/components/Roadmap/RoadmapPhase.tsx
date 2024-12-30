import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface RoadmapPhaseProps {
  phase: number;
  title: string;
  description: string;
  milestones: string[];
  icon: LucideIcon;
  color: string;
  isLeft?: boolean;
  progress: number;
}

export const RoadmapPhase = ({
  phase,
  title,
  description,
  milestones,
  icon: Icon,
  color,
  isLeft = true,
  progress
}: RoadmapPhaseProps) => {
  // Define icon colors based on phase
  const iconColors = {
    1: "text-neon-yellow",
    2: "text-neon-purple",
    3: "text-neon-blue",
    4: "text-neon-orange"
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className={`flex items-center gap-4 ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-4`}
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative group cursor-pointer"
          >
            {/* Progress circle */}
            <svg className="w-10 h-10">
              <circle
                className="text-gray-800"
                strokeWidth="2"
                stroke="currentColor"
                fill="transparent"
                r="16"
                cx="20"
                cy="20"
              />
              <circle
                className={`text-theme-primary transition-all duration-1000 ease-out`}
                strokeWidth="2"
                strokeDasharray={100}
                strokeDashoffset={100 - (100 * progress) / 100}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="16"
                cx="20"
                cy="20"
              />
            </svg>
            
            {/* Icon container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="relative"
              >
                <Icon className={`w-4 h-4 ${iconColors[phase as keyof typeof iconColors]}`} />
              </motion.div>
            </div>
          </motion.div>
        </HoverCardTrigger>
        <HoverCardContent 
          className="w-64 bg-black/90 backdrop-blur-lg border-theme-primary/10"
          side={isLeft ? "right" : "left"}
        >
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-theme-primary">Phase {phase} Milestones</h4>
            <ul className="space-y-1">
              {milestones.map((milestone, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-xs text-white/80"
                >
                  <span className={`w-1 h-1 rounded-full ${iconColors[phase as keyof typeof iconColors]}`} />
                  {milestone}
                </motion.li>
              ))}
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>

      <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'}`}>
        <motion.h3 
          className={`text-sm font-bold mb-1 ${iconColors[phase as keyof typeof iconColors]} font-['Orbitron']`}
          whileHover={{ scale: 1.02 }}
        >
          Phase {phase}: {title}
        </motion.h3>
        <p className="text-xs text-white/80">{description}</p>
      </div>
    </motion.div>
  );
};