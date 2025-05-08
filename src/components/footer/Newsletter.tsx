import React, { useState } from "react";
import { Mail, ArrowRight, Check } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";
import { submitNewsletterSubscription } from "@/lib/hubspot";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await submitNewsletterSubscription(email);
      
      setIsSuccess(true);
      setEmail("");
      
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter",
      });
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      toast({
        title: "Subscription failed",
        description: "There was a problem with your subscription. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="py-12">
      <div className="container mx-auto px-4 md:px-6 w-full md:w-3/4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-deewan-primary/5 max-w-5xl mx-auto bg-gradient-to-r from-deewan-primary/5 via-deewan-secondary/5 to-deewan-primary/5">
          <div className="flex flex-col">
            <h3 className="text-deewan-dark font-semibold text-xl mb-2">Stay up to date</h3>
            <p className="text-gray-600 text-sm">Subscribe to our newsletter for updates</p>
          </div>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto max-w-md">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Mail size={18} className="text-gray-400 z-10" />
              </div>
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full pl-10 pr-4 py-2.5 rounded-lg backdrop-blur-sm border border-white/50 focus:border-deewan-primary/30 focus:ring-deewan-primary/20 bg-white" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting || isSuccess}
              />
            </div>
            <Button 
              type="submit"
              className="bg-deewan-primary hover:bg-deewan-primary/90 text-white flex items-center justify-center gap-2 shadow-md shadow-deewan-primary/20" 
              transition='no'
              disabled={isSubmitting || isSuccess}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : isSuccess ? (
                <span className="flex items-center">
                  <Check size={16} className="mr-2" />
                  Subscribed!
                </span>
              ) : (
                <>
                  Subscribe
                  <ArrowRight size={16} />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>;
};
export default Newsletter;