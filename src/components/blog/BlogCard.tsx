
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
    date?: string;
    publishDate?: string; // support both
    readTime: string;
    category: string;
    imageUrl?: string;
    coverImage?: string;   // support both
  };
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  const imageSrc = post.imageUrl || post.coverImage || '';
  const date = post.date || post.publishDate || '';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
        boxShadow: '0 10px 30px rgba(0,0,0,0.07)',
        transition: { duration: 0.2 }
      }}
      className={cn(
        "flex flex-col h-full min-h-[350px] overflow-hidden rounded-xl border border-gray-100 bg-white/90 shadow-sm transition-all duration-300 hover:shadow-lg",
        featured ? "md:col-span-3 md:flex-row" : ""
      )}
    >
      <div className={cn(
        "overflow-hidden bg-gray-100",
        featured ? "md:w-1/2 h-full" : "aspect-video"
      )}>
        {/* No hover/zoom effect for the image */}
        <img
          src={imageSrc}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className={cn(
        "flex flex-col flex-1 p-6",
        featured ? "md:w-1/2 md:p-8" : ""
      )}>
        <div className="mb-2">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-deewan-primary/10 text-deewan-primary">
            {post.category}
          </span>
        </div>
        <h3 className={cn(
          "font-bold text-deewan-dark mb-2 hover:text-deewan-primary transition-colors break-words",
          featured ? "text-2xl md:text-3xl" : "text-xl"
        )}>
          {post.title}
        </h3>
        <div className="flex items-center text-deewan-gray text-sm mb-3">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Clock size={14} className="mr-1" />
            {post.readTime} read
          </span>
        </div>
        <p className="text-deewan-gray mb-4 line-clamp-3">
          {post.excerpt}
        </p>
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
