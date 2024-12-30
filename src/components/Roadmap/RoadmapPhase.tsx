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
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className={`flex items-center gap-4 ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-8`}
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative group cursor-pointer"
          >
            {/* Progress circle */}
            <svg className="w-16 h-16">
              <circle
                className="text-gray-800"
                strokeWidth="4"
                stroke="currentColor"
                fill="transparent"
                r="28"
                cx="32"
                cy="32"
              />
              <circle
                className={`text-${color} transition-all duration-1000 ease-out`}
                strokeWidth="4"
                strokeDasharray={175}
                strokeDashoffset={175 - (175 * progress) / 100}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="28"
                cx="32"
                cy="32"
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
                <Icon className={`w-6 h-6 text-${color}`} />
              </motion.div>
            </div>
          </motion.div>
        </HoverCardTrigger>
        <HoverCardContent 
          className="w-64 bg-black/90 backdrop-blur-lg border-yellow-400/10"
          side={isLeft ? "right" : "left"}
        >
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-yellow-400">Phase {phase} Milestones</h4>
            <ul className="space-y-1">
              {milestones.map((milestone, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-xs text-white/80"
                >
                  <span className="w-1 h-1 rounded-full bg-yellow-400" />
                  {milestone}
                </motion.li>
              ))}
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>

      <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'}`}>
        <motion.h3 
          className="text-lg font-bold mb-1 text-yellow-400 font-['Orbitron']"
          whileHover={{ scale: 1.02 }}
        >
          Phase {phase}: {title}
        </motion.h3>
        <p className="text-sm text-white/80">{description}</p>
      </div>
    </motion.div>
  );
};