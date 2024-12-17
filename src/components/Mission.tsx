import { Button } from "./ui/button";
import { Rocket } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { motion } from "framer-motion";

export const Mission = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center py-12">
      {/* Starry background with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900" />
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full opacity-50"
            animate={{
              y: [0, -1000],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: "100%",
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          {/* Mission content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-neon-blue font-['Orbitron'] drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">
              Join The Mission
            </h2>

            {/* Phase 2 Image */}
            <motion.div
              className="relative w-64 h-64 md:w-96 md:h-96 mx-auto transform hover:scale-105 transition-transform duration-500"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/lovable-uploads/e562df77-0c3a-4788-a4fc-6ca16de09950.png"
                alt="Phase 2"
                className="w-full h-full object-contain rounded-lg"
              />
            </motion.div>

            {/* Description */}
            <p className="text-xl text-white font-['Orbitron'] max-w-2xl mx-auto">
              Be part of the next generation of crypto pioneers and join the mission to the moon!
            </p>

            {/* CTA and Elon Badge */}
            <div className="flex flex-col items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-neon-blue text-white px-8 py-3 rounded-full font-['Orbitron'] 
                         shadow-[0_0_20px_rgba(0,243,255,0.5)] hover:shadow-[0_0_30px_rgba(0,243,255,0.7)]
                         transition-all duration-300 flex items-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Join Now
              </motion.button>

              {/* Elon Badge */}
              <motion.div
                className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full p-2 border border-neon-blue/30"
                whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src="/lovable-uploads/e7edd27b-c9ce-47b8-8894-c588138f8495.png"
                  alt="Elon Musk"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm text-white font-['Orbitron']">
                  Guided by Elon Musk | Chief Meme Officer 🚀
                </span>
              </motion.div>

              {/* Countdown Timer */}
              <div className="w-full max-w-lg">
                <CountdownTimer />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};