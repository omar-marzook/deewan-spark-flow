
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import PostContent from "@/components/blog/PostContent";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const content = [
    <h2 key="h1">Information We Collect</h2>,
    <p key="p1">
      When you use Deewan's services, we may collect and process various types of information to provide and improve our services:
    </p>,
    <ul key="ul1">
      <li>Personal information (name, email address, phone number)</li>
      <li>Communication preferences and settings</li>
      <li>Usage data and analytics information</li>
      <li>Technical information about your devices and connections</li>
      <li>Information you provide through our communication channels</li>
    </ul>,
    
    <h2 key="h2">How We Use Your Information</h2>,
    <p key="p2">
      We use the collected information for various purposes, including:
    </p>,
    <ul key="ul2">
      <li>Providing and maintaining our services</li>
      <li>Improving user experience and service quality</li>
      <li>Sending important updates and notifications</li>
      <li>Analyzing service performance and usage patterns</li>
      <li>Responding to your inquiries and support requests</li>
    </ul>,

    <h2 key="h3">Data Security</h2>,
    <p key="p3">
      At Deewan, we implement robust security measures to protect your information:
    </p>,
    <ul key="ul3">
      <li>End-to-end encryption for sensitive communications</li>
      <li>Regular security audits and updates</li>
      <li>Strict access controls and authentication measures</li>
      <li>Compliance with international security standards</li>
    </ul>,

    <h2 key="h4">Your Rights and Choices</h2>,
    <p key="p4">
      You have certain rights regarding your personal information:
    </p>,
    <ul key="ul4">
      <li>Access and review your personal data</li>
      <li>Request corrections or updates</li>
      <li>Opt-out of marketing communications</li>
      <li>Request data deletion where applicable</li>
    </ul>,

    <h2 key="h5">Contact Us</h2>,
    <p key="p5">
      If you have any questions about our Privacy Policy or data practices, please contact us:
    </p>,
    <ul key="ul5">
      <li>Email: privacy@deewan.sa</li>
      <li>Phone: +966 XX XXX XXXX</li>
      <li>Address: Riyadh, Saudi Arabia</li>
    </ul>
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50/80 via-gray-100/80 to-gray-50/80">
      <Navbar />
      <LegalPageLayout title="Privacy Policy">
        <PostContent content={content} />
      </LegalPageLayout>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
