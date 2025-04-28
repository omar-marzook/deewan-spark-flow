
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import { Button } from '@/components/ui/button';

// Sample blog post data (placeholder content)
const blogPosts = [
  {
    id: 1,
    slug: 'future-communication-ai',
    title: 'The Future of Communication in the Age of AI',
    excerpt: 'Explore how artificial intelligence is transforming business communication platforms and what this means for enterprises in Saudi Arabia.',
    date: 'April 15, 2025',
    readTime: '5 min',
    category: 'AI',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 2,
    slug: 'secure-messaging-enterprise',
    title: 'Secure Messaging for Enterprise: A Complete Guide',
    excerpt: 'A comprehensive look at security considerations for enterprise messaging solutions in regulated industries.',
    date: 'April 8, 2025',
    readTime: '8 min',
    category: 'Security',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 3,
    slug: 'omnichannel-strategy',
    title: 'Building an Effective Omnichannel Communication Strategy',
    excerpt: 'Learn how businesses can create seamless customer experiences across multiple communication channels.',
    date: 'March 27, 2025',
    readTime: '6 min',
    category: 'Strategy',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 4,
    slug: 'api-integration-best-practices',
    title: 'API Integration Best Practices for Communication Platforms',
    excerpt: 'Technical insights on integrating communication APIs into your existing systems with minimal friction.',
    date: 'March 15, 2025',
    readTime: '7 min',
    category: 'Technical',
    imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 5,
    slug: 'communication-financial-services',
    title: 'Communication Solutions for Financial Services',
    excerpt: 'How banks and financial institutions are leveraging modern communication tools while maintaining compliance.',
    date: 'March 7, 2025',
    readTime: '5 min',
    category: 'Finance',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 6,
    slug: 'messaging-platform-roi',
    title: 'Measuring ROI of Your Messaging Platform',
    excerpt: 'Frameworks and metrics to help you quantify the business impact of your communication investments.',
    date: 'February 28, 2025',
    readTime: '9 min',
    category: 'Business',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 7,
    slug: 'chatbot-development',
    title: 'From Simple to Sophisticated: Evolving Your Chatbot Strategy',
    excerpt: 'Key considerations when developing intelligent chatbots that truly enhance customer communication.',
    date: 'February 20, 2025',
    readTime: '6 min',
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 8,
    slug: 'real-time-analytics',
    title: 'Leveraging Real-Time Analytics in Customer Communication',
    excerpt: 'How data-driven insights can transform your communication strategy and improve customer satisfaction.',
    date: 'February 12, 2025',
    readTime: '7 min',
    category: 'Analytics',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 9,
    slug: 'healthcare-communication',
    title: 'Secure Patient Communication in Healthcare',
    excerpt: 'Balancing accessibility with privacy in healthcare communication systems for better patient outcomes.',
    date: 'February 1, 2025',
    readTime: '5 min',
    category: 'Healthcare',
    imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60'
  }
];

const BlogGrid = () => {
  const [visiblePosts, setVisiblePosts] = useState(7); // Initially show featured + 6 posts
  
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
