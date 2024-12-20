import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Rocket, Users, ListOrdered } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-theme-dark/20 backdrop-blur-sm border-b border-theme-primary/10">
      {/* Optional Ticker Banner */}
      <div className="hidden md:block bg-gradient-to-r from-theme-primary/20 via-theme-secondary/20 to-theme-primary/20 text-center py-1 text-sm animate-gradient-flow">
        <span className="text-theme-light">
          The Next x1000 Opportunity Awaits! 🚀
        </span>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-theme-primary via-neon-purple to-theme-secondary rounded-full blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
              <img
                src="/lovable-uploads/a3d0231f-607a-4a29-8dd8-5bb4d6a542cf.png"
                alt="Super Elon Coin"
                className="relative h-24 w-24 object-contain transition-all duration-300 transform hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-theme-light hover:text-theme-primary transition-colors duration-200 font-['Orbitron'] text-sm group"
            >
              Home
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-200 bg-theme-primary"/>
            </button>
            <button 
              onClick={() => scrollToSection('mission')}
              className="text-theme-light hover:text-theme-primary transition-colors duration-200 font-['Orbitron'] text-sm group"
            >
              <span className="flex items-center gap-1">
                Mission <ListOrdered className="h-3 w-3" />
              </span>
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-200 bg-theme-primary"/>
            </button>
            <button 
              onClick={() => scrollToSection('tokenomics')}
              className="text-theme-light hover:text-theme-primary transition-colors duration-200 font-['Orbitron'] text-sm group"
            >
              <span className="flex items-center gap-1">
                Tokenomics <Rocket className="h-3 w-3" />
              </span>
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-200 bg-theme-primary"/>
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-theme-light hover:text-theme-primary transition-colors duration-200 font-['Orbitron'] text-sm group"
            >
              <span className="flex items-center gap-1">
                Dream Team <Users className="h-3 w-3" />
              </span>
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-200 bg-theme-primary"/>
            </button>
            <Button
              variant="outline"
              size="sm"
              className="border-theme-primary text-theme-primary hover:bg-theme-primary/10 font-['Orbitron'] animate-pulse-glow"
            >
              Buy Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-theme-light hover:text-theme-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 py-4 px-2 bg-theme-dark/40 backdrop-blur-md rounded-lg border border-theme-primary/10 mb-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-theme-light hover:text-theme-primary transition-colors px-4 py-2 rounded-lg hover:bg-theme-primary/5 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('mission')}
                className="text-theme-light hover:text-theme-primary transition-colors px-4 py-2 rounded-lg hover:bg-theme-primary/5 text-left"
              >
                Mission
              </button>
              <button 
                onClick={() => scrollToSection('tokenomics')}
                className="text-theme-light hover:text-theme-primary transition-colors px-4 py-2 rounded-lg hover:bg-theme-primary/5 text-left"
              >
                Tokenomics
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-theme-light hover:text-theme-primary transition-colors px-4 py-2 rounded-lg hover:bg-theme-primary/5 text-left"
              >
                Dream Team
              </button>
              <Button
                variant="outline"
                size="sm"
                className="border-theme-primary text-theme-primary hover:bg-theme-primary/10 font-['Orbitron'] w-full"
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