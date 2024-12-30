import { motion } from "framer-motion";
import { RoadmapTitle } from "./RoadmapTitle";
import { RoadmapPhase } from "./RoadmapPhase";
import { RoadmapCTA } from "./RoadmapCTA";
import { RoadmapVideo } from "./RoadmapVideo";
import { Rocket, Target, Lightbulb, Handshake } from "lucide-react";

const phases = [
  {
    phase: 1,
    title: "Launch & Foundation",
    description: "Setting the groundwork for a revolutionary future",
    milestones: [
      "Smart Contract Deployment",
      "Security Audits",
      "Community Building",
      "Initial Exchange Listings"
    ],
    icon: Rocket,
    progress: 100,
    color: "theme-primary"
  },
  {
    phase: 2,
    title: "Growth & Expansion",
    description: "Scaling our reach and impact",
    milestones: [
      "Major Exchange Listings",
      "Strategic Partnerships",
      "Marketing Campaigns",
      "Community Events"
    ],
    icon: Target,
    progress: 65,
    color: "theme-primary"
  },
  {
    phase: 3,
    title: "Innovation",
    description: "Pushing the boundaries of what's possible",
    milestones: [
      "Advanced Features Release",
      "Cross-chain Integration",
      "DeFi Ecosystem Launch",
      "Innovation Fund Creation"
    ],
    icon: Lightbulb,
    progress: 30,
    color: "theme-primary"
  },
  {
    phase: 4,
    title: "Global Impact",
    description: "Creating lasting change worldwide",
    milestones: [
      "Global Adoption",
      "Industry Partnerships",
      "Sustainable Initiatives",
      "Community Governance"
    ],
    icon: Handshake,
    progress: 10,
    color: "theme-primary"
  }
];

export const RoadmapSection = () => {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-theme-primary/20 rounded-full"
              initial={{ opacity: 0.2 }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative container mx-auto px-4 z-20 max-w-4xl">
        <RoadmapTitle />
        
        <div className="max-w-3xl mx-auto space-y-6">
          <RoadmapVideo />
          {phases.map((phase, index) => (
            <RoadmapPhase
              key={index}
              {...phase}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
        
        <RoadmapCTA />
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
};