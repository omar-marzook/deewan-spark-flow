
import React from "react";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <LegalPageLayout title="Privacy Policy">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-6">Information We Collect</h2>
        <p className="mb-6">
          When you use Deewan's services, we may collect various types of information including:
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>Contact information (name, email, phone number)</li>
          <li>Usage data and analytics</li>
          <li>Communication preferences</li>
          <li>Technical information about your devices</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-6">How We Use Your Information</h2>
        <p className="mb-6">
          We use the collected information to provide and improve our services, including:
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>Delivering our communication services</li>
          <li>Improving user experience</li>
          <li>Sending important updates and notifications</li>
          <li>Analyzing service performance</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-6">Data Security</h2>
        <p className="mb-6">
          Deewan implements industry-standard security measures to protect your data. 
          We regularly review and update our security practices to ensure the highest 
          level of protection.
        </p>
      </motion.section>
    </LegalPageLayout>
  );
};

export default PrivacyPolicy;
