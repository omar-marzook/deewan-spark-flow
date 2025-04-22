
import React from 'react';
import { Globe, Shield } from 'lucide-react';

const TransformingDigital = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background with blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-deewan-primary/1 via-deewan-secondary/10 to-deewan-accent/10 pointer-events-none">
        <div className="absolute top-0 -left-32 w-96 h-96 bg-deewan-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-deewan-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow delay-500"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 backdrop-blur-sm p-8 rounded-2xl bg-white/5 border border-white/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforming Digital <span className="text-deewan-primary">Communication</span>
          </h2>
          <p className="text-lg text-deewan-dark/80 max-w-3xl mx-auto">
            As a Saudi technology company, we're proud to contribute to the Kingdom's digital transformation journey while expanding our reach globally.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Globe className="w-8 h-8" />,
              title: "Growing Globally",
              description: "Building on our success in Saudi Arabia, we're expanding our reach to serve clients across the Middle East and beyond."
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Saudi Vision 2030",
              description: "Aligned with Saudi Vision 2030, we're committed to digital transformation and economic diversification through innovative communication solutions."
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Technology Leadership",
              description: "As a leading technology company based in Saudi Arabia, we're driving innovation in enterprise communication and digital solutions."
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="group backdrop-blur-md bg-white/10 rounded-xl p-8 border border-white/20 
                        transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg"
            >
              <div className="text-deewan-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-deewan-dark/70">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Information with glassy effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="backdrop-blur-md bg-white/10 rounded-xl p-8 border border-white/20 
                         transition-all duration-300 hover:bg-white/20">
            <h3 className="text-2xl font-bold mb-4">About Deewan</h3>
            <p className="text-deewan-dark/70 mb-4">
              Deewan is a pioneering technology company based in Saudi Arabia, specializing in enterprise communication solutions. Our mission is to transform how organizations connect, collaborate, and communicate in the digital age.
            </p>
            <p className="text-deewan-dark/70">
              We combine innovative technology with deep industry expertise to deliver secure, scalable, and user-friendly communication platforms that help businesses thrive in an increasingly connected world.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/10 rounded-xl p-8 border border-white/20 
                         transition-all duration-300 hover:bg-white/20">
            <h3 className="text-2xl font-bold mb-4">Vision 2030 Alignment</h3>
            <p className="text-deewan-dark/70 mb-4">
              As part of our commitment to Saudi Vision 2030, we're actively contributing to the Kingdom's digital transformation journey. Our solutions empower businesses to embrace digital innovation, fostering economic growth and technological advancement.
            </p>
            <p className="text-deewan-dark/70">
              Through our enterprise communication platforms, we're helping organizations across Saudi Arabia modernize their operations, enhance efficiency, and build stronger connections with their stakeholders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformingDigital;
