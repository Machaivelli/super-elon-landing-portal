import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const RoadmapCTA = () => {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "Never gonna give you up! 🎵",
      description: "Never gonna let you down! Check your email for next steps.",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mt-8"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="theme-button group relative overflow-hidden font-['Orbitron']"
      >
        <motion.div
          className="absolute inset-0 bg-white/20"
          initial={{ x: "100%" }}
          whileHover={{ x: "-100%" }}
          transition={{ duration: 0.5 }}
        />
        <Rocket className="mr-2 inline-block" />
        Join Our Journey
      </motion.button>
    </motion.div>
  );
};