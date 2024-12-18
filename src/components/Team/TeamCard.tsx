import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  stats: string[];
  isMain?: boolean;
}

export const TeamCard = ({ name, role, image, bio, stats, isMain = false }: TeamCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative glass-card p-6 ${isMain ? "col-span-2" : ""}`}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-500/20 to-purple-500/20 animate-pulse-glow" />
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
          <div className="relative w-48 h-48 rounded-xl overflow-hidden border-2 border-yellow-400/50">
            <img src={image} alt={name} className="w-full h-full object-cover" />
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute bottom-0 left-0 w-8 h-8 flex items-center justify-center"
            >
              <Rocket className="text-yellow-400" size={20} />
            </motion.div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h3 className={`text-2xl font-bold mb-2 ${name === "Elon Musk" ? "bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent animate-gradient-flow" : "text-yellow-400"}`}>
              {name}
            </h3>
            <p className={`mb-4 ${name === "Elon Musk" ? "bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-flow" : "text-gray-300"}`}>
              {role}
            </p>
            <p className="text-gray-400">{bio}</p>
          </div>
        </div>

        <div className="space-y-2">
          {stats.map((stat, index) => (
            <p key={index} className="text-gray-300">{stat}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};