import { Button } from "./ui/button";
import { Rocket } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

export const Mission = () => {
  return (
    <div className="relative">
      {/* Gradient transition overlay */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0f1729] to-transparent z-10"></div>
      
      {/* Main content */}
      <div className="min-h-screen relative">
        <div className="container mx-auto px-4 pt-32 relative z-20">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-orange bg-clip-text text-transparent font-['Orbitron'] animate-pulse">
              Join The Mission
            </h2>
            
            {/* Phase 2 Image */}
            <div className="relative w-48 h-48 mx-auto mb-8 transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/lovable-uploads/102f6c7a-6409-4cb6-92c7-b646064e0589.png"
                alt="Phase 2"
                className="w-full h-full object-contain rounded-lg shadow-[0_0_30px_rgba(0,243,255,0.2)]"
              />
            </div>
            
            {/* Countdown Timer */}
            <CountdownTimer />
            
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