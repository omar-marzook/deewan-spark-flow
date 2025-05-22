
import React from "react";
import { motion } from "framer-motion";
import OptimizedImage from "@/components/ui/optimized-image";

const BlogCoverImage = ({ post }) => (
  <figure className="container mx-auto max-w-5xl px-4 mb-12">
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative aspect-[21/9] overflow-hidden rounded-2xl shadow-xl"
    >
      <OptimizedImage
        src={post.coverImage}
        alt={`Cover image for article: ${post.title}`}
        className="w-full h-full object-cover"
        priority={true}
      />
    </motion.div>
    {post.coverImageCaption && (
      <figcaption className="text-center text-sm text-deewan-gray mt-2">
        {post.coverImageCaption}
      </figcaption>
    )}
  </figure>
);

export default BlogCoverImage;
