
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
}
interface ProductSubscriptionPlansProps {
  subscriptionPlans: Plan[];
  onContactClick: () => void;
}
const ProductSubscriptionPlans: React.FC<ProductSubscriptionPlansProps> = ({ subscriptionPlans, onContactClick }) => {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto px-4 md:px-6 py-16" id="subscribe" aria-labelledby="subscription-heading">
      <h2 id="subscription-heading" className="text-3xl font-extrabold text-center mb-3 text-deewan-dark font-display">Start Simple. Scale Fast.</h2>
      <div className="text-center text-deewan-gray mb-10">Pricing and plans that fit organizations both big and small.</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" role="list">
        {subscriptionPlans.map((plan) => (
          <div 
            key={plan.name}
            role="listitem"
            aria-label={`${plan.name} plan: ${plan.price} - ${plan.description}`}
            className={`flex flex-col rounded-2xl shadow-2xl p-8 border border-white/60 bg-white
            ${plan.highlight ? "scale-105 border-deewan-primary/60 ring-2 ring-deewan-primary" : ""}
            hover:scale-105 hover:shadow-2xl transition-all animate-fade-in font-sans`}
          >
            <div className="mb-2 font-extrabold text-xl text-deewan-primary text-center font-display">
              {plan.highlight && <span className="sr-only">Featured plan: </span>}
              {plan.name}
            </div>
            <div className="mb-3 text-3xl font-bold text-deewan-dark text-center font-display">{plan.price}</div>
            <div className="mb-4 text-deewan-gray text-center">{plan.description}</div>
            <ul className="mb-6 space-y-2" aria-label={`Features included in the ${plan.name} plan`}>
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex gap-2 items-center text-deewan-dark text-sm">
                  <Check className="w-4 h-4 text-deewan-primary" aria-hidden="true" /> {f}
                </li>
              ))}
            </ul>
            <Button
              className={`w-full mt-auto font-extrabold rounded-md ${plan.highlight ? "bg-deewan-primary text-white hover:bg-deewan-primary/90" : "bg-gray-200 text-deewan-dark hover:bg-deewan-primary/80 hover:text-white"}`}
              onClick={plan.name === "Enterprise" ? onContactClick : () => navigate("/#contact")}
              aria-label={`${plan.name === "Starter" ? "Try Free" : plan.name === "Business" ? "Start Now" : "Contact Sales"} for the ${plan.name} plan`}
            >
              {plan.name === "Starter" ? "Try Free" : plan.name === "Business" ? "Start Now" : "Contact Sales"}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSubscriptionPlans;
