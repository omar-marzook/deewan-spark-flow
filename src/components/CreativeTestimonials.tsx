import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample testimonial data
const testimonials = [{
  id: 1,
  quote: "In our operations as Mrsool we need stable service provider and that,s why we considered Deewan, theyve met our criteria in stability, support, and guidance in any challenges that we come across Most importantly they stood out in our selection process because of the of quality of their documentation, their support with all our requirements and their willingness to accommodate us in both technical and operational aspects. With Deewan SMS service we've reduced SMS related complaints and incidents, and would definitely recommend anyone considering.",
  name: "Mazn Bin Rayyis",
  role: "Site Reliability Engineering Lead, Mrsool",
  image: "https://www.deewan.sa/hs-fs/hubfs/Imported%20sitepage%20images/Mazn_Mrsool%20(1)%201-1.png?width=272&height=272&name=Mazn_Mrsool%20(1)%201-1.png",
  companyLogo: "https://www.deewan.sa/hs-fs/hubfs/deewan_2024/mrsool.jpg?width=400&height=400&name=mrsool.jpg",
  rating: 5
}, {
  id: 2,
  quote: "Since integration, the SMS API fitted smoothly into our operations with its user-friendly interface, increasing productivity and reducing errors. It helped us improve collaboration among team members and decision-making. To those considering Deewan's products, thoroughly explore their features and capabilities; the investment is truly worth it.",
  name: "Mohamed Ali",
  role: "Business Applications Director, Al Moosa Hospital",
  image: "https://www.deewan.sa/hs-fs/hubfs/Moahmed%20Ali_Al%20Moosa%201.png?width=416&height=416&name=Moahmed%20Ali_Al%20Moosa%201.png",
  companyLogo: "https://www.deewan.sa/hs-fs/hubfs/deewan_2024/Almoosa.jpg?width=225&height=225&name=Almoosa.jpg",
  rating: 5
}
// , {
//   id: 3,
//   quote: "In our operations as Mrsool we need stable service provider and that,s why we considered Deewan, theyve met our criteria in stability, support, and guidance in any challenges that we come across Most importantly they stood out in our selection process because of the of quality of their documentation, their support with all our requirements and their willingness to accommodate us in both technical and operational aspects. With Deewan SMS service we've reduced SMS related complaints and incidents, and would definitely recommend anyone considering.",
//   name: "Mazn Bin Rayyis",
//   role: "Site Reliability Engineering Lead, Mrsool",
//   image: "https://www.deewan.sa/hs-fs/hubfs/Imported%20sitepage%20images/Mazn_Mrsool%20(1)%201-1.png?width=272&height=272&name=Mazn_Mrsool%20(1)%201-1.png",
//   companyLogo: "https://www.deewan.sa/hs-fs/hubfs/deewan_2024/mrsool.jpg?width=400&height=400&name=mrsool.jpg",
//   rating: 5
// }, {
//   id: 4,
//   quote: "Since integration, the SMS API fitted smoothly into our operations with its user-friendly interface, increasing productivity and reducing errors. It helped us improve collaboration among team members and decision-making. To those considering Deewan's products, thoroughly explore their features and capabilities; the investment is truly worth it.",
//   name: "Mohamed Ali",
//   role: "Business Applications Director, Al Moosa Hospital",
//   image: "https://www.deewan.sa/hs-fs/hubfs/Moahmed%20Ali_Al%20Moosa%201.png?width=416&height=416&name=Moahmed%20Ali_Al%20Moosa%201.png",
//   companyLogo: "https://www.deewan.sa/hs-fs/hubfs/deewan_2024/Almoosa.jpg?width=225&height=225&name=Almoosa.jpg",
//   rating: 5
// }
];
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
          Client <span className="text-deewan-primary">Testimonials</span>
        </h2>
        <p className="text-lg text-deewan-gray max-w-3xl mx-auto">Don’t just take our word for it. Check out what our clients have to say about Deewan.</p>
      </div>

      {/* Testimonial cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {visibleTestimonials.map(testimonial => <div key={testimonial.id} className="flex flex-col bg-gray-50/70 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="flex justify-between items-start mb-6">
            <div className="flex">{renderStars(testimonial.rating)}</div>
            <img src={testimonial.companyLogo} alt={`${testimonial.name}'s company`} className="h-8 object-contain" />
          </div>

          <blockquote className="italic text-gray-700 mb-8">
            "{testimonial.quote}"
          </blockquote>

          <div className="flex items-center mt-auto">
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