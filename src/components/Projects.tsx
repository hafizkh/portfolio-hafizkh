import { useState, useRef } from "react";
import ProjectCard from "./projects/ProjectCard";
import ProjectFilter from "./projects/ProjectFilter";
import { projects } from "../data/projects";
import { Project, ProjectCategory } from "../types/project";
import { motion, AnimatePresence, useInView } from "framer-motion";
import ProjectDetails from "./projects/ProjectDetails";
import { useTheme } from "../context/ThemeContext";
import { Layers, Code2, Sparkles } from "lucide-react";

// Stats component for the header
const ProjectStats = ({ label, value, delay }: { label: string; value: string; delay: number }) => {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="text-center"
    >
      <div className={`text-2xl md:text-3xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
        {value}
      </div>
      <div className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>
        {label}
      </div>
    </motion.div>
  );
};

function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { isDark } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter,
  );

  // Calculate stats
  const totalProjects = projects.length;
  const securityProjects = projects.filter(p => p.category === "security").length;
  const fullstackProjects = projects.filter(p => p.category === "fullstack").length;

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl
          ${isDark ? "bg-primary-500/5" : "bg-primary-500/10"}`}
        />
        <div className={`absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl
          ${isDark ? "bg-violet-500/5" : "bg-violet-500/10"}`}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Section Header - Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          {/* Main header card */}
          <motion.div
            className={`lg:col-span-3 p-8 rounded-3xl relative overflow-hidden
              ${isDark
                ? "bg-gradient-to-br from-primary-500/10 to-violet-500/5 border border-primary-500/20"
                : "bg-gradient-to-br from-primary-50 to-violet-50 border border-primary-200 shadow-lg"
              }`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none bg-primary-500" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4
                ${isDark
                  ? "bg-primary-500/20 text-primary-400 border border-primary-500/30"
                  : "bg-primary-100 text-primary-700 border border-primary-200"
                }`}
            >
              <Layers className="w-4 h-4" />
              My Work
            </motion.div>

            <h2
              id="projects-heading"
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Featured <span className="gradient-text">Projects</span>
            </h2>

            <p className={`text-lg max-w-xl ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              A showcase of my recent work spanning security tools, full-stack applications, and cloud solutions.
            </p>
          </motion.div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={`p-6 rounded-3xl flex flex-col justify-center
              ${isDark
                ? "bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10"
                : "bg-gradient-to-br from-white to-gray-50/80 border border-gray-200/60 shadow-lg"
              }`}
          >
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
              <ProjectStats value={`${totalProjects}+`} label="Total Projects" delay={0.4} />
              <ProjectStats value={`${securityProjects}`} label="Security Tools" delay={0.5} />
              <ProjectStats value={`${fullstackProjects}`} label="Full Stack" delay={0.6} />
            </div>
          </motion.div>
        </div>

        {/* Filter with integrated design */}
        <ProjectFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <ProjectCard
                  project={project}
                  onOpenModal={() => handleOpenModal(project)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`flex flex-col items-center text-center py-16 rounded-3xl
              ${isDark
                ? "bg-white/5 border border-white/10"
                : "bg-gray-50 border border-gray-200"
              }`}
          >
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6
              ${isDark ? "bg-white/10" : "bg-gray-100"}`}>
              <Code2 className={`w-10 h-10 ${isDark ? "text-gray-500" : "text-gray-400"}`} />
            </div>
            <p className={`text-xl font-semibold mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              No Projects Found
            </p>
            <p className={`text-sm max-w-md mx-auto ${isDark ? "text-gray-500" : "text-gray-500"}`}>
              Try selecting a different category or check back later for new projects.
            </p>
          </motion.div>
        )}

        {/* View more hint */}
        {filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="flex justify-center mt-12"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm
              ${isDark ? "text-gray-500" : "text-gray-500"}`}
            >
              <Sparkles className="w-4 h-4" />
              Showing {filteredProjects.length} of {totalProjects} projects
            </div>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="modal-backdrop"
            className={`fixed inset-0 z-50 backdrop-blur-xl flex justify-center items-center px-4 sm:px-6
              ${isDark ? "bg-dark-900/90" : "bg-gray-900/60"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className={`w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl p-6 relative rounded-3xl
                ${isDark
                  ? "bg-gradient-to-br from-dark-800 to-dark-900 border border-white/10"
                  : "bg-white border border-gray-200 shadow-2xl"
                }`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={handleCloseModal}
                className={`absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center transition-all z-50
                  ${isDark
                    ? "bg-white/10 text-gray-400 hover:text-white hover:bg-white/20"
                    : "bg-gray-100 text-gray-500 hover:text-gray-900 hover:bg-gray-200"
                  }`}
                aria-label="Close Modal"
                whileHover={{ scale: 1.1 }}
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
