import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section with New Image */}
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-full"
            >
              <img
                src="/lovable-uploads/f6a744ce-0bee-4089-b8ff-1feedb580b17.png"
                alt="Super Elon Hero"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neon-orange/20 to-transparent pointer-events-none rounded-full" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white font-bold text-xl md:text-2xl font-['Orbitron']"
            >
              Super Elon Coin
            </motion.span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className="text-white hover:text-neon-blue transition-colors font-['Orbitron'] text-sm"
            >
              About Us
            </a>
            <a 
              href="#tokenomics" 
              className="text-white hover:text-neon-blue transition-colors font-['Orbitron'] text-sm"
            >
              Tokenomics
            </a>
            <a 
              href="#roadmap" 
              className="text-white hover:text-neon-blue transition-colors font-['Orbitron'] text-sm"
            >
              Roadmap
            </a>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="bg-transparent border-neon-blue text-neon-blue hover:bg-neon-blue/10 font-['Orbitron'] text-sm px-6 py-2"
              >
                Whitepaper
              </Button>
              <Button
                className="bg-neon-blue hover:bg-neon-blue/90 text-black font-['Orbitron'] text-sm px-6 py-2"
              >
                Buy Now
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};