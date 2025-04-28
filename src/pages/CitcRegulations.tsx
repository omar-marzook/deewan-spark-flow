
import React from "react";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { motion } from "framer-motion";

const CitcRegulations = () => {
  return (
    <LegalPageLayout title="CITC Regulations Compliance Policy">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-6">Compliance Framework</h2>
        <p className="mb-6">
          Deewan strictly adheres to all CITC (Communications and Information Technology Commission) 
          regulations governing communication services in Saudi Arabia. Our compliance framework 
          ensures that all our services meet or exceed regulatory requirements.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Service Standards</h2>
        <p className="mb-6">
          Our services are designed and operated in accordance with CITC standards for:
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>Quality of Service (QoS) requirements</li>
          <li>Data protection and privacy measures</li>
          <li>Network security protocols</li>
          <li>Customer service response times</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-6">Regulatory Updates</h2>
        <p className="mb-6">
          We continuously monitor and implement updates to our services based on new 
          CITC regulations and guidelines. This ensures ongoing compliance and service 
          improvement.
        </p>
      </motion.section>
    </LegalPageLayout>
  );
};

export default CitcRegulations;
