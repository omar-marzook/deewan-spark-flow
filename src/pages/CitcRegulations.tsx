
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const CitcRegulations = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 bg-gradient-to-b from-gray-50/80 via-gray-100/80 to-gray-50/80">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative backdrop-blur-sm bg-white/20 rounded-2xl p-8 md:p-12 border border-white/30 shadow-lg"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-deewan-dark mb-12 font-display">CITC Regulations Compliance Policy</h1>
            <div className="prose prose-lg max-w-none space-y-4">
              <h3>Reduce SPAM</h3>
              <p>Based on the need of the telecom sector; The TRA has issued this document for the use of messages to include new technical solutions to raise the efficiency of providing telecommunications services to end users, to contribute to a clear regulatory environment to regulate the use of messages and calls, and to improve the experience of the end user and beneficiary, thus contributing to reducing fraudulent, spoofing and spam messages. which is next:</p>
              <p><strong>Compliance with the regulations in force in the Kingdom of Saudi Arabia, and not to send any messages containing content contrary to any of these regulations, including the content of links in the text of the message</strong>.</p>
              <p><strong>When sending a short message containing a two-factor authentication code (OTP), the sender must explain in the message sent to the end user the reason for sending the two-factor authentication code, and not only send the code.</strong></p>
              <p><strong>Refrain from contracting for the purchase and sending of bulk SMS with service providers not licensed by the Authority.</strong></p>
              <p><strong>Strictly committing to sending bulk SMS according to the correct classification of the sender's name, and completely refraining from sending messages in a way that violates the classification, such as sending promotional messages through the name of a service sender, or sending service messages through the name of a promotional sender, and the like.</strong></p>
              <p><strong>Refrain from sending promotional campaign messages by sending them from their systems to the systems of the SMS service providers (system to system).</strong></p>
              <p><strong>The sender, upon his desire to send any promotional message to the end user, must adhere to the following:</strong></p>
              <ol>
                <li>Giving the end user the option to expressly agree to receive promotional messages or not, and the approval included in privacy policies and service contracts is not considered, and the burden of proving approval is on the sender.</li>
                <li>Enabling the end user to request to stop receiving promotional messages at any time, through traditional and electronic channels.</li>
                <li>Stop sending any other messages after receiving the request to stop sending promotional messages, within a period not exceeding (24) hours from receiving the request to stop sending.</li>
                <li>Sending a notification confirming the activation or deactivation of sending promotional messages; After receiving a request to do so.</li>
              </ol>
              <p><strong>Before sending any educational message to the end user, the sender must adhere to the following:</strong></p>
              <ol>
                <li>Coordinating with its regulators, before sending educational messages to the end user.</li>
                <li>The official name of the sender should be appended to the body of the message.</li>
                <li>The number of messages sent by the sender to the user should not exceed one per day, or as decided by the Authority.</li>
              </ol>
              <p><strong>Refrain from sending promotional and educational messages from ten in the evening until nine in the morning every day, and in the blessed month of Ramadan from one in the morning until twelve in the evening, Kingdom time.</strong></p>
              <p><strong>Not to use spam programs or address harvesting programs, nor may the use of electronic addresses obtained by such programs.</strong></p>
              <p><strong>The authority to send SMS is as follows:</strong></p>
              <ol>
                <li>Government agencies may send educational, service and warning messages.</li>
                <li>Private parties may send promotional, educational and service messages To view the full regulatory document, please <a href="https://regulations.citc.gov.sa/PublishedDocuments/GovernorApprovalDecision_469/c49da5de-60ba-4113-9fed-259ec3437187_Regulations%20for%20Curbing%20SPAM%20Messages%20%26%20Calls.pdf">see the link.</a>
                </li>
              </ol>
              <p>Therefore, the customer acknowledges compliance with all laws, decisions, and regulations issued by the Communications and Information Technology Commission in the Kingdom of Saudi Arabia, and he also acknowledges compliance with all regulations for combating spam and unwanted messages. In the event that any unwanted spam messages are sent by the customer to the service provider's network, the service provider has the right Suspension of the customer's account and the possibility of canceling or suspending the service immediately as soon as it is violated. The customer is also obligated upon receiving the notification provided by the service provider of sending  SPAM messages - to stop sending these messages and cooperate in order to determine the source of the SPAM traffic as soon as possible.</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CitcRegulations;
