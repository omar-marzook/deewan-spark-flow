
import React from 'react';
import { motion } from 'framer-motion';
import PostContent from './PostContent';

interface BlogMainContentProps {
  content: {
    type: string;
    text: string;
    author?: string;
    src?: string;
    caption?: string;
  }[];
  children?: React.ReactNode;
}

const BlogMainContent: React.FC<BlogMainContentProps> = ({ content, children }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-deewan-dark prose-blockquote:rounded-xl prose-blockquote:bg-deewan-secondary/10 prose-blockquote:p-6 prose-blockquote:font-medium prose-blockquote:text-deewan-secondary/90 prose-img:my-6"
      style={{
        fontFamily: "'Gilroy', 'Poppins', ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <PostContent content={content}>
        {children}
      </PostContent>
    </motion.article>
  );
};

export default BlogMainContent;
