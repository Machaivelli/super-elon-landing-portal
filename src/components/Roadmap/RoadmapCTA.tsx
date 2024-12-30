import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Rocket } from "lucide-react";

export const RoadmapCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mt-16"
    >
      <p className="text-xl text-gray-300 mb-8">
        Join us on this extraordinary journey and help shape the future of decentralized innovation!
      </p>
      <Button
        size="lg"
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Rocket className="mr-2" />
        Get Involved Now
      </Button>
    </motion.div>
  );
};