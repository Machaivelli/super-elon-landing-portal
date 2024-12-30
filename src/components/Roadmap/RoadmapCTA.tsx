import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const RoadmapCTA = () => {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "Welcome aboard! 🚀",
      description: "You're now part of the Super Elon Coin journey. Check your email for next steps.",
    });
  };

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
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="lg"
          onClick={handleClick}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 
                   text-white font-bold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl 
                   transition-all duration-300 relative overflow-hidden group"
        >
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ x: "100%" }}
            whileHover={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
          />
          <Rocket className="mr-2 animate-bounce" />
          Get Involved Now
        </Button>
      </motion.div>
    </motion.div>
  );
};