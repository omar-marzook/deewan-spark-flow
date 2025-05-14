import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogCard from "./BlogCard";
import { getAllPosts } from "@/lib/markdown";

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  
  useEffect(() => {
    try {
      // Get all posts from markdown files
      const posts = getAllPosts();
      
      // Map posts to the format expected by the component
      const formattedPosts = posts.map((post, index) => ({
        id: index + 1,
        slug: post.slug,
        title: post.frontmatter.title,
        excerpt: post.frontmatter.excerpt || '',
        date: post.frontmatter.date,
        readTime: post.frontmatter.readTime || '5 min',
        imageUrl: post.frontmatter.coverImage,
        category: post.frontmatter.category || 'General',
      }));
      
      // Limit to 3 posts for the homepage
      const limitedPosts = formattedPosts.slice(0, 3);
      setBlogPosts(limitedPosts);
    } catch (err) {
      console.error('Error loading blog posts for blog section:', err);
      setBlogPosts([]);
    }
  }, []);
  return (
    <section className="py-24 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Blog
          </h2>
          <p className="text-base md:text-lg text-deewan-gray max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and best practices.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-stretch">
          {blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <div className="flex flex-col h-full" key={post.id}>
                <BlogCard post={post} />
              </div>
            ))
          ) : (
            // Loading state or fallback
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-sm bg-white animate-pulse">
                <div className="aspect-video bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="text-center">
          <Button
            asChild
            className="bg-deewan-primary hover:bg-deewan-primary/90 text-white"
          >
            <Link to="/blog">
              View All Blog Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
