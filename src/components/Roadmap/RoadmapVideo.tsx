import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Info } from "lucide-react";

export const RoadmapVideo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-lg mx-auto my-8"
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="flex items-center gap-2 text-yellow-400/60 hover:text-yellow-400/80 transition-colors cursor-pointer mb-2">
            <Info className="w-4 h-4" />
            <span className="text-sm font-['Orbitron']">View Project Overview</span>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 bg-black/80 backdrop-blur-lg border-yellow-400/10">
          <p className="text-sm text-yellow-400/80 font-['Orbitron']">
            A brief overview of our project's vision and goals
          </p>
        </HoverCardContent>
      </HoverCard>

      <div className="relative w-full max-w-md mx-auto aspect-video rounded-lg overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=0&showinfo=0&rel=0"
          title="Project Vision"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-colors duration-300"
        />
      </div>
    </motion.div>
  );
};