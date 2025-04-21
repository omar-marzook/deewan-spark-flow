
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useInterval } from "@/hooks/use-interval";

const LogoCarousel: React.FC = () => {
  const logos = [
    { id: 1, name: "Company A" },
    { id: 2, name: "Company B" },
    { id: 3, name: "Company C" },
    { id: 4, name: "Company D" },
    { id: 5, name: "Company E" },
    { id: 6, name: "Company F" },
    { id: 7, name: "Company G" },
    { id: 8, name: "Company H" },
  ];

  const [api, setApi] = useState<ReturnType<typeof useEmblaCarousel>[1]>();

  // Auto-scroll the carousel every 3 seconds
  useInterval(() => {
    if (api && api.canScrollNext()) {
      api.scrollNext();
    } else if (api) {
      // Reset to the beginning when reaching the end
      api.scrollTo(0);
    }
  }, 3000);

  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-white to-deewan-lightgray/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-4 text-deewan-dark font-display">Trusted by <span className="text-deewan-primary">Leading</span> Organizations</h2>
          <p className="text-xl text-deewan-dark/80">
            Our solutions are powering communication for businesses across Saudi Arabia and beyond
          </p>
        </div>

        <div className="w-full overflow-hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            setApi={setApi}
            className="w-full cursor-grab active:cursor-grabbing"
          >
            <CarouselContent>
              {logos.map((logo) => (
                <CarouselItem key={logo.id} className="basis-1/2 md:basis-1/3 lg:basis-1/5 pl-4">
                  <div className="p-2">
                    <div className="bg-white h-24 rounded-md border border-deewan-primary/10 flex items-center justify-center hover:shadow-sm transition-all duration-300">
                      <span className="text-xl font-bold text-deewan-dark/70">{logo.name}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
