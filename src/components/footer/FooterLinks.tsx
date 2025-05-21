import React from "react";
import FooterColumn from "./FooterColumn";
import SocialLinks from "./SocialLinks";
const FooterLinks = () => {
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-16" role="navigation" aria-label="Footer Navigation">
    {/* Logo and description column */}
    <div className="flex flex-col backdrop-blur-sm bg-white/20 rounded-xl p-6 border border-white/30">
      <a href="/" className="mb-6 focus:outline-none focus:ring-2 focus:ring-deewan-primary/50 rounded" aria-label="Deewan Home">
        <img alt="Deewan" src="/deewan-logo.svg" className="h-7" width={168} height={28} aria-hidden="true" />
        <span className="sr-only">Deewan Home</span>
      </a>
      <p className="text-gray-600 mb-6">At Deewan, we provide intelligent, secure, and scalable communication solutions for businesses in Saudi Arabia and beyond.</p>

      <SocialLinks />
    </div>

    {/* Products column */}
    <FooterColumn title="Applications" links={[{
      name: "Omni-Channel Chat",
      href: "/products/omni-channel-chat"
    }, {
      name: "Campaigns",
      href: "/products/campaigns"
    }, {
      name: "Bots",
      href: "/products/bots"
    }, {
      name: "MFA",
      href: "/products/mfa"
    }, {
      name: "IVR",
      href: "/products/ivr"
    }]} />

    {/* Products column */}
    <FooterColumn title="Communication APIs" links={[{
      name: "WhatsApp API",
      href: "/products/whatsapp-api"
    }, {
      name: "SMS API",
      href: "/products/sms-api"
    }, {
      name: "Voice API",
      href: "/products/voice-api"
    }, {
      name: "Email API",
      href: "/products/email-api"
    }, {
      name: "Push Notifications API",
      href: "/products/push-notifications-api"
    }]} />

    {/* Resources column */}
    <FooterColumn title="Resources" links={[{
      name: "Blog",
      href: "/blog"
    }, {
      name: "Support",
      href: "https://support.deewan.sa/",
      external: true
    }, {
      name: "Console",
      href: "https://console.deewan.sa/",
      external: true
    }, {
      name: "Developer Docs",
      href: "https://developer.deewan.sa/",
      external: true
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