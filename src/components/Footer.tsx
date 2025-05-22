import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="text-2xl font-bold flex items-center">
                <span className="text-green-400">Nation</span>
                <span className="text-white">Immersivo</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              AI-powered marketing solutions for home-office product brands.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-green-400 hover:text-black transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-green-400 hover:text-black transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Process
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Team
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <Link to="/book-call" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-green-400 mt-1 mr-3" />
                <p className="text-gray-400">contact@glorix.com</p>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-green-400 mt-1 mr-3" />
                <p className="text-gray-400">Uzbekistan</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;