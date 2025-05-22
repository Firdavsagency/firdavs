import React from 'react';
import { motion } from 'framer-motion';
import { reasonsData } from '../data/reasonsData';
import { BarChart2, TrendingUp, Settings, Briefcase, FileText, Layers } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'bar-chart-2':
        return <BarChart2 className="w-6 h-6 text-green-400" />;
      case 'trending-up':
        return <TrendingUp className="w-6 h-6 text-green-400" />;
      case 'settings':
        return <Settings className="w-6 h-6 text-green-400" />;
      case 'briefcase':
        return <Briefcase className="w-6 h-6 text-green-400" />;
      case 'file-text':
        return <FileText className="w-6 h-6 text-green-400" />;
      case 'layers':
        return <Layers className="w-6 h-6 text-green-400" />;
      default:
        return <BarChart2 className="w-6 h-6 text-green-400" />;
    }
  };

  return (
    <section className="py-20 bg-black/90 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-green-400">Us</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We’re not just another performance agency. Our edge comes from how we blend data, design, and audience psychology into every campaign we touch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasonsData.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-green-400/30 transition-all duration-300"
            >
              <div className="bg-green-400/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {getIcon(reason.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
