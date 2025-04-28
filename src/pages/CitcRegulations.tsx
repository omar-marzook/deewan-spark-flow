
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import PostContent from "@/components/blog/PostContent";
import { motion } from "framer-motion";

const CitcRegulations = () => {
  const content = [
    <h2 key="h1">Compliance Framework</h2>,
    <p key="p1">
      Deewan strictly adheres to all CITC (Communications and Information Technology Commission) 
      regulations governing communication services in Saudi Arabia. Our compliance framework 
      ensures that all our services meet or exceed regulatory requirements.
    </p>,

    <h2 key="h2">Service Standards</h2>,
    <p key="p2">
      Our services are designed and operated in accordance with CITC standards for:
    </p>,
    <ul key="ul1">
      <li>Quality of Service (QoS) requirements</li>
      <li>Data protection and privacy measures</li>
      <li>Network security protocols</li>
      <li>Customer service response times</li>
      <li>Infrastructure reliability standards</li>
    </ul>,

    <h2 key="h3">Consumer Protection</h2>,
    <p key="p3">
      We maintain strict adherence to CITC's consumer protection guidelines:
    </p>,
    <ul key="ul2">
      <li>Transparent pricing and billing practices</li>
      <li>Clear service terms and conditions</li>
      <li>Efficient complaint resolution procedures</li>
      <li>Fair usage policies</li>
    </ul>,

    <h2 key="h4">Technical Compliance</h2>,
    <p key="p4">
      Our technical infrastructure complies with CITC specifications:
    </p>,
    <ul key="ul3">
      <li>Network security standards</li>
      <li>Data center requirements</li>
      <li>Encryption protocols</li>
      <li>System redundancy measures</li>
    </ul>,

    <h2 key="h5">Updates and Monitoring</h2>,
    <p key="p5">
      We continuously monitor and implement updates to our services based on new 
      CITC regulations and guidelines. This ensures ongoing compliance and service 
      improvement for our users.
    </p>
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50/80 via-gray-100/80 to-gray-50/80">
      <Navbar />
      <LegalPageLayout title="CITC Regulations Compliance Policy">
        <PostContent content={content} />
      </LegalPageLayout>
      <Footer />
    </div>
  );
};

export default CitcRegulations;
