
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogBreadcrumbs from "@/components/blog/BlogBreadcrumbs";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogCoverImage from "@/components/blog/BlogCoverImage";
import BlogShareSection from "@/components/blog/BlogShareSection";
import BlogRelatedArticles from "@/components/blog/BlogRelatedArticles";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import BlogPostContent from "@/components/blog/BlogPostContent";
import BlogPostLoading from "@/components/blog/BlogPostLoading";
import BlogPostNotFound from "@/components/blog/BlogPostNotFound";
import { useMarkdownHeadings } from "@/hooks/useMarkdownHeadings";
import { getPostBySlug, getAllPosts } from "@/lib/markdownUtils";

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const headings = useMarkdownHeadings(post?.content);
  
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
    return <BlogPostLoading />;
  }
  
  if (!post) {
    return <BlogPostNotFound />;
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50 pt-20">
      <Navbar />
      <ReadingProgressBar />
      <BlogBreadcrumbs post={post} />
      <BlogPostHeader post={post} />
      <BlogCoverImage post={post} />
      
      <BlogPostContent post={post} headings={headings} />
      
      <BlogShareSection />
      <BlogRelatedArticles relatedPosts={relatedPosts} />
      <Footer />
    </div>
  );
};

export default BlogPostPage;
