import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Header } from "@/components/Header";
import { Mission } from "@/components/Mission";
import { TokenomicsSection } from "@/components/Tokenomics/TokenomicsSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <TokenomicsSection />
      <Features />
    </main>
  );
};

export default Index;