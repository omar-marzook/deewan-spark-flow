
import React from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";

const BlogRelatedArticles = ({ relatedPosts }) => (
  <div className="container mx-auto max-w-6xl px-4 mb-20">
    <h2 className="text-2xl md:text-3xl font-bold text-deewan-dark mb-8 text-center">Related Articles</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {relatedPosts.map((relatedPost, i) => (
        <motion.div
          key={relatedPost.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 * i }}
          className="flex flex-col h-full"
        >
          <BlogCard
            post={{
              ...relatedPost,
              imageUrl: relatedPost.coverImage,
              date: relatedPost.publishDate,
            }}
          />
        </motion.div>
      ))}
    </div>
  </div>
);

export default BlogRelatedArticles;
