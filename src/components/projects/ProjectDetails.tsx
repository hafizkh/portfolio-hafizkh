import { useParams, Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/projects';
import { ProjectDetailsProps } from '../../types/project';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const { id } = useParams<{ id: string }>();
  const { isDark } = useTheme();

  // Use the provided project prop if available; otherwise, find it from projects
  const selectedProject = project || projects.find((p) => p.id === id);

  if (!selectedProject) {
    return (
      <div className={`min-h-screen flex items-center justify-center px-4 ${isDark ? 'bg-dark-900' : 'bg-gray-50'}`}>
        <div className="text-center">
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>Project not found</h2>
          <Link to="/" className={`${isDark ? 'text-primary-400 hover:text-primary-300' : 'text-primary-600 hover:text-primary-500'}`}>
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={project ? '' : `min-h-screen pt-10 ${isDark ? 'bg-dark-900' : 'bg-gray-50'}`}>
      <div className="py-4">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <motion.h1
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 gradient-text ${isDark ? 'text-white' : 'text-gray-800'}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {selectedProject.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            className={`text-sm sm:text-base mb-8 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {selectedProject.fullDescription}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-3 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {selectedProject.liveLink && (
              <motion.a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-5 py-2.5 rounded-lg transition-all text-sm font-medium ${
                  selectedProject.liveLink.includes('youtu')
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-gradient-to-r from-primary-500 to-accent-cyan text-white hover:shadow-glow'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {selectedProject.liveLink.includes('youtu') ? (
                  <>
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    Watch Demo
                  </>
                ) : (
                  <>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Demo
                  </>
                )}
              </motion.a>
            )}
            {selectedProject.githubLink ? (
              <motion.a
                href={selectedProject.githubLink}
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
                {selectedProject.technologies.map((tech) => (
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
                {selectedProject.features.map((feature) => (
                  <li key={feature} className={`text-sm flex items-start gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className="text-primary-400 mt-1">•</span>
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
                {selectedProject.challenges.map((challenge) => (
                  <li key={challenge} className={`text-sm flex items-start gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className="text-accent-pink mt-1">•</span>
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
                {selectedProject.solutions.map((solution) => (
                  <li key={solution} className={`text-sm flex items-start gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className="text-green-400 mt-1">•</span>
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

export default ProjectDetails;
