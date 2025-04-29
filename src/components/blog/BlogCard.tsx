
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
    publishDate?: string;
    readTime: string;
    category: string;
    imageUrl?: string;
    coverImage?: string;
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
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{
        y: -5,
        boxShadow: '0 10px 30px rgba(0,0,0,0.07)',
        transition: { duration: 0.2 }
      }}
      className={cn(
        "flex flex-col h-full overflow-hidden rounded-xl border border-gray-100 bg-white/90 shadow-sm transition-all duration-300 hover:shadow-lg",
        featured ? "md:col-span-3 md:flex-row" : ""
      )}
    >
      <Link
        to={`/blog/${post.slug}`}
        className={cn(
          "group flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-white",
          featured ? "md:col-span-3 md:flex-row" : ""
        )}
      >
        {/* Post thumbnail */}
        <div className={cn("aspect-video overflow-hidden",
          featured ? "md:w-1/2 h-full" : ""
        )}>
          <img
            src={imageSrc}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </div>

        <div className={cn(
            "p-6 flex flex-col flex-grow",
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
              "font-bold text-deewan-dark mb-3 group-hover:text-deewan-primary transition-colors",
              featured ? "text-2xl md:text-3xl" : "text-xl"
            )}>
            {post.title}
          </h3>

          {/* Meta: Date & Read Time */}
          <div className="flex items-center text-deewan-gray text-sm mb-3">
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              <Clock size={14} className="mr-1" />
              {post.readTime} read
            </span>
          </div>

          {/* Description */}
          <p className="text-deewan-gray mb-5 line-clamp-2">
            {post.excerpt}
          </p>

          {/* Read more link */}
          <div className="mt-auto">
            <span className="text-sm font-medium text-deewan-primary flex items-center">
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
