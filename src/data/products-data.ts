
import { ProductData } from '@/components/ProductTemplate';
import { Check, MessageSquare, Database, Server, Box, Globe, Link, LayoutGrid, Layers, Phone, Mail, Star, Users, Bookmark } from 'lucide-react';
import React from 'react';

const productsData: Record<string, ProductData> = {
  "omni-channel-chat": {
    slug: "omni-channel-chat",
    name: "Deewan Omni-Channel Chat",
    tagline: "Centralize customer conversations in one unified platform.",
    description: "Manage real-time communications across WhatsApp, live chat, social media, and email — all in one simple, secure dashboard.",
    features: [
      {
        icon: React.createElement(MessageSquare, { className: "w-6 h-6" }),
        title: "Unified Inbox",
        description: "Access all your customer conversations from WhatsApp, live chat, social, and email in a single platform."
      },
      {
        icon: React.createElement(Link, { className: "w-6 h-6" }),
        title: "Multi-Channel Integration",
        description: "Easily integrate popular communication channels with seamless transition between chats."
      },
      {
        icon: React.createElement(Star, { className: "w-6 h-6" }),
        title: "Smart Routing",
        description: "Automatically assign chats to agents based on availability, skillset, and workload balancing."
      },
      {
        icon: React.createElement(Database, { className: "w-6 h-6" }),
        title: "Real-Time Notifications",
        description: "Get instant notifications for new chats, important updates, and escalations."
      },
      {
        icon: React.createElement(LayoutGrid, { className: "w-6 h-6" }),
        title: "Analytics & Insights",
        description: "Track response times, chat volume, agent performance, and customer satisfaction through insightful dashboards."
      }
    ],
    useCases: [
      {
        title: "Government Service Desks",
        desc: "Deliver faster, more responsive communication to citizens.",
        icon: React.createElement(Users, { className: "h-6 w-6" })
      },
      {
        title: "Customer Support Centers",
        desc: "Manage high-volume inquiries efficiently across multiple channels.",
        icon: React.createElement(Layers, { className: "h-6 w-6" })
      },
      {
        title: "eCommerce & Logistics",
        desc: "Streamline customer order support, delivery inquiries, and updates.",
        icon: React.createElement(Server, { className: "h-6 w-6" })
      },
      {
        title: "Internal HR & IT Helpdesk",
        desc: "Support employees with real-time HR and technical issue resolutions.",
        icon: React.createElement(Mail, { className: "h-6 w-6" })
      }
    ],
    howItWorks: {
      steps: [
        {
          number: "01",
          title: "Register",
          description: "Fill up the registration form and check you inbox for a message from Deewan activating your account."
        },
        {
          number: "02", 
          title: "Login",
          description: "Log into your account and enjoy $5 complimentary credit to try out the platform's smart campaign settings."
        },
        {
          number: "03",
          title: "Launch",
          description: "Import your contact list into the platform and launch your first campaign via SMS or WhatsApp."
        }
      ],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  },
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
