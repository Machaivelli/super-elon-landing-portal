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
    <main className="bg-transparent min-h-screen relative flex flex-col items-center">
      <AnimatedBackground />
      <FloatingDecorations />
      <Header />
      <AudioPlayer />
      <div className="w-full space-y-0 scroll-smooth">
        <section id="home" className="section-transition pt-16 flex justify-center items-center">
          <Hero />
        </section>
        <section id="mission" className="section-transition flex justify-center items-center">
          <Mission />
        </section>
        <section id="tokenomics" className="section-transition flex justify-center items-center">
          <TokenomicsSection />
        </section>
        <section id="team" className="section-transition flex justify-center items-center">
          <TeamSection />
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Index;