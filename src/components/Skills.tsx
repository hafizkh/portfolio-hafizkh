import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { skills } from '../data/skillsData';



function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <AnimatedSection key={skill.category}>
              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold ml-3">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.technologies.map((tech) => (
                    <motion.li
                      key={tech.name}
                      className="flex items-center p-2 rounded-lg hover:bg-indigo-50 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-5 h-5 mr-3 flex items-center justify-center">
                        {tech.icon}
                      </div>
                      <span>{tech.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills