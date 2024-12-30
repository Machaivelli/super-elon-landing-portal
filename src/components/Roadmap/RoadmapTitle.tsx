import { motion } from "framer-motion";

export const RoadmapTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
        Super Elon Coin Roadmap: Pioneering the Future
      </h2>
      <div className="h-1 w-48 mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full" />
    </motion.div>
  );
};