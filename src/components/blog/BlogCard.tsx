
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    imageUrl: string;
  };
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5, 
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        transition: { duration: 0.2 } 
      }}
      className={cn(
        "flex flex-col overflow-hidden rounded-xl backdrop-blur-md border border-white/20",
        "bg-white/10 hover:bg-white/20 transition-all duration-300",
        "shadow-sm hover:shadow-xl",
        featured ? "md:col-span-3 md:flex-row" : ""
      )}
    >
      {/* Post Image */}
      <div className={cn(
        "overflow-hidden",
        featured ? "md:w-1/2" : "aspect-video"
      )}>
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
        />
      </div>
      
      {/* Post Content */}
      <div className={cn(
        "flex flex-col p-6",
        featured ? "md:w-1/2 md:p-8" : ""
      )}>
        {/* Category */}
        <div className="mb-2">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-deewan-primary/10 text-deewan-primary">
            {post.category}
          </span>
        </div>
        
        {/* Title */}
        <h3 className={cn(
          "font-bold text-deewan-dark mb-2 hover:text-deewan-primary transition-colors",
          featured ? "text-2xl md:text-3xl" : "text-xl"
        )}>
          {post.title}
        </h3>
        
        {/* Meta: Date & Read Time */}
        <div className="flex items-center text-deewan-gray text-sm mb-3">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Clock size={14} className="mr-1" />
            {post.readTime} read
          </span>
        </div>
        
        {/* Excerpt */}
        <p className="text-deewan-gray mb-4">
          {post.excerpt}
        </p>
        
        {/* Read More Link */}
        <div className="mt-auto">
          <Link 
            to={`/blog/${post.slug}`} 
            className="inline-flex items-center text-deewan-primary font-medium hover:underline"
          >
            Read more <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
