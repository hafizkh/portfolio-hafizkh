import { ExternalLink, Github, ArrowUpRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectCardProps } from '../../types/project';
import { useTheme } from '../../context/ThemeContext';

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const { isDark } = useTheme();
  const isVideo = project.liveLink?.includes('youtu');
  const isSecurityProject = project.category === 'security';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className={`
        group relative overflow-hidden rounded-3xl h-full flex flex-col
        ${isDark
          ? "bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/20"
          : "bg-gradient-to-br from-white to-gray-50/80 border border-gray-200/60 hover:border-primary-300 shadow-lg shadow-gray-200/50"
        }
        transition-all duration-500
      `}
    >
      {/* Featured badge for security projects */}
      {isSecurityProject && (
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full
            ${isDark
              ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
              : "bg-cyan-100 text-cyan-700 border border-cyan-200"
            }`}>
            Security Tool
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <motion.img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="w-full h-full object-cover object-top"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Gradient overlay */}
        <div className={`absolute inset-0 transition-opacity duration-300
          ${isDark
            ? "bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"
            : "bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"
          } opacity-60 group-hover:opacity-80`}
        />

        {/* Quick action buttons - appear on hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {project.liveLink && (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-2xl backdrop-blur-md transition-all duration-300
                ${isVideo
                  ? "bg-red-500/90 hover:bg-red-500 text-white"
                  : "bg-primary-500/90 hover:bg-primary-500 text-white"
                } shadow-xl`}
              aria-label={isVideo ? "Watch demo video" : "View live demo"}
            >
              {isVideo ? <Play className="w-6 h-6" /> : <ExternalLink className="w-6 h-6" />}
            </motion.a>
          )}
          {project.githubLink && (
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-2xl backdrop-blur-md transition-all duration-300
                ${isDark
                  ? "bg-white/20 hover:bg-white/30 text-white"
                  : "bg-gray-900/80 hover:bg-gray-900 text-white"
                } shadow-xl`}
              aria-label="View source code on GitHub"
            >
              <Github className="w-6 h-6" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 line-clamp-1
          ${isDark
            ? "text-white group-hover:text-primary-400"
            : "text-gray-900 group-hover:text-primary-600"
          }`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className={`text-sm mb-4 line-clamp-2 flex-1
          ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          {project.description}
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors duration-300
                ${isDark
                  ? "bg-white/5 text-gray-400 border border-white/10 group-hover:border-primary-500/30 group-hover:text-primary-400"
                  : "bg-gray-100 text-gray-600 border border-gray-200 group-hover:border-primary-300 group-hover:text-primary-600"
                }`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className={`px-2.5 py-1 text-xs font-medium rounded-lg
              ${isDark ? "text-gray-500" : "text-gray-400"}`}>
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Footer with links */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <button
            onClick={onOpenModal}
            className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 group/btn
              ${isDark
                ? "text-primary-400 hover:text-primary-300"
                : "text-primary-600 hover:text-primary-500"
              }`}
            aria-label={`Read more about ${project.title}`}
          >
            View Details
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>

          <div className="flex items-center gap-2">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-300
                  ${isDark
                    ? "text-gray-500 hover:text-white hover:bg-white/10"
                    : "text-gray-400 hover:text-gray-700 hover:bg-gray-100"
                  }`}
                aria-label={isVideo ? "Watch demo" : "Visit live site"}
              >
                {isVideo ? <Play className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-300
                  ${isDark
                    ? "text-gray-500 hover:text-white hover:bg-white/10"
                    : "text-gray-400 hover:text-gray-700 hover:bg-gray-100"
                  }`}
                aria-label="View on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Subtle hover glow effect */}
      <div className={`absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100
        ${isDark
          ? "shadow-[inset_0_0_60px_rgba(99,102,241,0.1)]"
          : "shadow-[inset_0_0_60px_rgba(99,102,241,0.05)]"
        }`}
      />
    </motion.div>
  );
};

export default ProjectCard;
