
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogListHero from '@/components/blog/BlogListHero';
import BlogGrid from '@/components/blog/BlogGrid';

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white/90">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <BlogListHero />
        
        {/* Blog grid with posts */}
        <BlogGrid />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
