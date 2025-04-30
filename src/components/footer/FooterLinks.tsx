import React from "react";
import FooterColumn from "./FooterColumn";
import SocialLinks from "./SocialLinks";
const FooterLinks = () => {
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {/* Logo and description column */}
      <div className="flex flex-col backdrop-blur-sm bg-white/20 rounded-xl p-6 border border-white/30">
        <a href="/" className="mb-6">
        <img alt="Deewan." src="/deewan-logo.svg" className="h-7" />
        </a>
        <p className="text-gray-600 mb-6">At Deewan, we provide intelligent, secure, and scalable communication solutions for businesses in Saudi Arabia and beyond.</p>
        
        <SocialLinks />
      </div>
      
      {/* Products column */}
      <FooterColumn title="Products" links={[{
      name: "Deewan Campaigns",
      href: "#"
    }, {
      name: "Omnichannel Chat",
      href: "#"
    }, {
      name: "Deewan Bots",
      href: "#"
    }, {
      name: "Deewan MFA",
      href: "#"
    }, {
      name: "Communication APIs",
      href: "#"
    }]} />
      
      {/* Resources column */}
      <FooterColumn title="Resources" links={[{
      name: "Documentation",
      href: "#"
    }, {
      name: "API Reference",
      href: "#"
    }, {
      name: "Blog",
      href: "#"
    }, {
      name: "Case Studies",
      href: "#"
    }, {
      name: "Support",
      href: "#"
    }]} />
      
      {/* Company column */}
      <FooterColumn title="Company" links={[{
      name: "About Us",
      href: "#"
    }, {
      name: "Careers",
      href: "#"
    }, {
      name: "Partners",
      href: "#"
    }, {
      name: "Press",
      href: "#"
    }, {
      name: "Contact",
      href: "#"
    }]} />
    </div>;
};
export default FooterLinks;