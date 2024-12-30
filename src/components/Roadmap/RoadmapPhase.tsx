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
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className={`flex items-center gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-16`}
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className={`relative group cursor-pointer`}
          >
            {/* Progress circle */}
            <svg className="w-24 h-24">
              <circle
                className="text-gray-800"
                strokeWidth="4"
                stroke="currentColor"
                fill="transparent"
                r="38"
                cx="48"
                cy="48"
              />
              <circle
                className={`text-yellow-400 transition-all duration-1000 ease-out`}
                strokeWidth="4"
                strokeDasharray={240}
                strokeDashoffset={240 - (240 * progress) / 100}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="38"
                cx="48"
                cy="48"
              />
            </svg>
            
            {/* Icon container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="relative"
              >
                <Icon className="w-8 h-8 text-yellow-400" />
                <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </HoverCardTrigger>
        <HoverCardContent 
          className="w-80 bg-black/90 backdrop-blur-lg border-yellow-400/10"
          side={isLeft ? "right" : "left"}
        >
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-yellow-400">Phase {phase} Milestones</h4>
            <ul className="space-y-2">
              {milestones.map((milestone, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-white/80"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  {milestone}
                </motion.li>
              ))}
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>

      <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'}`}>
        <motion.h3 
          className="text-2xl font-bold mb-2 text-yellow-400 font-['Orbitron']"
          whileHover={{ scale: 1.05 }}
        >
          Phase {phase}: {title}
        </motion.h3>
        <p className="text-white/80 mb-4">{description}</p>
      </div>
    </motion.div>
  );
};