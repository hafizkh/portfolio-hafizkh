import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { experiences } from '../data/experience';
import Achievements from './achievements/Achievements';
import { useTheme } from '../context/ThemeContext';

function Experience() {
  const { isDark } = useTheme();

  return (
    <section id="experience" className="py-24 section-gradient relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className={`inline-block px-4 py-2 rounded-full glass-card text-sm mb-4 ${
              isDark ? 'text-primary-400' : 'text-primary-600'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            My Journey
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Professional Experience
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            A timeline of my professional growth and achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary-500 via-accent-cyan to-primary-500/20">
                {/* Glowing Dot */}
                <motion.div
                  className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(139, 92, 246, 0.4)',
                      '0 0 0 8px rgba(139, 92, 246, 0)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Experience Card */}
              <motion.div
                className="glass-card-hover p-6"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>{exp.position}</h3>
                  <div className={`flex items-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    <Calendar className={`w-4 h-4 mr-2 ${isDark ? 'text-primary-400' : 'text-primary-600'}`} />
                    {exp.period}
                  </div>
                </div>

                {/* Company */}
                <div className="flex items-center mb-4">
                  <motion.img
                    src={exp.icon}
                    alt={`${exp.company} logo`}
                    className={`w-10 h-10 rounded-lg object-contain p-1 mr-3 ${isDark ? 'bg-white/5' : 'bg-gray-100'}`}
                    whileHover={{ scale: 1.1 }}
                  />
                  <span className={`font-medium ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>{exp.company}</span>
                </div>

                {/* Description */}
                <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{exp.description}</p>

                {/* Achievements */}
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className={`flex items-start text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <motion.span
                        className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full mr-3 mt-1.5 flex-shrink-0"
                        whileHover={{ scale: 1.5 }}
                      />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <Achievements />
    </section>
  );
}

export default Experience;
