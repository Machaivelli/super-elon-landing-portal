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
}

export const RoadmapPhase = ({
  phase,
  title,
  description,
  milestones,
  icon: Icon,
  color,
  isLeft = true
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
            className={`hidden md:flex items-center justify-center w-24 h-24 rounded-full 
                       ${color} bg-opacity-20 border-2 border-opacity-50 
                       cursor-pointer transition-all duration-300
                       hover:bg-opacity-30 hover:border-opacity-70
                       group relative font-['Orbitron']`}
          >
            <Icon className="w-12 h-12 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full animate-pulse-glow opacity-50" />
          </motion.div>
        </HoverCardTrigger>
        <HoverCardContent 
          className="w-80 bg-black/80 backdrop-blur-lg border-yellow-400/10 font-['Orbitron']"
          side={isLeft ? "right" : "left"}
        >
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-yellow-400">Phase {phase} Details</h4>
            <p className="text-sm text-yellow-400/80">{description}</p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'} font-['Orbitron']`}>
        <motion.h3 
          className="text-2xl font-bold mb-2 text-yellow-400"
          whileHover={{ scale: 1.05 }}
        >
          Phase {phase}: {title}
        </motion.h3>
        <p className="text-yellow-400/80 mb-4">{description}</p>
        <ul className={`space-y-2 ${isLeft ? 'pl-6' : 'pr-6'}`}>
          {milestones.map((milestone, index) => (
            <motion.li 
              key={index} 
              className="text-yellow-400/60 flex items-center gap-2"
              initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <span className={`w-2 h-2 rounded-full ${color} flex-shrink-0`} />
              {milestone}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
