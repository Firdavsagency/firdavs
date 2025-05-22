import React from 'react';
import { motion } from 'framer-motion';
import { caseStudiesData } from '../data/caseStudiesData';

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 md:py-28 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
            Our Success <span className="text-green-400">Stories</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            See how we help brands improve their ad performance and grow revenue.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {caseStudiesData.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-gray-900 rounded-xl p-6"
            >
              <img
                src={study.image}
                alt={study.title}
                className="rounded-lg mb-5 object-cover w-full h-40"
                loading="lazy"
              />
              <h3 className="text-white text-lg font-semibold mb-2">{study.title}</h3>
              <p className="text-green-400 font-bold mb-2">{study.metric}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{study.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
