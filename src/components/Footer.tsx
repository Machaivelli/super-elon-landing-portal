import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: "Telegram",
    icon: "/lovable-uploads/1579688f-26be-4125-8ccb-379b008563a4.png",
    href: "https://t.me/+30_Il5zAaItjM2E0",
  },
  {
    name: "X",
    icon: "/lovable-uploads/3ff0e98c-3fd3-45f4-9e15-4dfc38624c96.png",
    href: "https://x.com/SuperElonCoin",
  },
];

export const Footer = () => {
  return (
    <footer className="w-full py-4 px-4 md:px-6 bg-gradient-to-t from-theme-dark to-transparent backdrop-blur-sm border-t border-theme-primary/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left side - Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <p className="text-sm md:text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-theme-primary to-theme-light animate-pulse-glow">
            Join the Super Elon Revolution 🚀
          </p>
        </motion.div>

        {/* Right side - Social Links */}
        <div className="flex items-center gap-4 md:gap-6">
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
              <div className="relative w-6 h-6 md:w-8 md:h-8">
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-full h-full object-contain transition-all duration-300 group-hover:brightness-125"
                />
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-theme-primary/20 blur-xl" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};
