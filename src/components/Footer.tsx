import { motion } from "framer-motion";
import Image from "next/image";

const socialLinks = [
  {
    name: "Telegram",
    icon: "/lovable-uploads/1579688f-26be-4125-8ccb-379b008563a4.png",
    href: "#", // Replace with actual Telegram link
  },
  {
    name: "X",
    icon: "/lovable-uploads/3ff0e98c-3fd3-45f4-9e15-4dfc38624c96.png",
    href: "#", // Replace with actual X/Twitter link
  },
  {
    name: "Dexscreener",
    icon: "/lovable-uploads/d653c0e5-cc7e-45ff-b9c8-9971ab86acbe.png",
    href: "#", // Replace with actual Dexscreener link
  },
  {
    name: "Orca",
    icon: "/lovable-uploads/f58d3370-55d7-4456-92af-3a5e1b1ebeeb.png",
    href: "#", // Replace with actual Orca link
  },
];

export const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 md:px-8 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side - Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <p className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple animate-pulse-glow">
            Join the Super Elon Revolution 🚀 – HODL to the Moon!
          </p>
        </motion.div>

        {/* Right side - Social Links */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              title={link.name}
            >
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image
                  src={link.icon}
                  alt={link.name}
                  width={40}
                  height={40}
                  className="transition-all duration-300 group-hover:brightness-125"
                />
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neon-blue/20 blur-xl" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};