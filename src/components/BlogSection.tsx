
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample blog post data (placeholder content)
const blogPosts = [
  {
    id: 1,
    title: "How to prepare for an interview",
    description: "Find out how to impress an employer and increase your chances of successful employment.",
    date: "June 12, 2024",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60",
    readMoreUrl: "/blog/prepare-for-interview"
  },
  {
    id: 2,
    title: "10 Key Skills Employers Are Looking For",
    description: "Develop skills in demand in the labor market and increase your career opportunities.",
    date: "June 2, 2024",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60",
    readMoreUrl: "/blog/key-skills-employers"
  },
  {
    id: 3,
    title: "How to create a resume that gets noticed",
    description: "Helpful tips and templates for creating a resume that will set you apart from your competition.",
    date: "May 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
    readMoreUrl: "/blog/create-resume"
  },
];

const BlogSection = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section header - centered with description */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Blog
          </h2>
          <p className="text-lg text-deewan-gray max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and best practices
          </p>
        </div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              to={post.readMoreUrl} 
              className="group flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              {/* Post thumbnail */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                {/* Date */}
                <p className="text-sm text-deewan-gray mb-2">
                  {post.date}
                </p>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-deewan-dark mb-3 group-hover:text-deewan-primary transition-colors">
                  {post.title}
                </h3>
                
                {/* Description */}
                <p className="text-deewan-gray mb-5 line-clamp-2">
                  {post.description}
                </p>
                
                {/* Read more link */}
                <div className="mt-auto">
                  <span className="text-sm font-medium text-deewan-primary flex items-center">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all button - centered */}
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
