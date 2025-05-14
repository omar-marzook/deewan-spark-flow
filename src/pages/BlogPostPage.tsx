import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import PostAuthor from "@/components/blog/PostAuthor";
import BlogBreadcrumbs from "@/components/blog/BlogBreadcrumbs";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogCoverImage from "@/components/blog/BlogCoverImage";
import BlogMainContent from "@/components/blog/BlogMainContent";
import BlogRelatedArticles from "@/components/blog/BlogRelatedArticles";
import TableOfContentsInline from "@/components/blog/TableOfContentsInline";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import SEO from "@/components/SEO";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, getAllPosts } from "@/lib/markdown";
import { useHeadingData } from "@/components/blog/PostContent";

// Keep the heading extraction hook the same as before
const useHeadings = content => {
  const headings = [];
  React.Children.forEach(content, (child, index) => {
    if (!child || !child.type) return;
    const {
      type,
      props
    } = child;
    if (type === 'h2' || type === 'h3') {
      const level = type === 'h2' ? 2 : 3;
      const id = `heading-${index}`;
      const text = props.children;
      headings.push({
        id,
        text,
        level
      });
    }
  });
  return headings;
};
const BlogPostPage = () => {
  const {
    slug
  } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (slug) {
        try {
          const markdownPost = getPostBySlug(slug);
          
          if (markdownPost) {
            const { frontmatter, content, rawContent } = markdownPost;
            const { headings } = useHeadingData(rawContent);
            
            setPost({
              title: frontmatter.title,
              subtitle: frontmatter.subtitle || frontmatter.excerpt,
              category: frontmatter.category,
              coverImage: frontmatter.coverImage,
              publishDate: frontmatter.date,
              readTime: frontmatter.readTime || '5 min',
              author: frontmatter.author,
              content: content,
              rawContent: rawContent,
              headings: headings
            });
            
            // Get related posts
            const allPosts = getAllPosts();
            const related = allPosts
              .filter(p => p.slug !== slug)
              .slice(0, 3)
              .map(p => ({
                id: p.slug,
                slug: p.slug,
                title: p.frontmatter.title,
                excerpt: p.frontmatter.excerpt || '',
                coverImage: p.frontmatter.coverImage,
                category: p.frontmatter.category,
                publishDate: p.frontmatter.date,
                readTime: p.frontmatter.readTime || '5 min'
              }));
            
            setRelatedPosts(related);
          } else {
            // No post found
            console.error('No post found for slug:', slug);
            setPost(null);
          }
        } catch (error) {
          console.error('Error loading blog post:', error);
          setPost(null);
        }
      } else {
        // No slug provided
        console.error('No slug provided');
        setPost(null);
      }
      
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timeout);
  }, [slug]);
  // Use headings from the post object if available
  const headings = post?.headings || [];
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
  // Create breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${slug}` }
  ]);

  // Create article schema
  const articleSchema = generateArticleSchema(
    post.title,
    post.coverImage,
    post.publishDate,
    post.publishDate, // Using publish date as modified date
    post.author?.name || "Deewan Team",
    slug || ""
  );

  // Combine schemas
  const combinedSchema = [breadcrumbSchema, articleSchema];

  return <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50 pt-20">
      <SEO 
        title={`${post.title} | Deewan Blog`}
        description={post.subtitle || post.title}
        canonical={`/blog/${slug}`}
        ogType="article"
        ogImage={post.coverImage}
        schema={combinedSchema}
      />
      <Navbar />
      <ReadingProgressBar />
      <BlogBreadcrumbs post={post} />
      <BlogPostHeader post={post} />
      <BlogCoverImage post={post} />
      <BlogMainContent 
        post={post} 
        markdownContent={post?.rawContent}
        headings={headings} 
        TableOfContents={TableOfContentsInline} 
      />
      <BlogRelatedArticles relatedPosts={relatedPosts} />
      <Footer />
    </div>;
};
export default BlogPostPage;