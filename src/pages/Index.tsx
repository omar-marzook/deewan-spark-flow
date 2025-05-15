
import HomeHero from "../components/HomeHero";
import ProductsTabbedLayout from "../components/ProductsTabbedLayout";
import AlternativeProducts from "../components/AlternativeProducts";
import Industries from "../components/Industries";
import LogoCarousel from "../components/LogoCarousel";
import DepartmentsWeServe from "../components/DepartmentsWeServe";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";
import AlternativeStats from "../components/AlternativeStats";
import AlternativeTestimonials from "../components/AlternativeTestimonials";
import SEO from "../components/SEO";
import { organizationSchema } from "../lib/schema";
import { BarChart, CheckCircle, Users, Briefcase } from 'lucide-react';

const Index = () => {
  // Define SEO data that will be used by both client and server
  const seoData = {
    title: "Deewan - Intelligent Communication Solutions for Business | Saudi Arabia",
    description: "Deewan provides secure, scalable communication solutions including WhatsApp Business API, SMS, Voice, and AI-powered chatbots for businesses across Saudi Arabia.",
    canonical: "/",
    ogType: "website",
    ogImage: "/deewan-og.png",
    schema: organizationSchema
  };
  
  // Store SEO data in pageProps for server-side rendering
  if (typeof window === 'undefined') {
    // This only runs on the server
    // @ts-ignore - This will be picked up by Vike
    Index.pageProps = { seoData };
  }
  return (
    <div className="overflow-x-hidden">
      <SEO {...seoData} />
      <HomeHero />
      <LogoCarousel />
      <ProductsTabbedLayout />
      <AlternativeProducts />
      <Industries />
      <AlternativeStats 
        // Using default props explicitly for clarity
        showCards={true}
        gridCount={4}
        showTitle={true}
        stats={[
          {
            icon: <BarChart className="h-6 w-6 text-deewan-primary" />,
            value: "9+ Billion",
            label: "Annual Transactions"
          },
          {
            icon: <Users className="h-6 w-6 text-deewan-primary" />,
            value: "300+",
            label: "Satisfied Customers"
          },
          {
            icon: <Briefcase className="h-6 w-6 text-deewan-primary" />,
            value: "6+",
            label: "Industries Served"
          },
          {
            icon: <CheckCircle className="h-6 w-6 text-deewan-primary" />,
            value: "99.9%",
            label: "Uptime Reliability"
          }
        ]}
        titleContent={{
          title: "<span class=\"text-deewan-primary\">Deewan</span> in Numbers",
          description: "Real impact for measurable growth."
        }}
      />
      <DepartmentsWeServe />
      <AlternativeTestimonials />
      <BlogSection />
      <ContactSection />
    </div>
  );
};

export default Index;
