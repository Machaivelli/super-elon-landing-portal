import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { Mission } from "@/components/Mission";
import { TokenomicsSection } from "@/components/Tokenomics/TokenomicsSection";
import { RoadmapSection } from "@/components/Roadmap/RoadmapSection";
import { TeamSection } from "@/components/Team/TeamSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { FloatingDecorations } from "@/components/FloatingDecorations";
import { AudioPlayer } from "@/components/AudioPlayer";
import { Footer } from "@/components/Footer";
import { SplineBackground } from "@/components/SplineBackground";
import { useEffect, useState } from "react";

const Index = () => {
  const [showBackgrounds, setShowBackgrounds] = useState(false);

  useEffect(() => {
    // Delay loading of background elements
    const timer = setTimeout(() => {
      setShowBackgrounds(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-transparent min-h-screen relative">
      {showBackgrounds && (
        <>
          <SplineBackground />
          <AnimatedBackground />
          <FloatingDecorations />
        </>
      )}
      <Header />
      <AudioPlayer />
      <div className="space-y-0 scroll-smooth">
        <section id="home" className="section-transition pt-16">
          <Hero />
        </section>
        <section id="tokenomics" className="section-transition">
          <TokenomicsSection />
        </section>
        <section id="mission" className="section-transition">
          <Mission />
        </section>
        <section id="roadmap" className="section-transition">
          <RoadmapSection />
        </section>
        <section id="team" className="section-transition">
          <TeamSection />
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Index;