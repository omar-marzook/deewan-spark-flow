
import React from 'react';
import { PostMetadata } from '@/lib/markdownUtils';
import BlogCard from './BlogCard';

interface BlogGridProps {
  posts: PostMetadata[];
  loading?: boolean;
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts, loading = false }) => {
  if (loading) {
    return (
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array(3).fill(0).map((_, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-white/90">
              <div className="aspect-video bg-gray-200 animate-pulse" />
              <div className="p-6">
                <div className="w-1/4 h-5 bg-gray-200 rounded-full mb-4 animate-pulse" />
                <div className="w-3/4 h-7 bg-gray-200 rounded-lg mb-3 animate-pulse" />
                <div className="flex gap-2 mb-3">
                  <div className="w-20 h-4 bg-gray-200 rounded-full animate-pulse" />
                  <div className="w-12 h-4 bg-gray-200 rounded-full animate-pulse" />
                </div>
                <div className="space-y-2 mb-6">
                  <div className="w-full h-4 bg-gray-200 rounded-lg animate-pulse" />
                  <div className="w-5/6 h-4 bg-gray-200 rounded-lg animate-pulse" />
                  <div className="w-4/6 h-4 bg-gray-200 rounded-lg animate-pulse" />
                </div>
                <div className="w-32 h-5 bg-gray-200 rounded-lg animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="container mx-auto max-w-7xl px-4 py-16">
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={post.slug} className="flex flex-col h-full">
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
                featured={index === 0 && posts.length > 1}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-2xl font-semibold text-deewan-dark">No posts found</h3>
          <p className="text-deewan-gray mt-2">Check back later for new content!</p>
        </div>
      )}
    </section>
  );
};

export default BlogGrid;
