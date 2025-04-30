import { Box, Phone, MessageSquare, Code, Server, Database, Layers, Link, LayoutGrid, Shield } from 'lucide-react';

export type Product = {
  name: string;
  description: string;
  slug: string;
  icon: typeof Box;
};

export type ProductCategories = {
  applications: Product[];
  communicationAPIs: Product[];
};

export const products: ProductCategories = {
    applications: [
        {
            name: 'Omni-Channel Chat',
            description: 'Unified inbox for all your customer conversations',
            slug: 'omni-channel-chat',
            icon: MessageSquare,
        },
        {
            name: 'Campaigns',
            description:
                'Reach customers instantly on any communication channel',
            slug: 'campaigns',
            icon: MessageSquare,
        },
        {
            name: 'Bots',
            description: 'AI-powered chatbots for efficient customer support',
            slug: 'bots',
            icon: Code,
        },
        {
            name: 'MFA',
            description: 'Multi-Factor Authentication for enhanced security',
            slug: 'mfa',
            icon: Shield,
        },
        {
            name: 'IVR',
            description:
                'Interactive voice response for enhanced customer experience',
            slug: 'ivr',
            icon: Phone,
        },
    ],
    communicationAPIs: [
        {
            name: 'Messaging API',
            description: 'Send SMS, WhatsApp & more',
            slug: 'messaging-api',
            icon: Code,
        },
        {
            name: 'Voice API',
            description: 'Programmable voice calls & IVR',
            slug: 'voice-api',
            icon: Phone,
        },
        {
            name: 'Database API',
            description: 'Managed cloud database service',
            slug: 'database-api',
            icon: Database,
        },
        {
            name: 'Server API',
            description: 'Scalable backend infrastructure',
            slug: 'server-api',
            icon: Server,
        },
        {
            name: 'Authentication API',
            description: 'Secure user authentication',
            slug: 'auth-api',
            icon: Code,
        },
    ],
};
