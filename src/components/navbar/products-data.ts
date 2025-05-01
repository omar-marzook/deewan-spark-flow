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
            description:
                'Interactive voice response system',
            slug: 'ivr',
            icon: Phone,
        },
    ],
    communicationAPIs: [
        {
            name: 'Email API',
            description: 'Powerful email capabilities',
            slug: 'email-api',
            icon: Mail,
        },
        {
            name: 'WhatsApp',
            description: 'WhatsApp Business API',
            slug: 'whatsapp',
            icon: MessageSquare,
        },
        {
            name: 'SMS API',
            description: 'Powerful SMS messaging capabilities',
            slug: 'sms-api',
            icon: MessageSquare,
        },
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
        {
            name: 'Push Notifications API',
            description: 'Powerful push notification capabilities',
            slug: 'push-notifications-api',
            icon: Bell,
        },
    ],
};
