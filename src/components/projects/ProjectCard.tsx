import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectCardProps } from '../../types/project';



const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <motion.div
      className="bg-white-100 shadow-lg rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -10 }}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <div className="flex gap-4">
              {
                project.liveLink ? (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel='noopener noreferrer'
                    className={`flex items-center px-3 py-2 rounded-lg ${
                      project.liveLink.includes('youtu')
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-indigo-600 hover:bg-indigo-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {project.liveLink.includes('youtu') ? (
                      <>
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        Watch Demo
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </>
                    )}
                  </motion.a>
                ) : (
                  <span className="flex items-center bg-indigo-600 px-3 py-2 rounded-lg hover:bg-indigo-700"> <ExternalLink className="w-4 h-4 mr-1" />Hosted on Private Server</span>
                )
              }

              {
                project.githubLink ? (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-900"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </motion.a>
                ) : (
                  <span className="flex items-center bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-900"><Github className="w-4 h-4 mr-1" /> Private Repository</span>
                )
              }

            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm hover:bg-indigo-200 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <button
          onClick={onOpenModal}
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          Read More <ArrowRight className="w-4 h-4 ml-1" />
        </button>

      </div>
    </motion.div>
  );
}

export default ProjectCard