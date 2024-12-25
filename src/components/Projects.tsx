import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import ProjectCard from './projects/ProjectCard';
import ProjectFilter from './projects/ProjectFilter';
import { projects } from '../data/projects';
import { ProjectCategory } from '../types/project';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

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
                <ProjectCard project={project} />
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
    </section>
  );
}