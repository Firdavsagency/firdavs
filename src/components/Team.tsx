import React from 'react';
import { motion } from 'framer-motion';
import { teamData } from '../data/teamData';


const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 md:py-28 bg-gradient-to-b from-black/95 to-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-400/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-green-400">Team</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The experts behind our data-driven marketing strategies and impressive client results.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-green-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;