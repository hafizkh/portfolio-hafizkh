import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectCardProps } from '../../types/project';
import TiltCard from '../effects/TiltCard';

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <TiltCard tiltAmount={6}>
      <motion.div
        className="glass-card-hover overflow-hidden group h-full flex flex-col"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-video">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent opacity-60" />

          {/* Hover overlay with buttons */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/95 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 w-full">
              <div className="flex gap-3">
                {project.liveLink ? (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-4 py-2 rounded-lg text-white text-sm font-medium ${
                      project.liveLink.includes('youtu')
                        ? 'bg-red-500 hover:bg-red-600'
                        : 'bg-gradient-to-r from-primary-500 to-accent-cyan hover:shadow-glow'
                    } transition-all`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {project.liveLink.includes('youtu') ? (
                      <>
                        <svg
                          className="w-4 h-4 mr-2"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        Watch Demo
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </>
                    )}
                  </motion.a>
                ) : (
                  <span className="flex items-center px-4 py-2 rounded-lg bg-gray-600/50 text-gray-300 text-sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Private Server
                  </span>
                )}

                {project.githubLink ? (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </motion.a>
                ) : (
                  <span className="flex items-center px-4 py-2 rounded-lg bg-gray-600/30 text-gray-400 text-sm">
                    <Github className="w-4 h-4 mr-2" />
                    Private
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-2">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <motion.span
                key={tech}
                className="tech-tag text-xs"
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 text-xs text-gray-500">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Read More Button */}
          <motion.button
            onClick={onOpenModal}
            className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium group/btn"
            whileHover={{ x: 5 }}
          >
            Read More
            <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>
    </TiltCard>
  );
};

export default ProjectCard;
