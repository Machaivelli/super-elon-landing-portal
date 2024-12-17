import { Button } from "./ui/button";
import { Rocket } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

export const Mission = () => {
  return (
    <div className="relative">
      {/* Gradient transition overlay */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0f1729] to-transparent z-10"></div>
      
      {/* Main content */}
      <div className="min-h-screen relative bg-gradient-to-b from-[#000000]/80 via-[#1a0f29] to-[#0f1729]">
        <div className="container mx-auto px-4 pt-32 relative z-20">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-orange bg-clip-text text-transparent font-['Orbitron']">
              Join The Mission
            </h2>
            
            {/* Phase 2 Image */}
            <div className="relative w-96 h-96 md:w-[800px] md:h-[800px] mx-auto mb-4 transform hover:scale-105 transition-transform duration-500">
              <img 
                src="/lovable-uploads/e562df77-0c3a-4788-a4fc-6ca16de09950.png"
                alt="Phase 2"
                className="w-full h-full object-contain rounded-lg animate-float"
              />
            </div>
            
            {/* Countdown Timer */}
            <CountdownTimer />
            
            <p className="text-2xl md:text-3xl mb-8 text-white font-['Orbitron']">
              Be part of the next generation of crypto pioneers. Together we'll reach for the stars and beyond.
            </p>
            
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 text-white font-bold py-4 px-8 rounded-full font-['Orbitron'] group"
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