import { motion } from "framer-motion";

export const RoadmapTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent 
                     bg-gradient-to-r from-theme-primary to-theme-light">
        Super Elon Coin Roadmap
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Join us on our journey to revolutionize the crypto space with groundbreaking features 
        and real-world applications.
      </p>
    </motion.div>
  );
};