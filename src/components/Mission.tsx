import { Button } from "./ui/button";
import { Rocket, Diamond, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Mission = () => {
  return (
    <div className="relative min-h-screen py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900" />
        {/* Animated stars */}
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
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column - Animated Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px]"
          >
            {/* Floating rockets and coins */}
            <AnimatePresence>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 400, opacity: 0 }}
                  animate={{ 
                    y: -400,
                    opacity: [0, 1, 1, 0],
                    x: Math.sin(i) * 50
                  }}
                  transition={{
                    duration: 4,
                    delay: i * 0.8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute left-1/2"
                >
                  <Rocket 
                    className="w-8 h-8 text-neon-orange transform -rotate-45" 
                    style={{
                      filter: "drop-shadow(0 0 10px rgba(255,126,51,0.5))"
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left space-y-6"
          >
            {/* Main Headline */}
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-neon-blue font-['Orbitron'] leading-tight"
              animate={{
                textShadow: [
                  "0 0 20px rgba(0,243,255,0.5)",
                  "0 0 40px rgba(0,243,255,0.8)",
                  "0 0 20px rgba(0,243,255,0.5)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              HODL Super Elon Coin – Don't Miss the Next Crypto Revolution! 🚀
            </motion.h2>

            {/* Subheading */}
            <motion.h3 
              className="text-xl md:text-2xl text-neon-purple font-['Orbitron']"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Diamond className="inline-block w-6 h-6 mr-2 text-neon-yellow" />
              Turn Your Diamond Hands into Gold – The Future of Memecoins Is Here!
            </motion.h3>

            {/* Success Message */}
            <p className="text-lg text-white/90 font-['Orbitron']">
              HODLers are already seeing insane gains – Super Elon Coin is your chance to 1000x your investment. 
              The moon is waiting! <Flame className="inline-block w-5 h-5 text-neon-orange" />
            </p>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pt-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-6 rounded-full font-['Orbitron'] 
                         shadow-[0_0_30px_rgba(255,126,51,0.5)] hover:shadow-[0_0_50px_rgba(255,126,51,0.7)]
                         transition-all duration-300 text-xl group animate-pulse"
              >
                <Rocket className="w-6 h-6 group-hover:rotate-[-45deg] transition-transform duration-300" />
                Join Now and HODL to the Moon!
              </Button>
            </motion.div>

            {/* Urgency Message */}
            <motion.p
              className="text-neon-orange font-['Orbitron'] text-lg"
              animate={{
                opacity: [1, 0.5, 1],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              Early HODLers are already celebrating 🚀 Don't be late to the moon!
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 to-transparent">
        <Button
          size="lg"
          className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-6 rounded-full font-['Orbitron'] 
                   shadow-[0_0_30px_rgba(255,126,51,0.5)] hover:shadow-[0_0_50px_rgba(255,126,51,0.7)]
                   transition-all duration-300 text-xl animate-pulse"
        >
          <Rocket className="w-6 h-6" />
          HODL Now!
        </Button>
      </div>
    </div>
  );
};