import { ExternalLink, MessageCircle, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Telegram",
    icon: <MessageCircle className="w-6 h-6" />,
    href: "#", // Replace with actual Telegram link
  },
  {
    name: "Twitter",
    icon: <ExternalLink className="w-6 h-6" />, // Using ExternalLink as a placeholder for X/Twitter
    href: "#", // Replace with actual Twitter link
  },
  {
    name: "Dexscreener",
    icon: <BarChart3 className="w-6 h-6" />,
    href: "#", // Replace with actual Dexscreener link
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
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-neon-blue transition-colors duration-300 group"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              title={link.name}
            >
              <div className="relative">
                {link.icon}
                <div className="absolute inset-0 bg-neon-blue/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};