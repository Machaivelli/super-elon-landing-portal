import { motion } from 'framer-motion';
import { Rocket, Coins } from 'lucide-react';
import { Button } from '../ui/button';

export const TeamSection = () => {
  return (
    <section className="relative min-h-screen py-24 overflow-hidden">
      {/* Background with stars and floating elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C] to-[#0f1729]">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(147, 112, 219, 0.1) 0%, transparent 50%)' }}>
          {/* Animated stars */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
          {/* Floating SEC coins */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
              }}
            >
              <Coins className="w-6 h-6 text-neon-yellow opacity-30" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Orbitron'] mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Meet the Dream Team
          </h2>
          <p className="text-xl text-gray-300">
            Visionaries of the Moon Mission 😉
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-4" />
        </motion.div>

        {/* Elon's Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card neon-border p-6 hover:scale-[1.02] transition-transform duration-300">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Profile Image */}
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden">
                <img
                  src="/lovable-uploads/e7edd27b-c9ce-47b8-8894-c588138f8495.png"
                  alt="Elon Musk"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute bottom-2 right-2"
                  animate={{
                    x: [0, 20, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Rocket className="w-6 h-6 text-neon-orange" />
                </motion.div>
              </div>

              {/* Profile Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 font-['Orbitron'] text-white">Elon Musk</h3>
                <p className="text-neon-orange mb-4">Chief Vibes Officer – Relaxing While You Get Rich</p>
                <p className="text-gray-300 mb-6">
                  When Elon isn't launching rockets or tweeting memes, he's sipping cocktails on the beach and watching Super Elon Coin go to the moon.
                </p>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-center gap-2">
                    <span className="text-xl">🚀</span>
                    Work Ethic: To the Moon and Back
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-xl">🍹</span>
                    Current Status: "Working" from the Beach
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-xl">💸</span>
                    Crypto Philosophy: Buy, Hodl, Relax
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto">
          {/* Placeholder Team Member 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-4 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🐶</span>
              </div>
              <div>
                <h4 className="font-bold text-white">Shiba Inu</h4>
                <p className="text-gray-300">Moral Support Specialist</p>
              </div>
            </div>
          </motion.div>

          {/* Placeholder Team Member 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-4 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">💎</span>
              </div>
              <div>
                <h4 className="font-bold text-white">Your Future Self</h4>
                <p className="text-gray-300">SEC Millionaire</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-6 rounded-xl text-lg font-bold hover:scale-105 transition-transform duration-300 animate-bounce-subtle"
          >
            Join Now – Relax Like Elon While We Go to the Moon! 🚀
          </Button>
        </motion.div>
      </div>
    </section>
  );
};