import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

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
      {/* Phase Icon */}
      <div className={`hidden md:flex items-center justify-center w-24 h-24 rounded-full ${color} bg-opacity-20 border-2 border-opacity-50 animate-pulse`}>
        <Icon className="w-12 h-12 text-white" />
      </div>

      {/* Content */}
      <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'}`}>
        <h3 className="text-2xl font-bold mb-2 text-white">
          Phase {phase}: {title}
        </h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <ul className={`space-y-2 ${isLeft ? 'pl-6' : 'pr-6'}`}>
          {milestones.map((milestone, index) => (
            <li key={index} className="text-gray-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
              {milestone}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};