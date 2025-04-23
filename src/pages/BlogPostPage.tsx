
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostHero from "@/components/blog/PostHero";
import PostContent, { useHeadingData } from "@/components/blog/PostContent";
import PostAuthor from "@/components/blog/PostAuthor";
import RelatedPosts from "@/components/blog/RelatedPosts";
import TableOfContentsSticky from "@/components/blog/TableOfContentsSticky";
import ReadingProgress from "@/components/blog/ReadingProgress";
import { ChevronRight } from "lucide-react";

const BlogPostPage = () => {
  // Use dynamic route param for future integration.
  const { slug } = useParams();

  // Placeholder post data for demonstration.
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
        caption: "Seamless omnichannel omnichannel delivery through one API"
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

  // Example related posts (stub data)
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

  // Generate hydrated content and ToC headings.
  const { hydratedContent, headings } = useHeadingData(post.content);

  return (
    <div className="min-h-screen flex flex-col bg-white/90">
      <Navbar />
      {/* Breadcrumb (distinct & clear, glassy, always visible at top) */}
      <div className="w-full bg-transparent z-40 pt-4 pb-2">
        <nav
          className="container mx-auto max-w-4xl px-4 md:px-0 text-xs sm:text-sm font-medium flex items-center gap-1 text-deewan-dark/60 bg-white/70 glass rounded-xl shadow border border-white/30 py-2 sm:py-3 px-4 mb-6 sm:mb-0"
          aria-label="Breadcrumb"
          style={{
            fontFamily: "'Gilroy', 'Poppins', sans-serif",
            position: "relative"
          }}
        >
          <Link to="/" className="hover:underline hover:text-deewan-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 opacity-50" />
          <Link to="/blog" className="hover:underline hover:text-deewan-primary transition-colors">Blog</Link>
          <ChevronRight className="w-4 h-4 opacity-50" />
          <span className="text-deewan-dark/80 truncate">{post.title}</span>
        </nav>
      </div>

      <main className="flex-grow">
        {/* Hero section */}
        <PostHero post={post} />

        <div className="container mx-auto max-w-7xl px-4 md:px-0 grid grid-cols-1 xl:grid-cols-[1fr_3fr_0.7fr] gap-8 xl:gap-12">
          {/* Table of Contents Sidebar (sticky, glassy, only on xl+) */}
          <div className="hidden xl:block pt-12">
            <TableOfContentsSticky headings={headings} />
          </div>

          {/* Blog Content Main Area */}
          <section id="blog-content" className="col-span-1 xl:col-span-1 2xl:pr-12 mb-8">
            {/* Hero Main Article Image (rounded, glass look) */}
            <div className="relative z-10 -mt-10 mb-10 rounded-3xl shadow-xl glass overflow-hidden">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-80 md:h-[420px] object-cover rounded-3xl"
                loading="eager"
              />
            </div>
            {/* Article Content with proper vertical spacing and hierarchy */}
            <div className="max-w-3xl mx-auto mb-12 relative">
              <PostContent content={post.content} children={hydratedContent} />
            </div>
            {/* Author Card */}
            <section className="max-w-2xl mx-auto mb-16">
              <PostAuthor author={post.author} />
            </section>
            {/* Related Posts */}
            <section className="max-w-6xl mx-auto mb-28">
              <RelatedPosts posts={relatedPosts} />
            </section>
          </section>

          {/* Reading Progress Bar (sticky, right, only on xl+) */}
          <div className="hidden xl:flex flex-col pt-28 items-center">
            <ReadingProgress targetSelector="#blog-content" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;

