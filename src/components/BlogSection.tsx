import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/markdown";
import BlogCard from "@/components/blog/BlogCard";
import { motion, useReducedMotion } from 'framer-motion';

const BlogSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    try {
      // Get all posts from markdown files
      const posts = getAllPosts();
      
      // Map posts to the format expected by the component
      const formattedPosts = posts.map((post, index) => ({
        id: index + 1,
        slug: post.slug,
        title: post.frontmatter.title,
        description: post.frontmatter.excerpt || '',
        date: post.frontmatter.date,
        readTime: post.frontmatter.readTime || '5 min',
        imageUrl: post.frontmatter.coverImage,
        category: post.frontmatter.category || 'General',
      }));
      
      // Limit to 3 posts for the homepage
      const limitedPosts = formattedPosts.slice(0, 3);
      setBlogPosts(limitedPosts);
      setIsLoading(false);
    } catch (err) {
      console.error('Error loading blog posts for homepage:', err);
      setBlogPosts([]);
      setIsLoading(false);
    }
  }, []);
  return (
    <section aria-labelledby="blog-heading" className="py-24 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section header - centered with description */}
        <motion.div 
          className="text-center mb-16"
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="blog-heading" className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Blog
          </h2>
          <p className="text-base md:text-lg text-deewan-gray max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and best practices.
          </p>
        </motion.div>

        {/* Blog posts grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          aria-live="polite"
          aria-busy={isLoading}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {!isLoading && blogPosts.length > 0 ? (
            blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 * index }}
              >
                <BlogCard 
                  post={{
                    ...post,
                    excerpt: post.description,
                    coverImage: post.imageUrl
                  }} 
                />
              </motion.div>
            ))
          ) : (
            // Loading state or fallback
            Array.from({ length: 3 }).map((_, index) => (
              <div 
                key={index} 
                className="rounded-xl overflow-hidden shadow-sm bg-white animate-pulse" 
                role="status" 
                aria-label="Loading blog post"
              >
                <div className="aspect-video bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                </div>
                <span className="sr-only">Loading blog posts, please wait</span>
              </div>
            ))
          )}
        </motion.div>

        {/* View all button - centered */}
        <motion.div 
          className="text-center"
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            asChild
            className="bg-deewan-primary hover:bg-deewan-primary/90 text-white focus:ring-2 focus:ring-deewan-primary/50 focus:outline-none"
          >
            <Link to="/blog" aria-label="View all blog posts">
              View All Blog Posts
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
