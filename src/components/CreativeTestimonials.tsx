
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    quote: "Implementing Deewan's messaging system has transformed our customer service efficiency. We've seen a 40% reduction in response times!",
    name: "Sarah Johnson",
    role: "Customer Experience Director",
    company: "TechGlobal Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
    companyLogo: "https://placekitten.com/100/40",
    rating: 5
  },
  {
    id: 2,
    quote: "The integration was seamless, and the API documentation is the best I've ever worked with. Our development team was able to implement in record time.",
    name: "Mohammed Al-Faisal",
    role: "CTO",
    company: "Saudi Digital Solutions",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60",
    companyLogo: "https://placekitten.com/101/40",
    rating: 5
  },
  {
    id: 3,
    quote: "The security features offered by Deewan have given us peace of mind when handling sensitive communications. Truly enterprise-grade protection.",
    name: "Lina Ahmed",
    role: "Information Security Officer",
    company: "BankFirst KSA",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60",
    companyLogo: "https://placekitten.com/102/40",
    rating: 4
  },
  {
    id: 4,
    quote: "Our healthcare communications now meet all compliance standards while improving patient engagement. Deewan's solutions have been transformative.",
    name: "Dr. Khalid Rahman",
    role: "Medical Director",
    company: "International Health Group",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=60",
    companyLogo: "https://placekitten.com/103/40",
    rating: 5
  }
];

const CreativeTestimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deewan-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-deewan-gray max-w-3xl mx-auto">
            Real stories from businesses that have transformed their communication with Deewan's solutions.
          </p>
        </div>

        {/* Testimonial carousel */}
        <div className="relative glass p-2 rounded-xl">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="embla__slide flex-shrink-0 min-w-full p-4">
                  <div className="glass-card p-8 md:p-10 rounded-xl h-full">
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                      {/* Left: Photo column */}
                      <div className="md:w-1/4 flex flex-col items-center md:items-start">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex mb-2">
                          {renderStars(testimonial.rating)}
                        </div>
                        <div className="h-10 mb-4">
                          <img 
                            src={testimonial.companyLogo} 
                            alt={`${testimonial.company} logo`} 
                            className="h-full object-contain" 
                          />
                        </div>
                      </div>
                      
                      {/* Right: Quote column */}
                      <div className="md:w-3/4">
                        <blockquote className="text-xl md:text-2xl italic text-deewan-dark mb-8 leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>
                        <div>
                          <p className="font-semibold text-lg text-deewan-dark">{testimonial.name}</p>
                          <p className="text-deewan-gray">{testimonial.role}</p>
                          <p className="text-deewan-gray">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none px-2 md:px-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="bg-white/80 hover:bg-white shadow-md pointer-events-auto rounded-full h-10 w-10 md:h-12 md:w-12"
              onClick={() => emblaApi?.scrollPrev()}
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button 
              variant="outline"
              size="icon" 
              className="bg-white/80 hover:bg-white shadow-md pointer-events-auto rounded-full h-10 w-10 md:h-12 md:w-12"
              onClick={() => emblaApi?.scrollNext()}
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === selectedIndex 
                    ? 'bg-deewan-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeTestimonials;
