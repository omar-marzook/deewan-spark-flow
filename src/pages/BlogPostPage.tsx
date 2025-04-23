
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, Clock, User, ChevronRight, 
  Share2, Bookmark, Twitter, Linkedin, 
  Facebook, Mail, ArrowLeft
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

// Sticky progress bar that shows reading progress
const ReadingProgressBar = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const updateProgress = () => {
      const article = document.getElementById('article-content');
      if (!article) return;
      
      const totalHeight = article.clientHeight;
      const windowHeight = window.innerHeight;
      const scrolled = window.scrollY - article.offsetTop + 200;
      const percentage = Math.min(Math.max(scrolled / (totalHeight - windowHeight) * 100, 0), 100);
      
      setProgress(percentage);
    };
    
    window.addEventListener('scroll', updateProgress);
    updateProgress();
    
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);
  
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div 
        className="h-full bg-gradient-to-r from-deewan-primary to-deewan-secondary transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

// Table of contents component
const TableOfContents = ({ headings }) => {
  const [activeId, setActiveId] = useState("");
  
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };
    
    const observerOptions = {
      rootMargin: "-100px 0px -60% 0px",
      threshold: 0
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    headings.forEach(heading => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });
    
    return () => observer.disconnect();
  }, [headings]);
  
  if (!headings.length) return null;
  
  return (
    <div className="sticky top-32 max-h-[calc(100vh-200px)] overflow-auto pr-2">
      <div className="rounded-xl glass p-5 border-l-4 border-deewan-primary">
        <h4 className="font-bold text-lg text-deewan-dark/90 mb-3 flex items-center">
          <Bookmark className="w-4 h-4 mr-2 text-deewan-primary" />
          Contents
        </h4>
        <nav>
          <ul className="space-y-2 text-sm">
            {headings.map((heading) => (
              <li key={heading.id} className={`${heading.level === 3 ? 'ml-3' : ''}`}>
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(heading.id)?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }}
                  className={`
                    block py-1 px-2 rounded hover:bg-deewan-primary/10 transition-colors
                    ${activeId === heading.id ? 
                      'text-deewan-primary font-medium bg-deewan-primary/5' : 
                      'text-deewan-dark/70'
                    }
                  `}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

// Function to extract headings from content
const useHeadings = (content) => {
  const headings = [];
  
  React.Children.forEach(content, (child, index) => {
    if (!child || !child.type) return;
    
    const { type, props } = child;
    if (type === 'h2' || type === 'h3') {
      const level = type === 'h2' ? 2 : 3;
      const id = `heading-${index}`;
      const text = props.children;
      
      headings.push({ id, text, level });
    }
  });
  
  return headings;
};

// Main component for the blog post
const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Fetch blog post data
  useEffect(() => {
    // Simulating API fetch with setTimeout
    const timeout = setTimeout(() => {
      // Example post data
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
        content: [
          <p key="p1" className="lead">
            In today's hyper-connected world, businesses need sophisticated communication tools that can adapt to changing customer expectations while maintaining security and compliance standards.
          </p>,
          <p key="p2">
            From WhatsApp Business integrations to omnichannel messaging platforms, the landscape of business communications has evolved dramatically over the past decade. Today's enterprises require solutions that not only connect them with customers across multiple channels but also leverage artificial intelligence to optimize these interactions.
          </p>,
          <h2 key="h1" id="heading-0">The Evolution of Business Messaging</h2>,
          <p key="p3">
            Traditional SMS messaging has given way to rich, interactive experiences across multiple platforms. Companies that adapt to these new channels are seeing significantly higher engagement rates and customer satisfaction scores.
          </p>,
          <figure key="fig1" className="my-8">
            <img 
              src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=900&auto=format" 
              alt="Modern messaging interfaces on multiple devices" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
            <figcaption className="text-sm text-center mt-2 text-deewan-dark/60">
              Modern enterprises leverage multiple communication channels simultaneously
            </figcaption>
          </figure>,
          <p key="p4">
            According to recent industry reports, businesses that implement omnichannel messaging strategies see a 25% increase in customer retention and a 10% growth in revenue compared to single-channel approaches.
          </p>,
          <h2 key="h2" id="heading-1">AI-Powered Conversation Enhancement</h2>,
          <p key="p5">
            Artificial intelligence is revolutionizing how businesses handle customer communications by:
          </p>,
          <ul key="ul1" className="list-disc pl-6 space-y-2 my-4">
            <li>Automatically routing inquiries to the appropriate department</li>
            <li>Providing customer service agents with real-time suggestions</li>
            <li>Analyzing sentiment to detect customer satisfaction levels</li>
            <li>Personalizing responses based on customer history and preferences</li>
          </ul>,
          <h3 key="h3" id="heading-2">Predictive Response Technology</h3>,
          <p key="p6">
            One of the most promising developments in this space is predictive response technology. By analyzing patterns in customer inquiries, AI systems can suggest likely responses to common questions, dramatically reducing response times.
          </p>,
          <blockquote key="quote1" className="border-l-4 border-deewan-primary pl-4 italic my-6 text-deewan-dark/80">
            "The future of customer communication isn't just about being available on every channel—it's about being intelligently present, with contextual awareness of each customer's journey."
            <footer className="text-sm mt-2 font-medium text-deewan-primary">— Dr. Sarah Chen, Communication AI Researcher</footer>
          </blockquote>,
          <h2 key="h4" id="heading-3">Security and Compliance Considerations</h2>,
          <p key="p7">
            As messaging platforms become more sophisticated, so too must security measures. End-to-end encryption, data residency controls, and compliance with regulations like GDPR and CCPA are no longer optional for businesses that take customer data seriously.
          </p>,
          <h3 key="h5" id="heading-4">Identity Verification</h3>,
          <p key="p8">
            Multi-factor authentication and biometric verification are increasingly being integrated into messaging platforms to ensure that sensitive communications remain secure.
          </p>,
          <p key="p9">
            The most successful implementations combine strong security measures with seamless user experiences, making verification steps intuitive rather than intrusive.
          </p>,
          <h2 key="h6" id="heading-5">The Future of Business Messaging</h2>,
          <p key="p10">
            Looking ahead, we can expect to see further integration of messaging platforms with other business systems, creating unified communication ecosystems that provide comprehensive views of customer interactions across all touchpoints.
          </p>,
          <p key="p11">
            Voice-to-text transcription, augmented reality product demonstrations, and blockchain-verified message authentication are just a few of the innovations on the horizon that will continue to transform how businesses connect with their customers.
          </p>,
          <p key="p12">
            Organizations that invest in these technologies today will be well-positioned to meet the communication expectations of tomorrow's customers, building lasting relationships through intelligent, secure, and personalized messaging experiences.
          </p>
        ]
      });
      
      // Example related posts
      setRelatedPosts([
        {
          id: 1,
          slug: "customer-data-security-best-practices",
          title: "Customer Data Security: Best Practices for 2025",
          excerpt: "How to protect sensitive customer information in an increasingly complex regulatory landscape.",
          coverImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&auto=format",
          category: "Security",
          publishDate: "April 10, 2025",
          readTime: "6 min"
        },
        {
          id: 2,
          slug: "whatsapp-business-api-implementation",
          title: "Implementing WhatsApp Business API: A Complete Guide",
          excerpt: "Step-by-step instructions for integrating WhatsApp Business API into your customer service workflow.",
          coverImage: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&auto=format",
          category: "Integration",
          publishDate: "April 5, 2025",
          readTime: "10 min"
        },
        {
          id: 3,
          slug: "voice-messaging-business-applications",
          title: "Voice Messaging: The Untapped Business Communication Channel",
          excerpt: "How voice messages are creating more personal connections between businesses and customers.",
          coverImage: "https://images.unsplash.com/photo-1590935217281-8f102120d683?w=500&auto=format",
          category: "Trends",
          publishDate: "March 28, 2025",
          readTime: "7 min"
        }
      ]);
      
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timeout);
  }, [slug]);
  
  const headings = useHeadings(post?.content || []);
  
  if (loading) {
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
  }
  
  if (!post) {
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
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <ReadingProgressBar />
      
      {/* Breadcrumb */}
      <div className="bg-white/80 backdrop-blur-sm sticky top-1 z-40 py-3 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto max-w-6xl px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>{post.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      {/* Article header */}
      <header className="container mx-auto max-w-6xl px-4 pt-12 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {post.category && (
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider bg-deewan-primary/10 text-deewan-primary rounded-full">
              {post.category}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deewan-dark leading-tight mb-4">
            {post.title}
          </h1>
          {post.subtitle && (
            <p className="text-xl text-deewan-dark/70 mb-6 max-w-3xl">
              {post.subtitle}
            </p>
          )}
          
          {/* Author and meta info */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-deewan-dark/60">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-deewan-primary/20">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-deewan-dark">{post.author.name}</p>
                <p className="text-xs">{post.author.role}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{post.publishDate}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} read</span>
            </div>
          </div>
        </motion.div>
      </header>
      
      {/* Cover image */}
      <div className="container mx-auto max-w-5xl px-4 mb-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative aspect-[21/9] overflow-hidden rounded-2xl shadow-xl"
        >
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      
      {/* Main content area */}
      <div className="container mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-12 mb-20">
        {/* Article content */}
        <motion.article 
          id="article-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-p:text-deewan-dark/90 prose-a:text-deewan-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-deewan-primary prose-img:rounded-xl prose-img:shadow-lg"
        >
          {post.content}
        </motion.article>
        
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <TableOfContents headings={headings} />
          
          {/* Share buttons */}
          <div className="sticky top-[calc(32px+300px)] mt-8 glass rounded-xl p-5">
            <h4 className="font-bold text-lg text-deewan-dark/90 mb-3 flex items-center">
              <Share2 className="w-4 h-4 mr-2 text-deewan-primary" />
              Share Article
            </h4>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="icon" className="w-10 h-10 rounded-full text-deewan-primary hover:text-white hover:bg-deewan-primary">
                <Twitter className="w-4 h-4" />
                <span className="sr-only">Share on Twitter</span>
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10 rounded-full text-blue-600 hover:text-white hover:bg-blue-600">
                <Facebook className="w-4 h-4" />
                <span className="sr-only">Share on Facebook</span>
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10 rounded-full text-blue-700 hover:text-white hover:bg-blue-700">
                <Linkedin className="w-4 h-4" />
                <span className="sr-only">Share on LinkedIn</span>
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10 rounded-full text-deewan-dark hover:text-white hover:bg-deewan-dark">
                <Mail className="w-4 h-4" />
                <span className="sr-only">Share by Email</span>
              </Button>
            </div>
          </div>
        </aside>
      </div>
      
      {/* Author bio */}
      <div className="container mx-auto max-w-3xl px-4 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass border border-deewan-primary/10 rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-deewan-primary/20 flex-shrink-0">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-deewan-dark mb-1">{post.author.name}</h3>
              <p className="text-deewan-primary mb-3">{post.author.role}</p>
              <p className="text-deewan-dark/80 mb-4">{post.author.bio}</p>
              <div className="flex gap-3">
                {post.author.twitter && (
                  <a href={post.author.twitter} target="_blank" rel="noopener noreferrer" 
                    className="p-2 rounded-full bg-deewan-primary/10 text-deewan-primary hover:bg-deewan-primary/20 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {post.author.linkedin && (
                  <a href={post.author.linkedin} target="_blank" rel="noopener noreferrer"
                    className="p-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Mobile share buttons */}
      <div className="md:hidden container mx-auto max-w-3xl px-4 mb-12">
        <div className="glass rounded-xl p-5 border border-gray-100">
          <h4 className="font-bold text-center text-deewan-dark/90 mb-3">
            Share This Article
          </h4>
          <div className="flex justify-center gap-3">
            <Button variant="outline" size="icon" className="w-10 h-10 rounded-full text-deewan-primary hover:text-white hover:bg-deewan-primary">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="w-10 h-10 rounded-full text-blue-600 hover:text-white hover:bg-blue-600">
              <Facebook className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="w-10 h-10 rounded-full text-blue-700 hover:text-white hover:bg-blue-700">
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="w-10 h-10 rounded-full text-deewan-dark hover:text-white hover:bg-deewan-dark">
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Related articles */}
      <div className="container mx-auto max-w-6xl px-4 mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-deewan-dark mb-8 text-center">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map((relatedPost) => (
            <motion.div 
              key={relatedPost.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Link to={`/blog/${relatedPost.slug}`} className="block group">
                <article className="glass overflow-hidden rounded-xl transition-transform duration-300 group-hover:-translate-y-1 border border-gray-100">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={relatedPost.coverImage} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    {relatedPost.category && (
                      <span className="text-xs font-medium text-deewan-primary">{relatedPost.category}</span>
                    )}
                    <h3 className="font-bold text-lg text-deewan-dark mt-1 mb-2 group-hover:text-deewan-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-deewan-dark/70 mb-3 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex justify-between items-center text-xs text-deewan-dark/60">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {relatedPost.publishDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {relatedPost.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
