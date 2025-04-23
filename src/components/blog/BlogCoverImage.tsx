
import React from "react";
import { motion } from "framer-motion";

const BlogCoverImage = ({ post }) => (
  <div className="container mx-auto max-w-5xl px-4 mb-12">
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative aspect-[21/9] overflow-hidden rounded-2xl shadow-xl"
    >
      <img
        src={post.coverImage}
        alt={post.title}
        className="w-full h-full object-cover"
      />
    </motion.div>
  </div>
);

export default BlogCoverImage;
