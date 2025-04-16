
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Sample blog post data (placeholder content)
const blogPosts = [
  {
    id: 1,
    title: "The Future of Communication APIs",
    description: "Explore how modern communication APIs are revolutionizing business interactions across Saudi Arabia and beyond.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60",
    readMoreUrl: "#",
  },
  {
    id: 2,
    title: "Enhancing Customer Experience with AI",
    description: "Learn how businesses are leveraging AI-powered messaging to create more personalized customer experiences.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60",
    readMoreUrl: "#",
  },
  {
    id: 3,
    title: "Security Best Practices for Messaging",
    description: "Discover the essential security protocols that ensure your business communications remain protected.",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
    readMoreUrl: "#",
  },
  {
    id: 4,
    title: "Building Scalable Communication Solutions",
    description: "How to design messaging infrastructure that grows seamlessly with your business needs.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60",
    readMoreUrl: "#",
  },
  {
    id: 5,
    title: "WhatsApp Business API Integration Guide",
    description: "A step-by-step guide to implementing WhatsApp Business API for improved customer engagement.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60",
    readMoreUrl: "#",
  },
  {
    id: 6,
    title: "Communication Trends for 2025",
    description: "Stay ahead of the curve with these emerging business communication trends and technologies.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60",
    readMoreUrl: "#",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deewan-dark mb-4">
            Latest Insights & Updates
          </h2>
          <p className="text-lg text-deewan-gray max-w-3xl mx-auto">
            Explore our collection of articles, guides, and industry insights to stay informed about the latest in communication technology.
          </p>
        </div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100 h-full flex flex-col"
            >
              {/* Post thumbnail */}
              <div className="h-48 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-deewan-dark line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <CardDescription className="text-deewan-gray line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardContent>
              
              <CardFooter className="pt-0">
                <Button variant="link" className="p-0 text-deewan-primary font-medium flex items-center gap-1 hover:gap-2 transition-all duration-300">
                  Read more <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
