import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Deewan",
  description: "Deewan's privacy policy outlines how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p>
            Last Updated: May 1, 2025
          </p>
          
          <h2>Introduction</h2>
          <p>
            Deewan ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our communication services.
          </p>
          <p>
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
          </p>
          
          <h2>Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect via the Site or our Services includes:
          </p>
          
          <h3>Personal Data</h3>
          <p>
            Personally identifiable information, such as your name, email address, telephone number, and company name, that you voluntarily give to us when you register with the Site or our Services or when you choose to participate in various activities related to the Site and our Services. You are under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from using certain features of the Site and our Services.
          </p>
          
          <h3>Derivative Data</h3>
          <p>
            Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
          </p>
          
          <h3>Financial Data</h3>
          <p>
            Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site or our Services.
          </p>
          
          <h2>Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site or our Services to:
          </p>
          <ul>
            <li>Create and manage your account.</li>
            <li>Process your transactions.</li>
            <li>Send you administrative information, including updates to our terms, conditions, and policies.</li>
            <li>Respond to your inquiries and provide customer service.</li>
            <li>Send you marketing and promotional communications.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Site and our Services.</li>
            <li>Notify you of updates to our products and services.</li>
            <li>Resolve disputes and troubleshoot problems.</li>
            <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
          </ul>
          
          <h2>Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
          
          <h3>By Law or to Protect Rights</h3>
          <p>
            If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
          </p>
          
          <h3>Third-Party Service Providers</h3>
          <p>
            We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
          </p>
          
          <h3>Marketing Communications</h3>
          <p>
            With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.
          </p>
          
          <h2>Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <p>
            Deewan<br />
            King Fahd Road, Al Olaya District<br />
            Riyadh, Saudi Arabia<br />
            Email: privacy@deewan.sa<br />
            Phone: +966 12 345 6789
          </p>
        </div>
      </div>
    </div>
  );
}