
import React from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";

const BlogRelatedArticles = ({ relatedPosts }) => (
  <div className="container mx-auto max-w-6xl px-4 mb-20">
    <h2 className="text-2xl md:text-3xl font-bold text-deewan-dark mb-8 text-center">Related Articles</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {relatedPosts.map((relatedPost, i) => (
        <BlogCard 
          key={relatedPost.id}
          post={{
            ...relatedPost,
            excerpt: relatedPost.excerpt,
            imageUrl: relatedPost.coverImage || relatedPost.imageUrl,
            date: relatedPost.publishDate || relatedPost.date,
          }}
        />
      ))}
    </div>
  </div>
);

export default BlogRelatedArticles;
