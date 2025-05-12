import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CITC Regulations | Deewan",
  description: "Information about Deewan's compliance with CITC (Communications and Information Technology Commission) regulations in Saudi Arabia.",
};

export default function CitcRegulationsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">CITC Regulations Compliance</h1>
        
        <div className="prose prose-lg max-w-none">
          <p>
            Last Updated: May 1, 2025
          </p>
          
          <h2>Overview</h2>
          <p>
            At Deewan, we are committed to full compliance with all regulations set forth by the Communications and Information Technology Commission (CITC) of Saudi Arabia. This page outlines our approach to regulatory compliance and how our services adhere to CITC requirements.
          </p>
          
          <h2>Licensing and Authorization</h2>
          <p>
            Deewan operates under all necessary licenses and authorizations required by the CITC for providing communication services in the Kingdom of Saudi Arabia. Our licenses include:
          </p>
          <ul>
            <li>Class A License for Unified Communications</li>
            <li>SMS Service Provider License</li>
            <li>Value-Added Network Services License</li>
          </ul>
          <p>
            These licenses are regularly reviewed and renewed in accordance with CITC regulations to ensure continuous compliance.
          </p>
          
          <h2>Data Protection and Privacy</h2>
          <p>
            In accordance with CITC regulations on data protection and privacy, Deewan implements robust measures to protect user data and ensure privacy:
          </p>
          <ul>
            <li>All user data is stored securely within the Kingdom of Saudi Arabia</li>
            <li>We implement end-to-end encryption for sensitive communications</li>
            <li>Access to user data is strictly controlled and monitored</li>
            <li>We maintain detailed records of data processing activities</li>
            <li>Regular security audits are conducted to identify and address potential vulnerabilities</li>
          </ul>
          
          <h2>Content Filtering and Monitoring</h2>
          <p>
            Deewan complies with all CITC regulations regarding content filtering and monitoring:
          </p>
          <ul>
            <li>Our systems implement required content filtering mechanisms</li>
            <li>We maintain logs of communication activities as required by regulations</li>
            <li>Our platform includes mechanisms to prevent misuse for illegal activities</li>
            <li>We cooperate fully with authorities on legal requests for information</li>
          </ul>
          
          <h2>Quality of Service Standards</h2>
          <p>
            Deewan adheres to the quality of service standards established by the CITC:
          </p>
          <ul>
            <li>We maintain a minimum of 99.9% uptime for our services</li>
            <li>Our support team is available 24/7 to address service disruptions</li>
            <li>We conduct regular performance testing to ensure service quality</li>
            <li>Quarterly reports on service quality metrics are submitted to the CITC</li>
          </ul>
          
          <h2>Consumer Protection</h2>
          <p>
            In line with CITC's consumer protection regulations, Deewan:
          </p>
          <ul>
            <li>Provides clear and transparent pricing for all services</li>
            <li>Maintains a comprehensive complaint handling system</li>
            <li>Ensures all marketing materials are accurate and not misleading</li>
            <li>Offers fair contract terms with clear cancellation policies</li>
            <li>Provides accessible customer support in both Arabic and English</li>
          </ul>
          
          <h2>Regulatory Updates</h2>
          <p>
            Deewan continuously monitors changes in CITC regulations and promptly implements any required modifications to our services and policies. Our dedicated compliance team works closely with regulatory authorities to ensure we remain fully compliant with all current and upcoming regulations.
          </p>
          
          <h2>Contact Information</h2>
          <p>
            For any questions regarding our regulatory compliance or to report concerns, please contact our compliance team:
          </p>
          <p>
            Email: compliance@deewan.sa<br />
            Phone: +966 12 345 6789
          </p>
          
          <h2>CITC Resources</h2>
          <p>
            For more information about CITC regulations, please visit the official CITC website:
          </p>
          <p>
            <a href="https://www.citc.gov.sa" target="_blank" rel="noopener noreferrer" className="text-deewan-primary hover:underline">
              Communications and Information Technology Commission (CITC)
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}