import { Mail, Phone, MapPin } from "lucide-react";
import SocialLinks from "@/components/footer/SocialLinks";
import ContactForm from "@/components/contact/ContactForm";
const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-br from-[#edf7f2] to-[#f4faef] via-[#f0f8f3]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#edf7f2] via-[#f0f8f3] to-[#f4faef] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-bold mb-3">
            Let's Get <span className="text-deewan-primary">Started</span>
          </h2>
          <p className="text-lg text-deewan-dark/80 max-w-2xl mx-auto">
            Ready to enhance your communication capabilities? Our team is here to
            help you get started with our solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left column - Contact Information */}
          <div>
            <h3 className="text-3xl font-bold mb-10 text-deewan-dark">Get In Touch</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-deewan-primary/10 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-deewan-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-deewan-dark">Office Location</h4>
                  <a href="https://maps.app.goo.gl/hQqxRdj2ePUPFvRr6" target="_blank" rel="noopener noreferrer" className="text-deewan-primary hover:underline">Olaya St, Al Olaya, Riyadh 12214, Saudi Arabia</a>
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
            
            <div className="mt-12">
              <h4 className="font-semibold mb-4 text-deewan-dark">Connect With Us</h4>
              <SocialLinks />
            </div>
          </div>
          
          {/* Right column - Contact Form */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-bold mb-6 text-deewan-dark">Contact Us</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;