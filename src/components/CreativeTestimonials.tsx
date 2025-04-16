
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const testimonialsData = [
  {
    id: 1,
    quote: "Deewan has transformed how we communicate with our customers. Their platform is reliable, scalable, and incredibly easy to use. The analytics dashboard provides us with invaluable insights.",
    author: "Ahmed Al-Saud",
    role: "CTO",
    company: "Tech Innovations",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    rating: 5
  },
  {
    id: 2,
    quote: "The customer support team at Deewan is exceptional. They're always available to help and have gone above and beyond for our business. Implementing their solution increased our customer satisfaction by 45%.",
    author: "Fatima Rahman",
    role: "Head of Customer Experience",
    company: "Global Retail Group",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    rating: 5
  },
  {
    id: 3,
    quote: "We've seen a 40% increase in customer engagement since implementing Deewan's omnichannel solution. The analytics provide invaluable insights that help us adjust our strategies in real-time.",
    author: "Mohammed Al-Qahtani",
    role: "Marketing Director",
    company: "Finance Solutions Inc.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    logo: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    rating: 4
  },
  {
    id: 4,
    quote: "The integration process was seamless. Deewan's technical team worked closely with us to ensure everything ran smoothly from day one. No downtime, no issues - just reliable communication.",
    author: "Layla Hakim",
    role: "IT Manager",
    company: "Healthcare Partners",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    logo: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    rating: 5
  },
  {
    id: 5,
    quote: "Security was our primary concern, and Deewan exceeded our expectations. Their platform's encryption and compliance features give us peace of mind when communicating sensitive information.",
    author: "Kamal Nasser",
    role: "Security Officer",
    company: "SecureTech Ltd",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    logo: "https://images.unsplash.com/photo-1586336600663-ecb2d0cb2013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    rating: 5
  }
];

const CreativeTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={cn(
          "h-4 w-4", 
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        )} 
      />
    ));
  };

  return (
    <section id="creative-testimonials" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-64 -left-64 w-96 h-96 bg-deewan-primary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-deewan-secondary/10 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4"><span className="text-deewan-primary">Creative</span> Testimonials</h2>
          <p className="text-xl text-deewan-dark/80">
            See what our clients say about our innovative solutions
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onSelect={(api) => {
              if (!api) return;
              setActiveIndex(api.selectedScrollSnap());
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem 
                  key={testimonial.id} 
                  className="pl-2 md:pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3 transition-opacity duration-300"
                >
                  <div className={cn(
                    "h-full rounded-2xl overflow-hidden transition-all duration-500",
                    activeIndex === index 
                      ? "bg-white/90 backdrop-blur-md shadow-xl scale-100 border border-deewan-primary/10" 
                      : "bg-white/70 backdrop-blur-sm shadow-md scale-95"
                  )}>
                    <div className="p-1">
                      <div className="bg-gradient-to-br from-deewan-primary/10 to-deewan-secondary/5 p-4 rounded-t-xl">
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-1">
                            {renderStars(testimonial.rating)}
                          </div>
                          <div className="h-8 w-auto">
                            <img 
                              src={testimonial.logo} 
                              alt={`${testimonial.company} logo`}
                              className="h-full w-auto object-contain"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <ScrollArea className="h-28 mb-6 pr-4">
                          <p className="text-deewan-dark/90 text-sm italic">
                            "{testimonial.quote}"
                          </p>
                        </ScrollArea>
                        
                        <div className="flex items-center mt-4">
                          <Avatar className="h-12 w-12 mr-4 border-2 border-deewan-primary/20">
                            <AvatarImage src={testimonial.image} alt={testimonial.author} />
                            <AvatarFallback className="bg-deewan-primary/10 text-deewan-primary font-medium">
                              {testimonial.author.split(' ').map(name => name[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div>
                            <h4 className="font-bold text-deewan-dark text-sm">{testimonial.author}</h4>
                            <p className="text-xs text-deewan-gray">
                              {testimonial.role}, <span className="font-medium">{testimonial.company}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-deewan-primary/20 hover:bg-deewan-primary/10 hover:text-deewan-primary"
              onClick={() => {
                const newIndex = activeIndex === 0 ? testimonialsData.length - 1 : activeIndex - 1;
                setActiveIndex(newIndex);
              }}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-deewan-primary/20 hover:bg-deewan-primary/10 hover:text-deewan-primary"
              onClick={() => {
                const newIndex = activeIndex === testimonialsData.length - 1 ? 0 : activeIndex + 1;
                setActiveIndex(newIndex);
              }}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activeIndex === index 
                      ? "bg-deewan-primary w-6" 
                      : "bg-deewan-primary/30"
                  )}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeTestimonials;
