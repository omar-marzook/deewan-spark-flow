
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import PostAuthor from "@/components/blog/PostAuthor";
import BlogBreadcrumbs from "@/components/blog/BlogBreadcrumbs";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogCoverImage from "@/components/blog/BlogCoverImage";
import BlogShareSection from "@/components/blog/BlogShareSection";
import BlogRelatedArticles from "@/components/blog/BlogRelatedArticles";
import TableOfContentsInline from "@/components/blog/TableOfContentsInline";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, getAllPosts } from "@/lib/markdownUtils";

// Extract headings from markdown content
const extractHeadings = (content) => {
  const headings = [];
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    headings.push({
      id,
      text,
      level
    });
  }
  
  return headings;
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [headings, setHeadings] = useState([]);
  
  useEffect(() => {
    const fetchPostData = async () => {
      if (!slug) return;
      
      setLoading(true);
      
      // Fetch the main post
      const postData = await getPostBySlug(slug);
      
      if (postData) {
        setPost({
          ...postData.metadata,
          content: postData.content
        });
        
        // Extract headings from the content
        setHeadings(extractHeadings(postData.content));
        
        // Fetch all posts to find related ones
        const allPosts = await getAllPosts();
        
        // Filter out the current post and get up to 3 related posts
        const related = allPosts
          .filter(p => p.slug !== slug)
          .slice(0, 3)
          .map(p => ({
            id: p.slug,
            slug: p.slug,
            title: p.title,
            excerpt: p.excerpt,
            coverImage: p.coverImage,
            category: p.category,
            publishDate: p.date,
            readTime: p.readTime
          }));
        
        setRelatedPosts(related);
      }
      
      setLoading(false);
    };
    
    fetchPostData();
  }, [slug]);
  
  if (loading) {
    return <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center space-y-8 w-full max-w-3xl px-4">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-64 bg-gray-200 rounded w-full"></div>
            <div className="space-y-3 w-full">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>;
  }
  
  if (!post) {
    return <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl font-bold text-deewan-dark mb-4">Post Not Found</h1>
          <p className="text-deewan-gray mb-6">The blog post you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link to="/blog" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
        <Footer />
      </div>;
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50 pt-20">
      <Navbar />
      <ReadingProgressBar />
      <BlogBreadcrumbs post={post} />
      <BlogPostHeader post={post} />
      <BlogCoverImage post={post} />
      
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
                  h1: ({node, ...props}) => 
                    <h1 
                      id={props.children ? props.children.toString().toLowerCase().replace(/\s+/g, '-') : ''} 
                      className="text-3xl font-bold mb-6"
                      {...props} 
                    />,
                  h2: ({node, ...props}) => 
                    <h2 
                      id={props.children ? props.children.toString().toLowerCase().replace(/\s+/g, '-') : ''} 
                      className="text-2xl font-bold mt-10 mb-4"
                      {...props} 
                    />,
                  h3: ({node, ...props}) => 
                    <h3 
                      id={props.children ? props.children.toString().toLowerCase().replace(/\s+/g, '-') : ''} 
                      className="text-xl font-bold mt-8 mb-3"
                      {...props} 
                    />,
                  ul: ({node, ...props}) => <ul {...props} className="list-disc pl-6 my-4" />,
                  ol: ({node, ...props}) => <ol {...props} className="list-decimal pl-6 my-4" />,
                  li: ({node, ...props}) => <li {...props} className="mb-2" />,
                  p: ({node, ...props}) => <p {...props} className="mb-4" />,
                  blockquote: ({node, ...props}) => 
                    <blockquote 
                      {...props} 
                      className="pl-4 border-l-4 border-deewan-primary/50 italic my-6" 
                    />,
                  a: ({node, ...props}) => 
                    <a 
                      {...props} 
                      className="text-deewan-primary hover:underline" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    />,
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
      
      <BlogShareSection />
      <BlogRelatedArticles relatedPosts={relatedPosts} />
      <Footer />
    </div>
  );
};

export default BlogPostPage;
