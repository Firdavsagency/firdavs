import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // <-- Import Link here
import green from './images/green.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-400/10 rounded-full filter blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <img
              src={green}
              alt="Glorix agency creative process"
              className="rounded-2xl w-full h-auto object-cover shadow-2xl max-h-[500px] md:object-top"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-white flex flex-col"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-green-400">Glorix</span>
            </h2>

            <p className="text-gray-300 mb-6">
              Glorix is a performance-driven TikTok ads agency built for bold fashion brands. We help style-forward labels cut through the noise and turn attention into conversion.
            </p>

            <p className="text-gray-300 mb-6">
              Our creative-first strategy blends trend-driven storytelling with high-performing media buying — designed to turn scrolls into sales.
            </p>

            <p className="text-gray-300 mb-8">
              From UGC to strategy, Glorix is the growth partner for fashion brands ready to dominate TikTok. We don’t follow the algorithm — we make it work for you.
            </p>

            <Link
  to="/book-call"
  className="self-start bg-green-400 hover:bg-green-300 text-black font-semibold px-8 py-3 rounded-md transition-colors duration-300"
>
  Book a Call
</Link>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
