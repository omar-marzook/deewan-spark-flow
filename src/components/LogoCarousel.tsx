import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useInterval } from "@/hooks/use-interval";
import Autoplay from "embla-carousel-autoplay";

const LogoCarousel: React.FC = () => {
  const logos = [{
    id: 1,
    name: "Al Jabr",
    logo: "/media/logos/al-jabr.png"
  }, {
    id: 2,
    name: "Bank El Tanmeya",
    logo: "/media/logos/bank-el-tanmeya.png"
  }, {
    id: 3,
    name: "Derayah",
    logo: "/media/logos/derayah.png"
  }, {
    id: 4,
    name: "El Jazeera Capital",
    logo: "/media/logos/el-jazeera-captial.png"
  }, {
    id: 5,
    name: "ENBD",
    logo: "/media/logos/enbd.png"
  }, {
    id: 6,
    name: "Flynas",
    logo: "/media/logos/flynas.png"
  }, {
    id: 7,
    name: "GIB",
    logo: "/media/logos/gib.png"
  }, {
    id: 8,
    name: "IKEA",
    logo: "/media/logos/ikea.png"
  }, {
    id: 9,
    name: "Jarir Book Store",
    logo: "/media/logos/jarir-book-store.png"
  }, {
    id: 10,
    name: "Jeeny",
    logo: "/media/logos/jeeny.png"
  }, {
    id: 11,
    name: "Medgulf",
    logo: "/media/logos/medgulf.png"
  }, {
    id: 12,
    name: "National Water Company",
    logo: "/media/logos/national-water-company.png"
  }, {
    id: 13,
    name: "Otham",
    logo: "/media/logos/otham.png"
  }, {
    id: 14,
    name: "Sandook El Tanfeya",
    logo: "/media/logos/sandook-el-tanfeya.png"
  }, {
    id: 15,
    name: "Saudi Electric Company",
    logo: "/media/logos/saudi-electric-company.png"
  }, {
    id: 16,
    name: "Saudi Investment Bank",
    logo: "/media/logos/saudi-investment-bank.png"
  }, {
    id: 17,
    name: "TETCO",
    logo: "/media/logos/tetco.png"
  }, {
    id: 18,
    name: "Theqa",
    logo: "/media/logos/theqa.png"
  }];

  // Setup autoplay plugin
  const autoplayOptions = {
    delay: 3000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement
  };
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
    skipSnaps: false
  }, [Autoplay(autoplayOptions)]);

  return <section id="partners" aria-labelledby="partners-heading" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" aria-hidden="true"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-deewan-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-deewan-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block bg-deewan-primary/10 backdrop-blur-sm px-5 py-2 rounded-full text-deewan-primary font-medium text-sm mb-4">
            Our Clients
          </div>
          <h2 id="partners-heading" className="text-3xl md:text-4xl font-bold mb-4 text-deewan-dark font-display">
            Trusted By <span className="text-deewan-primary">Leading</span> Organizations
          </h2>
          <p className="text-lg text-deewan-gray">Helping businesses across Saudi Arabia and beyond connect, engage, and grow.</p>
        </div>

        <div className="w-full overflow-hidden">
          <div 
            className="embla" 
            ref={emblaRef} 
            role="region" 
            aria-roledescription="carousel" 
            aria-label="Client logos carousel"
          >
            <div className="embla__container flex">
              {logos.map(logo => (
                <div 
                  key={logo.id} 
                  className="embla__slide flex-[0_0_33.333%] sm:flex-[0_0_25%] lg:flex-[0_0_16.666%] xl:flex-[0_0_14.285%] min-w-0 pl-4 sm:pl-6 lg:pl-8"
                  role="group" 
                  aria-roledescription="slide"
                  aria-label={`${logo.name} logo`}
                >
                  <div className="p-2">
                    <div className="group">
                      <img 
                        src={logo.logo} 
                        alt={`${logo.name} logo`} 
                        width={230} 
                        height={99} 
                        className="aspect-21/9 object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default LogoCarousel;