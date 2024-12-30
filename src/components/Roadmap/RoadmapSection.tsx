import { motion } from "framer-motion";
import { RoadmapTitle } from "./RoadmapTitle";
import { RoadmapIntro } from "./RoadmapIntro";
import { RoadmapTimeline } from "./RoadmapTimeline";
import { RoadmapCTA } from "./RoadmapCTA";
import { RoadmapBackground } from "./RoadmapBackground";

export const RoadmapSection = () => {
  return (
    <section id="roadmap" className="relative min-h-screen py-24 overflow-hidden">
      <RoadmapBackground />
      
      <div className="container relative z-10 mx-auto px-4">
        <RoadmapTitle />
        <RoadmapIntro />
        <RoadmapTimeline />
        <RoadmapCTA />
      </div>
    </section>
  );
};