
import { Phone, MessageCircle, Mail, BellRing, MessageSquare } from 'lucide-react';

const APIs = () => {
  const apis = [
    {
      id: 1,
      title: "Voice API",
      description: "Integrate voice calling capabilities into your applications for verification, alerts, and notifications.",
      icon: <Phone className="h-6 w-6" />,
      color: "border-blue-400"
    },
    {
      id: 2,
      title: "SMS API",
      description: "Send transactional and promotional SMS messages to your customers globally with high deliverability.",
      icon: <MessageCircle className="h-6 w-6" />,
      color: "border-green-400"
    },
    {
      id: 3,
      title: "WhatsApp Business API",
      description: "Connect with customers via their preferred messaging platform with rich media support.",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "border-emerald-400"
    },
    {
      id: 4,
      title: "Email API",
      description: "Send transactional and marketing emails with high deliverability and comprehensive analytics.",
      icon: <Mail className="h-6 w-6" />,
      color: "border-indigo-400"
    },
    {
      id: 5,
      title: "Push Notification API",
      description: "Send targeted push notifications to mobile app users to boost engagement and retention.",
      icon: <BellRing className="h-6 w-6" />,
      color: "border-purple-400"
    }
  ];

  return (
    <section id="apis" className="py-20 bg-gradient-to-br from-deewan-primary/5 to-deewan-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">Communication <span className="gradient-text">APIs</span></h2>
          <p className="text-xl text-gray-700">
            Powerful, flexible APIs to integrate communication capabilities into your applications
          </p>
        </div>

        <div className="glass-card p-8 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-deewan-secondary/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-deewan-primary/10 rounded-full filter blur-3xl"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {apis.map((api) => (
              <div 
                key={api.id} 
                className={`p-5 border-l-4 ${api.color} bg-white/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-white rounded-lg shadow-sm">
                    {api.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{api.title}</h3>
                    <p className="text-gray-700 text-sm">{api.description}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="p-5 border-l-4 border-deewan-accent bg-white/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
              <a 
                href="#" 
                className="text-deewan-primary font-medium flex items-center"
              >
                View API Documentation
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIs;
