
import { ProductData } from '@/components/ProductTemplate';
import { Check, Star, Users, Bookmark, Phone, Mail, MessageSquare, Database, Server, Box, Globe, Link, LayoutGrid, Layers } from 'lucide-react';
import React from 'react';

const productsData: Record<string, ProductData> = {
  "messaging-api": {
    slug: "messaging-api",
    name: "Messaging API",
    tagline: "Connect with your customers instantly across multiple channels with our unified messaging solution.",
    description: "Our Messaging API provides a unified interface for sending and receiving messages across SMS, WhatsApp, and more.",
    features: [
      {
        icon: React.createElement(Check, { className: "w-6 h-6" }),
        title: "Multi-Channel Support",
        description: "Send messages via SMS, WhatsApp, and other channels with a single API integration."
      },
      {
        icon: React.createElement(Star, { className: "w-6 h-6" }),
        title: "Delivery Reports",
        description: "Track the status of your messages in real-time with detailed delivery reports."
      },
      {
        icon: React.createElement(Users, { className: "w-6 h-6" }),
        title: "Scalable Architecture",
        description: "Our infrastructure scales seamlessly with your needs, from startups to enterprises."
      },
      {
        icon: React.createElement(Phone, { className: "w-6 h-6" }),
        title: "Global Coverage",
        description: "Reach customers anywhere in the world with our extensive carrier network."
      },
      {
        icon: React.createElement(Bookmark, { className: "w-6 h-6" }),
        title: "Template Management",
        description: "Create and manage message templates for consistent communication."
      },
      {
        icon: React.createElement(Mail, { className: "w-6 h-6" }),
        title: "Rich Media Support",
        description: "Send images, videos, documents, and more through supported channels."
      }
    ],
    useCases: [
      {
        title: "E-commerce",
        desc: "Send order confirmations, shipping updates, and promotional messages.",
        icon: React.createElement(Box, { className: "h-6 w-6" })
      },
      {
        title: "Finance",
        desc: "Deliver secure transaction alerts, authentication codes, and account updates.",
        icon: React.createElement(Check, { className: "h-6 w-6" })
      },
      {
        title: "Healthcare",
        desc: "Send appointment reminders, prescription notifications, and health tips.",
        icon: React.createElement(Users, { className: "h-6 w-6" })
      }
    ]
  },
  "omni-channel-chat": {
    slug: "omni-channel-chat",
    name: "Omni-Channel Chat",
    tagline: "Centralize all your customer conversations in one secure, responsive, and scalable platform.",
    description: "Manage real-time messages from WhatsApp, live chat, social channels, and email — all in a unified inbox.",
    heroImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    features: [
      {
        icon: React.createElement(MessageSquare, { className: "w-6 h-6" }),
        title: "Multi-Channel Inbox",
        description: "Manage WhatsApp, email, chat, and social messages all in one unified platform."
      },
      {
        icon: React.createElement(Link, { className: "w-6 h-6" }),
        title: "Smart Routing",
        description: "Automatically assign conversations based on team availability and priority."
      },
      {
        icon: React.createElement(Star, { className: "w-6 h-6" }),
        title: "Real-Time Notifications",
        description: "Get instant alerts for new messages and important conversations."
      },
      {
        icon: React.createElement(Database, { className: "w-6 h-6" }),
        title: "Searchable History",
        description: "Access complete conversation histories with powerful search capabilities."
      },
      {
        icon: React.createElement(LayoutGrid, { className: "w-6 h-6" }),
        title: "Insightful Analytics",
        description: "Track team performance and conversation quality with analytics dashboards."
      }
    ],
    useCases: [
      {
        title: "Customer Support",
        desc: "Deliver exceptional customer service with unified messaging tools.",
        icon: React.createElement(Users, { className: "h-6 w-6" })
      },
      {
        title: "Sales Teams",
        desc: "Convert leads faster with organized communication channels.",
        icon: React.createElement(Layers, { className: "h-6 w-6" })
      },
      {
        title: "IT Help Desk",
        desc: "Streamline internal support with efficient communication.",
        icon: React.createElement(Server, { className: "h-6 w-6" })
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
        icon: React.createElement(Phone, { className: "w-6 h-6" }),
        title: "Programmable Calls",
        description: "Create dynamic call flows and interactive voice responses with code."
      },
      {
        icon: React.createElement(Star, { className: "w-6 h-6" }),
        title: "Call Recording",
        description: "Record calls for training, compliance, and quality assurance purposes."
      },
      {
        icon: React.createElement(Globe, { className: "w-6 h-6" }),
        title: "Text-to-Speech",
        description: "Convert text to natural-sounding speech in multiple languages."
      },
      {
        icon: React.createElement(Users, { className: "w-6 h-6" }),
        title: "Conference Calling",
        description: "Connect multiple participants in high-quality conference calls."
      },
      {
        icon: React.createElement(LayoutGrid, { className: "w-6 h-6" }),
        title: "Call Analytics",
        description: "Gain insights into call patterns, duration, and user engagement."
      }
    ],
    useCases: [
      {
        title: "Customer Support",
        desc: "Provide responsive and accessible customer support through voice channels.",
        icon: React.createElement(Users, { className: "h-6 w-6" })
      },
      {
        title: "Telehealth",
        desc: "Enable secure and reliable voice consultations for healthcare providers.",
        icon: React.createElement(Star, { className: "h-6 w-6" })
      },
      {
        title: "Education",
        desc: "Facilitate distance learning and tutoring through voice communications.",
        icon: React.createElement(Globe, { className: "h-6 w-6" })
      }
    ]
  }
};

export default productsData;
