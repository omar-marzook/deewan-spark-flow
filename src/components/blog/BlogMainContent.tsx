
import React from 'react';
import { motion } from 'framer-motion';
import PostContent from './PostContent';

interface BlogMainContentProps {
  content?: {
    type: string;
    text: string;
    author?: string;
    src?: string;
    caption?: string;
  }[];
  markdownContent?: string; // Added for markdown content
  post?: any; // Post prop
  headings?: any[]; // Headings prop
  TableOfContents?: React.ComponentType<{ headings: any }>; // TableOfContents component
  children?: React.ReactNode;
}

const BlogMainContent: React.FC<BlogMainContentProps> = ({ 
  content, 
  markdownContent,
  post, 
  headings, 
  TableOfContents,
  children 
}) => {
  // Use content directly if provided, otherwise use post.content if available
  const contentToRender = content || (post && post.content);
  const markdownToRender = markdownContent || (post && post.rawContent);
  
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8 relative">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main content area */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-none md:max-w-3xl prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-deewan-dark prose-blockquote:rounded-xl prose-blockquote:bg-deewan-secondary/10 prose-blockquote:p-6 prose-blockquote:font-medium prose-blockquote:text-deewan-secondary/90 prose-img:my-6"
          style={{
            fontFamily: "'Gilroy', 'Poppins', ui-sans-serif, system-ui, sans-serif",
          }}
        >
          {(contentToRender || markdownToRender) && 
            <PostContent 
              content={contentToRender} 
              markdownContent={markdownToRender}
            >
              {children}
            </PostContent>
          }
        </motion.article>
        
        {/* Table of contents (floating on desktop) */}
        {TableOfContents && headings && headings.length > 0 && (
          <div className="hidden md:block md:w-72 flex-shrink-0">
            <div className="sticky top-24">
              <TableOfContents headings={headings} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogMainContent;
