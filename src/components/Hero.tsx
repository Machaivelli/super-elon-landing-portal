import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Main content container */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side - Hero Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 w-full"
          >
            <img 
              src="/lovable-uploads/180133a5-8c2f-415a-97f5-d3942ce3cfe6.png"
              alt="Super Elon Warrior"
              className="w-full h-auto rounded-2xl shadow-2xl shadow-neon-orange/20 hover:shadow-neon-orange/40 transition-shadow duration-300"
            />
          </motion.div>

          {/* Right side - Text and CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 w-full text-center lg:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold mb-6 text-white font-['Orbitron'] leading-tight"
            >
              Super Elon Coin
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl font-['Orbitron']"
            >
              To the Moon with Super Elon Coin – The Future of Memecoins!
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-full font-['Orbitron'] group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50"
              >
                Buy Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 font-bold py-4 px-8 rounded-full font-['Orbitron'] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
              >
                Whitepaper
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
            className="absolute w-4 h-4 bg-orange-500 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </div>
  );
};