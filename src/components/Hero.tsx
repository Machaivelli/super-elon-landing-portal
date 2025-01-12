import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold font-['Orbitron'] 
                       bg-gradient-to-r from-yellow-400 via-white to-yellow-400 
                       bg-clip-text text-transparent 
                       drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
            Join Now & Relax Like Elon Does
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 font-['Orbitron'] max-w-2xl mx-auto">
            The Most Relaxing Memecoin Experience in the Galaxy
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open('https://pump.fun/coin/4xGs92mN3XS5GZkD3UwxFkawt4PUnxgAmFZ5yStHpump', '_blank')}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-3 rounded-full font-['Orbitron'] 
                       shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]
                       transition-all duration-300 flex items-center gap-2"
            >
              <Rocket className="w-5 h-5" />
              Join Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open('https://pump.fun/coin/4xGs92mN3XS5GZkD3UwxFkawt4PUnxgAmFZ5yStHpump', '_blank')}
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-3 rounded-full font-['Orbitron'] 
                       shadow-[0_0_20px_rgba(66,153,225,0.3)] hover:shadow-[0_0_30px_rgba(66,153,225,0.5)]
                       transition-all duration-300 flex items-center gap-2"
            >
              Buy Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};