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
} from 'lucide-react';
import React from 'react';

// Extend the ProductData interface to include stats and core features
interface ExtendedProductData extends ProductData {
    stats?: StatItem[];
    coreFeatures?: {
        title?: string;
        subtitle?: string;
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
