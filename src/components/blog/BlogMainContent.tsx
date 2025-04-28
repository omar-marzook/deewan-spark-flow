
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
  post?: any; // Add post prop
  headings?: any[]; // Add headings prop
  TableOfContents?: React.ComponentType<{ headings: any }>; // Add TableOfContents prop
  children?: React.ReactNode;
}

const BlogMainContent: React.FC<BlogMainContentProps> = ({ 
  content, 
  post, 
  headings, 
  TableOfContents,
  children 
}) => {
  // Use content directly if provided, otherwise use post.content if available
  const contentToRender = content || (post && post.content);
  
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sticky TableOfContents on the side */}
        {TableOfContents && headings && headings.length > 0 && (
          <div className="md:w-1/4 hidden md:block">
            <div className="sticky top-28">
              <TableOfContents headings={headings} />
            </div>
          </div>
        )}
        
        {/* Main content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-none md:w-3/4 prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-deewan-dark prose-blockquote:rounded-xl prose-blockquote:bg-deewan-secondary/10 prose-blockquote:p-6 prose-blockquote:font-medium prose-blockquote:text-deewan-secondary/90 prose-img:my-6"
          style={{
            fontFamily: "'Gilroy', 'Poppins', ui-sans-serif, system-ui, sans-serif",
          }}
        >
          {/* Show table of contents inline only on mobile */}
          <div className="md:hidden mb-6">
            {TableOfContents && headings && headings.length > 0 && (
              <TableOfContents headings={headings} />
            )}
          </div>
          
          {/* Post content */}
          {contentToRender && <PostContent content={contentToRender}>
            {children}
          </PostContent>}
        </motion.article>
      </div>
    </div>
  );
};

export default BlogMainContent;
