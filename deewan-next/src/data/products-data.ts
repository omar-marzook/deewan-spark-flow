import { ProductData } from '@/components/ProductTemplate';
import { Megaphone, UserRoundCog, BellRing } from 'lucide-react';
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
    Brain,
    Zap,
    Cloud,
    UserCheck,
    Clock,
    TrendingUp,
    Target,
    ThumbsUp,
    DollarSign,
    Workflow,
    BarChart2,
    Settings,
    UserCog,
    Building,
    Sparkles,
    Rocket,
    ShoppingBag,
    Bell,
    Bot,
    CheckSquare,
    Smartphone,
    BellDot,
    Vibrate,
    Gauge,
    BarChart4,
    Repeat,
} from 'lucide-react';
import React from 'react';

// Define interfaces
interface PowerfulCapability {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    bulletPoints?: string[];
}

// Import DepartmentData interface from ProductTemplate
import { DepartmentData } from '@/components/ProductTemplate';

// Define the BenefitItem interface
interface BenefitItem {
    title: string;
    description: string;
}

// Extend the ProductData interface to include stats, core features, powerful capabilities, and departments
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
    departmentsWeServe?: DepartmentData[];
    productFeatures?: {
        title?: string;
        subtitle?: string;
        capabilities?: Array<{
            icon: React.ElementType;
            title: string;
        }>;
    };
    isConversionApi?: boolean; // Flag to identify if the product is a conversion API
    conversionBenefits?: BenefitItem[]; // Benefits for conversion API products
    conversionTitle?: string; // Title for the conversion benefits section
    conversionDescription?: string; // Description for the conversion benefits section
}

// Default departments data that will be used for all products
const defaultDepartmentsData: DepartmentData[] = [
    {
        id: 1,
        name: 'Marketing and Sales',
        description: ['Marketing and promotions', 'Product catalogs'],
        icon: React.createElement(Megaphone, {
            className: 'h-10 w-10 text-deewan-primary',
        }),
        color: 'bg-deewan-primary/10',
    },
    {
        id: 2,
        name: 'Customer Service',
        description: [
            'Surveys and questionnaires',
            'Follow ups and reminders',
            'Feedback and support',
        ],
        icon: React.createElement(Headset, {
            className: 'h-10 w-10 text-deewan-secondary',
        }),
        color: 'bg-deewan-secondary/10',
    },
    {
        id: 3,
        name: 'Administration',
        description: [
            'Authentications',
            'Transaction confirmation',
            'Account updates',
            'Onboarding',
        ],
        icon: React.createElement(UserRoundCog, {
            className: 'h-10 w-10 text-deewan-accent',
        }),
        color: 'bg-deewan-accent/10',
    },
];

