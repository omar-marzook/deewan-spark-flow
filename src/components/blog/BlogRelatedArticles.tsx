
import React from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";

const BlogRelatedArticles = ({ relatedPosts }) => (
  <section 
    className="container mx-auto max-w-6xl px-4 my-12 lg:my-20"
    aria-labelledby="related-blogs-heading"
  >
    <h2 
      id="related-blogs-heading"
      className="text-2xl md:text-3xl font-bold text-deewan-dark mb-8 text-center"
    >
      Related Blogs
    </h2>
    {relatedPosts.length === 0 ? (
      <p className="text-center text-deewan-gray">No related articles found.</p>
    ) : (
      <div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        role="feed"
        aria-label="Related blog posts"
      >
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
    )}
  </section>
);

export default BlogRelatedArticles;
