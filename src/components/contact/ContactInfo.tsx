import { MapPin, Mail, Phone } from "lucide-react";
import SocialLinks from "../footer/SocialLinks";
import { motion, useReducedMotion } from "framer-motion";

const ContactInfo = () => {
  const prefersReducedMotion = useReducedMotion();
  
  return <section 
    id="contact-info" 
    className="py-16 relative overflow-hidden"
    aria-labelledby="contact-info-heading"
  >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-deewan-primary/5 via-transparent to-deewan-secondary/5" 
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 md:px-6">
        <h2 id="contact-info-heading" className="sr-only">Contact Information</h2>
        
        <motion.div 
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8"
        >
          {/* Left Column - Address and Contact */}
          <div className="backdrop-blur-xl bg-white/30 p-8 rounded-2xl border border-white/20 shadow-lg">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-deewan-primary/10 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-deewan-primary" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-deewan-dark">Our Address</h4>
                  <a 
                    href="https://maps.app.goo.gl/hQqxRdj2ePUPFvRr6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-deewan-primary hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-deewan-primary/50 rounded-sm"
                    aria-label="Our office location: Olaya St, Al Olaya, Riyadh 12214, Saudi Arabia (opens in a new tab)"
                  >
                    Olaya St, Al Olaya, Riyadh 12214, Saudi Arabia
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-deewan-primary/10 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-deewan-primary" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-deewan-dark">Email Us</h4>
                  <a 
                    href="mailto:support@deewan.sa" 
                    className="text-deewan-primary hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-deewan-primary/50 rounded-sm"
                    aria-label="Email us at support@deewan.sa"
                  >
                    support@deewan.sa
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-deewan-primary/10 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-deewan-primary" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-deewan-dark">Call Us</h4>
                  <a 
                    href="tel:+966552889989" 
                    className="text-deewan-primary hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-deewan-primary/50 rounded-sm"
                    aria-label="Call us at +966 55 288 9989"
                  >
                    +966 55 288 9989
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Social Links */}
          <div className="backdrop-blur-xl bg-white/30 p-8 rounded-2xl border border-white/20 shadow-lg">
            <h4 className="font-semibold mb-6 text-deewan-dark" id="social-links-heading">Connect With Us</h4>
            <div aria-labelledby="social-links-heading">
              <SocialLinks />
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};

export default ContactInfo;