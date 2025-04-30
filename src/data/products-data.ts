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
    Headset,
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
            title: 'The impact of <span class="text-deewan-primary">Deewan Omnichannel Chat</span>',
            subtitle:
                'Our Omnichannel platform brings together technology and simplicity to power your customer interactions',
            features: [
                {
                    id: 'improved-customer-service',
                    icon: React.createElement(Headset),
                    title: 'Improved Customer Service',
                    description:
                        'Provide uninterrupted support using WhatsApp and other communication platforms favored by customers. Allow customers to begin the conversation on their preferred application. This will reflect in:',
                    bulletPoints: [
                        'Improved response rates',
                        'Better customer experience',
                        'Communication efficiency',
                    ],
                },
                {
                    id: 'new-opportunities',
                    icon: React.createElement(Users),
                    title: 'Cultivate New Opportunities',
                    description:
                        'By integrating Deewan Omnichannel Chat into your website and app, you will be able to respond to inquiries, extending customer service, promote products, and create new opportunities. This will reflect in:',
                    bulletPoints: [
                        'Cross-selling opportunities',
                        'Improved conversion rates',
                        'Better customer service',
                    ],
                },
                {
                    id: 'brand-identity',
                    icon: React.createElement(Star),
                    title: 'Stronger Brand Identity',
                    description:
                        "Design and display your catalog so that potential customers may find exactly what they're looking for. Add calls-to-action for a visual, simple, and secure purchasing experience. This will reflect in:",
                    bulletPoints: [
                        'Improved brand recognition',
                        'Higher conversion rates',
                        'Increased customer loyalty',
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
    campaigns: {
        slug: 'campaigns',
        name: 'Deewan Campaigns',
        tagline:
            'Revolutionize your business communications with personalized interactions at every touchpoint, and speak to any conversational app from one dashboard.',
        description:
            'Reach your customers instantly on any communication channel from one platform. In a few minutes, your next SMS or WhatsApp campaign will be ready to go live.',
        coreFeatures: {
            title: 'Target better, reach higher, earn more',
            subtitle:
                'Deewan Campaigns is a powerful application developed to support modern businesses with versatile campaign-building and management features',
        },
        features: [
            {
                icon: React.createElement(MessageSquare, {
                    className: 'w-6 h-6',
                }),
                title: 'Natural Language Processing',
                description:
                    'The integrated AI assistant can easily understand and respond to customers\' language, providing an engaging and satisfying communication experience.',
            },
            {
                icon: React.createElement(Bookmark, { className: 'w-6 h-6' }),
                title: 'Content Summarization',
                description:
                    'This feature optimizes SMS costs without affecting the quality of summarized content or missing context.',
            },
            {
                icon: React.createElement(Star, { className: 'w-6 h-6' }),
                title: 'Content Generation',
                description:
                    'Produce high-quality SMS content, such as product descriptions, promotional messages, and customer engagement messages.',
            },
        ],
        powerfulCapabilities: {
            title: 'The impact of <span class="text-deewan-primary">Deewan Campaigns</span>',
            subtitle:
                'Our Campaigns platform brings together precision targeting and powerful analytics to maximize your marketing efforts',
            features: [
                {
                    id: 'enhanced-targeting',
                    icon: React.createElement(Users),
                    title: 'Enhanced Targeting',
                    description:
                        'Deewan Campaigns uses smart segmentation to help users reach the target audience with precision in a manner that reduces costs, improves reach, and yields positive business results. This will reflect in:',
                    bulletPoints: [
                        'Higher delivery rates',
                        'Increased campaign reach',
                        'Increased conversions',
                    ],
                },
                {
                    id: 'higher-efficiency',
                    icon: React.createElement(BarChart),
                    title: 'Higher Efficiency',
                    description:
                        'Deewan Campaigns improves the productivity of marketing and communications departments and enables the automation of messaging activities through simple and effective workflows. This will reflect in:',
                    bulletPoints: [
                        'Data quality',
                        'Reduction in waiting time',
                        'Higher returns on investment',
                    ],
                },
                {
                    id: 'better-tracking',
                    icon: React.createElement(Database),
                    title: 'Better Tracking',
                    description:
                        'Deewan Campaigns uses strong analytics and reporting models to account for every aspect of your campaign, providing rich insights that help steer the campaign in the right direction. This will reflect in:',
                    bulletPoints: [
                        'Improved data accuracy',
                        'Higher lead conversions',
                        'Cost optimization',
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
                icon: React.createElement(Phone, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '5',
                label: 'Average hours consumers spend on mobile phones daily',
            },
            {
                icon: React.createElement(MessageSquare, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '98%',
                label: 'Open rate for SMS (WhatsApp open rate: 99%)',
            },
            {
                icon: React.createElement(BarChart, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '+45%',
                label: 'Increase in conversion rate with Deewan Campaigns',
            },
        ],
    },
};

export default productsData;
