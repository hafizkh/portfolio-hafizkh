import { motion } from 'framer-motion';
import { skills } from '../data/skillsData';
import TiltCard from './effects/TiltCard';
import StaggerContainer, { staggerItem } from './effects/StaggerContainer';
import { useTheme } from '../context/ThemeContext';

function Skills() {
  const { isDark } = useTheme();

  return (
    <section id="skills" className="py-24 section-gradient relative">
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
            What I Do
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Technical Skills</h2>
          <p className={`mt-4 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <motion.div key={skill.category} variants={staggerItem}>
              <TiltCard tiltAmount={8}>
                <div className="glass-card-hover p-6 h-full">
                  {/* Category Header with Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-cyan/20 ${
                        isDark ? 'text-primary-400' : 'text-primary-600'
                      }`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                      {skill.category}
                    </h3>
                  </div>

                  {/* Technologies List */}
                  <ul className="space-y-3">
                    {skill.technologies.map((tech, techIndex) => (
                      <motion.li
                        key={tech.name}
                        className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 group cursor-default ${
                          isDark ? 'hover:bg-white/5' : 'hover:bg-gray-100'
                        }`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className={`w-6 h-6 flex items-center justify-center transition-colors ${
                            isDark ? 'text-gray-400 group-hover:text-primary-400' : 'text-gray-500 group-hover:text-primary-600'
                          }`}
                          whileHover={{ scale: 1.2 }}
                        >
                          {tech.icon}
                        </motion.div>
                        <span className={`transition-colors ${
                          isDark ? 'text-gray-300 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'
                        }`}>
                          {tech.name}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export default Skills;
