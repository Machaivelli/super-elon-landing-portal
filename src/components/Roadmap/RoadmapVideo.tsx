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
            <span className="text-sm font-['Orbitron']">Watch Project Vision & Technical Analysis</span>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 bg-black/80 backdrop-blur-lg border-yellow-400/10">
          <p className="text-sm text-yellow-400/80 font-['Orbitron']">
            Detailed technical analysis and future projections for Super Elon Coin
          </p>
        </HoverCardContent>
      </HoverCard>

      <div className="relative w-full max-w-md mx-auto aspect-video rounded-lg overflow-hidden glass-card">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-transparent pointer-events-none" />
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="Super Elon Coin Technical Analysis & Future Projections"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-colors duration-300"
        />
        <div className="absolute inset-0 ring-1 ring-yellow-400/10 rounded-lg pointer-events-none" />
      </div>
    </motion.div>
  );
};