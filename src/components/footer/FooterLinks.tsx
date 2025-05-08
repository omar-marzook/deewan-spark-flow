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
      href: "/products/campaigns"
    }, {
      name: "Omnichannel Chat",
      href: "/products/omnichannel-chat"
    }, {
      name: "Deewan Bots",
      href: "/products/bots"
    }, {
      name: "Deewan MFA",
      href: "/products/mfa"
    }, {
      name: "Communication APIs",
      href: "/products/apis"
    }]} />
      
      {/* Resources column */}
      <FooterColumn title="Resources" links={[{
      name: "Blog",
      href: "/blog"
    }, {
      name: "Support",
      href: "https://support.deewan.sa/"
    }, {
      name: "Console",
      href: "https://console.deewan.sa/"
    }, {
      name: "Developer Docs",
      href: "https://developer.deewan.sa/"
    }]} />
      
      {/* Company column */}
      <FooterColumn title="Company" links={[{
      name: "About Us",
      href: "/about"
    }, {
      name: "Contact",
      href: "/contact"
    }]} />
    </div>;
};
export default FooterLinks;