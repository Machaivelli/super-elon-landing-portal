import { motion } from "framer-motion";
import { useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { LineChart, TrendingUp, PieChart } from "lucide-react";

export const RoadmapVideo = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto my-8"
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer mb-4">
            <TrendingUp className="w-5 h-5" />
            <span className="text-base font-semibold">Market Analysis & Growth Projections</span>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 bg-black/80 backdrop-blur-lg border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <LineChart className="w-4 h-4 text-green-400" />
              <span className="text-sm font-semibold">Technical Analysis</span>
            </div>
            <p className="text-sm text-white/80">
              In-depth market analysis and future projections
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <div className="relative w-full rounded-xl overflow-hidden glass-card">
        {!showVideo ? (
          <div 
            onClick={() => setShowVideo(true)}
            className="cursor-pointer relative group"
          >
            <div className="aspect-video bg-gradient-to-br from-theme-dark/90 to-theme-dark flex flex-col items-center justify-center p-8 text-center">
              <div className="bg-theme-primary/10 p-6 rounded-full mb-4">
                <LineChart className="w-12 h-12 text-theme-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Market Analysis & Technical Deep Dive
              </h3>
              <p className="text-white/70 text-sm max-w-md">
                Comprehensive analysis of market trends, tokenomics, and growth projections
              </p>
              <div className="mt-4 px-6 py-2 bg-theme-primary/20 rounded-full text-theme-primary text-sm">
                Click to Watch Analysis
              </div>
            </div>
            <div className="absolute inset-0 bg-theme-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ) : (
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="Market Analysis & Technical Deep Dive"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          />
        )}
      </div>
    </motion.div>
  );
};