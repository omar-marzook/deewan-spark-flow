
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogCard from "./blog/BlogCard";
import { getAllPosts, PostMetadata } from "@/lib/markdownUtils";

const BlogSection = () => {
  const [posts, setPosts] = useState<PostMetadata[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getAllPosts();
      // Only get the latest 3 posts for the homepage section
      setPosts(allPosts.slice(0, 3));
    };

    fetchPosts();
  }, []);

  return (
    <section className="py-24 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Blog
          </h2>
          <p className="text-lg text-deewan-gray max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and best practices
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-stretch">
          {posts.map((post, index) => (
            <div className="flex flex-col h-full" key={post.slug}>
              <BlogCard 
                post={{
                  id: index,
                  slug: post.slug,
                  title: post.title,
                  excerpt: post.excerpt,
                  date: post.date,
                  readTime: post.readTime,
                  category: post.category,
                  imageUrl: post.coverImage,
                }}
              />
            </div>
          ))}
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
