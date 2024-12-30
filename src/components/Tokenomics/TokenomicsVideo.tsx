import { motion } from "framer-motion";

export const TokenomicsVideo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto my-16"
    >
      <div className="relative aspect-video rounded-xl overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0"
          title="Super Elon Coin Tokenomics"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl border-2 border-yellow-400/20 hover:border-yellow-400/40 transition-colors duration-300"
        />
      </div>
    </motion.div>
  );
};