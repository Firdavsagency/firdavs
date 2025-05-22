import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { processData } from '../data/processData';

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Process: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="process" className="py-20 md:py-28 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-green-400/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-400/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-green-400">Process</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We follow a structured approach to ensure consistent results. Here's what to expect when working with us.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-4 mb-12">
            {processData.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 text-sm rounded-full font-medium transition-colors duration-300 ${
                  activeTab === index
                    ? 'bg-green-400 text-black'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
              className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              {processData[activeTab].days.map((day, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  exit="exit"
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center">
                      <span className="text-green-400 font-semibold">{day.day}</span>
                    </div>
                    {index < processData[activeTab].days.length - 1 && (
                      <div className="h-full w-0.5 bg-green-400/20 mx-auto my-2"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{day.title}</h3>
                    <p className="text-gray-400">{day.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Process;
