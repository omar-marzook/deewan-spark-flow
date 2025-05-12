import { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import { BarChart, CheckCircle, Users, Briefcase } from 'lucide-react';
import { organizationSchema } from "@/lib/schema";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Deewan - Intelligent Communication Solutions for Business | Saudi Arabia",
  description: "Deewan provides secure, scalable communication solutions including WhatsApp Business API, SMS, Voice, and AI-powered chatbots for businesses across Saudi Arabia.",
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HomeHero />
      
      {/* Placeholder for LogoCarousel */}
      <div className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Trusted by Leading Companies</h2>
        <p className="text-gray-600">Logo carousel will be implemented here</p>
      </div>
      
      {/* Placeholder for ProductsTabbedLayout */}
      <div className="py-12 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Products</h2>
        <p className="text-gray-600">Products tabbed layout will be implemented here</p>
      </div>
      
      {/* Placeholder for AlternativeProducts */}
      <div className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <p className="text-gray-600">Alternative products section will be implemented here</p>
      </div>
      
      {/* Placeholder for Industries */}
      <div className="py-12 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-4">Industries We Serve</h2>
        <p className="text-gray-600">Industries section will be implemented here</p>
      </div>
      
      {/* Placeholder for AlternativeStats */}
      <div className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-4"><span className="text-deewan-primary">Deewan</span> in Numbers</h2>
        <p className="text-gray-600">Real impact for measurable growth.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 max-w-6xl mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <BarChart className="h-6 w-6 text-deewan-primary mx-auto mb-2" />
            <div className="text-2xl font-bold">9+ Billion</div>
            <div className="text-gray-600">Annual Transactions</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="h-6 w-6 text-deewan-primary mx-auto mb-2" />
            <div className="text-2xl font-bold">300+</div>
            <div className="text-gray-600">Satisfied Customers</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Briefcase className="h-6 w-6 text-deewan-primary mx-auto mb-2" />
            <div className="text-2xl font-bold">6+</div>
            <div className="text-gray-600">Industries Served</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <CheckCircle className="h-6 w-6 text-deewan-primary mx-auto mb-2" />
            <div className="text-2xl font-bold">99.9%</div>
            <div className="text-gray-600">Uptime Reliability</div>
          </div>
        </div>
      </div>
      
      {/* Placeholder for DepartmentsWeServe */}
      <div className="py-12 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-4">Departments We Serve</h2>
        <p className="text-gray-600">Departments section will be implemented here</p>
      </div>
      
      {/* Placeholder for AlternativeTestimonials */}
      <div className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-gray-600">Testimonials section will be implemented here</p>
      </div>
      
      {/* Placeholder for BlogSection */}
      <div className="py-12 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-4">Latest from Our Blog</h2>
        <p className="text-gray-600">Blog section will be implemented here</p>
      </div>
      
      {/* Placeholder for ContactSection */}
      <div className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600">Contact section will be implemented here</p>
      </div>
    </div>
  );
}
