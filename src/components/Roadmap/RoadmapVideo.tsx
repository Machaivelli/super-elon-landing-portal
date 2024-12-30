import { motion } from "framer-motion";
import { useState } from "react";
import { LineChart, TrendingUp, PieChart, Sparkles } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export const RoadmapVideo = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto my-8"
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="flex items-center gap-2 text-theme-primary hover:text-theme-light transition-colors cursor-pointer mb-4">
            <TrendingUp className="w-5 h-5" />
            <span className="text-base font-semibold">Market Analysis & Growth Projections</span>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 bg-black/80 backdrop-blur-lg border-theme-primary/10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <LineChart className="w-4 h-4 text-theme-primary" />
              <span className="text-sm font-semibold">Technical Analysis</span>
            </div>
            <p className="text-sm text-white/80">
              In-depth market analysis and future projections
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <div className="relative w-full max-w-xl mx-auto rounded-xl overflow-hidden glass-card group">
        {!showVideo ? (
          <motion.div 
            onClick={() => setShowVideo(true)}
            className="cursor-pointer relative group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="aspect-video bg-gradient-to-br from-theme-dark/90 to-theme-dark flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
              {/* Animated sparkles */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    "radial-gradient(circle at 50% 50%, rgba(155, 135, 245, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 50% 50%, rgba(155, 135, 245, 0.2) 20%, transparent 70%)",
                    "radial-gradient(circle at 50% 50%, rgba(155, 135, 245, 0.1) 0%, transparent 50%)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <div className="bg-theme-primary/10 p-4 rounded-full mb-4 relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, rgba(155, 135, 245, 0.2), rgba(155, 135, 245, 0.1), rgba(155, 135, 245, 0))",
                  }}
                />
                <LineChart className="w-8 h-8 text-theme-primary relative z-10" />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 relative z-10">
                Market Analysis & Technical Deep Dive
              </h3>
              <p className="text-white/70 text-sm max-w-md relative z-10">
                Comprehensive analysis of market trends, tokenomics, and growth projections
              </p>
              
              <motion.div
                className="mt-4 px-6 py-2 bg-theme-primary/20 rounded-full text-theme-primary text-sm relative z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  Watch Analysis
                  <Sparkles className="w-4 h-4" />
                </span>
              </motion.div>
            </div>
            
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(45deg, transparent, rgba(155, 135, 245, 0.2), transparent)",
                transform: "translateX(-100%)",
              }}
              animate={{
                transform: ["translateX(-100%)", "translateX(100%)"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            />
          </motion.div>
        ) : (
          <iframe
            width="100%"
            height="315"
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