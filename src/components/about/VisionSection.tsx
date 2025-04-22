
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Flag, Shield } from 'lucide-react';

const VisionSection = () => {
  const visionCards = [
    {
      icon: <Globe className="h-8 w-8 text-deewan-primary" />,
      title: "Growing Globally",
      description: "Building on our success in Saudi Arabia, we're expanding our reach to serve clients across the Middle East and beyond."
    },
    {
      icon: <Flag className="h-8 w-8 text-deewan-primary" />,
      title: "Saudi Vision 2030",
      description: "Aligned with Saudi Vision 2030, we're committed to digital transformation and economic diversification through innovative communication solutions."
    },
    {
      icon: <Shield className="h-8 w-8 text-deewan-primary" />,
      title: "Technology Leadership",
      description: "As a leading technology company based in Saudi Arabia, we're driving innovation in enterprise communication and digital solutions."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/80 to-white"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deewan-dark">
            Transforming Digital <span className="text-deewan-primary">Communication</span>
          </h2>
          <p className="text-lg text-deewan-dark/80">
            As a Saudi technology company, we're proud to contribute to the Kingdom's digital transformation journey while expanding our reach globally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {visionCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="p-4 bg-white/80 rounded-xl shadow-sm inline-flex mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-deewan-dark">{card.title}</h3>
              <p className="text-deewan-dark/70">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-xl relative overflow-hidden"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-deewan-dark">About Deewan</h3>
              <p className="text-deewan-dark/80">
                Deewan is a pioneering technology company based in Saudi Arabia, specializing in enterprise communication solutions. Our mission is to transform how organizations connect, collaborate, and communicate in the digital age.
              </p>
              <p className="text-deewan-dark/80">
                We combine innovative technology with deep industry expertise to deliver secure, scalable, and user-friendly communication platforms that help businesses thrive in an increasingly connected world.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-xl relative overflow-hidden"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-deewan-dark">Vision 2030 Alignment</h3>
              <p className="text-deewan-dark/80">
                As part of our commitment to Saudi Vision 2030, we're actively contributing to the Kingdom's digital transformation journey. Our solutions empower businesses to embrace digital innovation, fostering economic growth and technological advancement.
              </p>
              <p className="text-deewan-dark/80">
                Through our enterprise communication platforms, we're helping organizations across Saudi Arabia modernize their operations, enhance efficiency, and build stronger connections with their stakeholders.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
