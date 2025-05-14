
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogListHero from '@/components/blog/BlogListHero';
import BlogGrid from '@/components/blog/BlogGrid';
import SEO from '@/components/SEO';
import { generateBreadcrumbSchema } from '@/lib/schema';

const BlogPage = () => {
  // Create breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" }
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-white/90">
      <SEO 
        title="Communication Insights & Updates | Deewan Blog"
        description="Explore the latest trends, insights and best practices in business communication technology from Deewan's industry experts."
        canonical="/blog"
        ogType="website"
        schema={breadcrumbSchema}
      />
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
