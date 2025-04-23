
import React from "react";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";

const RelatedPosts = ({ posts }: { posts: any[] }) => (
  <section>
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-2xl md:text-3xl font-bold text-deewan-dark mb-8 text-center"
    >
      Related Posts
    </motion.h2>
    <div className="grid md:grid-cols-2 gap-8">
      {posts.map((post, i) => (
        <BlogCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  </section>
);

export default RelatedPosts;