const productsData: Record<string, ExtendedProductData> = {
    mfa: {
        departmentsWeServe: defaultDepartmentsData,
        slug: 'mfa',
        name: 'Deewan MFA',
        isConversionApi: false, // MFA is a conversion API
        tagline:
            'Add an extra layer of security to your applications with Multi-Factor Authentication that enhances user experience without compromising security.',
        description:
            'Add an extra layer of security to your applications with Multi-Factor Authentication that enhances user experience without compromising security.',
        coreFeatures: {
            title: '<span class="text-deewan-primary">Secure Authentication</span> without Compromising Experience',
            subtitle:
                'Deewan MFA provides robust security solutions that protect your users while maintaining a seamless authentication experience.',
        },
        features: [
            {
                icon: React.createElement(Shield, {
                    className: 'w-7 h-7 text-deewan-primary',
                }),
                title: 'Automated OTPs',
                description:
                    "Add an extra layer of security to accounts and transactions with Deewan MFA's auto generated one-time passwords.",
            },
            {
                icon: React.createElement(MessageSquare, {
                    className: 'w-7 h-7 text-deewan-primary',
                }),
                title: 'WhatsApp Authentication',
                description:
                    "Add user and account functions to your experience and enable users to authenticate securely through the world's favorite chat app.",
            },
            {
                icon: React.createElement(Headset, {
                    className: 'w-7 h-7 text-deewan-primary',
                }),
                title: 'Voice Verification',
                description:
                    'Use Deewan MFA to improve account security and accessibility through human voice authentication.',
            },
            {
                icon: React.createElement(Bell, {
                    className: 'w-7 h-7 text-deewan-primary',
                }),
                title: 'Push Authentication',
                description:
                    'Maintain the smoothness of your user experience with push authentication without codes or message communications.',
            },
            {
                icon: React.createElement(BarChart, {
                    className: 'w-7 h-7 text-deewan-primary',
                }),
                title: 'Advanced Analytics',
                description:
                    'Deewan MFA contains advanced analytics offering performance insights and verification statistics to improve the experience and boost security.',
            },
        ],
        powerfulCapabilities: {
            title: 'The Impact of <span class="text-deewan-primary">Deewan MFA</span>',
            subtitle:
                'Our MFA platform combines robust security with user experience to protect your applications and users.',
            features: [
                {
                    id: 'improved-user-experience',
                    icon: React.createElement(UserCheck),
                    title: 'Improved User Experience',
                    description:
                        'Deewan MFA integrates with your platform to add a formidable layer of security without compromising the smoothness or flow of the user experience. With multichannel support, this reflects in:',
                    bulletPoints: [
                        'Better login experiences',
                        'Faster onboarding',
                        'Stronger data security',
                    ],
                },
                {
                    id: 'cost-effective-security',
                    icon: React.createElement(DollarSign),
                    title: 'Cost-Effective Security',
                    description:
                        'By design, Deewan MFA is qualified to address any credential-based cyber attack attempting to compromise login details or passwords without requiring investment in expensive infrastructure. This reflects in:',
                    bulletPoints: [
                        'Cost reduction',
                        'Better resource allocation',
                        'Efficient onboarding',
                    ],
                },
                {
                    id: 'stronger-data-protection',
                    icon: React.createElement(Shield),
                    title: 'Stronger Data Protection',
                    description:
                        'Deewan MFA provides your brand with authentication options that ensure any user can easily protect their account without technical literacy or specialization. This reflects in:',
                    bulletPoints: [
                        'Higher security compliance',
                        'Better data protection',
                        'Cost optimization',
                    ],
                },
            ],
        },
        useCases: [
            {
                title: 'Banking & Financial Services',
                desc: 'Secure account access and transactions with multi-factor verification.',
                icon: React.createElement(Building, { className: 'h-6 w-6' }),
            },
            {
                title: 'Healthcare Providers',
                desc: 'Protect sensitive patient data with robust authentication.',
                icon: React.createElement(Users, { className: 'h-6 w-6' }),
            },
            {
                title: 'eCommerce & Retail',
                desc: 'Secure customer accounts and payment information.',
                icon: React.createElement(ShoppingBag, {
                    className: 'h-6 w-6',
                }),
            },
            {
                title: 'Enterprise Solutions',
                desc: 'Protect corporate data and applications with advanced authentication.',
                icon: React.createElement(Server, { className: 'h-6 w-6' }),
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
                    title: 'Configure',
                    description:
                        'Set up your MFA methods, authentication flows, and security policies to match your business requirements.',
                },
                {
                    number: '03',
                    title: 'Launch',
                    description:
                        'Integrate the MFA solution with your applications and start providing secure authentication to your users.',
                },
            ],
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        },
        productFeatures: {
            title: 'Powerful MFA Capabilities in <span class="text-deewan-primary">One API</span> from Deewan',
            subtitle:
                'Leverage the full potential of Multi-Factor Authentication with our comprehensive API solution.',
            capabilities: [
                { icon: CheckCircle, title: 'Verified Authentication' },
                { icon: Shield, title: 'Security Management' },
                { icon: Bot, title: 'Automated Verification' },
                { icon: UserCog, title: 'Account Management' },
                { icon: Database, title: 'Data Protection' },
                { icon: CheckSquare, title: 'Compliance Requirements' },
            ],
        },
        stats: [
            {
                icon: React.createElement(TrendingUp, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '$17B+',
                label: 'Projected MFA market size by 2025',
            },
            {
                icon: React.createElement(BarChart, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '20M+',
                label: 'Transaction processed monthly',
            },
            {
                icon: React.createElement(Clock, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '24/7',
                label: 'Technical support',
            },
        ],
    },
    ivr: {
        departmentsWeServe: defaultDepartmentsData,
        slug: 'ivr',
        name: 'Deewan IVR',
        isConversionApi: false, // IVR is a conversion API
        tagline:
            'Add interactive voice response and voice capabilities to your communications and take the customer experience to the next level.',
        description:
            'Add interactive voice response and voice capabilities to your communications and take the customer experience to the next level.',
        coreFeatures: {
            title: 'The Win-Win Voice Solution for <span class="text-deewan-primary">Businesses and Customers</span>',
            subtitle:
                'Deewan IVR helps businesses offer a cohesive and effective customer experience that customers will enjoy and come back for.',
        },
        features: [
            {
                icon: React.createElement(Phone, {
                    className: 'w-7 h-7 text-deewan-primary',
                }),
                title: 'Call Distribution & Routing',
                description:
                    'Build easy voice services for customers and reduce workload, waiting times and infrastructure utilization via call distribution and routing.',
            },
            {
                icon: React.createElement(Headset, {
                    className: 'w-7 h-7 text-deewan-primary',
                }),
                title: 'Speech Services',
                description:
                    'Deewan IVR offers advanced speech-based services including speech recognition, text-to-speech, and interactive voice menus.',
            },
            {
                icon: React.createElement(BarChart, {
                    className: 'w-7 h-7 text-deewan-primary',
                }),
                title: 'Reporting & Analytics',
                description:
                    'Measure performance, monitor events, track call volumes, and understand caller behavior better using the smart analytics of Deewan IVR.',
            },
            {
                icon: React.createElement(Link, {
                    className: 'w-7 h-7 text-deewan-primary',
                }),
                title: 'Integration Capabilities',
                description:
                    'Like other Deewan solutions, Deewan IVR was designed with integration in mind, to ensure seamless embedding into systems and optimal utility in any workflow.',
            },
            {
                icon: React.createElement(UserCog, {
                    className: 'w-7 h-7 text-deewan-primary',
                }),
                title: 'Personalization',
                description:
                    'Deewan IVR makes it easy to classify, direct and handle calls in a manner that provides customers with a personalized and relevant experience.',
            },
        ],
        powerfulCapabilities: {
            title: 'The Impact of <span class="text-deewan-primary">Deewan IVR</span>',
            subtitle:
                'Our IVR platform combines intelligent voice technology with efficiency to transform your customer service operations.',
            features: [
                {
                    id: 'cost-optimization',
                    icon: React.createElement(DollarSign),
                    title: 'Cost and Resource Optimization',
                    description:
                        'Deewan IVR fits perfectly within any customer service structure to improve performance, reduce waiting times, route call volume efficiently, as well as reduce costs associated with not doing any of that. This will reflect in:',
                    bulletPoints: [
                        'Reduced call handling time',
                        'Increased customer satisfaction',
                        'Stronger brand loyalty',
                    ],
                },
                {
                    id: 'automation-efficiency',
                    icon: React.createElement(Workflow),
                    title: 'Automation and Efficiency',
                    description:
                        "Deewan IVR enables you to automate a large volume of repetitive tasks and reinforces your department's ability to handle customer inquiries without dropping points in handling time or performance. This will reflect in:",
                    bulletPoints: [
                        'Improved performance',
                        'Reduction in abandoned calls',
                        'Increased customer satisfaction',
                    ],
                },
                {
                    id: 'stronger-brand',
                    icon: React.createElement(Building),
                    title: 'Stronger Brand',
                    description:
                        'Deewan IVR will provide your brand with the customer service it needs to scale up, expand, enter new regions, or target new audiences. Design your customer experience and move steadily towards your business objectives. This will reflect in:',
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
                title: 'Banking & Financial Services',
                desc: 'Provide secure account access and transaction services via voice authentication.',
                icon: React.createElement(Shield, { className: 'h-6 w-6' }),
            },
            {
                title: 'Healthcare Providers',
                desc: 'Streamline appointment scheduling and patient information services.',
                icon: React.createElement(Users, { className: 'h-6 w-6' }),
            },
            {
                title: 'Retail & Customer Service',
                desc: 'Handle order status inquiries and product information requests efficiently.',
                icon: React.createElement(ShoppingBag, {
                    className: 'h-6 w-6',
                }),
            },
            {
                title: 'Telecommunications',
                desc: 'Manage service inquiries, technical support, and billing questions.',
                icon: React.createElement(Phone, { className: 'h-6 w-6' }),
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
                    title: 'Configure',
                    description:
                        'Set up your IVR flow, call routing rules, and voice menus to match your business requirements.',
                },
                {
                    number: '03',
                    title: 'Launch',
                    description:
                        'Deploy your IVR system and start providing efficient, automated voice service to your customers.',
                },
            ],
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        },
        productFeatures: {
            title: 'Powerful IVR Capabilities in <span class="text-deewan-primary">One API</span> from Deewan',
            subtitle:
                'Leverage the full potential of Interactive Voice Response with our comprehensive API solution.',
            capabilities: [
                { icon: Phone, title: 'Voice Recognition' },
                { icon: Headset, title: 'Call Management' },
                { icon: Bot, title: 'Automated Response' },
                { icon: UserCog, title: 'Call Routing' },
                { icon: Database, title: 'Call Analytics' },
                { icon: Shield, title: 'Voice Security' },
            ],
        },
        stats: [
            {
                icon: React.createElement(TrendingUp, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '15%',
                label: 'Increase in conversion for retail customers',
            },
            {
                icon: React.createElement(Clock, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '-30%',
                label: 'Reduction in call-handling time',
            },
            {
                icon: React.createElement(Shield, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '90%',
                label: 'Success rate of fraud detection via voice',
            },
        ],
    },
    'omni-channel-chat': {
        departmentsWeServe: defaultDepartmentsData,
        slug: 'omni-channel-chat',
        name: 'Deewan Omni-Channel Chat',
        isConversionApi: false, // Omni-Channel Chat is an application
        tagline:
            'Revolutionize your business communications with personalized interactions at every touchpoint, and speak to any conversational app from one dashboard.',
        description:
            'Manage real-time communications across WhatsApp, live chat, social media, and email — all in one simple, secure dashboard.',
        productFeatures: {
            title: 'Powerful WhatsApp Business Capabilities in <span class="text-deewan-primary">One API</span> from Deewan',
            subtitle:
                'Leverage the full potential of WhatsApp Business with our comprehensive API solution.',
            capabilities: [
                { icon: CheckCircle, title: 'Verified Account' },
                { icon: Database, title: 'Database Management' },
                { icon: Bot, title: 'Chatbot Integration' },
                { icon: UserCog, title: 'Account Management' },
                { icon: Shield, title: 'Data Encryption' },
                { icon: CheckSquare, title: 'Opt-In Requirement' },
            ],
        },
        coreFeatures: {
            title: 'Improve Every Aspect of <span class="text-deewan-primary">Customer Engagement</span>',
            subtitle:
                'Deewan Omni-Channel Chat was developed to serve as the ultimate customer service solution, equipped with tools that address every aspect of customer engagement operations.',
        },
        features: [
            {
                icon: React.createElement(MessageSquare, {
                    className: 'w-7 h-7 text-deewan-primary',
                }),
                title: 'Real-Time Communication',
                description:
                    'Allow your customers to engage with your brand in real-time and receive instant responses via instant messaging.',
            },
            {
                icon: React.createElement(Users, {
                    className: 'w-7 h-7 text-deewan-primary',
                }),
                title: 'Automated Responses',
                description:
                    'Respond to common consumer inquiries automatically utilizing FAQ chatbots or customized rule-based or AI-based chatbots.',
            },
            {
                icon: React.createElement(LayoutGrid, {
                    className: 'w-7 h-7 text-deewan-primary',
                }),
                title: 'Queue Management',
                description:
                    'Route customer interactions to the right agent or team depending on the availability and the duties assigned.',
            },
            {
                icon: React.createElement(Database, {
                    className: 'w-7 h-7 text-deewan-primary',
                }),
                title: 'Analytics & Reporting',
                description:
                    'Measure and evaluate customer interactions and agent performance to improve customer service.',
            },
            {
                icon: React.createElement(Link, {
                    className: 'w-7 h-7 text-deewan-primary',
                }),
                title: 'Integration Capabilities',
                description:
                    'Integrate the chat platform with customer support systems such as Freshdesk and HubSpot to allow agents to create support requests for clients.',
            },
        ],
        powerfulCapabilities: {
            title: 'The Impact of <span class="text-deewan-primary">Deewan Omni-Channel Chat</span>',
            subtitle:
                'Our Omni-Channel platform brings together technology and simplicity to power your customer interactions.',
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
                        'By integrating Deewan Omni-Channel Chat into your website and app, you will be able to respond to inquiries, extending customer service, promote products, and create new opportunities. This will reflect in:',
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
        departmentsWeServe: defaultDepartmentsData,
        slug: 'campaigns',
        name: 'Deewan Campaigns',
        isConversionApi: false, // Campaigns is an application
        tagline:
            'Reach your customers instantly on any communication channel from one platform. In a few minutes, your next SMS or WhatsApp campaign will be ready to go live.',
        description:
            'Reach your customers instantly on any communication channel from one platform. In a few minutes, your next SMS or WhatsApp campaign will be ready to go live.',
        coreFeatures: {
            title: 'Target Better, Reach Higher, Earn More',
            subtitle:
                'Deewan Campaigns is a powerful application developed to support modern businesses with versatile campaign-building and management features.',
        },
        features: [
            {
                icon: React.createElement(MessageSquare, {
                    className: 'w-7 h-7 text-deewan-primary',
                }),
                title: 'Natural Language Processing',
                description:
                    "The integrated AI assistant can easily understand and respond to customers' language, providing an engaging and satisfying communication experience.",
            },
            {
                icon: React.createElement(Bookmark, {
                    className: 'w-7 h-7 text-deewan-primary',
                }),
                title: 'Content Summarization',
                description:
                    'This feature optimizes SMS costs without affecting the quality of summarized content or missing context.',
            },
            {
                icon: React.createElement(Star, {
                    className: 'w-7 h-7 text-deewan-primary',
                }),
                title: 'Content Generation',
                description:
                    'Produce high-quality SMS content, such as product descriptions, promotional messages, and customer engagement messages.',
            },
        ],
        powerfulCapabilities: {
            title: 'The Impact of <span class="text-deewan-primary">Deewan Campaigns</span>',
            subtitle:
                'Our Campaigns platform brings together precision targeting and powerful analytics to maximize your marketing efforts.',
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
        productFeatures: {
            title: 'Powerful Campaign Capabilities in <span class="text-deewan-primary">One API</span> from Deewan',
            subtitle:
                'Leverage the full potential of Messaging Campaigns with our comprehensive API solution.',
            capabilities: [
                { icon: MessageSquare, title: 'Multi-Channel Messaging' },
                { icon: Database, title: 'Contact Management' },
                { icon: BarChart, title: 'Campaign Analytics' },
                { icon: Clock, title: 'Scheduled Delivery' },
                { icon: Target, title: 'Audience Targeting' },
                { icon: CheckSquare, title: 'Delivery Confirmation' },
            ],
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
    bots: {
        departmentsWeServe: defaultDepartmentsData,
        slug: 'bots',
        name: 'Deewan Bots',
        isConversionApi: false, // Bots is an application
        tagline:
            'Allocate resources efficiently and answer customer queries in real time with the AI-powered chatbots of Deewan Bots.',
        description:
            'Allocate resources efficiently and answer customer queries in real time with the AI-powered chatbots of Deewan Bots.',
        coreFeatures: {
            title: 'Transforming the Customer Experience with <span class="text-deewan-primary">Advanced Bots</span>',
            subtitle:
                'Deewan Bots covers extensive chatbot and customer engagement use cases to help your business achieve better results with less resources.',
        },
        features: [
            {
                icon: React.createElement(Brain, {
                    className: 'w-7 h-7 text-deewan-primary',
                }),
                title: 'Cognitive Abilities',
                description:
                    'Deewan Bots are equipped with cognitive technologies that ensure continued improvement and learning.',
            },
            {
                icon: React.createElement(Globe, {
                    className: 'w-7 h-7 text-deewan-primary',
                }),
                title: 'Multilingual Support',
                description:
                    'Use Deewan Bots to deploy multilingual bots that can handle customer interactions fluently in a variety of languages.',
            },
            {
                icon: React.createElement(Zap, {
                    className: 'w-7 h-7 text-deewan-primary',
                }),
                title: 'Adaptive Technology',
                description:
                    'Adaptive technology stacks allow for smarter chatbots on every conversational communication channel.',
            },
            {
                icon: React.createElement(MessageSquare, {
                    className: 'w-7 h-7 text-deewan-primary',
                }),
                title: 'Multichannel Support',
                description:
                    'Deewan Bots integrates seamlessly with all main conversational channels to provide customers with answers on their preferred platforms.',
            },
            {
                icon: React.createElement(Cloud, {
                    className: 'w-7 h-7 text-deewan-primary',
                }),
                title: 'Flexible Deployment',
                description:
                    'The solution can be deployed in on-premise and cloud modes, with comprehensive support and coverage plans.',
            },
        ],
        powerfulCapabilities: {
            title: 'The Impact of <span class="text-deewan-primary">Deewan Bots</span>',
            subtitle:
                'Our Bots platform brings together AI technology and personalization to enhance your customer support experience.',
            features: [
                {
                    id: 'personalized-support',
                    icon: React.createElement(UserCheck),
                    title: 'Personalized Support',
                    description:
                        "Deewan Bots enables your business to offer personalized support to customers based on profile, context, and the customer's preferred conversational channel. This will reflect in:",
                    bulletPoints: [
                        'Better conversational experiences',
                        'Higher customer satisfaction',
                        'Higher loyalty and retention',
                    ],
                },
                {
                    id: 'real-time-response',
                    icon: React.createElement(Clock),
                    title: 'Real-Time Response',
                    description:
                        'Use Deewan Bots to deploy fluent FAQ (rules-based) and AI-powered chatbots that can handle any customer query any time of the day, any day of the week. This will reflect in:',
                    bulletPoints: [
                        'Faster response rates',
                        'Improved customer service',
                        'Increased customer loyalty',
                    ],
                },
                {
                    id: 'better-tracking',
                    icon: React.createElement(BarChart),
                    title: 'Better Tracking',
                    description:
                        'Deewan Bots is equipped with built-in AI analytics tools that generate informative statistical and analytical reports. This supports decision making and improves overall service performance. This will reflect in:',
                    bulletPoints: [
                        'Higher data accuracy',
                        'Stronger personalization',
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
                        "Log into your account and enjoy $5 complimentary credit to try out the platform's smart bot settings.",
                },
                {
                    number: '03',
                    title: 'Launch',
                    description:
                        'Configure your bot with your business logic and deploy it to your preferred communication channels.',
                },
            ],
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        },
        productFeatures: {
            title: 'Powerful Chatbot Capabilities in <span class="text-deewan-primary">One API</span> from Deewan',
            subtitle:
                'Leverage the full potential of AI-powered Chatbots with our comprehensive API solution.',
            capabilities: [
                { icon: Bot, title: 'AI-Powered Responses' },
                { icon: Brain, title: 'Natural Language Processing' },
                { icon: MessageSquare, title: 'Multi-Channel Support' },
                { icon: Globe, title: 'Multilingual Capabilities' },
                { icon: Database, title: 'Knowledge Base Integration' },
                { icon: UserCog, title: 'Conversation Management' },
            ],
        },
        stats: [
            {
                icon: React.createElement(TrendingUp, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '30%',
                label: 'Increase in conversion rate',
            },
            {
                icon: React.createElement(Target, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '55%',
                label: 'Of businesses generate quality leads via bots',
            },
            {
                icon: React.createElement(ThumbsUp, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '95%',
                label: 'Increase in customer satisfaction',
            },
        ],
    },
    'whatsapp-api': {
        departmentsWeServe: [
            {
                id: 1,
                name: 'Utility',
                description: [
                    'Delivery management',
                    'Order placement',
                    'Account recovery',
                ],
                icon: React.createElement(Box, {
                    className: 'h-10 w-10 text-deewan-primary',
                }),
                color: 'bg-deewan-primary/10',
            },
            {
                id: 2,
                name: 'Authentication',
                description: [
                    'Login codes',
                    'Identity verification',
                    'One-time passwords',
                ],
                icon: React.createElement(Shield, {
                    className: 'h-10 w-10 text-deewan-secondary',
                }),
                color: 'bg-deewan-secondary/10',
            },
            {
                id: 3,
                name: 'Marketing',
                description: [
                    'Product announcements',
                    'Targeted promotions',
                    'Cart check out reminders',
                ],
                icon: React.createElement(Megaphone, {
                    className: 'h-10 w-10 text-deewan-accent',
                }),
                color: 'bg-deewan-accent/10',
            },
            {
                id: 4,
                name: 'Services',
                description: [
                    'Troubleshooting',
                    'Standard FAQs',
                    'Issue handling',
                ],
                icon: React.createElement(Headset, {
                    className: 'h-10 w-10 text-deewan-primary',
                }),
                color: 'bg-deewan-primary/10',
            },
        ],
        slug: 'whatsapp-api',
        name: 'WhatsApp Business API',
        isConversionApi: true,
        tagline:
            "Join the world's best businesses on WhatsApp Business and unleash your brand's full potential.",
        description:
            "Join the world's best businesses on WhatsApp Business and unleash your brand's full potential.",
        conversionTitle:
            'Offer Utilities, Services, Information and Account Functions on WhatsApp with One API',
        conversionDescription:
            'The benefits of WhatsApp Business API by Deewan will transform your business.',
        conversionBenefits: [
            {
                title: 'Convenient Customer Support',
                description:
                    'Enabling your customers to submit requests and get information on their preferred chat app will improve experience, loyalty and retention.',
            },
            {
                title: 'Secure Data and Communications',
                description:
                    'With WhatsApp Business API you will be utilizing proven security standards and encryption methods trusted by the whole world.',
            },
            {
                title: 'Easy Promotions and Fast Conversions',
                description:
                    'Using your brand to send personalized promotions to your customers will significantly boost your conversion rates and ROI.',
            },
        ],
        // Add empty features and useCases to satisfy TypeScript
        features: [],
        useCases: [],
        stats: [
            {
                icon: React.createElement(MessageSquare, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '2B+',
                label: 'Daily WhatsApp users',
            },
            {
                icon: React.createElement(Mail, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '90%+',
                label: 'Message open rate',
            },
            {
                icon: React.createElement(ThumbsUp, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '80%',
                label: 'Response rate',
            },
        ],
        productFeatures: {
            title: 'Powerful WhatsApp Business Capabilities in <span class="text-deewan-primary">One API</span> from Deewan',
            subtitle:
                'Leverage the full potential of WhatsApp Business API with our comprehensive solution.',
            capabilities: [
                { icon: CheckCircle, title: 'Verified Account' },
                { icon: Database, title: 'Database Management' },
                { icon: Bot, title: 'Chatbot Integration' },
                { icon: UserCog, title: 'Account Management' },
                { icon: Shield, title: 'Data Encryption' },
                { icon: CheckSquare, title: 'Opt-In Requirement' },
            ],
        },
    },
    'push-notifications-api': {
        departmentsWeServe: [
            {
                id: 1,
                name: 'Transactions',
                description: [
                    'Codes and OTPs',
                    'Confirmation',
                    'Billing and invoicing',
                ],
                icon: React.createElement(CheckCircle, {
                    className: 'h-10 w-10 text-deewan-primary',
                }),
                color: 'bg-deewan-primary/10',
            },
            {
                id: 2,
                name: 'Authentication',
                description: ['Email authentication'],
                icon: React.createElement(Shield, {
                    className: 'h-10 w-10 text-deewan-secondary',
                }),
                color: 'bg-deewan-secondary/10',
            },
            {
                id: 3,
                name: 'Marketing',
                description: ['Product announcements', 'Targeted promotions'],
                icon: React.createElement(Megaphone, {
                    className: 'h-10 w-10 text-deewan-accent',
                }),
                color: 'bg-deewan-accent/10',
            },
            {
                id: 4,
                name: 'Services',
                description: ['Information updates', 'Customer support'],
                icon: React.createElement(Headset, {
                    className: 'h-10 w-10 text-deewan-primary',
                }),
                color: 'bg-deewan-primary/10',
            },
        ],
        slug: 'push-notifications-api',
        name: 'Push Notifications API',
        isConversionApi: true,
        tagline:
            'Communicate information instantly and cultivate deeper connections with your customers with personalized notifications.',
        description:
            'Communicate information instantly and cultivate deeper connections with your customers with personalized notifications.',
        conversionTitle:
            'Add Powerful Email Experience Capabilities to Your Platform with One API',
        conversionDescription:
            'Refine your digital experience with transactional and promotional email communications.',
        conversionBenefits: [
            {
                title: 'Better Personalization',
                description:
                    'Using the functions of Push Notifications API by Deewan will enable you to easily personalize notifications for a better experience.',
            },
            {
                title: 'Operational Efficiency',
                description:
                    'Automatically triggered notifications, account functions and transaction confirmations are easily automated with Push Notifications API.',
            },
            {
                title: 'Stronger Promotional Edge',
                description:
                    'The push notification format provides enough space and diversity of elements to communicate relevant product updates and feature announcements.',
            },
        ],
        // Add empty features and useCases to satisfy TypeScript
        features: [],
        useCases: [],
        stats: [
            {
                icon: React.createElement(BellDot, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '-25%',
                label: 'Reduced fraud',
            },
            {
                icon: React.createElement(BarChart, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '3.5x',
                label: 'Higher retention rate',
            },
            {
                icon: React.createElement(Smartphone, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '88%',
                label: 'Increase in app engagement',
            },
        ],
        productFeatures: {
            title: 'Powerful Push Notification Capabilities in <span class="text-deewan-primary">One API</span> from Deewan',
            subtitle:
                'Leverage the full potential of Push Notification API with our comprehensive solution.',
            capabilities: [
                { icon: BellRing, title: 'Self-Onboarding' },
                { icon: Gauge, title: 'Consumption Tracking' },
                { icon: UserCog, title: 'Personalization' },
                { icon: Smartphone, title: 'Multi-Platform Support' },
                { icon: BarChart4, title: 'Data Analytics' },
                { icon: Repeat, title: 'Recurring and Triggered' },
            ],
        },
    },
    'email-api': {
        departmentsWeServe: [
            {
                id: 1,
                name: 'Transactions',
                description: [
                    'Codes and OTPs',
                    'Confirmation',
                    'Billing and invoicing',
                ],
                icon: React.createElement(CheckCircle, {
                    className: 'h-10 w-10 text-deewan-primary',
                }),
                color: 'bg-deewan-primary/10',
            },
            {
                id: 2,
                name: 'Authentication',
                description: ['Email authentication'],
                icon: React.createElement(Shield, {
                    className: 'h-10 w-10 text-deewan-secondary',
                }),
                color: 'bg-deewan-secondary/10',
            },
            {
                id: 3,
                name: 'Marketing',
                description: ['Product announcements', 'Targeted promotions'],
                icon: React.createElement(Megaphone, {
                    className: 'h-10 w-10 text-deewan-accent',
                }),
                color: 'bg-deewan-accent/10',
            },
            {
                id: 4,
                name: 'Services',
                description: ['Information updates', 'Customer support'],
                icon: React.createElement(Headset, {
                    className: 'h-10 w-10 text-deewan-primary',
                }),
                color: 'bg-deewan-primary/10',
            },
        ],
        slug: 'email-api',
        name: 'Email API',
        isConversionApi: true,
        tagline:
            'Complete your digital experience with transactional and informational communications via email.',
        description:
            'Complete your digital experience with transactional and informational communications via email.',
        conversionTitle:
            'Add Powerful Email Experience Capabilities to Your Platform with One API',
        conversionDescription:
            'Refine your digital experience with transactional and promotional email communications.',
        conversionBenefits: [
            {
                title: 'Better Personalization',
                description:
                    'Using the functions of Email API by Deewan will enable you to easily personalize email communications for a better experience.',
            },
            {
                title: 'Operational Efficiency',
                description:
                    'Automatically triggered emails, account functions and transaction confirmations are easily automated with Email API.',
            },
            {
                title: 'Stronger Promotional Edge',
                description:
                    'The email format provides enough space and diversity of elements to communicate relevant product catalogues and feature updates by email.',
            },
        ],
        // Add empty features and useCases to satisfy TypeScript
        features: [],
        useCases: [],
        stats: [
            {
                icon: React.createElement(Globe, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '4B+',
                label: 'Global email users',
            },
            {
                icon: React.createElement(BarChart, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '20%+',
                label: 'Use of email in transactions',
            },
            {
                icon: React.createElement(Smartphone, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '60%',
                label: 'Emails opened on mobile',
            },
        ],
        productFeatures: {
            title: 'Powerful Email Capabilities in <span class="text-deewan-primary">One API</span> from Deewan',
            subtitle:
                'Leverage the full potential of Email API with our comprehensive solution.',
            capabilities: [
                { icon: Zap, title: 'Swift Delivery' },
                { icon: Database, title: 'High-Volume Support' },
                { icon: UserCog, title: 'Personalization' },
                { icon: Link, title: 'Easy Integration' },
                { icon: BarChart, title: 'Data Analytics' },
                { icon: Shield, title: 'Email Authentication' },
            ],
        },
    },
    'sms-api': {
        departmentsWeServe: [
            {
                id: 1,
                name: 'Communications',
                description: [
                    'Alerts and notifications',
                    'Reminders and updates',
                ],
                icon: React.createElement(Bell, {
                    className: 'h-10 w-10 text-deewan-primary',
                }),
                color: 'bg-deewan-primary/10',
            },
            {
                id: 2,
                name: 'Authentication',
                description: [
                    'Login codes',
                    'Identity verification',
                    'One-time passwords',
                ],
                icon: React.createElement(Shield, {
                    className: 'h-10 w-10 text-deewan-secondary',
                }),
                color: 'bg-deewan-secondary/10',
            },
            {
                id: 3,
                name: 'Marketing',
                description: [
                    'Promotions and offers',
                    'Surveys and URLs',
                    'Activation',
                ],
                icon: React.createElement(Megaphone, {
                    className: 'h-10 w-10 text-deewan-accent',
                }),
                color: 'bg-deewan-accent/10',
            },
        ],
        slug: 'sms-api',
        name: 'SMS API',
        isConversionApi: true,
        tagline:
            'A secure, multifunctional API capable of handling high-volume SMS traffic efficiently and economically.',
        description:
            'A secure, multifunctional API capable of handling high-volume SMS traffic efficiently and economically.',
        conversionTitle: 'Rich SMS Management Tools and Services in One API',
        conversionDescription:
            'The benefits of SMS API by Deewan will transform your communication strategy.',
        conversionBenefits: [
            {
                title: 'Improved Customer Experience',
                description:
                    'Use SMS API to personalize your SMS communications and deliver the right message to your target audience.',
            },
            {
                title: 'Advanced Data Security',
                description:
                    'Use SMS API for 2-factor authentication to secure customer accounts, authenticate access to information, and verify transactions.',
            },
            {
                title: 'Communication Efficiency',
                description:
                    'Improve efficiency by scheduling and automating SMS communications based on events, actions and other factors.',
            },
        ],
        // Add empty features and useCases to satisfy TypeScript
        features: [],
        useCases: [],
        stats: [
            {
                icon: React.createElement(MessageSquare, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '98%',
                label: 'SMS open rate',
            },
            {
                icon: React.createElement(CheckCircle, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '90%+',
                label: 'SMS delivery success rate',
            },
            {
                icon: React.createElement(Server, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '99.9%',
                label: 'Deewan API uptime',
            },
        ],
        productFeatures: {
            title: 'Powerful SMS Capabilities in <span class="text-deewan-primary">One API</span> from Deewan',
            subtitle:
                'Leverage the full potential of SMS API with our comprehensive solution.',
            capabilities: [
                { icon: MessageSquare, title: 'Two-Way Messaging' },
                { icon: BarChart, title: 'Data Analytics' },
                { icon: UserCog, title: 'Personalization' },
                { icon: Globe, title: 'SMS Termination' },
                { icon: Link, title: 'Text Concatenation' },
                { icon: Workflow, title: 'Smart Routing' },
            ],
        },
    },
    'voice-api': {
        departmentsWeServe: [
            {
                id: 1,
                name: 'Emergency Services',
                description: [
                    'Voice menus',
                    'Reporting emergencies',
                    'Accessing services',
                ],
                icon: React.createElement(Phone, {
                    className: 'h-10 w-10 text-deewan-primary',
                }),
                color: 'bg-deewan-primary/10',
            },
            {
                id: 2,
                name: 'Telecommunications',
                description: [
                    'Troubleshooting',
                    'Account services',
                    'Bill payment',
                ],
                icon: React.createElement(Headset, {
                    className: 'h-10 w-10 text-deewan-secondary',
                }),
                color: 'bg-deewan-secondary/10',
            },
            {
                id: 3,
                name: 'Finance',
                description: [
                    'Payments',
                    'Fraud reporting',
                    'Account information',
                ],
                icon: React.createElement(Building, {
                    className: 'h-10 w-10 text-deewan-accent',
                }),
                color: 'bg-deewan-accent/10',
            },
            {
                id: 4,
                name: 'Transportation',
                description: ['Timetables', 'Route planning', 'Report delays'],
                icon: React.createElement(Workflow, {
                    className: 'h-10 w-10 text-deewan-primary',
                }),
                color: 'bg-deewan-primary/10',
            },
            {
                id: 5,
                name: 'Health Care',
                description: [
                    'Self-diagnosis',
                    'Schedule appointments',
                    'Check-in',
                ],
                icon: React.createElement(UserCheck, {
                    className: 'h-10 w-10 text-deewan-secondary',
                }),
                color: 'bg-deewan-secondary/10',
            },
            {
                id: 6,
                name: 'E-commerce',
                description: [
                    'Place orders',
                    'Track deliveries',
                    'Check inventory',
                ],
                icon: React.createElement(ShoppingBag, {
                    className: 'h-10 w-10 text-deewan-accent',
                }),
                color: 'bg-deewan-accent/10',
            },
        ],
        slug: 'voice-api',
        name: 'Voice API',
        isConversionApi: true,
        tagline:
            'Enrich your customer experience with extensive voice features that will streamline your operations, cut costs, and improve customer loyalty.',
        description:
            'Enrich your customer experience with extensive voice features that will streamline your operations, cut costs, and improve customer loyalty.',
        conversionTitle: 'Be the Brand that Speaks and Listens',
        conversionDescription:
            'The benefits of Voice API by Deewan for your brand will be quickly felt, both operationally and financially.',
        conversionBenefits: [
            {
                title: 'Improved Customer Experience',
                description:
                    'Voice API will help you improve the customer experience, reduce waiting times and provide 24/7 customer support',
            },
            {
                title: 'Efficient and Streamlined Operations',
                description:
                    'It offers many features for automating customer service support, speech recognition, text-to-speech, call recording & more',
            },
            {
                title: 'Lower Operational Expenses',
                description:
                    "Voice API will help you optimize your costs and devote your employees' time to complex, mission-critical tasks",
            },
        ],
        // Add empty features and useCases to satisfy TypeScript
        features: [],
        useCases: [],
        stats: [
            {
                icon: React.createElement(BarChart, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '55%',
                label: 'Of businesses use voice',
            },
            {
                icon: React.createElement(Users, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '50%+',
                label: 'Of customers prefer voice assistance',
            },
            {
                icon: React.createElement(Clock, {
                    className: 'h-6 w-6 text-deewan-primary',
                }),
                value: '24/7',
                label: 'Technical support',
            },
        ],
        productFeatures: {
            title: 'Powerful Voice Capabilities in <span class="text-deewan-primary">One API</span> from Deewan',
            subtitle:
                'Leverage the full potential of Voice API with our comprehensive solution.',
            capabilities: [
                { icon: Phone, title: 'Interactive Voice Response' },
                { icon: Headset, title: 'Text-to-Speech' },
                { icon: Bot, title: 'Automated Interactions' },
                { icon: Shield, title: 'Number Masking' },
                { icon: Database, title: 'Call Transcriptions' },
                { icon: Workflow, title: 'Call Workflows' },
                { icon: Brain, title: 'Speech Recognition' },
                { icon: Phone, title: 'A2P Calls' },
                { icon: Globe, title: 'Virtual DID Numbers' },
            ],
        },
    },
};

export default productsData;
