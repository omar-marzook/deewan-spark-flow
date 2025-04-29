h
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import { Button } from '@/components/ui/button';
import { getAllPosts } from '@/lib/markdown';

const BlogGrid = () => {
  const [visiblePosts, setVisiblePosts] = useState(7); // Initially show featured + 6 posts
  const [blogPosts, setBlogPosts] = useState([]);
  
  useEffect(() => {
    // Get all posts from markdown files
    const allPosts = getAllPosts().map((post, index) => ({
      id: index + 1,
      slug: post.slug,
      title: post.frontmatter.title,
      excerpt: post.frontmatter.excerpt || '',
      date: post.frontmatter.date,
      readTime: post.frontmatter.readTime || '5 min',
      category: post.frontmatter.category || 'General',
      imageUrl: post.frontmatter.coverImage || ''
    }));
    
    setBlogPosts(allPosts);
  }, []);
  
  const handleLoadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 3, blogPosts.length));
  };
  
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Featured post (first post) */}
          {blogPosts.length > 0 && (
            <BlogCard post={blogPosts[0]} featured={true} />
          )}
          
          {/* Regular posts */}
          {blogPosts.slice(1, visiblePosts).map(post => (
            <BlogCard key={post.id} post={post} />
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
            >
              Load More
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
