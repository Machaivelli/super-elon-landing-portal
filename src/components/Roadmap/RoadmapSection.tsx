import { motion } from "framer-motion";
import { RoadmapTitle } from "./RoadmapTitle";
import { RoadmapTimeline } from "./RoadmapTimeline";
import { RoadmapCTA } from "./RoadmapCTA";
import { RoadmapProgress } from "./RoadmapProgress";

export const RoadmapSection = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-b from-[#0f1729] via-[#1a0f29] to-[#0f1729]">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 backdrop-blur-sm" />
      
      <div className="relative container mx-auto px-4 z-20">
        <RoadmapTitle />
        <RoadmapProgress />
        <RoadmapTimeline />
        <RoadmapCTA />
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f1729] to-transparent z-10" />
    </section>
  );
};