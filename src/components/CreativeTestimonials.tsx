import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample testimonial data
const testimonials = [{
  id: 1,
  quote: "Deewan has transformed how we communicate with our customers. Their platform is reliable, scalable, and incredibly easy to use. The analytics dashboard provides us with invaluable insights.",
  name: "Ahmed Al-Saud",
  role: "CTO, Tech Innovations",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60",
  companyLogo: "/placeholder.svg",
  rating: 5
}, {
  id: 2,
  quote: "The customer support team at Deewan is exceptional. They're always available to help and have gone above and beyond for our business. Implementing their solution increased our customer satisfaction by 45%.",
  name: "Fatima Rahman",
  role: "Head of Customer Experience, Global Retail Group",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60",
  companyLogo: "/placeholder.svg",
  rating: 5
}, {
  id: 3,
  quote: "We've seen a 40% increase in customer engagement since implementing Deewan's omnichannel solution. The analytics provide invaluable insights that help us adjust our strategies in real-time.",
  name: "Mohammed Al-Qahtani",
  role: "Marketing Director, Finance Solutions Inc.",
  image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=60",
  companyLogo: "/placeholder.svg",
  rating: 4
}, {
  id: 4,
  quote: "Our healthcare communications now meet all compliance standards while improving patient engagement. Deewan's solutions have been transformative.",
  name: "Dr. Khalid Rahman",
  role: "Medical Director, International Health Group",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
  companyLogo: "/placeholder.svg",
  rating: 5
}];
const CreativeTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const handlePrev = () => {
    setActiveIndex(prevIndex => prevIndex === 0 ? testimonials.length - visibleItems : prevIndex - 1);
  };
  const handleNext = () => {
    setActiveIndex(prevIndex => prevIndex === testimonials.length - visibleItems ? 0 : prevIndex + 1);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const renderStars = (rating: number) => {
    return Array.from({
      length: 5
    }).map((_, i) => <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />);
  };
  const visibleTestimonials = [];
  for (let i = 0; i < visibleItems; i++) {
    const index = (activeIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }
  return <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-deewan-primary">Client</span> Testimonials
          </h2>
          <p className="text-lg text-deewan-gray max-w-3xl mx-auto">Don’t just take our word for it—check out what our clients have to say about Deewan</p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {visibleTestimonials.map(testimonial => <div key={testimonial.id} className="bg-gray-50/70 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-between items-start mb-6">
                <div className="flex">{renderStars(testimonial.rating)}</div>
                <img src={testimonial.companyLogo} alt={`${testimonial.name}'s company`} className="h-8 object-contain" />
              </div>
              
              <blockquote className="italic text-gray-700 mb-8">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>)}
        </div>

        {/* Navigation controls */}
        <div className="flex justify-center gap-2">
          <Button variant="outline" size="icon" className="rounded-full" onClick={handlePrev}>
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous</span>
          </Button>
          
          {/* Pagination dots */}
          <div className="flex items-center gap-1 mx-4">
            {testimonials.map((_, index) => <span key={index} className={`block w-2 h-2 rounded-full ${index === activeIndex ? 'bg-deewan-primary w-6' : 'bg-gray-300'} transition-all`} />)}
          </div>
          
          <Button variant="outline" size="icon" className="rounded-full" onClick={handleNext}>
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>
    </section>;
};
export default CreativeTestimonials;