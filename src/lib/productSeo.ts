/**
 * Product-specific SEO content generator
 * Provides optimized titles and descriptions for each product
 */

interface ProductSeoContent {
  title: string;
  description: string;
}

/**
 * Generates optimized SEO content for each product
 * @param productName The name of the product
 * @param productSlug The slug of the product
 * @returns Optimized title and description
 */
export const getProductSeoContent = (productName: string, productSlug: string): ProductSeoContent => {
  // Default content if no specific match is found
  let content: ProductSeoContent = {
    title: `${productName} | Intelligent Communication Solutions by Deewan`,
    description: `Enhance your business communications with ${productName}, a secure and scalable solution from Deewan. Improve customer engagement and operational efficiency.`
  };

  // Product-specific optimized SEO content
  switch (productSlug) {
    case 'whatsapp-api':
      content = {
        title: `WhatsApp Business API | Connect with Customers on Their Preferred Platform`,
        description: `Integrate WhatsApp Business API into your communication strategy with Deewan. Reach 2B+ users, achieve 90%+ open rates, and deliver personalized customer experiences in Saudi Arabia.`
      };
      break;
    
    case 'sms-api':
      content = {
        title: `SMS API | High-Delivery Business Messaging Solution | Deewan`,
        description: `Leverage Deewan's SMS API for reliable business messaging with 98% open rates and 90%+ delivery success. Ideal for authentication, alerts, and marketing campaigns in Saudi Arabia.`
      };
      break;
    
    case 'voice-api':
      content = {
        title: `Voice API | Intelligent Voice Communication Solutions | Deewan`,
        description: `Transform customer interactions with Deewan's Voice API. Enable interactive voice response, text-to-speech, and automated interactions to reduce costs and improve customer satisfaction.`
      };
      break;
    
    case 'email-api':
      content = {
        title: `Email API | Reliable Transactional & Marketing Email Solution | Deewan`,
        description: `Enhance your digital experience with Deewan's Email API. Deliver personalized transactional and promotional emails with high deliverability and detailed analytics.`
      };
      break;
    
    case 'push-notifications-api':
      content = {
        title: `Push Notifications API | Real-Time Customer Engagement | Deewan`,
        description: `Boost app engagement by 88% with Deewan's Push Notifications API. Send timely, personalized notifications that drive user retention and conversion across multiple platforms.`
      };
      break;
    
    case 'omni-channel-chat':
      content = {
        title: `Omni-Channel Chat | Unified Customer Communication Platform | Deewan`,
        description: `Manage all customer conversations in one dashboard with Deewan's Omni-Channel Chat. Connect via WhatsApp, live chat, social media, and email to increase retention by 89%.`
      };
      break;
    
    case 'campaigns':
      content = {
        title: `Deewan Campaigns | Multi-Channel Marketing Campaign Management | Deewan`,
        description: `Launch powerful SMS and WhatsApp marketing campaigns with Deewan. Target audiences precisely, automate messaging workflows, and track performance with advanced analytics.`
      };
      break;
    
    case 'bots':
      content = {
        title: `AI-Powered Chatbots | Intelligent Customer Service Automation | Deewan`,
        description: `Deploy multilingual, AI-powered chatbots with Deewan. Provide 24/7 customer support, reduce response times, and increase customer satisfaction by 95% across all messaging channels.`
      };
      break;
    
    case 'mfa':
      content = {
        title: `Multi-Factor Authentication | Secure User Verification | Deewan`,
        description: `Strengthen account security without compromising user experience using Deewan's MFA solution. Implement OTPs, WhatsApp authentication, and voice verification for robust protection.`
      };
      break;
    
    case 'ivr':
      content = {
        title: `Interactive Voice Response (IVR) | Intelligent Call Management | Deewan`,
        description: `Optimize call handling with Deewan's IVR system. Reduce waiting times by 30%, improve conversion rates by 15%, and deliver personalized voice interactions for better customer experiences.`
      };
      break;
  }

  return content;
};