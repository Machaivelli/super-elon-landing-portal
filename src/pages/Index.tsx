import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { Mission } from "@/components/Mission";
import { TokenomicsSection } from "@/components/Tokenomics/TokenomicsSection";
import { TeamSection } from "@/components/Team/TeamSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { FloatingDecorations } from "@/components/FloatingDecorations";
import { AudioPlayer } from "@/components/AudioPlayer";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen relative">
      <AnimatedBackground />
      <FloatingDecorations />
      <Header />
      <div className="space-y-0">
        <section className="section-transition">
          <Hero />
        </section>
        <section className="section-transition">
          <Mission />
        </section>
        <section className="section-transition">
          <TokenomicsSection />
        </section>
        <section className="section-transition">
          <TeamSection />
        </section>
      </div>
      <Footer />
      <AudioPlayer />
    </main>
  );
};

export default Index;