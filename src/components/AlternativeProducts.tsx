
import { MessageSquare, Bell, Shield, Zap, Server, Database, FileText, Globe, Code, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AlternativeProducts = () => {
  const applications = [{
    id: 1,
    title: "Deewan Campaigns",
    description: "Manage SMS and WhatsApp campaigns efficiently with detailed analytics.",
    icon: <Bell className="w-10 h-10 text-deewan-primary" />
  }, {
    id: 2,
    title: "Deewan Omni-Channel",
    description: "Handle customer inquiries across various platforms from a single interface.",
    icon: <MessageSquare className="w-10 h-10 text-deewan-primary" />
  }, {
    id: 3,
    title: "Deewan Bots",
    description: "AI-powered customer service bots that handle routine inquiries.",
    icon: <Zap className="w-10 h-10 text-deewan-primary" />
  }, {
    id: 4,
    title: "Deewan MFA",
    description: "Secure multifactor authentication system for enhanced account protection.",
    icon: <Shield className="w-10 h-10 text-deewan-primary" />
  }, {
    id: 5,
    title: "Deewan Analytics",
    description: "Comprehensive analytics for all your communication channels.",
    icon: <Database className="w-10 h-10 text-deewan-primary" />
  }];
  const apis = [{
    id: 6,
    title: "SMS API",
    description: "Seamlessly integrate SMS functionality into your applications.",
    icon: <Phone className="w-10 h-10 text-deewan-secondary" />
  }, {
    id: 7,
    title: "WhatsApp API",
    description: "Official WhatsApp Business API for businesses of all sizes.",
    icon: <MessageSquare className="w-10 h-10 text-deewan-secondary" />
  }, {
    id: 8,
    title: "Verification API",
    description: "Verify users through multiple channels with a single API.",
    icon: <Shield className="w-10 h-10 text-deewan-secondary" />
  }, {
    id: 9,
    title: "Voice API",
    description: "Build voice-enabled applications with our simple Voice API.",
    icon: <Phone className="w-10 h-10 text-deewan-secondary" />
  }, {
    id: 10,
    title: "Lookup API",
    description: "Validate phone numbers and reduce undeliverable messages.",
    icon: <Server className="w-10 h-10 text-deewan-secondary" />
  }];
  
  return (
    <div>
      {/* Component content would go here */}
    </div>
  );
};

export default AlternativeProducts;
