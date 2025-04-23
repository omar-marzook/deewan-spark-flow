
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogCard from "./blog/BlogCard";

// Sample blog post data (placeholder content)
const blogPosts = [
  {
    id: 1,
    title: "How to prepare for an interview",
    excerpt: "Find out how to impress an employer and increase your chances of successful employment.",
    date: "June 12, 2024",
    readTime: "5 min",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60",
    category: "Career",
    slug: "prepare-for-interview"
  },
  {
    id: 2,
    title: "10 Key Skills Employers Are Looking For",
    excerpt: "Develop skills in demand in the labor market and increase your career opportunities.",
    date: "June 2, 2024",
    readTime: "7 min",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60",
    category: "Skills",
    slug: "key-skills-employers"
  },
  {
    id: 3,
    title: "How to create a resume that gets noticed",
    excerpt: "Helpful tips and templates for creating a resume that will set you apart from your competition.",
    date: "May 15, 2024",
    readTime: "6 min",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
    category: "Resume",
    slug: "create-resume"
  },
];

const BlogSection = () => {
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
          {blogPosts.map((post) => (
            <div className="flex flex-col h-full" key={post.id}>
              <BlogCard post={post} />
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
