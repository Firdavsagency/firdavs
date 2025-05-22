import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const BookCall: React.FC = () => {
  const benefits = [
    'Deep-Dive Analysis of Your Ad Performance',
    'Advanced E-Commerce Advertising Strategies',
    'AI & Data-Driven Optimization for Lower CAC & Higher ROI',
    '15-Minute Call – No Sales, Just Real Value',
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-black to-black/95 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-black/70 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your <span className="text-green-400">Marketing?</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Book a free strategy call to discuss how we can help grow your home-office product brand.
            </p>
          </motion.div>
          
          <div className="mb-10">
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-400 mt-0.5 mr-3" />
                  <span className="text-gray-200">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link
              to="/book-call"
              className="inline-block bg-green-400 hover:bg-green-300 text-black font-medium px-8 py-4 rounded-full transition-colors duration-300 text-lg"
            >
              Book Your Free Demo Call
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookCall;