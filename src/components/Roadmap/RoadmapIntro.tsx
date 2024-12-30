import { motion } from "framer-motion";

export const RoadmapIntro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <p className="text-lg text-gray-300">
        Welcome to our comprehensive roadmap - a testament to our commitment to transparency, 
        innovation, and community value. Each phase has been meticulously planned to ensure 
        sustainable growth and maximize benefits for our holders. Join us as we revolutionize 
        the crypto space with groundbreaking features and real-world applications.
      </p>
    </motion.div>
  );
};