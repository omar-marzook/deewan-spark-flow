
import React from "react";
import { motion } from "framer-motion";

const BlogMainContent = ({ post, headings, TableOfContents }) => {
  return (
    <article className="container mx-auto max-w-4xl px-4 md:px-6 mb-16 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar with TOC */}
        <div className="hidden md:block">
          {headings.length > 0 && (
            <div className="sticky top-28">
              <TableOfContents headings={headings} />
            </div>
          )}
        </div>
        
        {/* Main content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="prose prose-lg prose-deewan md:col-span-2 mx-auto md:mx-0 w-full max-w-none"
        >
          {post.content}
        </motion.div>
      </div>
    </article>
  );
};

export default BlogMainContent;
