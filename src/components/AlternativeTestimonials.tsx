
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
      quote: "In our operations as Mrsool we need stable service provider and that,s why we considered Deewan, theyve met our criteria in stability, support, and guidance in any challenges that we come across Most importantly they stood out in our selection process because of the of quality of their documentation, their support with all our requirements and their willingness to accommodate us in both technical and operational aspects. With Deewan SMS service we've reduced SMS related complaints and incidents, and would definitely recommend anyone considering.",
      author: "Mazn Bin Rayyis",
      title: "Site Reliability Engineering Lead",
      company: "Mrsool",
      image: "https://www.deewan.sa/hs-fs/hubfs/Imported%20sitepage%20images/Mazn_Mrsool%20(1)%201-1.png",
      logo: "https://www.deewan.sa/hs-fs/hubfs/deewan_2024/mrsool.jpg"
    },
    {
      id: 2,
      quote: "Since integration, the SMS API fitted smoothly into our operations with its user- friendly interface, increasing productivity and reducing errors.It helped us improve collaboration among team members and decision - making. To those considering Deewan\'s products, thoroughly explore their features and capabilities; the investment is truly worth it.",
      author: "Mohamed Ali",
      title: "Business Applications Director",
      company: "Al Moosa Hospital",
      image: "https://www.deewan.sa/hs-fs/hubfs/Moahmed%20Ali_Al%20Moosa%201.png?width=416&height=416&name=Moahmed%20Ali_Al%20Moosa%201.png",
      logo: "https://www.deewan.sa/hs-fs/hubfs/deewan_2024/Almoosa.jpg"
    }
  ];

  return (
    <section id="alternative-testimonials" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-deewan-lightgray/10 to-white z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">Client <span className="text-deewan-primary">Testimonials</span></h2>
          <p className="text-xl text-deewan-dark/80">
            Don’t just take our word for it—check out what our clients have to say about Deewan
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
