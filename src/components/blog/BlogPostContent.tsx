
import React from 'react';
import { motion } from "framer-motion";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import TableOfContentsInline from '@/components/blog/TableOfContentsInline';

interface BlogPostContentProps {
  post: any;
  headings: Array<{
    id: string;
    text: string;
    level: number;
  }>;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({ post, headings }) => {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8 relative">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main content area with markdown rendering */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-none md:max-w-3xl prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-deewan-dark prose-blockquote:rounded-xl prose-blockquote:bg-deewan-secondary/10 prose-blockquote:p-6 prose-blockquote:font-medium prose-blockquote:text-deewan-secondary/90 prose-img:my-6"
          style={{
            fontFamily: "'Gilroy', 'Poppins', ui-sans-serif, system-ui, sans-serif",
          }}
        >
          {post.content && (
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({node, ...props}) => {
                  const id = props.children ? props.children.toString().toLowerCase().replace(/\s+/g, '-') : '';
                  return (
                    <h1 
                      id={id} 
                      className="text-3xl font-bold mb-6"
                      {...props} 
                    />
                  );
                },
                h2: ({node, ...props}) => {
                  const id = props.children ? props.children.toString().toLowerCase().replace(/\s+/g, '-') : '';
                  return (
                    <h2 
                      id={id} 
                      className="text-2xl font-bold mt-10 mb-4"
                      {...props} 
                    />
                  );
                },
                h3: ({node, ...props}) => {
                  const id = props.children ? props.children.toString().toLowerCase().replace(/\s+/g, '-') : '';
                  return (
                    <h3 
                      id={id} 
                      className="text-xl font-bold mt-8 mb-3"
                      {...props} 
                    />
                  );
                },
                ul: ({node, ...props}) => <ul {...props} className="list-disc pl-6 my-4" />,
                ol: ({node, ...props}) => <ol {...props} className="list-decimal pl-6 my-4" />,
                li: ({node, ...props}) => <li {...props} className="mb-2" />,
                p: ({node, ...props}) => <p {...props} className="mb-4" />,
                blockquote: ({node, ...props}) => (
                  <blockquote 
                    {...props} 
                    className="pl-4 border-l-4 border-deewan-primary/50 italic my-6" 
                  />
                ),
                a: ({node, ...props}) => (
                  <a 
                    {...props} 
                    className="text-deewan-primary hover:underline" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          )}
        </motion.article>
        
        {/* Table of contents (floating on desktop) */}
        {headings && headings.length > 0 && (
          <div className="hidden md:block md:w-72 flex-shrink-0">
            <div className="sticky top-24">
              <TableOfContentsInline headings={headings} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPostContent;
