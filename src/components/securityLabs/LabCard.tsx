import { ExternalLink, Github, ChevronDown, Shield, Terminal } from 'lucide-react';
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
      className={`overflow-hidden rounded-2xl transition-all duration-300
        ${isDark
          ? "bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-cyan-500/30"
          : "bg-gradient-to-br from-white to-gray-50/80 border border-gray-200/60 hover:border-cyan-300 shadow-lg"
        }
        ${isOpen ? (isDark ? "border-cyan-500/40" : "border-cyan-400") : ""}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      {/* Card Header */}
      <button
        onClick={onToggle}
        className="w-full flex flex-col sm:flex-row items-stretch text-left group"
        aria-expanded={isOpen}
        aria-controls={`lab-content-${lab.id}`}
      >
        {/* Image */}
        <div className="relative overflow-hidden sm:w-56 md:w-64 flex-shrink-0 aspect-video sm:aspect-auto">
          <motion.img
            src={lab.image}
            alt={`Screenshot of ${lab.title}`}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-dark-900/60 to-transparent' : 'bg-gradient-to-r from-white/40 to-transparent'}`} />

          {/* Security badge */}
          <div className="absolute top-3 left-3">
            <div className={`p-2 rounded-lg backdrop-blur-md
              ${isDark ? "bg-cyan-500/20 text-cyan-400" : "bg-cyan-100 text-cyan-600"}`}>
              <Shield className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 sm:p-6 flex flex-col justify-center min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <h3 className={`text-lg font-bold transition-colors leading-snug mb-2
                ${isOpen
                  ? isDark ? 'text-cyan-400' : 'text-cyan-600'
                  : isDark
                    ? 'text-white group-hover:text-cyan-400'
                    : 'text-gray-800 group-hover:text-cyan-600'
                }`}>
                {lab.title}
              </h3>
              <p className={`text-sm line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {lab.description}
              </p>
            </div>

            {/* Chevron with animated rotation */}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`flex-shrink-0 p-2 rounded-full transition-colors
                ${isDark
                  ? "bg-white/5 group-hover:bg-cyan-500/20"
                  : "bg-gray-100 group-hover:bg-cyan-100"
                }`}
            >
              <ChevronDown className={`w-5 h-5 transition-colors
                ${isOpen
                  ? isDark ? "text-cyan-400" : "text-cyan-600"
                  : isDark ? "text-gray-500" : "text-gray-400"
                }`}
              />
            </motion.div>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {lab.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors
                  ${isDark
                    ? "bg-white/5 text-gray-400 border border-white/10"
                    : "bg-gray-100 text-gray-600 border border-gray-200"
                  }`}
              >
                {tech}
              </span>
            ))}
            {lab.technologies.length > 5 && (
              <span className={`px-2 py-1 text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                +{lab.technologies.length - 5}
              </span>
            )}
          </div>
        </div>
      </button>

      {/* Expandable Details */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`lab-content-${lab.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className={`px-6 pb-6 border-t ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
              {/* Full description */}
              <div className={`mt-5 p-4 rounded-xl ${isDark ? "bg-white/5" : "bg-gray-50"}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className={`w-4 h-4 ${isDark ? "text-cyan-400" : "text-cyan-600"}`} />
                  <span className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
                    Overview
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {lab.fullDescription}
                </p>
              </div>

              {/* Features & Solutions in 2-col */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                <div className={`p-4 rounded-xl ${isDark ? "bg-cyan-500/5 border border-cyan-500/20" : "bg-cyan-50 border border-cyan-100"}`}>
                  <h4 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {lab.features.map((feature) => (
                      <li key={feature} className={`text-sm flex items-start gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <svg className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`p-4 rounded-xl ${isDark ? "bg-green-500/5 border border-green-500/20" : "bg-green-50 border border-green-100"}`}>
                  <h4 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    <span className="w-2 h-2 bg-green-400 rounded-full" />
                    Solutions
                  </h4>
                  <ul className="space-y-2">
                    {lab.solutions.map((solution) => (
                      <li key={solution} className={`text-sm flex items-start gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                {lab.liveLink && (
                  <motion.a
                    href={lab.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-primary-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
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
                    className={`inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold transition-all
                      ${isDark
                        ? 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200'
                      }`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
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
