import { Rocket, DollarSign } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/lovable-uploads/1f26cd96-5271-4dae-95c6-7a0e045b6dea.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Floating elements */}
      <div className="absolute inset-0 bg-black/30">
        <img
          src="/lovable-uploads/8d2b8be3-006b-4e70-a33a-182c4ba7c2b6.png"
          alt="Floating coin"
          className="absolute w-16 h-16 hero-coin top-1/4 left-1/4"
        />
        <Rocket className="absolute w-12 h-12 text-neon-orange animate-float top-1/3 right-1/4" />
        <DollarSign className="absolute w-10 h-10 text-neon-yellow animate-float delay-1000 bottom-1/3 left-1/3" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <img
            src="/lovable-uploads/151bd015-eb26-4db6-82d4-4ec6741ed896.png"
            alt="Super Elon Coin Logo"
            className="w-48 h-48 mx-auto mb-8 animate-float rounded-full border-4 border-neon-blue shadow-lg shadow-neon-blue/50"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-yellow to-neon-orange bg-clip-text text-transparent">
            Super Elon Coin
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto">
            De ultieme memecoin geïnspireerd door de visionaire tech-titan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 text-white font-bold py-4 px-8 rounded-full neon-border"
            >
              Koop Nu
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 font-bold py-4 px-8 rounded-full"
            >
              Whitepaper
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};