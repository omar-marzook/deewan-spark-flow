import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import { Button } from '@/components/ui/button';
import { getAllPosts, getPostSlugs, getPostBySlug } from '@/lib/markdown';

const BlogGrid = () => {
  const [visiblePosts, setVisiblePosts] = useState(7); // Initially show featured + 6 posts
  const [blogPosts, setBlogPosts] = useState([]);
  
  useEffect(() => {
    try {
      // Get all available slugs dynamically
      const slugs = getPostSlugs();
      
      // Create posts directly from the slugs
      const posts = slugs.map((slug, index) => {
        // Get the post data from the slug
        const post = getPostBySlug(slug);
        
        if (!post) {
          console.error(`Post not found for slug: ${slug}`);
          return null;
        }
        
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
      }).filter(Boolean);
      
      setBlogPosts(posts);
    } catch (err) {
      console.error('Error loading blog posts:', err);
      setBlogPosts([]);
    }
  }, []);
  
  const handleLoadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 3, blogPosts.length));
  };
  
  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
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
