
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogListHero from '@/components/blog/BlogListHero';
import BlogGrid from '@/components/blog/BlogGrid';
import { getAllPosts, PostMetadata } from '@/lib/markdownUtils';

const BlogPage = () => {
  const [posts, setPosts] = useState<PostMetadata[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const allPosts = await getAllPosts();
      setPosts(allPosts);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white/90">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <BlogListHero />
        
        {/* Blog grid with posts */}
        <BlogGrid posts={posts} loading={loading} />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
