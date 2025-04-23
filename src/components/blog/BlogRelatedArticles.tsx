
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";

const BlogRelatedArticles = ({ relatedPosts }) => (
  <div className="container mx-auto max-w-6xl px-4 mb-20">
    <h2 className="text-2xl md:text-3xl font-bold text-deewan-dark mb-8 text-center">Related Articles</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {relatedPosts.map((relatedPost) => (
        <motion.div
          key={relatedPost.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Link to={`/blog/${relatedPost.slug}`} className="block group">
            <article className="glass overflow-hidden rounded-xl transition-transform duration-300 group-hover:-translate-y-1 border border-gray-100">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={relatedPost.coverImage}
                  alt={relatedPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                {relatedPost.category && (
                  <span className="text-xs font-medium text-deewan-primary">{relatedPost.category}</span>
                )}
                <h3 className="font-bold text-lg text-deewan-dark mt-1 mb-2 group-hover:text-deewan-primary transition-colors">
                  {relatedPost.title}
                </h3>
                <p className="text-sm text-deewan-dark/70 mb-3 line-clamp-2">
                  {relatedPost.excerpt}
                </p>
                <div className="flex justify-between items-center text-xs text-deewan-dark/60">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {relatedPost.publishDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {relatedPost.readTime}
                  </span>
                </div>
              </div>
            </article>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
);

export default BlogRelatedArticles;
