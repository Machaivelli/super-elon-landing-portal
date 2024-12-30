import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

export const RoadmapProgress = () => {
  const phases = [
    { name: "Launch", progress: 100 },
    { name: "Growth", progress: 65 },
    { name: "Innovation", progress: 30 },
    { name: "Global Impact", progress: 10 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto mb-16 space-y-6"
    >
      {phases.map((phase, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between text-sm text-gray-300">
            <span>Phase {index + 1}: {phase.name}</span>
            <span>{phase.progress}%</span>
          </div>
          <Progress 
            value={phase.progress} 
            className="h-2"
            indicatorClassName={`
              ${index === 0 ? 'bg-purple-500' : ''}
              ${index === 1 ? 'bg-blue-500' : ''}
              ${index === 2 ? 'bg-yellow-500' : ''}
              ${index === 3 ? 'bg-green-500' : ''}
            `}
          />
        </div>
      ))}
    </motion.div>
  );
};