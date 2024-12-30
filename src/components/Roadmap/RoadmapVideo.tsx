import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { LineChart } from "lucide-react";

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
          <div className="flex items-center gap-2 text-white/60 hover:text-white/80 transition-colors cursor-pointer mb-2">
            <LineChart className="w-4 h-4" />
            <span className="text-sm">Market Analysis & Growth Strategy</span>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 bg-black/80 backdrop-blur-lg border-white/10">
          <p className="text-sm text-white/80">
            In-depth market analysis and strategic roadmap for sustainable growth
          </p>
        </HoverCardContent>
      </HoverCard>

      <div className="relative w-full max-w-[280px] mx-auto rounded-lg overflow-hidden glass-card">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        <iframe
          width="100%"
          height="157"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1&start=43"
          title="Market Analysis & Growth Strategy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg border border-white/20 hover:border-white/40 transition-colors duration-300"
        />
        <div className="absolute inset-0 ring-1 ring-white/10 rounded-lg pointer-events-none" />
      </div>
    </motion.div>
  );
};