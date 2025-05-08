import { MapPin, Mail, Phone } from "lucide-react";
import SocialLinks from "../footer/SocialLinks";
import { motion } from "framer-motion";
const ContactInfo = () => {
  return <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-deewan-primary/5 via-transparent to-deewan-secondary/5" />
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left Column - Address and Contact */}
          <div className="backdrop-blur-xl bg-white/30 p-8 rounded-2xl border border-white/20 shadow-lg">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-deewan-primary/10 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-deewan-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-deewan-dark">Our Address</h4>
                  <a href="https://maps.app.goo.gl/hQqxRdj2ePUPFvRr6" target="_blank" className="text-deewan-primary hover:underline">Olaya St, Al Olaya, Riyadh 12214, Saudi Arabia</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-deewan-primary/10 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-deewan-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-deewan-dark">Email Us</h4>
                  <a href="mailto:support@deewan.sa" className="text-deewan-primary hover:underline">
                    support@deewan.sa
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-deewan-primary/10 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-deewan-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-deewan-dark">Call Us</h4>
                  <a href="tel:+966552889989" className="text-deewan-primary hover:underline">
                    +966 55 288 9989
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Social Links */}
          <div className="backdrop-blur-xl bg-white/30 p-8 rounded-2xl border border-white/20 shadow-lg">
            <h4 className="font-semibold mb-6 text-deewan-dark">Connect With Us</h4>
            <SocialLinks />
          </div>
        </motion.div>
      </div>
    </section>;
};
export default ContactInfo;