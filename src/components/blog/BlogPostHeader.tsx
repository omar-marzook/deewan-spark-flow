
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

const BlogPostHeader = ({ post }) => (
  <header className="container mx-auto max-w-6xl px-4 pt-24 pb-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {post.category && (
        <span className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider bg-deewan-primary/10 text-deewan-primary rounded-full">
          {post.category}
        </span>
      )}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deewan-dark leading-tight mb-4">
        {post.title}
      </h1>
      {post.subtitle && (
        <p className="text-xl text-deewan-dark/70 mb-6 max-w-3xl">
          {post.subtitle}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-deewan-dark/60">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-deewan-primary/20">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium text-deewan-dark">{post.author.name}</p>
            <p className="text-xs">{post.author.role}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{post.publishDate}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{post.readTime} read</span>
        </div>
      </div>
    </motion.div>
  </header>
);

export default BlogPostHeader;
