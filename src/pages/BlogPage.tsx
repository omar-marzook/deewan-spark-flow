
import React from 'react';
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
  
  // Create complete SEO data object
  const seoData = {
    title: "Communication Insights & Updates | Deewan Blog",
    description: "Explore the latest trends, insights and best practices in business communication technology from Deewan's industry experts.",
    canonical: "/blog",
    ogType: "website",
    schema: breadcrumbSchema
  };
  
  // Store SEO data in pageProps for server-side rendering
  if (typeof window === 'undefined') {
    // This only runs on the server
    // @ts-ignore - This will be picked up by Vike
    BlogPage.pageProps = { seoData };
  }

  return (
    <div className="min-h-screen flex flex-col bg-white/90">
      <SEO {...seoData} />
      <main className="flex-grow">
        {/* Hero section */}
        <BlogListHero />
        
        {/* Blog grid with posts */}
        <BlogGrid />
      </main>
    </div>
  );
};

export default BlogPage;
