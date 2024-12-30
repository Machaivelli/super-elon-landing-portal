import { motion } from "framer-motion";
import { RoadmapTitle } from "./RoadmapTitle";
import { RoadmapIntro } from "./RoadmapIntro";
import { RoadmapTimeline } from "./RoadmapTimeline";
import { RoadmapCTA } from "./RoadmapCTA";
import { RoadmapBackground } from "./RoadmapBackground";
import { RoadmapProgress } from "./RoadmapProgress";
import { RoadmapVideo } from "./RoadmapVideo";

export const RoadmapSection = () => {
  return (
    <section id="roadmap" className="relative min-h-screen py-24 overflow-hidden">
      <RoadmapBackground />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 mx-auto px-4"
      >
        <RoadmapTitle />
        <RoadmapIntro />
        <RoadmapProgress />
        <RoadmapTimeline />
        <RoadmapVideo />
        <RoadmapCTA />
      </motion.div>
    </section>
  );
};