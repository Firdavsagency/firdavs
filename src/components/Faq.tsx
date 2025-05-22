import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { faqData } from '../data/faqData';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-green-400">Questions</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Got questions about working with us? Find answers to the most common queries below.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-5"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full flex items-center justify-between text-left p-5 rounded-lg transition-colors duration-300 ${
                  openIndex === index
                    ? 'bg-green-400/10 border border-green-400/20'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10'
                }`}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="flex-shrink-0 text-green-400" />
                ) : (
                  <ChevronDown className="flex-shrink-0" />
                )}
              </button>
              
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-5 bg-white/5 text-gray-300 rounded-b-lg border-x border-b border-white/10">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;