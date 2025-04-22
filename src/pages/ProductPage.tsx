import { useNavigate } from "react-router-dom";
import { Info, Check, Users, Bookmark, Phone, Mail, Star } from "lucide-react";
import ProductHero from "@/components/product/ProductHero";
import PowerfulCapabilitiesRedesign from "@/components/product/PowerfulCapabilitiesRedesign";
import CoreFeaturesStaggered from "@/components/product/CoreFeaturesStaggered";
import ProductUseCases from "@/components/product/ProductUseCases";
import ProductSubscriptionPlans from "@/components/product/ProductSubscriptionPlans";
import ProductCTA from "@/components/product/ProductCTA";
import IndustrySolutionsRedesign from "@/components/product/IndustrySolutionsRedesign";

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

  const scrollToContact = () => {
    // Look for #contact anchor and scroll, fallback to homepage route if not found
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
    }
  };

  return (
    <div className="overflow-x-hidden font-sans bg-white text-deewan-dark">
      <ProductHero 
        name="Messaging Solutions" 
        tagline="Connect with your customers instantly across multiple channels with our unified messaging solution."
        onContactClick={scrollToContact} 
      />
      <PowerfulCapabilitiesRedesign />
      <CoreFeaturesStaggered />
      <ProductUseCases useCases={useCases} />
      <IndustrySolutionsRedesign />
      <ProductSubscriptionPlans subscriptionPlans={subscriptionPlans} onContactClick={scrollToContact} />
      <ProductCTA onContactClick={scrollToContact} />
    </div>
  );
}
