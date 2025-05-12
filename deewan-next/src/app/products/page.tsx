import { Metadata } from "next";
import Link from "next/link";
import { products } from "@/components/navbar/products-data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Products | Deewan",
  description: "Explore Deewan's comprehensive suite of communication solutions including WhatsApp Business API, SMS, Voice, and AI-powered chatbots.",
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our comprehensive suite of communication solutions designed to help businesses connect with their customers more effectively.
        </p>
      </div>
      
      {/* Applications Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.applications.map((product) => (
            <Link 
              key={product.slug} 
              href={`/products/${product.slug}`}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <product.icon className="w-8 h-8 text-deewan-primary mr-3" />
                  <h3 className="text-xl font-bold group-hover:text-deewan-primary transition-colors">
                    {product.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center text-deewan-primary font-medium">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Communication APIs Section */}
      <div>
        <h2 className="text-3xl font-bold mb-8">Communication APIs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.communicationAPIs.map((product) => (
            <Link 
              key={product.slug} 
              href={`/products/${product.slug}`}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <product.icon className="w-8 h-8 text-deewan-primary mr-3" />
                  <h3 className="text-xl font-bold group-hover:text-deewan-primary transition-colors">
                    {product.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center text-deewan-primary font-medium">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="mt-20 bg-gray-50 rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Not sure which solution is right for you?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Our team of experts can help you find the perfect communication solution for your business needs.
        </p>
        <Link 
          href="/contact"
          className="inline-block px-6 py-3 bg-deewan-primary text-white font-medium rounded-md shadow-md hover:bg-deewan-primary/90 transition-all duration-300"
        >
          Contact Our Team
        </Link>
      </div>
    </div>
  );
}