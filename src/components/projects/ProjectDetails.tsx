import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/projects';
import AnimatedSection from '../AnimatedSection';
import { ProjectDetailsProps } from '../../types/project';
import { motion } from 'framer-motion';

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const { id } = useParams<{ id: string }>();

  // Use the provided project prop if available; otherwise, find it from projects
  const selectedProject = project || projects.find((p) => p.id === id);

  if (!selectedProject) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/" className="text-indigo-600 hover:text-indigo-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`${project ? '' : 'min-h-screen pt-10'} bg-gray-50`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center sm:text-left">
              {selectedProject.title}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-lg text-gray-600 mb-8 text-center sm:text-left leading-relaxed">
              {selectedProject.fullDescription}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center sm:justify-start">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base w-full sm:w-auto"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Demo
              </a>
              {
                selectedProject.githubLink ? (
                  <motion.a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition-colors text-sm sm:text-base w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </motion.a>
                ) : (
                  <span className="flex items-center bg-gray-300 px-3 py-2 rounded-lg hover:bg-gray-500"><Github className="w-4 h-4 mr-1" /> Private Repository</span>
                )
              }
              {/* <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition-colors text-sm sm:text-base w-full sm:w-auto"
              >
                <Github className="w-4 h-4 mr-2" />
                View Source Code
              </a> */}
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center sm:text-left">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center sm:text-left">
                  Key Features
                </h2>
                <ul className="list-disc list-inside space-y-2 text-center sm:text-left">
                  {selectedProject.features.map((feature) => (
                    <li key={feature} className="text-gray-700 text-sm sm:text-base">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Challenges and Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center sm:text-left">
                  Challenges
                </h2>
                <ul className="list-disc list-inside space-y-2 text-center sm:text-left">
                  {selectedProject.challenges.map((challenge) => (
                    <li
                      key={challenge}
                      className="text-gray-700 text-sm sm:text-base"
                    >
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center sm:text-left">
                  Solutions
                </h2>
                <ul className="list-disc list-inside space-y-2 text-center sm:text-left">
                  {selectedProject.solutions.map((solution) => (
                    <li
                      key={solution}
                      className="text-gray-700 text-sm sm:text-base"
                    >
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
