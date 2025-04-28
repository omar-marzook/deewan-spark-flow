
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPostLoading: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
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
    </div>
  );
};

export default BlogPostLoading;
