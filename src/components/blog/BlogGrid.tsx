import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import { Button } from '@/components/ui/button';
import { getAllPosts, getPostSlugs, getPostBySlug } from '@/lib/markdown';

const BlogGrid = () => {
  const [visiblePosts, setVisiblePosts] = useState(7); // Initially show featured + 6 posts
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    try {
      // Get all posts (already sorted by date in getAllPosts function)
      const allPosts = getAllPosts();
      
      // Map the posts to the format expected by BlogCard
      const posts = allPosts.map((post, index) => {
        return {
          id: index + 1,
          slug: post.slug,
          title: post.frontmatter.title,
          excerpt: post.frontmatter.excerpt || '',
          date: post.frontmatter.date,
          readTime: post.frontmatter.readTime || '3 min',
          category: post.frontmatter.category || 'General',
          imageUrl: post.frontmatter.coverImage || ''
        };
      });
      
      setBlogPosts(posts);
      setIsLoading(false);
    } catch (err) {
      console.error('Error loading blog posts:', err);
      setBlogPosts([]);
      setIsLoading(false);
    }
  }, []);
  
  const handleLoadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 3, blogPosts.length));
  };
  
  return (
    <section 
      className="py-16 px-4 md:px-6 bg-white"
      aria-labelledby="blog-posts-heading"
    >
      <div className="container mx-auto">
        <h2 id="blog-posts-heading" className="sr-only">Blog Posts</h2>
        
        {isLoading ? (
          <div aria-live="polite" className="text-center py-12">
            <p>Loading blog posts...</p>
          </div>
        ) : blogPosts.length === 0 ? (
          <div aria-live="polite" className="text-center py-12">
            <p>No blog posts found.</p>
          </div>
        ) : (
          <>
            {/* Blog posts grid */}
            <div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              role="feed"
              aria-busy={isLoading}
              aria-label="Blog posts"
            >
              {blogPosts.slice(0, visiblePosts).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={index === 0 ? "md:col-span-3" : ""}
                >
                  <BlogCard 
                    post={post} 
                    featured={index === 0}
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Load More Button - only show if there are more posts to load */}
            {visiblePosts < blogPosts.length && (
              <motion.div 
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button 
                  onClick={handleLoadMore}
                  className="px-8 py-6 h-auto bg-deewan-primary hover:bg-deewan-primary/90 text-white text-lg"
                  aria-label={`Load ${Math.min(3, blogPosts.length - visiblePosts)} more blog posts`}
                  aria-controls="blog-posts-heading"
                >
                  Load More
                </Button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
