import { ExternalLink, Github, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SecurityLab } from '../../types/project';
import { useTheme } from '../../context/ThemeContext';

interface LabCardProps {
  lab: SecurityLab;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const LabCard: React.FC<LabCardProps> = ({ lab, isOpen, onToggle, index }) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      className="glass-card-hover overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      {/* Card Header — clickable row with image */}
      <button
        onClick={onToggle}
        className="w-full flex flex-col sm:flex-row items-stretch text-left group"
      >
        {/* Image */}
        <div className="relative overflow-hidden sm:w-48 md:w-56 flex-shrink-0 aspect-video sm:aspect-auto">
          <img
            src={lab.image}
            alt={lab.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className={`absolute inset-0 ${isDark ? 'bg-dark-900/20' : 'bg-gray-900/10'}`} />
        </div>

        {/* Content */}
        <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className={`text-base font-semibold transition-colors leading-snug ${
                isOpen
                  ? 'text-primary-400'
                  : isDark
                    ? 'text-white group-hover:text-primary-400'
                    : 'text-gray-800 group-hover:text-primary-600'
              }`}>
                {lab.title}
              </h3>
              <p className={`text-sm mt-1 line-clamp-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                {lab.description}
              </p>
            </div>

            {/* Chevron */}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 mt-1"
            >
              <ChevronDown className={`w-5 h-5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
            </motion.div>
          </div>

          {/* Tech tags preview */}
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {lab.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="tech-tag text-xs">{tech}</span>
            ))}
            {lab.technologies.length > 4 && (
              <span className="px-2 py-0.5 text-xs text-gray-500">
                +{lab.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </button>

      {/* Expandable Details */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className={`px-5 pb-5 border-t ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
              {/* Full description */}
              <p className={`text-sm leading-relaxed mt-4 mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {lab.fullDescription}
              </p>

              {/* Features & Solutions in 2-col */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className={`text-sm font-semibold mb-2 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full" />
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {lab.features.map((feature) => (
                      <li key={feature} className={`text-xs flex items-start gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <span className="text-primary-400 mt-0.5">&bull;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className={`text-sm font-semibold mb-2 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    Solutions
                  </h4>
                  <ul className="space-y-1">
                    {lab.solutions.map((solution) => (
                      <li key={solution} className={`text-xs flex items-start gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <span className="text-green-400 mt-0.5">&bull;</span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action links */}
              <div className="flex gap-3">
                {lab.liveLink && (
                  <motion.a
                    href={lab.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-primary-500 to-accent-cyan text-white hover:shadow-glow transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Documentation
                  </motion.a>
                )}
                {lab.githubLink && (
                  <motion.a
                    href={lab.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LabCard;
