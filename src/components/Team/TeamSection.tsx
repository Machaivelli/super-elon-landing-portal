import { motion } from "framer-motion";
import { TeamBackground } from "./TeamBackground";
import { TeamCard } from "./TeamCard";
import { Button } from "../ui/button";
import { Rocket } from "lucide-react";

export const TeamSection = () => {
  return (
    <section className="relative min-h-screen py-24 overflow-hidden">
      <TeamBackground />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Title and Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            Meet the Dream Team – Visionaries of the Moon Mission
          </h2>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full mb-4" />
          <p className="text-xl text-gray-300">
            Featuring Our Star Member – Elon Musk, Because Who Else Would It Be? 😉
          </p>
        </motion.div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <TeamCard
            isMain
            name="Elon Musk"
            role="Chief Vibes Officer – Relaxing While You Get Rich"
            image="/lovable-uploads/e342d9f7-711a-418c-9864-4f639ba1f221.png"
            bio="When Elon isn't launching rockets or tweeting memes, he's sipping cocktails on the beach and watching Super Elon Coin go to the moon."
            stats={[
              "🚀 Work Ethic: To the Moon and Back",
              "🍹 Current Status: 'Working' from the Beach",
              "💸 Crypto Philosophy: Buy, Hodl, Relax"
            ]}
          />
          <TeamCard
            name="Shiba Inu"
            role="Moral Support Specialist 🐶"
            image="/lovable-uploads/d4ee9306-300a-4ace-bf6a-5db6a2d0663c.png"
            bio="Our four-legged friend who brings unlimited enthusiasm and meme potential to the team."
            stats={[
              "🦮 Specialty: Professional Tail Wagging",
              "🎯 Focus: Making Everyone Smile",
              "🌟 Achievement: Best Boy/Girl"
            ]}
          />
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center px-4 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://pump.fun/coin/Dx1P8YkUup2tGLy7ATRzz8ZA4dT9FtFMRpm5T6adpump"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="w-full md:w-auto bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold px-4 md:px-8 py-4 md:py-6 text-sm md:text-lg rounded-xl shadow-[0_0_15px_rgba(255,215,0,0.5)] hover:shadow-[0_0_25px_rgba(255,215,0,0.7)] transition-all duration-300 animate-bounce whitespace-normal md:whitespace-nowrap"
            >
              <Rocket className="hidden md:inline-block mr-2" />
              Join Now – Relax Like Elon While We Go to the Moon!
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};