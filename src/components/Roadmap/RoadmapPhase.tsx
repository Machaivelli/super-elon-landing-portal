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
      className={`flex items-center gap-4 ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-6`}
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative group cursor-pointer"
          >
            {/* Progress circle */}
            <svg className="w-12 h-12">
              <circle
                className="text-gray-800"
                strokeWidth="3"
                stroke="currentColor"
                fill="transparent"
                r="20"
                cx="24"
                cy="24"
              />
              <circle
                className={`text-theme-primary transition-all duration-1000 ease-out`}
                strokeWidth="3"
                strokeDasharray={125}
                strokeDashoffset={125 - (125 * progress) / 100}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="20"
                cx="24"
                cy="24"
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
                <Icon className={`w-5 h-5 text-theme-primary`} />
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
                  <span className="w-1 h-1 rounded-full bg-theme-primary" />
                  {milestone}
                </motion.li>
              ))}
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>

      <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'}`}>
        <motion.h3 
          className="text-base font-bold mb-1 text-theme-primary font-['Orbitron']"
          whileHover={{ scale: 1.02 }}
        >
          Phase {phase}: {title}
        </motion.h3>
        <p className="text-xs text-white/80">{description}</p>
      </div>
    </motion.div>
  );
};