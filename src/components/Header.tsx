import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Rocket, Users, Clock } from "lucide-react";

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
              <div className="absolute -inset-1 bg-gradient-to-r from-theme-primary via-neon-purple to-theme-secondary rounded-lg blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
              <img
                src="/lovable-uploads/9d3c4fe3-48a2-4917-9e77-2a723a0863d6.png"
                alt="Elon Musk"
                className="relative h-12 w-12 object-contain transition-all duration-300 transform hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-theme-light hover:text-theme-primary transition-colors duration-200 font-['Orbitron'] text-sm group px-2"
            >
              Home
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-200 bg-theme-primary"/>
            </button>
            <button 
              onClick={() => scrollToSection('phases')}
              className="text-theme-light hover:text-theme-primary transition-colors duration-200 font-['Orbitron'] text-sm group px-2"
            >
              <span className="flex items-center gap-1">
                Phases <Clock className="h-3 w-3" />
              </span>
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-200 bg-theme-primary"/>
            </button>
            <button 
              onClick={() => scrollToSection('mission')}
              className="text-theme-light hover:text-theme-primary transition-colors duration-200 font-['Orbitron'] text-sm group px-2"
            >
              <span className="flex items-center gap-1">
                Mission <Rocket className="h-3 w-3" />
              </span>
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-200 bg-theme-primary"/>
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-theme-light hover:text-theme-primary transition-colors duration-200 font-['Orbitron'] text-sm group px-2"
            >
              <span className="flex items-center gap-1">
                Dream Team <Users className="h-3 w-3" />
              </span>
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-200 bg-theme-primary"/>
            </button>
            <Button
              variant="outline"
              size="sm"
              className="border-theme-primary text-theme-primary hover:bg-theme-primary/10 font-['Orbitron'] animate-pulse-glow ml-2"
              onClick={() => window.open('https://pump.fun/coin/Dx1P8YkUup2tGLy7ATRzz8ZA4dT9FtFMRpm5T6adpump', '_blank')}
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
                onClick={() => scrollToSection('phases')}
                className="text-theme-light hover:text-theme-primary transition-colors px-4 py-2 rounded-lg hover:bg-theme-primary/5 text-left"
              >
                Phases
              </button>
              <button 
                onClick={() => scrollToSection('mission')}
                className="text-theme-light hover:text-theme-primary transition-colors px-4 py-2 rounded-lg hover:bg-theme-primary/5 text-left"
              >
                Mission
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
                onClick={() => {
                  setIsMenuOpen(false);
                  window.open('https://pump.fun/coin/4xGs92mN3XS5GZkD3UwxFkawt4PUnxgAmFZ5yStHpump', '_blank');
                }}
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