
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AlternativeTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Deewan has transformed how we communicate with our customers. Their platform is reliable, scalable, and incredibly easy to use.",
      author: "Ahmed Al-Saud",
      title: "CTO",
      company: "Tech Innovations",
      image: "/placeholder.svg",
      logo: "/placeholder.svg"
    },
    {
      id: 2,
      quote: "The customer support team at Deewan is exceptional. They're always available to help and have gone above and beyond for our business.",
      author: "Fatima Rahman",
      title: "Head of Customer Experience",
      company: "Global Retail Group",
      image: "/placeholder.svg",
      logo: "/placeholder.svg"
    },
    {
      id: 3,
      quote: "We've seen a 40% increase in customer engagement since implementing Deewan's omnichannel solution. The analytics provide invaluable insights.",
      author: "Mohammed Al-Qahtani",
      title: "Marketing Director",
      company: "Finance Solutions Inc.",
      image: "/placeholder.svg",
      logo: "/placeholder.svg"
    },
    {
      id: 4,
      quote: "The integration process was seamless. Deewan's technical team worked closely with us to ensure everything ran smoothly from day one.",
      author: "Layla Hakim",
      title: "IT Manager",
      company: "Healthcare Partners",
      image: "/placeholder.svg",
      logo: "/placeholder.svg"
    }
  ];

  return (
    <section id="alternative-testimonials" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-deewan-lightgray/10 to-white z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">New <span className="text-deewan-primary">Testimonials</span> Design</h2>
          <p className="text-xl text-deewan-dark/80">
            Alternative design for client testimonials with company logos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.slice(0, 4).map((testimonial) => (
            <Card key={testimonial.id} className="glass-card p-8 border-0 overflow-hidden relative h-full">
              <CardContent className="p-0 flex flex-col h-full">
                <Quote className="h-10 w-10 text-deewan-primary/20 absolute top-6 right-6" />
                
                <p className="text-deewan-dark/90 mb-8 text-lg leading-relaxed relative z-10">
                  "{testimonial.quote}"
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4 border-2 border-deewan-primary/10">
                      <AvatarImage src={testimonial.image} alt={testimonial.author} />
                      <AvatarFallback className="bg-deewan-primary/10 text-deewan-primary">
                        {testimonial.author.split(' ').map(name => name[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <h4 className="font-bold text-deewan-dark">{testimonial.author}</h4>
                      <p className="text-sm text-deewan-gray">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="w-16 h-16 bg-white p-2 rounded-md flex items-center justify-center">
                    <img 
                      src={testimonial.logo} 
                      alt={`${testimonial.company} logo`} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlternativeTestimonials;
