
import React from "react";
import { Link } from "react-router-dom";
import { User, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";

// Brand floating shape SVG
const BlobShape = () => (
  <div className="absolute -top-10 right-10 z-0 pointer-events-none opacity-20">
    <svg width="130" height="130" viewBox="0 0 130 130" fill="none">
      <ellipse cx="65" cy="65" rx="65" ry="65" fill="#21A17C" fillOpacity="0.12" />
    </svg>
  </div>
);

const PostHero = ({ post }: { post: any }) => {
  return (
    <section className="relative z-10">
      {/* Decorative/floating shapes */}
      <BlobShape />
      <div className="container mx-auto max-w-3xl px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass relative py-12 px-6 md:px-12 mb-8 mt-32 md:mt-36 rounded-3xl shadow-lg border border-white/30 text-center overflow-hidden"
        >
          {/* Category tag */}
          {post.category && (
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-deewan-primary/10 text-deewan-primary font-medium text-xs tracking-widest uppercase glass">
              {post.category}
            </span>
          )}
          {/* Title */}
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-deewan-dark mb-5 leading-tight">
            {post.title}
          </h1>
          {/* Metadata row */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-deewan-gray text-sm font-medium">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" /> {post.author?.name}
            </span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime} read
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PostHero;
