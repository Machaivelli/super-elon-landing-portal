import { motion } from 'framer-motion';

export const RoadmapTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Orbitron'] 
                     bg-clip-text text-transparent bg-gradient-to-r 
                     from-theme-primary to-theme-light">
        Super Elon Coin Roadmap
      </h2>
      <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto font-['Orbitron']">
        Join us on our journey to revolutionize the crypto space 🚀
      </p>
    </motion.div>
  );
};