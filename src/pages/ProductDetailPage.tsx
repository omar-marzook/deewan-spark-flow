import React from "react";
import { useParams } from "react-router-dom";
import ProductTemplate from "@/components/ProductTemplate";
import { Info, Check, Users, Bookmark, Phone, Mail, Star, Zap, Package, CircleCheck, MessageCircle, Route, Bell, History, ChartBar, Building2, ShoppingBag, HeartHandshake } from "lucide-react";
import NotFound from "./NotFound";

// This would typically come from an API or CMS
// For now, we're hardcoding sample product data
const productsData = {
  "messaging-api": {
    slug: "messaging-api",
    name: "Messaging API",
    tagline: "Connect with your customers instantly across multiple channels with our unified messaging solution.",
    description: "Our Messaging API provides a unified interface for sending and receiving messages across SMS, WhatsApp, and more.",
    features: [
      {
        icon: <Check className="w-6 h-6" />,
        title: "Multi-Channel Support",
        description: "Send messages via SMS, WhatsApp, and other channels with a single API integration. Reach your customers on their preferred platform."
      },
      {
        icon: <Star className="w-6 h-6" />,
        title: "Delivery Reports",
        description: "Track the status of your messages in real-time with detailed delivery reports. Know exactly when your messages are delivered."
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Scalable Architecture",
        description: "Our infrastructure scales seamlessly with your needs, from startups to enterprises. Handle millions of messages without performance issues."
      },
      {
        icon: <Phone className="w-6 h-6" />,
        title: "Global Coverage",
        description: "Reach customers anywhere in the world with our extensive carrier network covering over 200 countries and territories."
      },
      {
        icon: <Bookmark className="w-6 h-6" />,
        title: "Template Management",
        description: "Create and manage message templates for consistent communication. Pre-approve templates for faster delivery on regulated channels."
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "Rich Media Support",
        description: "Send images, videos, documents, and more through supported channels. Create engaging experiences that capture attention."
      }
    ],
    useCases: [
      {
        title: "E-commerce",
        desc: "Send order confirmations, shipping updates, and promotional messages to customers to improve satisfaction and drive sales.",
        icon: <Package className="h-6 w-6" />
      },
      {
        title: "Finance",
        desc: "Deliver secure transaction alerts, authentication codes, and account updates to keep your customers informed and protected.",
        icon: <CircleCheck className="h-6 w-6" />
      },
      {
        title: "Healthcare",
        desc: "Send appointment reminders, prescription notifications, and health tips to improve patient care and reduce no-shows.",
        icon: <Info className="h-6 w-6" />
      }
    ]
  },
  "voice-api": {
    slug: "voice-api",
    name: "Voice API",
    tagline: "Add powerful voice capabilities to your applications for enhanced customer engagement.",
    description: "Our Voice API enables businesses to add voice calling features to their applications, improving customer engagement and support.",
    features: [
      {
        icon: <Check className="w-6 h-6" />,
        title: "Programmable Calls",
        description: "Create dynamic call flows and interactive voice responses with code. Build custom calling experiences for your specific needs."
      },
      {
        icon: <Star className="w-6 h-6" />,
        title: "Call Recording",
        description: "Record calls for training, compliance, and quality assurance purposes. Store and access recordings securely in the cloud."
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Text-to-Speech",
        description: "Convert text to natural-sounding speech in multiple languages and accents. Create dynamic voice experiences without recordings."
      },
      {
        icon: <Phone className="w-6 h-6" />,
        title: "Call Analytics",
        description: "Gain insights into call patterns, duration, and user engagement. Optimize your communication strategy with data-driven decisions."
      },
      {
        icon: <Bookmark className="w-6 h-6" />,
        title: "Voice Recognition",
        description: "Enable voice commands and authentication in your applications. Create hands-free experiences for your users."
      },
      {
        icon: <Mail className="w-6 h-6" />,
        title: "Conference Calling",
        description: "Connect multiple participants in high-quality conference calls. Scale from small team discussions to large virtual events."
      }
    ],
    useCases: [
      {
        title: "Customer Support",
        desc: "Provide responsive and accessible customer support through voice channels, improving resolution times and customer satisfaction.",
        icon: <Users className="h-6 w-6" />
      },
      {
        title: "Telehealth",
        desc: "Enable secure and reliable voice consultations between patients and healthcare providers for improved healthcare access.",
        icon: <CircleCheck className="h-6 w-6" />
      },
      {
        title: "Education",
        desc: "Facilitate distance learning and tutoring through voice communications, making education more accessible and engaging.",
        icon: <Info className="h-6 w-6" />
      }
    ]
  },
  "omni-channel-chat": {
    slug: "omni-channel-chat",
    name: "Omni-Channel Chat",
    tagline: "Centralize all your customer conversations in one secure, responsive, and scalable platform.",
    description: "Manage real-time messages from WhatsApp, live chat, social channels, and email — all in a unified inbox.",
    features: [
      {
        icon: <MessageCircle className="w-6 h-6" />,
        title: "Multi-Channel Inbox",
        description: "Manage WhatsApp, email, chat, and social messages all in one unified platform. Stay organized and responsive across all channels."
      },
      {
        icon: <Route className="w-6 h-6" />,
        title: "Smart Routing",
        description: "Automatically assign conversations based on team availability, priority levels, and time zones for optimal response times."
      },
      {
        icon: <Bell className="w-6 h-6" />,
        title: "Real-Time Notifications",
        description: "Get instant alerts for new messages and important conversations. Never miss critical customer communications."
      },
      {
        icon: <History className="w-6 h-6" />,
        title: "Searchable History",
        description: "Access complete conversation histories across all channels with powerful search and filtering capabilities."
      },
      {
        icon: <ChartBar className="w-6 h-6" />,
        title: "Insightful Analytics",
        description: "Track team performance, response times, and conversation quality with comprehensive analytics dashboards."
      }
    ],
    useCases: [
      {
        title: "Public Sector",
        desc: "Streamline citizen services and support with secure, compliant communication channels for government agencies.",
        icon: <Building2 className="h-6 w-6" />
      },
      {
        title: "Customer Support",
        desc: "Deliver exceptional customer service with unified messaging and smart team collaboration tools.",
        icon: <Users className="h-6 w-6" />
      },
      {
        title: "eCommerce & Logistics",
        desc: "Keep customers informed with real-time order updates and instant support across all channels.",
        icon: <ShoppingBag className="h-6 w-6" />
      },
      {
        title: "Internal Help Desk",
        desc: "Streamline HR and IT support with an efficient internal communication platform.",
        icon: <HeartHandshake className="h-6 w-6" />
      }
    ],
    heroImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
  },
};

const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the product data based on the slug
  const productData = slug ? productsData[slug as keyof typeof productsData] : null;
  
  // If no product is found, show the 404 page
  if (!productData) {
    return <NotFound />;
  }
  
  return <ProductTemplate product={productData} />;
};

export default ProductDetailPage;
