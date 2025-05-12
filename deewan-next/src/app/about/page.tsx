import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Deewan",
  description: "Learn about Deewan's mission, vision, and the team behind our innovative communication solutions for businesses across Saudi Arabia.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Deewan</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We're on a mission to transform how businesses communicate with their customers through innovative, secure, and scalable solutions.
        </p>
      </div>
      
      {/* Our Story */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Founded in 2018, Deewan emerged from a simple observation: businesses in Saudi Arabia needed better ways to connect with their customers across multiple channels. What began as a WhatsApp Business solution has evolved into a comprehensive communication platform serving hundreds of businesses across the region.
          </p>
          <p>
            Our journey has been defined by continuous innovation, deep customer relationships, and a commitment to excellence. Today, we're proud to be a leading provider of communication solutions that help businesses of all sizes deliver exceptional customer experiences.
          </p>
        </div>
      </div>
      
      {/* Our Vision */}
      <div className="bg-gray-50 py-16 px-4 rounded-xl mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-xl font-medium text-deewan-primary mb-8">
            To be the region's most trusted communication platform, empowering businesses to build meaningful relationships with their customers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Mission</h3>
              <p className="text-gray-700">
                We provide innovative, secure, and scalable communication solutions that help businesses connect with their customers more effectively across every channel.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Values</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Customer-first innovation</li>
                <li>• Reliability and security</li>
                <li>• Continuous improvement</li>
                <li>• Transparency and integrity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* What We Do */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Communication APIs</h3>
            <p className="text-gray-700">
              We provide robust APIs for WhatsApp, SMS, Voice, Email, and Push Notifications, enabling businesses to integrate seamless communication into their existing systems.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Omni-Channel Solutions</h3>
            <p className="text-gray-700">
              Our platform unifies customer conversations across multiple channels, providing a consistent and personalized experience regardless of how customers choose to connect.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">AI-Powered Chatbots</h3>
            <p className="text-gray-700">
              We develop intelligent chatbots that can handle routine inquiries, provide instant support, and seamlessly escalate to human agents when needed.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Campaign Management</h3>
            <p className="text-gray-700">
              Our platform enables businesses to create, schedule, and analyze messaging campaigns across SMS and WhatsApp, driving engagement and conversions.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact CTA */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to transform your customer communications?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Get in touch with our team to learn how Deewan can help your business connect with customers more effectively.
        </p>
        <a 
          href="/contact" 
          className="inline-block px-6 py-3 bg-deewan-primary text-white font-medium rounded-md shadow-md hover:bg-deewan-primary/90 transition-all duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}