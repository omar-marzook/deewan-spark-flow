import { Box, Phone, MessageSquare, Code, Server, Database, Layers, Link, LayoutGrid, Shield, Mail, Bell } from 'lucide-react';

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
            description: 'Conversations across any platform',
            slug: 'omni-channel-chat',
            icon: MessageSquare,
        },
        {
            name: 'Campaigns',
            description: 'SMS and WhatsApp campaign management',
            slug: 'campaigns',
            icon: MessageSquare,
        },
        {
            name: 'Bots',
            description: 'Rules-based and AI chatbots',
            slug: 'bots',
            icon: Code,
        },
        {
            name: 'MFA',
            description: 'Multifactor multichannel authentication',
            slug: 'mfa',
            icon: Shield,
        },
        {
            name: 'IVR',
            description: 'Interactive voice response system',
            slug: 'ivr',
            icon: Phone,
        },
    ],
    communicationAPIs: [
        {
            name: 'Email API',
            description: 'Email personalization and automation',
            slug: 'email-api',
            icon: Mail,
        },
        {
            name: 'Push Notifications API',
            description: 'Push notification customization and engagement',
            slug: 'push-notifications-api',
            icon: Bell,
        },
        {
            name: 'WhatsApp Business API',
            description: 'Full access to WhatsApp platform',
            slug: 'whatsapp-api',
            icon: MessageSquare,
        },
        {
            name: 'SMS API',
            description: 'A2P and P2P SMS capabilities',
            slug: 'sms-api',
            icon: MessageSquare,
        },
        {
            name: 'Voice API',
            description: 'Comprehensive voice capabilities',
            slug: 'voice-api',
            icon: Phone,
        },
    ],
};