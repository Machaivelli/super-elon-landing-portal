import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/lovable-uploads/151bd015-eb26-4db6-82d4-4ec6741ed896.png"
              alt="Super Elon Coin"
              className="h-8 w-8 rounded-full" // Reduced from h-10 w-10
            />
            <span className="ml-2 text-white font-bold text-lg font-['Orbitron'] animate-bounce">
              Super Elon Coin
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6"> {/* Reduced spacing */}
            <a href="#about" className="text-white hover:text-neon-blue transition-colors font-['Orbitron'] text-sm">About Us</a>
            <a href="#tokenomics" className="text-white hover:text-neon-blue transition-colors font-['Orbitron'] text-sm">Tokenomics</a>
            <a href="#roadmap" className="text-white hover:text-neon-blue transition-colors font-['Orbitron'] text-sm">Roadmap</a>
            <Button
              variant="outline"
              size="sm"
              className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 font-['Orbitron']"
            >
              Buy Now
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};