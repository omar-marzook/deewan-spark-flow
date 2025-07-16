import { Mail, Phone, MapPin } from "lucide-react";
import SocialLinks from "@/components/footer/SocialLinks";
import ContactForm from "@/components/contact/ContactForm";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const ContactSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 relative overflow-hidden bg-gradient-to-br from-[#edf7f2] to-[#f4faef] via-[#f0f8f3]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#edf7f2] via-[#f0f8f3] to-[#f4faef] -z-10" aria-hidden="true"></div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 id="contact-heading" className="font-bold mb-3">
            Let's Get <span className="text-deewan-primary">Started</span>
          </h2>
          <p className="text-lg text-deewan-dark/80 max-w-2xl mx-auto">
            Ready to enhance your communication capabilities? Our team is here to
            help you get started with our solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left column - Contact Information */}

          <AnimatePresence>
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.6,
                delay: prefersReducedMotion ? 0 : 0.3
              }}
              className="text-center lg:text-left"
            >
              <h3 className="text-3xl font-bold mb-10 text-deewan-dark">Get In Touch</h3>

              <dl className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-deewan-primary/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-deewan-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="font-semibold mb-1 text-deewan-dark">Office Location</dt>
                    <dd>
                      <a
                        href="https://maps.app.goo.gl/hQqxRdj2ePUPFvRr6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-deewan-primary hover:underline focus:outline-none focus:ring-2 focus:ring-deewan-primary/50 rounded px-2 py-1"
                        aria-label="Office location: Olaya St, Al Olaya, Riyadh 12214, Saudi Arabia (opens in a new tab)"
                      >
                        Olaya St, Al Olaya, Riyadh 12214, Saudi Arabia
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-deewan-primary/10 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-deewan-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="font-semibold mb-1 text-deewan-dark">Email Us</dt>
                    <dd>
                      <a
                        href="mailto:support@deewan.sa"
                        className="text-deewan-primary hover:underline focus:outline-none focus:ring-2 focus:ring-deewan-primary/50 rounded px-2 py-1"
                        aria-label="Email us at support@deewan.sa"
                      >
                        support@deewan.sa
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-deewan-primary/10 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-deewan-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="font-semibold mb-1 text-deewan-dark">Call Us</dt>
                    <dd>
                      <a
                        href="tel:+966552889989"
                        className="text-deewan-primary hover:underline focus:outline-none focus:ring-2 focus:ring-deewan-primary/50 rounded px-2 py-1"
                        aria-label="Call us at +966 55 288 9989"
                      >
                        +966 55 288 9989
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-12">
                <h4 className="font-semibold mb-4 text-deewan-dark">Connect With Us</h4>
                <SocialLinks />
              </div>
            </motion.div >
          </AnimatePresence>

          {/* Right column - Contact Form */}
          <AnimatePresence>
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.6,
                delay: prefersReducedMotion ? 0 : 0.5
              }}
            >
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h3 id="contact-form-heading" className="text-2xl font-bold mb-6 text-deewan-dark">Contact Us</h3>
                <ContactForm />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;