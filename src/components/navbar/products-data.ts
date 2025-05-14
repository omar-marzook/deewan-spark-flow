import { Box, Code, Server, Database, Layers, Link, LayoutGrid, Shield } from 'lucide-react';
import { 
    BotIcon, 
    CampaignsIcon, 
    EmailApiIcon, 
    IvrIcon, 
    MfaIcon, 
    OmnichannelChatIcon, 
    PushNotificationsIcon, 
    SmsApiIcon, 
    VoiceApiIcon, 
    WhatsAppIcon 
} from '@/components/icons/ProductIcons';

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
            icon: OmnichannelChatIcon,
        },
        {
            name: 'Campaigns',
            description: 'SMS and WhatsApp campaign management',
            slug: 'campaigns',
            icon: CampaignsIcon,
        },
        {
            name: 'Bots',
            description: 'Rules-based and AI chatbots',
            slug: 'bots',
            icon: BotIcon,
        },
        {
            name: 'MFA',
            description: 'Multifactor multichannel authentication',
            slug: 'mfa',
            icon: MfaIcon,
        },
        {
            name: 'IVR',
            description: 'Interactive voice response system',
            slug: 'ivr',
            icon: IvrIcon,
        },
    ],
    communicationAPIs: [
        {
            name: 'Email API',
            description: 'Email personalization and automation',
            slug: 'email-api',
            icon: EmailApiIcon,
        },
        {
            name: 'Push Notifications API',
            description: 'Push notification customization and engagement',
            slug: 'push-notifications-api',
            icon: PushNotificationsIcon,
        },
        {
            name: 'WhatsApp Business API',
            description: 'Full access to WhatsApp platform',
            slug: 'whatsapp-api',
            icon: WhatsAppIcon,
        },
        {
            name: 'SMS API',
            description: 'A2P and P2P SMS capabilities',
            slug: 'sms-api',
            icon: SmsApiIcon,
        },
        {
            name: 'Voice API',
            description: 'Comprehensive voice capabilities',
            slug: 'voice-api',
            icon: VoiceApiIcon,
        },
    ],
};
