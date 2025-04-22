
import { Building, Hospital, Landmark, University, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Industry {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export const industries: Industry[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Secure patient communication and appointment reminders for healthcare providers. HIPAA-compliant messaging solutions for modern medical facilities.",
    icon: Hospital,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "finance",
    name: "Financial Services",
    description: "Secure transaction alerts, authentication, and customer service messaging for banks and financial institutions. Enhance security with timely notifications.",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "education",
    name: "Education",
    description: "Campus alerts, student notifications, and parent communication solutions for educational institutions. Keep your community connected and informed.",
    icon: University,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "technology",
    name: "Technology",
    description: "API integrations and developer-friendly messaging solutions for tech companies. Add powerful communication capabilities to your applications.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    description: "Order notifications, shipping updates, and promotional campaigns for retail businesses. Improve customer experience with timely communications.",
    icon: Building,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop"
  }
];
