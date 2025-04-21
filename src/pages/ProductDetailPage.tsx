
import React from "react";
import { useParams } from "react-router-dom";
import ProductTemplate from "@/components/ProductTemplate";
import { Info, Check, Users, Bookmark, Phone, Mail, Star } from "lucide-react";
import NotFound from "./NotFound";

// This would typically come from an API or CMS
// For now, we're hardcoding sample product data
const productsData = {
  "messaging-api": {
    slug: "messaging-api",
    name: "Messaging API",
    tagline: "Powerful messaging solution for businesses to connect with customers across multiple channels.",
    description: "Our Messaging API provides a unified interface for sending and receiving messages across SMS, WhatsApp, and more.",
    features: [
      {
        icon: <Check className="w-7 h-7 text-deewan-primary" />,
        title: "Multi-Channel Support",
        description: "Send messages via SMS, WhatsApp, and other channels with a single API."
      },
      {
        icon: <Star className="w-7 h-7 text-deewan-primary" />,
        title: "Delivery Reports",
        description: "Track the status of your messages in real-time with detailed delivery reports."
      },
      {
        icon: <Users className="w-7 h-7 text-deewan-primary" />,
        title: "Scalable Architecture",
        description: "Our infrastructure scales with your needs, from startups to enterprises."
      },
      {
        icon: <Phone className="w-7 h-7 text-deewan-primary" />,
        title: "Global Coverage",
        description: "Reach customers anywhere in the world with our extensive carrier network."
      },
      {
        icon: <Bookmark className="w-7 h-7 text-deewan-primary" />,
        title: "Template Management",
        description: "Create and manage message templates for consistent communication."
      },
      {
        icon: <Mail className="w-7 h-7 text-deewan-primary" />,
        title: "Rich Media Support",
        description: "Send images, videos, documents, and more through supported channels."
      }
    ],
    useCases: [
      {
        title: "E-commerce",
        desc: "Send order confirmations, shipping updates, and promotional messages to customers.",
        icon: <Users className="h-9 w-9 text-deewan-secondary" />
      },
      {
        title: "Finance",
        desc: "Deliver secure transaction alerts, authentication codes, and account updates.",
        icon: <Bookmark className="h-9 w-9 text-deewan-secondary" />
      },
      {
        title: "Healthcare",
        desc: "Send appointment reminders, prescription notifications, and health tips.",
        icon: <Info className="h-9 w-9 text-deewan-secondary" />
      }
    ]
  },
  "voice-api": {
    slug: "voice-api",
    name: "Voice API",
    tagline: "Integrate voice calling capabilities into your applications for enhanced customer engagement.",
    description: "Our Voice API enables businesses to add voice calling features to their applications, improving customer engagement and support.",
    features: [
      {
        icon: <Check className="w-7 h-7 text-deewan-primary" />,
        title: "Programmable Calls",
        description: "Create dynamic call flows and interactive voice responses with code."
      },
      {
        icon: <Star className="w-7 h-7 text-deewan-primary" />,
        title: "Call Recording",
        description: "Record calls for training, compliance, and quality assurance purposes."
      },
      {
        icon: <Users className="w-7 h-7 text-deewan-primary" />,
        title: "Text-to-Speech",
        description: "Convert text to natural-sounding speech in multiple languages."
      },
      {
        icon: <Phone className="w-7 h-7 text-deewan-primary" />,
        title: "Call Analytics",
        description: "Gain insights into call patterns, duration, and user engagement."
      },
      {
        icon: <Bookmark className="w-7 h-7 text-deewan-primary" />,
        title: "Voice Recognition",
        description: "Enable voice commands and authentication in your applications."
      },
      {
        icon: <Mail className="w-7 h-7 text-deewan-primary" />,
        title: "Conference Calling",
        description: "Connect multiple participants in high-quality conference calls."
      }
    ],
    useCases: [
      {
        title: "Customer Support",
        desc: "Provide responsive and accessible customer support through voice channels.",
        icon: <Users className="h-9 w-9 text-deewan-secondary" />
      },
      {
        title: "Telehealth",
        desc: "Enable secure and reliable voice consultations between patients and healthcare providers.",
        icon: <Bookmark className="h-9 w-9 text-deewan-secondary" />
      },
      {
        title: "Education",
        desc: "Facilitate distance learning and tutoring through voice communications.",
        icon: <Info className="h-9 w-9 text-deewan-secondary" />
      }
    ]
  }
  // Additional products would be added here
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
