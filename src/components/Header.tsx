import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Rocket } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      {/* Optional Ticker Banner */}
      <div className="hidden md:block bg-gradient-to-r from-neon-purple/20 via-neon-blue/20 to-neon-purple/20 text-center py-1 text-sm animate-gradient-flow">
        <span className="text-white/90">
          Super Elon Coin | The Next x1000 Opportunity Awaits! 🚀
        </span>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/151bd015-eb26-4db6-82d4-4ec6741ed896.png"
              alt="Super Elon Coin"
              className="h-8 w-8 rounded-full animate-pulse-glow"
            />
            <span className="text-white font-bold text-lg font-['Orbitron']">
              Super Elon Coin
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-white hover:text-neon-blue transition-colors duration-200 font-['Orbitron'] text-sm group"
            >
              Home
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-200 bg-neon-blue"/>
            </a>
            <a 
              href="#tokenomics" 
              className="text-white hover:text-neon-blue transition-colors duration-200 font-['Orbitron'] text-sm group"
            >
              <span className="flex items-center gap-1">
                Tokenomics <Rocket className="h-3 w-3" />
              </span>
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-200 bg-neon-blue"/>
            </a>
            <Button
              variant="outline"
              size="sm"
              className="border-neon-orange text-neon-orange hover:bg-neon-orange/10 font-['Orbitron'] animate-pulse-glow"
            >
              Buy Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-neon-blue transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 py-4 px-2 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 mb-4">
              <a 
                href="#home" 
                className="text-white hover:text-neon-blue transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#tokenomics" 
                className="text-white hover:text-neon-blue transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Tokenomics
              </a>
              <Button
                variant="outline"
                size="sm"
                className="border-neon-orange text-neon-orange hover:bg-neon-orange/10 font-['Orbitron'] w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Buy Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};