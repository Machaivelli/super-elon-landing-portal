import { Button } from "./ui/button";
import { Rocket, Timer, Users, ArrowRight } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { motion } from "framer-motion";

export const Mission = () => {
  return (
    <div className="relative py-6 flex items-center justify-center overflow-hidden">
      {/* Background gradient and stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900" />
        {[...Array(20)].map((_, i) => (
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

      {/* Main content container */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            {/* Urgency Badge */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 1.5 
              }}
              className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-1 rounded-full text-sm font-semibold mb-4"
            >
              <Timer className="w-4 h-4 animate-pulse" />
              Limited Time Opportunity
            </motion.div>

            {/* Main Title - Updated with gold styling */}
            <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] 
                         bg-gradient-to-r from-yellow-400 via-white to-yellow-400 
                         bg-clip-text text-transparent 
                         drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]
                         animate-pulse">
              Don't Miss Out – Join the Super Elon Revolution Now!
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-white/90 font-['Orbitron'] max-w-xl mx-auto">
              Be Part of the Future of Memecoins – The Clock is Ticking!
            </p>

            {/* Countdown Timer */}
            <div className="w-full">
              <CountdownTimer />
            </div>

            {/* CTA Section */}
            <div className="space-y-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-full font-['Orbitron'] 
                         shadow-[0_0_20px_rgba(255,126,51,0.5)] hover:shadow-[0_0_30px_rgba(255,126,51,0.7)]
                         transition-all duration-300 flex items-center gap-2 mx-auto text-lg animate-pulse"
              >
                <Rocket className="w-5 h-5" />
                Secure Your Spot Now!
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              {/* Social Proof */}
              <motion.div
                className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full p-2 border border-neon-blue/30 max-w-fit mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src="/lovable-uploads/e7edd27b-c9ce-47b8-8894-c588138f8495.png"
                  alt="Early Adopter"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-xs text-white/90 font-['Orbitron']">
                  "Already 10x my investment!" - CryptoWhale
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};