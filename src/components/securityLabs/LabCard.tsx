import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { LabCardProps } from '../../types/project';
import { useTheme } from '../../context/ThemeContext';

const LabCard: React.FC<LabCardProps> = ({ lab, onOpenModal }) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      className="glass-card-hover overflow-hidden group flex flex-col sm:flex-row"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image - left side */}
      <div className="relative overflow-hidden sm:w-56 md:w-64 flex-shrink-0 aspect-video sm:aspect-auto">
        <img
          src={lab.image}
          alt={lab.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-900/30 hidden sm:block" />
      </div>

      {/* Content - right side */}
      <div className="p-5 flex-1 flex flex-col min-w-0">
        <h3 className={`text-lg font-semibold group-hover:text-primary-400 transition-colors mb-1.5 ${isDark ? 'text-white' : 'text-gray-800'}`}>
          {lab.title}
        </h3>
        <p className={`text-sm mb-3 line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {lab.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {lab.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="tech-tag text-xs"
            >
              {tech}
            </span>
          ))}
          {lab.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-xs text-gray-500">
              +{lab.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Actions row */}
        <div className="flex items-center gap-3 mt-auto">
          <motion.button
            onClick={onOpenModal}
            className={`inline-flex items-center transition-colors text-sm font-medium group/btn ${isDark ? 'text-primary-400 hover:text-primary-300' : 'text-primary-600 hover:text-primary-500'}`}
            whileHover={{ x: 3 }}
          >
            Read More
            <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>

          {lab.liveLink && (
            <a
              href={lab.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center text-xs transition-colors ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <ExternalLink className="w-3.5 h-3.5 mr-1" />
              Docs
            </a>
          )}

          {lab.githubLink && (
            <a
              href={lab.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center text-xs transition-colors ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <Github className="w-3.5 h-3.5 mr-1" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default LabCard;
