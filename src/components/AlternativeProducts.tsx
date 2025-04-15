
import { MessageSquare, Bell, Shield, Zap, Server, Database, FileText, Globe, Code, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AlternativeProducts = () => {
  const applications = [
    {
      id: 1,
      title: "Deewan Campaigns",
      description: "Manage SMS and WhatsApp campaigns efficiently with detailed analytics.",
      icon: <Bell className="w-10 h-10 text-deewan-primary" />,
    },
    {
      id: 2,
      title: "Deewan Omnichannel",
      description: "Handle customer inquiries across various platforms from a single interface.",
      icon: <MessageSquare className="w-10 h-10 text-deewan-primary" />,
    },
    {
      id: 3,
      title: "Deewan Bots",
      description: "AI-powered customer service bots that handle routine inquiries.",
      icon: <Zap className="w-10 h-10 text-deewan-primary" />,
    },
    {
      id: 4,
      title: "Deewan MFA",
      description: "Secure multifactor authentication system for enhanced account protection.",
      icon: <Shield className="w-10 h-10 text-deewan-primary" />,
    },
    {
      id: 5,
      title: "Deewan Analytics",
      description: "Comprehensive analytics for all your communication channels.",
      icon: <Database className="w-10 h-10 text-deewan-primary" />,
    }
  ];

  const apis = [
    {
      id: 6,
      title: "SMS API",
      description: "Seamlessly integrate SMS functionality into your applications.",
      icon: <Phone className="w-10 h-10 text-deewan-secondary" />,
    },
    {
      id: 7,
      title: "WhatsApp API",
      description: "Official WhatsApp Business API for businesses of all sizes.",
      icon: <MessageSquare className="w-10 h-10 text-deewan-secondary" />,
    },
    {
      id: 8,
      title: "Verification API",
      description: "Verify users through multiple channels with a single API.",
      icon: <Shield className="w-10 h-10 text-deewan-secondary" />,
    },
    {
      id: 9,
      title: "Voice API",
      description: "Build voice-enabled applications with our simple Voice API.",
      icon: <Phone className="w-10 h-10 text-deewan-secondary" />,
    },
    {
      id: 10,
      title: "Lookup API",
      description: "Validate phone numbers and reduce undeliverable messages.",
      icon: <Server className="w-10 h-10 text-deewan-secondary" />,
    }
  ];

  return (
    <section id="alternative-products" className="py-24 bg-gradient-to-br from-white to-deewan-lightgray/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our <span className="text-deewan-primary">Product</span> Ecosystem</h2>
          <p className="text-xl text-deewan-dark">
            Comprehensive communication solutions designed for modern businesses
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-deewan-primary border-b-2 border-deewan-primary pb-2">Applications</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {applications.map((app) => (
              <Card key={app.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-deewan-primary/10 bg-white">
                <CardHeader className="pb-2">
                  <div className="mb-4 bg-deewan-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    {app.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-center text-deewan-primary">{app.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-deewan-dark text-sm">{app.description}</p>
                  <div className="mt-4 text-center">
                    <a href="#" className="text-deewan-primary font-medium text-sm inline-flex items-center">
                      Learn more
                      <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-deewan-secondary border-b-2 border-deewan-secondary pb-2">Communication APIs</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {apis.map((api) => (
              <Card key={api.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-deewan-secondary/10 bg-white">
                <CardHeader className="pb-2">
                  <div className="mb-4 bg-deewan-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    {api.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-center text-deewan-secondary">{api.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-deewan-dark text-sm">{api.description}</p>
                  <div className="mt-4 text-center">
                    <a href="#" className="text-deewan-secondary font-medium text-sm inline-flex items-center">
                      Learn more
                      <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternativeProducts;
