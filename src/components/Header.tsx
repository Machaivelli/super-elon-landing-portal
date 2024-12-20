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
          Super Elon Coin | The Next x1000 Opportunity Awaits! 🚀
        </span>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-theme-primary via-neon-purple to-theme-secondary rounded-full blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
              <img
                src="/lovable-uploads/5ca8ed85-98b2-416e-8b27-ff98c484ca7f.png"
                alt="Super Elon Coin"
                className="relative h-12 w-12 rounded-full shadow-xl shadow-theme-primary/30 hover:shadow-theme-primary/50 transition-all duration-300 transform hover:scale-105"
              />
            </div>
            <span className="text-theme-light font-bold text-lg font-['Orbitron']">
              Super Elon Coin
            </span>
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
