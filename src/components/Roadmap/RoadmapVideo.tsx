import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { LineChart, TrendingUp, PieChart } from "lucide-react";

export const RoadmapVideo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto my-8"
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer mb-4">
            <TrendingUp className="w-5 h-5" />
            <span className="text-base font-semibold">Super Elon Token Analysis & Market Projections</span>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 bg-black/80 backdrop-blur-lg border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <LineChart className="w-4 h-4 text-green-400" />
              <span className="text-sm font-semibold">Market Growth Analysis</span>
            </div>
            <p className="text-sm text-white/80">
              Comprehensive market analysis, tokenomics deep-dive, and future price projections
            </p>
            <div className="flex items-center gap-2 text-xs text-white/60">
              <PieChart className="w-3 h-3" />
              <span>45+ min detailed analysis</span>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>

      <div className="relative w-full rounded-xl overflow-hidden glass-card">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        <iframe
          width="100%"
          height="480"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1&start=43"
          title="Super Elon Market Analysis & Growth Projections"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl border border-white/20 hover:border-white/40 transition-colors duration-300"
        />
        <div className="absolute inset-0 ring-1 ring-white/10 rounded-xl pointer-events-none" />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 text-sm text-white/70">
        <div className="flex items-center gap-2">
          <LineChart className="w-4 h-4" />
          <span>Price Analysis</span>
        </div>
        <div className="flex items-center gap-2">
          <PieChart className="w-4 h-4" />
          <span>Market Share</span>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          <span>Growth Forecast</span>
        </div>
      </div>
    </motion.div>
  );
};