import { ExternalLink, Github } from 'lucide-react';
import { SecurityLab } from '../../types/project';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface LabDetailsProps {
  lab: SecurityLab;
}

const LabDetails: React.FC<LabDetailsProps> = ({ lab }) => {
  const { isDark } = useTheme();

  return (
    <div>
      <div className="py-4">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <motion.h1
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 gradient-text ${isDark ? 'text-white' : 'text-gray-800'}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {lab.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            className={`text-sm sm:text-base mb-8 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {lab.fullDescription}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-3 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {lab.liveLink && (
              <motion.a
                href={lab.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg transition-all text-sm font-medium bg-gradient-to-r from-primary-500 to-accent-cyan text-white hover:shadow-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Documentation
              </motion.a>
            )}
            {lab.githubLink ? (
              <motion.a
                href={lab.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-5 py-2.5 rounded-lg transition-all text-sm font-medium ${isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
              </motion.a>
            ) : (
              <span className={`inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm ${isDark ? 'bg-gray-700/50 text-gray-400' : 'bg-gray-200 text-gray-500'}`}>
                <Github className="w-4 h-4 mr-2" />
                Private Repository
              </span>
            )}
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Technologies */}
            <motion.div
              className="glass-card p-5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                <span className="w-2 h-2 bg-primary-500 rounded-full" />
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {lab.technologies.map((tech) => (
                  <span key={tech} className="tech-tag text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              className="glass-card p-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                <span className="w-2 h-2 bg-accent-cyan rounded-full" />
                Key Features
              </h2>
              <ul className="space-y-2">
                {lab.features.map((feature) => (
                  <li key={feature} className={`text-sm flex items-start gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className="text-primary-400 mt-1">&bull;</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Challenges and Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Challenges */}
            <motion.div
              className="glass-card p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                <span className="w-2 h-2 bg-accent-pink rounded-full" />
                Challenges
              </h2>
              <ul className="space-y-2">
                {lab.challenges.map((challenge) => (
                  <li key={challenge} className={`text-sm flex items-start gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className="text-accent-pink mt-1">&bull;</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div
              className="glass-card p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Solutions
              </h2>
              <ul className="space-y-2">
                {lab.solutions.map((solution) => (
                  <li key={solution} className={`text-sm flex items-start gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className="text-green-400 mt-1">&bull;</span>
                    {solution}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabDetails;
