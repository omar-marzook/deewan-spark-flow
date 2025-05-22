
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';
import OptimizedImage from "@/components/ui/optimized-image";
import { motion, useReducedMotion } from 'framer-motion';

const AlternativeTestimonials = () => {
  const prefersReducedMotion = useReducedMotion();
  const testimonials = [
    {
      id: 1,
      quote: "In our operations as Mrsool we need stable service provider and that,s why we considered Deewan, theyve met our criteria in stability, support, and guidance in any challenges that we come across Most importantly they stood out in our selection process because of the of quality of their documentation, their support with all our requirements and their willingness to accommodate us in both technical and operational aspects. With Deewan SMS service we've reduced SMS related complaints and incidents, and would definitely recommend anyone considering.",
      author: "Mazn Bin Rayyis",
      title: "Site Reliability Engineering Lead",
      company: "Mrsool",
      image: "/media/testimonials/mazn-mrsool.jpg",
      logo: "/media/testimonials/mrsool.png"
    },
    {
      id: 2,
      quote: "Since integration, the SMS API fitted smoothly into our operations with its user- friendly interface, increasing productivity and reducing errors.It helped us improve collaboration among team members and decision - making. To those considering Deewan\'s products, thoroughly explore their features and capabilities; the investment is truly worth it.",
      author: "Mohamed Ali",
      title: "Business Applications Director",
      company: "Al Moosa Hospital",
      image: "/media/testimonials/moahmed-ali-almoosa.jpg",
      logo: "/media/testimonials/al-moosa-hospital.png"
    }
  ];

  return (
    <section id="alternative-testimonials" aria-labelledby="testimonials-heading" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-deewan-lightgray/10 to-white z-0" aria-hidden="true"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="testimonials-heading" className="mb-4">Client <span className="text-deewan-primary">Testimonials</span></h2>
          <p className="text-base md:text-lg text-deewan-gray">
            Don't just take our word for it. Check out what our clients have to say about Deewan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: prefersReducedMotion ? 0 : 0.5, 
                delay: prefersReducedMotion ? 0 : index * 0.1 
              }}
            >
              <Card
                className="glass-card p-8 border-0 overflow-hidden relative h-full"
                tabIndex={0}
                role="article"
                aria-labelledby={`author-${testimonial.id}`}
              >
              <CardContent className="p-0 flex flex-col h-full">
                <Quote className="h-10 w-10 text-deewan-primary/20 absolute top-6 right-6" aria-hidden="true" />

                <blockquote className="mb-8 relative z-10">
                  <p className="italic text-base md:text-xl text-deewan-gray leading-relaxed">
                    {testimonial.quote}
                  </p>
                </blockquote>

                <footer className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="relative flex h-12 w-12 mr-4 border-2 border-deewan-primary/10 rounded-full overflow-hidden">
                        <OptimizedImage
                          src={testimonial.image}
                          alt={testimonial.author}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover aspect-square"
                          aria-hidden="true"
                        />
                    </div>

                    <div>
                      <h4 id={`author-${testimonial.id}`} className="font-bold text-deewan-dark">{testimonial.author}</h4>
                      <p className="text-sm text-deewan-gray">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </div>

                  <div
                    className="w-16 h-16 bg-white rounded-md flex items-center justify-center overflow-hidden"
                    aria-hidden="true"
                  >
                    <OptimizedImage
                      src={testimonial.logo}
                      alt={testimonial.company}
                      width={64}
                      height={64}
                      className="max-w-full max-h-full object-cover"
                    />
                  </div>
                </footer>
              </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlternativeTestimonials;
