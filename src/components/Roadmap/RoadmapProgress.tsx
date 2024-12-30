import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

export const RoadmapProgress = () => {
  const phases = [
    { name: "Launch", progress: 100, color: "bg-purple-500" },
    { name: "Growth", progress: 65, color: "bg-blue-500" },
    { name: "Innovation", progress: 30, color: "bg-yellow-500" },
    { name: "Global Impact", progress: 10, color: "bg-green-500" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto mb-12 space-y-3"
    >
      {phases.map((phase, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className="w-24 text-sm text-gray-400">{phase.name}</div>
          <div className="flex-1">
            <Progress 
              value={phase.progress} 
              className="h-2"
              indicatorClassName={phase.color}
            />
          </div>
          <div className="w-12 text-sm text-gray-400">{phase.progress}%</div>
        </div>
      ))}
    </motion.div>
  );
};