
import React from 'react';
import { Globe, Shield } from 'lucide-react';

const TransformingDigital = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforming Digital <span className="text-deewan-primary">Communication</span>
          </h2>
          <p className="text-lg text-deewan-dark/80 max-w-3xl mx-auto">
            As a Saudi technology company, we're proud to contribute to the Kingdom's digital transformation journey while expanding our reach globally.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-lg shadow-sm p-8 transition-all duration-300 hover:shadow-md">
            <div className="text-deewan-primary mb-6">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Growing Globally</h3>
            <p className="text-deewan-dark/70">
              Building on our success in Saudi Arabia, we're expanding our reach to serve clients across the Middle East and beyond.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 transition-all duration-300 hover:shadow-md">
            <div className="text-deewan-primary mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Saudi Vision 2030</h3>
            <p className="text-deewan-dark/70">
              Aligned with Saudi Vision 2030, we're committed to digital transformation and economic diversification through innovative communication solutions.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 transition-all duration-300 hover:shadow-md">
            <div className="text-deewan-primary mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Technology Leadership</h3>
            <p className="text-deewan-dark/70">
              As a leading technology company based in Saudi Arabia, we're driving innovation in enterprise communication and digital solutions.
            </p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold mb-4">About Deewan</h3>
            <p className="text-deewan-dark/70 mb-4">
              Deewan is a pioneering technology company based in Saudi Arabia, specializing in enterprise communication solutions. Our mission is to transform how organizations connect, collaborate, and communicate in the digital age.
            </p>
            <p className="text-deewan-dark/70">
              We combine innovative technology with deep industry expertise to deliver secure, scalable, and user-friendly communication platforms that help businesses thrive in an increasingly connected world.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
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
