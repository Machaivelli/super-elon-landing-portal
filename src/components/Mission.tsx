import { Button } from "./ui/button";
import { Timer, Rocket, ArrowRight } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { motion } from "framer-motion";

export const Mission = () => {
  return (
    <div className="relative py-6 flex items-center justify-center overflow-hidden">
      {/* Background gradient and stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-theme-primary/20 via-theme-dark to-theme-dark" />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-theme-light rounded-full animate-twinkle"
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
              className="inline-flex items-center gap-2 bg-theme-primary/20 text-theme-light px-4 py-1 rounded-full text-sm font-semibold mb-4"
            >
              <Timer className="w-4 h-4 animate-pulse" />
              Limited Time Opportunity
            </motion.div>

            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-theme-primary font-['Orbitron'] drop-shadow-[0_0_10px_rgba(155,135,245,0.5)]">
              Don't Miss Out – Join the Super Elon Revolution Now!
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-theme-light/90 font-['Orbitron'] max-w-xl mx-auto">
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
                className="theme-button flex items-center gap-2 mx-auto text-lg animate-pulse"
              >
                <Rocket className="w-5 h-5" />
                Secure Your Spot Now!
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              {/* Social Proof */}
              <motion.div
                className="flex items-center gap-2 glass-card p-2 max-w-fit mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src="/lovable-uploads/e7edd27b-c9ce-47b8-8894-c588138f8495.png"
                  alt="Early Adopter"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-xs text-theme-light/90 font-['Orbitron']">
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