import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/components/navbar/products-data";
import { ArrowLeft, Check } from "lucide-react";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all products
export function generateStaticParams() {
  const allProducts = [...products.applications, ...products.communicationAPIs];
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

// Generate metadata for each product
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const allProducts = [...products.applications, ...products.communicationAPIs];
  const product = allProducts.find((p) => p.slug === params.slug);
  
  if (!product) {
    return {
      title: "Product Not Found | Deewan",
      description: "The requested product could not be found.",
    };
  }
  
  return {
    title: `${product.name} | Deewan Products`,
    description: product.description,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const allProducts = [...products.applications, ...products.communicationAPIs];
  const product = allProducts.find((p) => p.slug === params.slug);
  
  if (!product) {
    notFound();
  }
  
  // Determine if this is an application or API
  const isApplication = products.applications.some((p) => p.slug === params.slug);
  const category = isApplication ? "Applications" : "Communication APIs";
  
  // Mock data for product details
  const features = [
    "Seamless integration with existing systems",
    "Real-time analytics and reporting",
    "Enterprise-grade security",
    "Scalable infrastructure",
    "24/7 technical support",
    "Customizable to your business needs"
  ];
  
  const benefits = [
    "Improve customer satisfaction",
    "Reduce operational costs",
    "Increase conversion rates",
    "Enhance customer engagement",
    "Streamline communication workflows",
    "Gain valuable customer insights"
  ];
  
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <Link 
        href="/products" 
        className="inline-flex items-center text-deewan-primary hover:underline mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to all products
      </Link>
      
      {/* Product Hero */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="flex items-center mb-4">
          <product.icon className="w-10 h-10 text-deewan-primary mr-4" />
          <div>
            <p className="text-sm text-gray-500">{category}</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{product.name}</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 mt-4 mb-8">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/contact"
            className="px-6 py-3 bg-deewan-primary text-white font-medium rounded-md shadow-md hover:bg-deewan-primary/90 transition-all duration-300"
          >
            Request a Demo
          </Link>
          <Link 
            href="#features"
            className="px-6 py-3 bg-white text-deewan-dark font-medium border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
      
      {/* Product Overview */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="bg-gray-50 rounded-xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Product Overview</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              {product.name} is designed to help businesses streamline their communication processes and enhance customer engagement. With its intuitive interface and powerful features, it enables organizations to deliver personalized experiences across multiple channels.
            </p>
            <p>
              Whether you're looking to automate routine communications, provide instant customer support, or launch targeted marketing campaigns, {product.name} offers the tools and flexibility you need to succeed.
            </p>
          </div>
        </div>
      </div>
      
      {/* Features and Benefits */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-20" id="features">
        <div>
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-deewan-primary mt-1 mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">Benefits</h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-deewan-primary mt-1 mr-3 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Use Cases */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Customer Support</h3>
            <p className="text-gray-600">
              Provide instant responses to customer inquiries across multiple channels, reducing wait times and improving satisfaction.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Marketing Campaigns</h3>
            <p className="text-gray-600">
              Create and deploy targeted messaging campaigns to engage customers and drive conversions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Operational Notifications</h3>
            <p className="text-gray-600">
              Send timely updates and alerts to customers regarding appointments, deliveries, and service changes.
            </p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Contact our team today to learn how {product.name} can transform your business communications.
        </p>
        <Link 
          href="/contact"
          className="inline-block px-6 py-3 bg-deewan-primary text-white font-medium rounded-md shadow-md hover:bg-deewan-primary/90 transition-all duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}