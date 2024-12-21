import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Main content container */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group w-full max-w-[420px] mx-auto"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-theme-primary via-neon-purple to-theme-secondary rounded-full blur-xl opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <div className="absolute inset-0 rounded-full animate-pulse-glow"></div>
            <img 
              src="/lovable-uploads/a3d0231f-607a-4a29-8dd8-5bb4d6a542cf.png"
              alt="Super Elon Coin"
              className="relative w-full h-auto object-contain drop-shadow-[0_0_20px_rgba(139,92,246,0.5)] group-hover:drop-shadow-[0_0_30px_rgba(139,92,246,0.7)] transition-all duration-300 transform hover:scale-105"
            />
          </motion.div>

          {/* Text and CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-theme-primary font-['Orbitron'] leading-tight drop-shadow-[0_0_10px_rgba(155,135,245,0.5)]"
            >
              Super Elon Coin
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl mb-8 text-theme-light font-['Orbitron'] max-w-2xl mx-auto"
            >
              To the Moon with Super Elon Coin – The Future of Memecoins!
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="theme-button"
              >
                Buy Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-theme-primary text-theme-primary hover:bg-theme-primary/10 font-bold py-3 px-6 rounded-full font-['Orbitron'] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-theme-primary/50"
              >
                Whitepaper
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};