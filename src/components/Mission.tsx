import { Button } from "./ui/button";
import { Rocket } from "lucide-react";

export const Mission = () => {
  return (
    <div className="relative">
      {/* Gradient transition overlay */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0f1729] to-transparent z-10"></div>
      
      {/* Main content */}
      <div 
        className="min-h-screen relative"
        style={{
          backgroundImage: "url('/lovable-uploads/c4b71e3b-ca71-43ea-9c85-0a29e9603a9c.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-black/10" />
        
        <div className="container mx-auto px-4 pt-32 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-orange bg-clip-text text-transparent font-['Orbitron'] animate-pulse">
              Join The Mission
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white font-['Orbitron']">
              Be part of the next generation of crypto pioneers. Together we'll reach for the stars and beyond.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 text-white font-bold py-4 px-8 rounded-full neon-border font-['Orbitron'] group"
            >
              <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};