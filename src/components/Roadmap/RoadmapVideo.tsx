import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export const RoadmapVideo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto my-16"
    >
      <div 
        className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
          >
            <Play className="w-8 h-8 text-white fill-white" />
          </motion.div>
        </div>
        <img 
          src="/lovable-uploads/d653c0e5-cc7e-45ff-b9c8-9971ab86acbe.png"
          alt="Roadmap Video Thumbnail"
          className="w-full h-full object-cover"
        />
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Super Elon Coin Roadmap"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl"
            />
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};