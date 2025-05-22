import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import { Mail, Video, Ghost } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  // Map icon names to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'mail':
        return <Mail size={48} className="text-green-400" />;
      case 'video':
        return <Video size={48} className="text-green-400" />;
      case 'ghost':
        return <Ghost size={48} className="text-green-400" />;
      default:
        return <Mail size={48} className="text-green-400" />;
    }
  };

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-gradient-to-b from-black to-black/95 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/10 rounded-full filter blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide">
            Our <span className="text-green-400">Services</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Marketing systems that run themselves, so you can focus on growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-black/60 backdrop-blur-md border border-green-400/20 rounded-lg p-8 flex flex-col items-center text-center shadow-lg hover:shadow-green-400/50 hover:-translate-y-3 transition-transform duration-500"
            >
              <div className="mb-6">{getIcon(service.icon)}</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Book a Call Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: servicesData.length * 0.2 + 0.3 }}
          className="mt-16 flex justify-center"
        >
          <Link
            to="/book-call"
            className="bg-green-400 hover:bg-green-300 text-black font-semibold px-10 py-3 rounded-md transition-colors duration-300 shadow-md hover:shadow-green-500/70"
          >
            Book a Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
