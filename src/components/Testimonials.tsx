
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Deewan has transformed how we communicate with our customers. Their platform is reliable, scalable, and incredibly easy to use.",
      author: "Ahmed Al-Saud",
      title: "CTO, Tech Innovations",
      company: "Tech Innovations",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      quote: "The customer support team at Deewan is exceptional. They're always available to help and have gone above and beyond for our business.",
      author: "Fatima Rahman",
      title: "Head of Customer Experience",
      company: "Global Retail Group",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      quote: "We've seen a 40% increase in customer engagement since implementing Deewan's omnichannel solution. The analytics provide invaluable insights.",
      author: "Mohammed Al-Qahtani",
      title: "Marketing Director",
      company: "Finance Solutions Inc.",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      quote: "The integration process was seamless. Deewan's technical team worked closely with us to ensure everything ran smoothly from day one.",
      author: "Layla Hakim",
      title: "IT Manager",
      company: "Healthcare Partners",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-deewan-lightgray/20 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">What Our <span className="text-deewan-primary">Clients</span> Say</h2>
          <p className="text-xl text-deewan-dark/80">
            Hear from the businesses that trust Deewan for their communication needs
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 pl-4">
                <div className="bg-white rounded-xl shadow-lg p-8 h-full border border-deewan-primary/10">
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-deewan-primary/30" />
                  </div>
                  <p className="text-deewan-dark/80 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-deewan-primary/10 flex items-center justify-center mr-4">
                      <span className="text-deewan-primary font-bold">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-deewan-dark">{testimonial.author}</h4>
                      <p className="text-sm text-deewan-dark/70">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static transform-none mx-2" />
            <CarouselNext className="static transform-none mx-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
