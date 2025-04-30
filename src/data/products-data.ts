import { ProductData } from '@/components/ProductTemplate';
import { StatItem } from '@/components/AlternativeStats';
import {
    Check,
    MessageSquare,
    Database,
    Server,
    Box,
    Globe,
    Link,
    LayoutGrid,
    Layers,
    Phone,
    Mail,
    Star,
    Users,
    Bookmark,
    CheckCircle,
    Shield,
    BarChart,
} from 'lucide-react';
import React from 'react';

// Define the PowerfulCapability interface
interface PowerfulCapability {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    bulletPoints?: string[];
}

// Extend the ProductData interface to include stats, core features, and powerful capabilities
interface ExtendedProductData extends ProductData {
    stats?: StatItem[];
    coreFeatures?: {
        title?: string;
        subtitle?: string;
    };
    powerfulCapabilities?: {
        title?: string;
        subtitle?: string;
        features?: PowerfulCapability[];
    };
}

const productsData: Record<string, ExtendedProductData> = {
    'omni-channel-chat': {
        slug: 'omni-channel-chat',
        name: 'Deewan Omnichannel Chat',
        tagline:
            'Revolutionize your business communications with personalized interactions at every touchpoint, and speak to any conversational app from one dashboard.',
        description:
            'Manage real-time communications across WhatsApp, live chat, social media, and email — all in one simple, secure dashboard.',
        coreFeatures: {
            title: 'Improve every aspect of <span class="text-deewan-primary">customer engagement</span>',
            subtitle:
                'Deewan Omnichannel Chat was developed to serve as the ultimate customer service solution, equipped with tools that address every aspect of customer engagement operations.',
        },
        features: [
            {
                icon: React.createElement(MessageSquare, {
                    className: 'w-6 h-6',
                }),
                title: 'Real Time Communication',
                description:
                    'Allow your customers to engage with your brand in real-time and receive instant responses via instant messaging.',
            },
            {
                icon: React.createElement(Users, { className: 'w-6 h-6' }),
                title: 'Automated Responses',
                description:
                    'Respond to common consumer inquiries automatically utilizing FAQ chatbots or customized rule-based or AI-based chatbots.',
            },
            {
                icon: React.createElement(LayoutGrid, { className: 'w-6 h-6' }),
                title: 'Queue Management',
                description:
                    'Route customer interactions to the right agent or team depending on the availability and the duties assigned.',
            },
            {
                icon: React.createElement(Database, { className: 'w-6 h-6' }),
                title: 'Analytics & Reporting',
                description:
                    'Measure and evaluate customer interactions and agent performance to improve customer service.',
            },
            {
                icon: React.createElement(Link, { className: 'w-6 h-6' }),
                title: 'Integration Capabilities',
                description:
                    'Integrate the chat platform with customer support systems such as Freshdesk and HubSpot to allow agents to create support requests for clients.',
            },
        ],
        powerfulCapabilities: {
            title: 'Designed for Modern <span class="text-deewan-primary">Customer Engagement</span>',
            subtitle:
                'Our omnichannel platform brings together technology and simplicity to power your customer interactions',
            features: [
                {
                    id: 'realtime',
                    icon: React.createElement(MessageSquare, {
                        className: 'w-6 h-6',
                    }),
                    title: 'Real-time Messaging',
                    description:
                        'Engage with customers instantly across multiple channels with seamless conversation history.',
                    bulletPoints: [
                        'Connect with customers on their preferred channels',
                        'Maintain conversation context across channel switches',
                        'Deliver messages with millisecond latency',
                    ],
                },
                {
                    id: 'automation',
                    icon: React.createElement(CheckCircle, {
                        className: 'w-6 h-6',
                    }),
                    title: 'Smart Automation',
                    description:
                        'Deploy AI-powered chatbots to handle routine inquiries and route complex issues to human agents.',
                    bulletPoints: [
                        'Reduce response time by up to 80% with AI automation',
                        'Handle common inquiries 24/7 without human intervention',
                        'Seamlessly escalate to human agents when needed',
                    ],
                },
                {
                    id: 'analytics',
                    icon: React.createElement(LayoutGrid, {
                        className: 'w-6 h-6',
                    }),
                    title: 'Comprehensive Analytics',
                    description:
                        'Gain insights into customer interactions, agent performance, and conversation outcomes.',
                    bulletPoints: [
                        'Track key metrics like response time and resolution rate',
                        'Identify trends and patterns in customer inquiries',
                        'Optimize agent performance with data-driven insights',
                    ],
                },
                {
                    id: 'integration',
                    icon: React.createElement(Link, { className: 'w-6 h-6' }),
                    title: 'Seamless Integration',
                    description:
                        'Connect with your existing CRM, helpdesk, and business systems for unified customer data.',
                    bulletPoints: [
                        'Integrate with popular CRM and helpdesk platforms',
                        'Synchronize customer data across all systems',
                        'Automate workflows between different platforms',
                    ],
                },
                {
                    id: 'multichannel',
                    icon: React.createElement(Globe, { className: 'w-6 h-6' }),
                    title: 'Multi-Channel Support',
                    description:
                        'Manage WhatsApp, SMS, web chat, and social media conversations from a single interface.',
                    bulletPoints: [
                        'Support for WhatsApp, SMS, Facebook, Instagram, and more',
                        'Unified inbox for all customer conversations',
                        'Consistent experience across all channels',
                    ],
                },
                {
                    id: 'security',
                    icon: React.createElement(Shield, { className: 'w-6 h-6' }),
                    title: 'Enterprise Security',
                    description:
                        'Protect sensitive customer data with end-to-end encryption and role-based access controls.',
                    bulletPoints: [
                        'End-to-end encryption for all communications',
                        'Role-based access control for team management',
                        'Compliance with global data protection regulations',
                    ],
                },
            ],
        },
        useCases: [
            {
                title: 'Government Service Desks',
                desc: 'Deliver faster, more responsive communication to citizens.',
                icon: React.createElement(Users, { className: 'h-6 w-6' }),
            },
            {
                title: 'Customer Support Centers',
                desc: 'Manage high-volume inquiries efficiently across multiple channels.',
                icon: React.createElement(Layers, { className: 'h-6 w-6' }),
            },
            {
                title: 'eCommerce & Logistics',
                desc: 'Streamline customer order support, delivery inquiries, and updates.',
                icon: React.createElement(Server, { className: 'h-6 w-6' }),
            },
            {
                title: 'Internal HR & IT Helpdesk',
                desc: 'Support employees with real-time HR and technical issue resolutions.',
                icon: React.createElement(Mail, { className: 'h-6 w-6' }),
            },
        ],
        howItWorks: {
            steps: [
                {
                    number: '01',
                    title: 'Register',
                    description:
                        'Fill up the registration form and check you inbox for a message from Deewan activating your account.',
                },
                {
                    number: '02',
                    title: 'Login',
                    description:
                        "Log into your account and enjoy $5 complimentary credit to try out the platform's smart campaign settings.",
                },
                {
                    number: '03',
                    title: 'Launch',
                    description:
                        'Import your contact list into the platform and launch your first campaign via SMS or WhatsApp.',
                },
            ],
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        },
        stats: [
            {
                icon: React.createElement(MessageSquare, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '89%',
                label: 'Increase in retention with omnichannel engagement',
            },
            {
                icon: React.createElement(Globe, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '100',
                label: 'Milliseconds or less transit time',
            },
            {
                icon: React.createElement(CheckCircle, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '60%',
                label: 'Of customers expect the availability of multiple channels',
            },
        ],
    },
    'messaging-api': {
        slug: 'messaging-api',
        name: 'Messaging API',
        tagline:
            'Connect with your customers instantly across multiple channels with our unified messaging solution.',
        description:
            'Our Messaging API provides a unified interface for sending and receiving messages across SMS, WhatsApp, and more.',
        coreFeatures: {
            title: 'Messaging API <span class="text-deewan-primary">Features</span>',
            subtitle:
                'Explore the powerful capabilities of our Messaging API solution',
        },
        powerfulCapabilities: {
            title: 'Powerful <span class="text-deewan-primary">Messaging Capabilities</span>',
            subtitle:
                'Our API provides robust messaging features for businesses of all sizes',
            features: [
                {
                    id: 'multichannel',
                    icon: React.createElement(MessageSquare, {
                        className: 'w-6 h-6',
                    }),
                    title: 'Multi-Channel Messaging',
                    description:
                        'Send and receive messages via SMS, WhatsApp, and other channels through a single API.',
                    bulletPoints: [
                        'One API for all messaging channels',
                        'Consistent request/response format across channels',
                        'Automatic channel fallback options',
                    ],
                },
                {
                    id: 'delivery',
                    icon: React.createElement(CheckCircle, {
                        className: 'w-6 h-6',
                    }),
                    title: 'Delivery Intelligence',
                    description:
                        'Get detailed delivery reports and analytics for all your messaging campaigns.',
                    bulletPoints: [
                        'Real-time delivery status updates',
                        'Comprehensive delivery reports and analytics',
                        'Insights into message engagement and conversion',
                    ],
                },
                {
                    id: 'templates',
                    icon: React.createElement(LayoutGrid, {
                        className: 'w-6 h-6',
                    }),
                    title: 'Template Management',
                    description:
                        'Create, store, and reuse message templates for consistent communication.',
                    bulletPoints: [
                        'Pre-approved WhatsApp Business templates',
                        'Dynamic variable insertion for personalization',
                        'Template performance analytics',
                    ],
                },
                {
                    id: 'global',
                    icon: React.createElement(Globe, { className: 'w-6 h-6' }),
                    title: 'Global Reach',
                    description:
                        'Connect with customers worldwide through our extensive carrier network.',
                    bulletPoints: [
                        'Coverage in over 200 countries and territories',
                        'Direct carrier connections for optimal delivery',
                        'Local number support in major markets',
                    ],
                },
                {
                    id: 'scale',
                    icon: React.createElement(Database, {
                        className: 'w-6 h-6',
                    }),
                    title: 'Enterprise Scalability',
                    description:
                        'Handle millions of messages with high throughput and low latency.',
                    bulletPoints: [
                        'Process thousands of messages per second',
                        'Auto-scaling infrastructure for peak loads',
                        '99.99% uptime SLA for enterprise customers',
                    ],
                },
                {
                    id: 'security',
                    icon: React.createElement(Shield, { className: 'w-6 h-6' }),
                    title: 'Secure Messaging',
                    description:
                        'Protect sensitive information with encryption and secure authentication.',
                    bulletPoints: [
                        'TLS encryption for all API communications',
                        'Secure API key management',
                        'Two-factor authentication for account access',
                    ],
                },
            ],
        },
        features: [
            {
                icon: React.createElement(Check, { className: 'w-6 h-6' }),
                title: 'Multi-Channel Support',
                description:
                    'Send messages via SMS, WhatsApp, and other channels with a single API integration.',
            },
            {
                icon: React.createElement(Star, { className: 'w-6 h-6' }),
                title: 'Delivery Reports',
                description:
                    'Track the status of your messages in real-time with detailed delivery reports.',
            },
            {
                icon: React.createElement(Users, { className: 'w-6 h-6' }),
                title: 'Scalable Architecture',
                description:
                    'Our infrastructure scales seamlessly with your needs, from startups to enterprises.',
            },
            {
                icon: React.createElement(Phone, { className: 'w-6 h-6' }),
                title: 'Global Coverage',
                description:
                    'Reach customers anywhere in the world with our extensive carrier network.',
            },
            {
                icon: React.createElement(Bookmark, { className: 'w-6 h-6' }),
                title: 'Template Management',
                description:
                    'Create and manage message templates for consistent communication.',
            },
            {
                icon: React.createElement(Mail, { className: 'w-6 h-6' }),
                title: 'Rich Media Support',
                description:
                    'Send images, videos, documents, and more through supported channels.',
            },
        ],
        useCases: [
            {
                title: 'E-commerce',
                desc: 'Send order confirmations, shipping updates, and promotional messages.',
                icon: React.createElement(Box, { className: 'h-6 w-6' }),
            },
            {
                title: 'Finance',
                desc: 'Deliver secure transaction alerts, authentication codes, and account updates.',
                icon: React.createElement(Check, { className: 'h-6 w-6' }),
            },
            {
                title: 'Healthcare',
                desc: 'Send appointment reminders, prescription notifications, and health tips.',
                icon: React.createElement(Users, { className: 'h-6 w-6' }),
            },
        ],
        stats: [
            {
                icon: React.createElement(MessageSquare, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '10B+',
                label: 'Messages Delivered',
            },
            {
                icon: React.createElement(Globe, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '230+',
                label: 'Countries Reached',
            },
            {
                icon: React.createElement(CheckCircle, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '98.5%',
                label: 'Delivery Rate',
            },
        ],
    },
    'voice-api': {
        slug: 'voice-api',
        name: 'Voice API',
        tagline:
            'Add powerful voice capabilities to your applications for enhanced customer engagement.',
        description:
            'Our Voice API enables businesses to add voice calling features to their applications, improving customer engagement and support.',
        coreFeatures: {
            title: 'Voice API <span class="text-deewan-primary">Features</span>',
            subtitle:
                'Discover the advanced capabilities of our Voice API solution',
        },
        powerfulCapabilities: {
            title: 'Advanced <span class="text-deewan-primary">Voice Solutions</span>',
            subtitle:
                'Transform your applications with powerful voice communication features',
            features: [
                {
                    id: 'calls',
                    icon: React.createElement(Phone, { className: 'w-6 h-6' }),
                    title: 'Programmable Voice',
                    description:
                        'Build custom voice applications with our flexible and powerful API.',
                    bulletPoints: [
                        'Create interactive voice response (IVR) systems',
                        'Develop custom call flows with simple code',
                        'Integrate voice capabilities into any application',
                    ],
                },
                {
                    id: 'recording',
                    icon: React.createElement(CheckCircle, {
                        className: 'w-6 h-6',
                    }),
                    title: 'Call Recording',
                    description:
                        'Record, store, and retrieve call recordings for compliance and training.',
                    bulletPoints: [
                        'Secure storage of call recordings',
                        'Easy retrieval and playback of recordings',
                        'Compliance with industry regulations',
                    ],
                },
                {
                    id: 'tts',
                    icon: React.createElement(MessageSquare, {
                        className: 'w-6 h-6',
                    }),
                    title: 'Text-to-Speech',
                    description:
                        'Convert text to natural-sounding speech in multiple languages and voices.',
                    bulletPoints: [
                        'Natural-sounding voices in multiple languages',
                        'Customizable speech parameters like speed and pitch',
                        'SSML support for advanced speech control',
                    ],
                },
                {
                    id: 'conference',
                    icon: React.createElement(Users, { className: 'w-6 h-6' }),
                    title: 'Conference Calling',
                    description:
                        'Create dynamic conference calls with multiple participants and moderator controls.',
                    bulletPoints: [
                        'Support for up to 250 participants per call',
                        'Moderator controls for managing participants',
                        'High-quality audio for clear communication',
                    ],
                },
                {
                    id: 'analytics',
                    icon: React.createElement(BarChart, {
                        className: 'w-6 h-6',
                    }),
                    title: 'Voice Analytics',
                    description:
                        'Gain insights into call quality, duration, and user engagement patterns.',
                    bulletPoints: [
                        'Detailed call quality metrics and analytics',
                        'User engagement and interaction tracking',
                        'Custom reports for business intelligence',
                    ],
                },
                {
                    id: 'global',
                    icon: React.createElement(Globe, { className: 'w-6 h-6' }),
                    title: 'Global Coverage',
                    description:
                        'Make and receive calls worldwide with high-quality audio and low latency.',
                    bulletPoints: [
                        'Global voice network with local presence',
                        'HD voice quality for crystal-clear calls',
                        'Low-latency connections for natural conversations',
                    ],
                },
            ],
        },
        features: [
            {
                icon: React.createElement(Phone, { className: 'w-6 h-6' }),
                title: 'Programmable Calls',
                description:
                    'Create dynamic call flows and interactive voice responses with code.',
            },
            {
                icon: React.createElement(Star, { className: 'w-6 h-6' }),
                title: 'Call Recording',
                description:
                    'Record calls for training, compliance, and quality assurance purposes.',
            },
            {
                icon: React.createElement(Globe, { className: 'w-6 h-6' }),
                title: 'Text-to-Speech',
                description:
                    'Convert text to natural-sounding speech in multiple languages.',
            },
            {
                icon: React.createElement(Users, { className: 'w-6 h-6' }),
                title: 'Conference Calling',
                description:
                    'Connect multiple participants in high-quality conference calls.',
            },
            {
                icon: React.createElement(LayoutGrid, { className: 'w-6 h-6' }),
                title: 'Call Analytics',
                description:
                    'Gain insights into call patterns, duration, and user engagement.',
            },
        ],
        useCases: [
            {
                title: 'Customer Support',
                desc: 'Provide responsive and accessible customer support through voice channels.',
                icon: React.createElement(Users, { className: 'h-6 w-6' }),
            },
            {
                title: 'Telehealth',
                desc: 'Enable secure and reliable voice consultations for healthcare providers.',
                icon: React.createElement(Star, { className: 'h-6 w-6' }),
            },
            {
                title: 'Education',
                desc: 'Facilitate distance learning and tutoring through voice communications.',
                icon: React.createElement(Globe, { className: 'h-6 w-6' }),
            },
        ],
        stats: [
            {
                icon: React.createElement(Phone, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '500M+',
                label: 'Minutes of Calls',
            },
            {
                icon: React.createElement(LayoutGrid, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '50+',
                label: 'Voice Features',
            },
            {
                icon: React.createElement(CheckCircle, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '99.95%',
                label: 'Call Quality',
            },
        ],
    },
};

export default productsData;
