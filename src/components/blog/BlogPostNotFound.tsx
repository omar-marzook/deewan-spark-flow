
import React from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const BlogPostNotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
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
    </div>
  );
};

export default BlogPostNotFound;
