import { Button } from "./ui/button";
import { Timer, Users, ArrowRight, Rocket, Fire } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { motion } from "framer-motion";
import { Progress } from "./ui/progress";

export const Mission = () => {
  return (
    <div className="relative py-8 overflow-hidden bg-gradient-to-b from-black/40 to-blue-900/20">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0.5 }}
            animate={{ 
              y: -100,
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            className="absolute w-4 h-4 text-yellow-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100 + 50}%`,
            }}
          >
            {i % 2 === 0 ? "₿" : "🚀"}
          </motion.div>
        ))}
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto">
          {/* Left side - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <img 
              src="/lovable-uploads/d47edc89-95c8-4f95-99c5-5edfabb25743.png"
              alt="Crypto Whale"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-6 text-center lg:text-left"
          >
            {/* FOMO Badge */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 1.5 
              }}
              className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-1 rounded-full text-sm font-semibold"
            >
              <Fire className="w-4 h-4 animate-pulse" />
              The Next Big Crypto Surge Is Here!
            </motion.div>

            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 font-['Orbitron'] leading-tight">
              HODL Now or Miss the Next x1000! 🚀
            </h2>

            {/* Subheading */}
            <p className="text-xl text-white/90 font-['Orbitron']">
              Super Elon Coin is Changing Lives – Early HODLers Are Already Winning Big!
            </p>

            {/* Progress and Stats */}
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 space-y-3 border border-orange-500/20">
              <div className="flex justify-between text-sm text-white/80 mb-1">
                <span>HODLers Growing Fast</span>
                <span className="text-orange-500">93% Filled</span>
              </div>
              <Progress value={93} className="h-2 bg-orange-950" />
              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-orange-500" />
                  <span className="text-white/80">2,500+ Joined Today</span>
                </div>
                <div className="text-red-400 font-semibold animate-pulse">
                  Only 50 Spots Left!
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-['Orbitron'] 
                         shadow-[0_0_20px_rgba(255,126,51,0.5)] hover:shadow-[0_0_30px_rgba(255,126,51,0.7)]
                         transition-all duration-300 flex items-center gap-2 mx-auto lg:mx-0 text-lg group"
              >
                <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                HODL Now and Ride the Wave!
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Social Proof */}
              <motion.p
                className="text-sm text-white/80 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                "Already seen 10x returns in just one week! 🚀" - Early HODLer
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};