
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Info, Check, Users, Bookmark, Phone, Mail, Star } from "lucide-react";

const features = [
  {
    icon: <Check className="w-7 h-7 text-deewan-primary" />,
    title: "Real-time Communications",
    description: "Deliver instant messages to customers through SMS, WhatsApp, or Voice with high reliability.",
  },
  {
    icon: <Bookmark className="w-7 h-7 text-deewan-primary" />,
    title: "Centralized Management",
    description: "One dashboard to manage campaigns, user conversations, analytics, and reporting.",
  },
  {
    icon: <Users className="w-7 h-7 text-deewan-primary" />,
    title: "AI-powered Automation",
    description: "Automate customer replies, authentication, and routine tasks with smart bots.",
  },
  {
    icon: <Star className="w-7 h-7 text-deewan-primary" />,
    title: "Insightful Analytics",
    description: "Gain actionable insights from comprehensive analytics and reporting.",
  },
  {
    icon: <Phone className="w-7 h-7 text-deewan-primary" />,
    title: "Omnichannel APIs",
    description: "APIs for SMS, WhatsApp, Voice, Verification and more, easily integrated with your applications.",
  },
  {
    icon: <Mail className="w-7 h-7 text-deewan-primary" />,
    title: "Personalization",
    description: "Personalize messages at scale to improve engagement and conversion.",
  },
];

const useCases = [
  {
    title: "Marketing",
    desc: "Send promotions to customers over their preferred channels instantly.",
    icon: <Users className="h-9 w-9 text-deewan-secondary" />,
  },
  {
    title: "Finance",
    desc: "Deliver OTPs, alerts, and payment confirmations securely.",
    icon: <Bookmark className="h-9 w-9 text-deewan-secondary" />,
  },
  {
    title: "Support & Operations",
    desc: "Automate support and provide notifications 24/7.",
    icon: <Info className="h-9 w-9 text-deewan-secondary" />,
  },
];

const subscriptionPlans = [
  {
    name: "Starter",
    price: "Free",
    description: "Basic access for testing & trial use",
    features: [
      "Up to 100 messages/month",
      "Email & Chat Support",
      "All core features",
    ],
    highlight: false,
  },
  {
    name: "Business",
    price: "SAR 299/mo",
    description: "Professional communications for businesses",
    features: [
      "Up to 10,000 messages/month",
      "Multi-channel APIs",
      "Priority Support",
      "Analytics Dashboard",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Custom solutions for high-volume needs",
    features: [
      "Unlimited messaging",
      "Dedicated Account Manager",
      "Bespoke Integration",
      "SLA & Compliance",
    ],
    highlight: false,
  },
];

export default function ProductPage() {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden">
      {/* Hero/Intro Section */}
      <section className="w-full bg-gradient-to-br from-white via-gray-50 to-white pt-24 pb-10">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 max-w-xl animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="Deewan Logo" className="h-10" />
              <span className="font-extrabold text-2xl tracking-tight text-deewan-primary">Deewan</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-deewan-dark leading-tight">
              Powerful, Secure, and Scalable Communications
            </h1>
            <p className="mb-8 text-deewan-gray text-lg">
              The all-in-one solution for messaging, customer engagement, and automated communication across SMS, WhatsApp, Voice, and beyond.
            </p>
            <Button size="lg" className="bg-deewan-primary hover:bg-deewan-primary/90 text-white"
              onClick={() => navigate("/#contact")}
            >
              Contact Us
            </Button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            {/* Illustration */}
            <div className="relative animate-fade-in">
              <img src="/logo.svg" className="h-44 drop-shadow-lg" alt="Product illustration" />
              <div className="absolute right-2 top-1/3 w-24 h-24 bg-deewan-secondary/10 rounded-full blur-2xl"></div>
              <div className="absolute left-0 top-2/3 w-20 h-20 bg-deewan-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-deewan-dark">Feature Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div key={i} className="group shadow-lg hover:shadow-xl transition-all rounded-xl bg-white/80 backdrop-blur p-6 border border-white/60 hover:scale-105 animate-fade-in">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-deewan-primary/10 rounded-xl">{f.icon}</div>
              </div>
              <h3 className="font-semibold text-lg text-deewan-dark mb-2">{f.title}</h3>
              <p className="text-deewan-gray text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="w-full bg-gradient-to-br from-deewan-primary/5 to-deewan-secondary/10 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-deewan-dark">Tailored For Your Business</h2>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
            {useCases.map((u, idx) => (
              <div key={u.title} className="rounded-2xl bg-white shadow-md flex-1 p-8 flex flex-col items-center hover:bg-deewan-primary/10 transition-colors duration-200 animate-fade-in">
                <div className="mb-4">{u.icon}</div>
                <div className="font-bold text-lg text-deewan-dark mb-1">{u.title}</div>
                <div className="text-deewan-gray text-center">{u.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription */}
      <section className="container mx-auto px-4 md:px-6 py-16" id="subscribe">
        <h2 className="text-3xl font-bold text-center mb-3 text-deewan-dark">Start Simple. Scale Fast.</h2>
        <div className="text-center text-deewan-gray mb-10">Pricing and plans that fit organizations both big and small.</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {subscriptionPlans.map((plan, i) => (
            <div key={plan.name}
              className={`flex flex-col rounded-2xl shadow-2xl p-8 border border-white/60 bg-white
              ${plan.highlight ? "scale-105 border-deewan-primary/60 ring-2 ring-deewan-primary" : ""}
              hover:scale-105 hover:shadow-2xl transition-all animate-fade-in`}
            >
              <div className="mb-2 font-extrabold text-xl text-deewan-primary text-center">{plan.name}</div>
              <div className="mb-3 text-3xl font-bold text-deewan-dark text-center">{plan.price}</div>
              <div className="mb-4 text-deewan-gray text-center">{plan.description}</div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex gap-2 items-center text-deewan-dark text-sm">
                    <Check className="w-4 h-4 text-deewan-primary" /> {f}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full mt-auto ${plan.highlight ? "bg-deewan-primary text-white hover:bg-deewan-primary/90" : "bg-gray-200 text-deewan-dark hover:bg-deewan-primary/80 hover:text-white"}`}
                onClick={() => navigate("/#contact")}
              >
                {plan.name === "Starter" ? "Try Free" : plan.name === "Business" ? "Start Now" : "Contact Sales"}
              </Button>
            </div>
          ))}
        </div>
      </section>
      {/* Contact CTA at bottom */}
      <section className="w-full py-8 bg-white border-t border-deewan-primary/10">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl md:text-2xl font-semibold text-deewan-dark mb-4 md:mb-0">Ready to connect with your customers?</div>
          <Button 
            size="lg"
            className="bg-deewan-primary hover:bg-deewan-primary/90 text-white px-8"
            onClick={() => navigate("/#contact")}
          >
            Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  );
}
