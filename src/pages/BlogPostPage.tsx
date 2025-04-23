
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostHero from "@/components/blog/PostHero";
import PostContent from "@/components/blog/PostContent";
import PostAuthor from "@/components/blog/PostAuthor";
import RelatedPosts from "@/components/blog/RelatedPosts";

const BlogPostPage = () => {
  // For now, use hardcoded dummy content & images. Will be dynamic later.
  const { slug } = useParams();

  // Placeholder post data (simulate dynamic data)
  const post = {
    title: "How Intelligent Messaging Drives Modern Business Growth",
    category: "Insights",
    author: {
      name: "Sara Al-Farsi",
      avatar: "https://randomuser.me/api/portraits/women/57.jpg",
      bio: "Head of Product at Deewan. Passionate about secure, scalable comms.",
      socials: {
        linkedin: "#",
        twitter: "#"
      }
    },
    date: "April 10, 2025",
    readTime: "7 min",
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&q=80&auto=format&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "In today's hyper-connected world, businesses need to reach customers with speed, relevance, and trust. At Deewan, we believe messaging is the core of intelligent communication—and a driver of smarter business growth."
      },
      {
        type: "heading",
        text: "From SMS to Omnichannel"
      },
      {
        type: "paragraph",
        text: "The evolution of messaging platforms lets businesses engage audiences through SMS, WhatsApp, Voice, and more from a unified dashboard."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format&fit=crop",
        caption: "Seamless omnichannel delivery through one API"
      },
      {
        type: "quote",
        text: "The right message, delivered securely, drives loyalty and results.",
        author: "Sara Al-Farsi"
      },
      {
        type: "paragraph",
        text: "Explore how Deewan makes all this possible—securely and at scale."
      }
    ]
  };

  // Placeholder related posts
  const relatedPosts = [
    {
      id: 1,
      slug: "modern-sms-api-security",
      title: "Modern SMS API Security",
      excerpt: "Why security and compliance matter more than ever for B2B messaging.",
      date: "March 15, 2025",
      readTime: "5 min",
      category: "Security",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      slug: "building-omnichannel-support",
      title: "Building Omnichannel Support",
      excerpt: "How to unify chat, SMS, and voice for seamless customer care.",
      date: "March 22, 2025",
      readTime: "6 min",
      category: "Best Practices",
      imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white/90">
      <Navbar />
      <main className="flex-grow">
        {/* Glassy Hero / Meta */}
        <PostHero post={post} />

        {/* Hero Main Image */}
        <div className="container mx-auto relative z-10 -mt-10 mb-12 px-4 md:px-0">
          <div className="overflow-hidden rounded-3xl shadow-xl glass">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-80 md:h-[460px] object-cover"
              loading="eager"
            />
          </div>
        </div>

        {/* Blog body content area */}
        <section className="container mx-auto max-w-3xl mb-12 px-4 md:px-0">
          <PostContent content={post.content} />
        </section>

        {/* Author info */}
        <section className="container mx-auto max-w-2xl mb-16 px-4 md:px-0">
          <PostAuthor author={post.author} />
        </section>

        {/* Related posts */}
        <section className="container mx-auto max-w-6xl px-4 md:px-0 mb-28">
          <RelatedPosts posts={relatedPosts} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
