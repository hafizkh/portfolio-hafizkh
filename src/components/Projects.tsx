import { useState } from 'react';
import ProjectCard from './projects/ProjectCard';
import ProjectFilter from './projects/ProjectFilter';
import { projects } from '../data/projects';
import { Project, ProjectCategory } from '../types/project';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectDetails from './projects/ProjectDetails';
import StaggerContainer, { staggerItem } from './effects/StaggerContainer';
import { useTheme } from '../context/ThemeContext';

function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { isDark } = useTheme();

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-24 section-gradient-alt relative">
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
            My Work
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Featured Projects</h2>
          <p className={`mt-4 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        <AnimatePresence mode="wait">
          <StaggerContainer
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={staggerItem}>
                <ProjectCard project={project} onOpenModal={() => handleOpenModal(project)} />
              </motion.div>
            ))}
          </StaggerContainer>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center text-center mt-12"
          >
            <div className="w-24 h-24 rounded-full glass-card flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-12 w-12 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className={`text-2xl font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>No Projects Found</p>
            <p className={`text-lg max-w-md mx-auto ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              Try selecting a different category or check back later.
            </p>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="modal-backdrop"
            className={`fixed inset-0 z-50 backdrop-blur-md flex justify-center items-center px-4 sm:px-6 ${
              isDark ? 'bg-dark-900/80' : 'bg-gray-900/50'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="glass-card shadow-2xl w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl p-6 relative"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={handleCloseModal}
                className={`absolute top-4 right-4 w-10 h-10 rounded-full glass-card flex items-center justify-center transition-all z-50 ${
                  isDark ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
                aria-label="Close Modal"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              {/* Modal Content */}
              <div className="overflow-y-auto max-h-[85vh] pr-2 custom-scrollbar">
                <ProjectDetails project={selectedProject} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
