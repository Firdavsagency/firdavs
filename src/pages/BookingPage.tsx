import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookingPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Book a Strategy Call';

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const benefits = [
    'In-depth analysis of your current marketing performance',
    'Customized strategies for your specific brand and products',
    'Actionable tips you can implement immediately',
    'No hard selling, just genuine value and expertise',
  ];

  return (
    <Layout>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center text-white hover:text-green-400 transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Book Your Free <span className="text-green-400">Strategy Call</span>
            </h1>

            <p className="text-xl text-gray-300 mb-10">
              Schedule a 15-minute consultation with our marketing experts to discuss how we can help grow your home-office product brand.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-6">What to Expect:</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-400 mt-1 mr-3" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 p-6 bg-green-400/10 border border-green-400/20 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Why This Call Is Different</h3>
                  <p className="text-gray-300">
                    Unlike typical sales calls, our strategy session is focused on providing you with real value. We'll analyze your specific situation and offer actionable advice you can use right away, whether you decide to work with us or not.
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-1 h-[600px]">
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/radjabovfirdavs-1415"
                    style={{ minWidth: '320px', height: '600px' }}
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BookingPage;
