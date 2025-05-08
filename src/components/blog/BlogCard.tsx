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
  const imageSrc = post.imageUrl || post.coverImage || 'https://via.placeholder.com/800x450?text=Cequens+Blog';
  const date = post.date || post.publishDate || '';

  return (
      <Link
        to={`/blog/${post.slug}`}
        className={cn(
          "group flex flex-col h-full rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-white/90 focus:outline-none focus:ring-2 focus:ring-deewan-primary/50",
          featured ? "md:col-span-3 md:flex-row" : ""
        )}
        aria-labelledby={`blog-title-${post.id}`}
      >
        {/* Post thumbnail */}
        <div className={cn("aspect-video overflow-hidden",
          featured ? "md:w-1/2 h-full" : ""
        )}>
          <img
            src={imageSrc}
            alt={`Featured image for article: ${post.title}`}
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
          <h3 
            id={`blog-title-${post.id}`}
            className={cn(
              "font-bold text-deewan-dark mb-3 group-hover:text-deewan-primary transition-colors",
              featured ? "text-2xl md:text-3xl" : "text-xl"
            )}
          >
            {post.title}
          </h3>

          {/* Meta: Date & Read Time */}
          <div className="flex items-center text-deewan-gray text-sm mb-3" aria-label="Article metadata">
            {date && <span>{date}</span>}
            {date && <span className="mx-2" aria-hidden="true">•</span>}
            <span className="flex items-center">
              <Clock size={14} className="mr-1" aria-hidden="true" />
              <span>{post.readTime} read</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-deewan-gray mb-5 line-clamp-2">
            {post.excerpt}
          </p>

          {/* Read more link */}
          <div className="mt-auto">
            <span className="text-sm font-medium text-deewan-primary flex items-center">
              Read more <span className="sr-only">about {post.title}</span> <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </div>
      </Link>
  );
};

export default BlogCard;
