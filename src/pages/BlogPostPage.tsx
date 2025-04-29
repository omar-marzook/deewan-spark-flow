
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import PostAuthor from "@/components/blog/PostAuthor";
import BlogBreadcrumbs from "@/components/blog/BlogBreadcrumbs";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogCoverImage from "@/components/blog/BlogCoverImage";
import BlogMainContent from "@/components/blog/BlogMainContent";
import BlogShareSection from "@/components/blog/BlogShareSection";
import BlogRelatedArticles from "@/components/blog/BlogRelatedArticles";
import TableOfContentsInline from "@/components/blog/TableOfContentsInline";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import { ArrowLeft } from "lucide-react";

// Keep the heading extraction hook the same as before
const useHeadings = content => {
  const headings = [];
  React.Children.forEach(content, (child, index) => {
    if (!child || !child.type) return;
    const {
      type,
      props
    } = child;
    if (type === 'h2' || type === 'h3') {
      const level = type === 'h2' ? 2 : 3;
      const id = `heading-${index}`;
      const text = props.children;
      headings.push({
        id,
        text,
        level
      });
    }
  });
  return headings;
};

const BlogPostPage = () => {
  const {
    slug
  } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPost({
        title: "Transforming Business Communications with AI-Powered Messaging",
        subtitle: "How modern enterprises are leveraging intelligent messaging platforms to enhance customer experiences",
        category: "Technology",
        coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format",
        publishDate: "April 18, 2025",
        readTime: "8 min",
        author: {
          name: "Layla Al-Madani",
          role: "Chief Technology Officer",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
          bio: "Layla specializes in AI-driven communication systems with over 15 years of experience in the field.",
          twitter: "https://twitter.com/laylamadani",
          linkedin: "https://linkedin.com/in/laylamadani"
        },
        content: [<p key="p1" className="lead">
            In today's hyper-connected world, businesses need sophisticated communication tools that can adapt to changing customer expectations while maintaining security and compliance standards.
          </p>, <p key="p2">
            From WhatsApp Business integrations to omnichannel messaging platforms, the landscape of business communications has evolved dramatically over the past decade. Today's enterprises require solutions that not only connect them with customers across multiple channels but also leverage artificial intelligence to optimize these interactions.
          </p>, <h2 key="h1" id="heading-0">The Evolution of Business Messaging</h2>, <p key="p3">
            Traditional SMS messaging has given way to rich, interactive experiences across multiple platforms. Companies that adapt to these new channels are seeing significantly higher engagement rates and customer satisfaction scores.
          </p>, <figure key="fig1" className="my-8">
            <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=900&auto=format" alt="Modern messaging interfaces on multiple devices" className="rounded-xl shadow-lg w-full h-auto object-cover" />
            <figcaption className="text-sm text-center mt-2 text-deewan-dark/60">
              Modern enterprises leverage multiple communication channels simultaneously
            </figcaption>
          </figure>, <p key="p4">
            According to recent industry reports, businesses that implement omnichannel messaging strategies see a 25% increase in customer retention and a 10% growth in revenue compared to single-channel approaches.
          </p>, <h2 key="h2" id="heading-1">AI-Powered Conversation Enhancement</h2>, <p key="p5">
            Artificial intelligence is revolutionizing how businesses handle customer communications by:
          </p>, <ul key="ul1" className="list-disc pl-6 space-y-2 my-4">
            <li>Automatically routing inquiries to the appropriate department</li>
            <li>Providing customer service agents with real-time suggestions</li>
            <li>Analyzing sentiment to detect customer satisfaction levels</li>
            <li>Personalizing responses based on customer history and preferences</li>
          </ul>, <h3 key="h3" id="heading-2">Predictive Response Technology</h3>, <p key="p6">
            One of the most promising developments in this space is predictive response technology. By analyzing patterns in customer inquiries, AI systems can suggest likely responses to common questions, dramatically reducing response times.
          </p>, <blockquote key="quote1" className="border-l-4 border-deewan-primary pl-4 italic my-6 text-deewan-dark/80">
            "The future of customer communication isn't just about being available on every channel—it's about being intelligently present, with contextual awareness of each customer's journey."
            <footer className="text-sm mt-2 font-medium text-deewan-primary">— Dr. Sarah Chen, Communication AI Researcher</footer>
          </blockquote>, <h2 key="h4" id="heading-3">Security and Compliance Considerations</h2>, <p key="p7">
            As messaging platforms become more sophisticated, so too must security measures. End-to-end encryption, data residency controls, and compliance with regulations like GDPR and CCPA are no longer optional for businesses that take customer data seriously.
          </p>, <h3 key="h5" id="heading-4">Identity Verification</h3>, <p key="p8">
            Multi-factor authentication and biometric verification are increasingly being integrated into messaging platforms to ensure that sensitive communications remain secure.
          </p>, <p key="p9">
            The most successful implementations combine strong security measures with seamless user experiences, making verification steps intuitive rather than intrusive.
          </p>, <h2 key="h6" id="heading-5">The Future of Business Messaging</h2>, <p key="p10">
            Looking ahead, we can expect to see further integration of messaging platforms with other business systems, creating unified communication ecosystems that provide comprehensive views of customer interactions across all touchpoints.
          </p>, <p key="p11">
            Voice-to-text transcription, augmented reality product demonstrations, and blockchain-verified message authentication are just a few of the innovations on the horizon that will continue to transform how businesses connect with their customers.
          </p>, <p key="p12">
            Organizations that invest in these technologies today will be well-positioned to meet the communication expectations of tomorrow's customers, building lasting relationships through intelligent, secure, and personalized messaging experiences.
          </p>]
      });
      setRelatedPosts([{
        id: 1,
        slug: "customer-data-security-best-practices",
        title: "Customer Data Security: Best Practices for 2025",
        excerpt: "How to protect sensitive customer information in an increasingly complex regulatory landscape.",
        coverImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&auto=format",
        category: "Security",
        publishDate: "April 10, 2025",
        readTime: "6 min"
      }, {
        id: 2,
        slug: "whatsapp-business-api-implementation",
        title: "Implementing WhatsApp Business API: A Complete Guide",
        excerpt: "Step-by-step instructions for integrating WhatsApp Business API into your customer service workflow.",
        coverImage: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&auto=format",
        category: "Integration",
        publishDate: "April 5, 2025",
        readTime: "10 min"
      }, {
        id: 3,
        slug: "voice-messaging-business-applications",
        title: "Voice Messaging: The Untapped Business Communication Channel",
        excerpt: "How voice messages are creating more personal connections between businesses and customers.",
        coverImage: "https://images.unsplash.com/photo-1590935217281-8f102120d683?w=500&auto=format",
        category: "Trends",
        publishDate: "March 28, 2025",
        readTime: "7 min"
      }]);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [slug]);

  const headings = useHeadings(post?.content || []);

  if (loading) {
    return <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
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
      </div>;
  }

  if (!post) {
    return <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
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
      </div>;
  }

  return <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50 pt-20">
      <Navbar />
      <ReadingProgressBar />
      <BlogBreadcrumbs post={post} />
      <BlogPostHeader post={post} />
      <BlogCoverImage post={post} />
      <BlogMainContent post={post} headings={headings} TableOfContents={TableOfContentsInline} />
      <BlogShareSection />
      <BlogRelatedArticles relatedPosts={relatedPosts} />
      <Footer />
    </div>;
};

export default BlogPostPage;
