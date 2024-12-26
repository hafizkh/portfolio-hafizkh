import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import ProjectCard from './projects/ProjectCard';
import ProjectFilter from './projects/ProjectFilter';
import { projects } from '../data/projects';
import { Project, ProjectCategory } from '../types/project';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectDetails from './projects/ProjectDetails';


function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project); // Set the selected project to open the modal
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const filteredProjects = projects.filter(
    project => activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>

        <ProjectFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <AnimatedSection key={project.id}>
                <ProjectCard project={project} onOpenModal={() => handleOpenModal(project)} />
              </AnimatedSection>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600 mt-8"
          >
            No projects found for this category.
          </motion.p>
        )}
      </div>
      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center px-4 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl p-4 sm:p-6 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl z-50"
                aria-label="Close Modal"
              >
                ✖
              </button>

              {/* Modal Content */}
              <div className="overflow-y-auto max-h-[90vh]">
                <ProjectDetails project={selectedProject} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </section>
  );
}

export default Projects