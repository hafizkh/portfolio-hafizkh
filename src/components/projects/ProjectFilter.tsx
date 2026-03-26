import { motion } from "framer-motion";
import { filters } from "../../data/projectFilter";
import { ProjectFilterProps } from "../../types/project";
import { useTheme } from "../../context/ThemeContext";
import { Shield, Code, Layers, Globe } from "lucide-react";

// Icon mapping for filters
const filterIcons: Record<string, React.ReactNode> = {
  all: <Layers className="w-4 h-4" />,
  security: <Shield className="w-4 h-4" />,
  frontend: <Globe className="w-4 h-4" />,
  fullstack: <Code className="w-4 h-4" />,
};

function ProjectFilter({ activeFilter, onFilterChange }: ProjectFilterProps) {
  const { isDark } = useTheme();

  return (
    <div className="flex justify-center mb-10">
      <div className={`inline-flex items-center gap-1 p-1.5 rounded-full
        ${isDark
          ? "bg-white/5 border border-white/10"
          : "bg-gray-100 border border-gray-200"
        }`}
      >
        {filters.map(({ value, label }) => (
          <motion.button
            key={value}
            onClick={() => onFilterChange(value)}
            className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300
              ${activeFilter === value
                ? "text-white"
                : isDark
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {activeFilter === value && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-violet-500 rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {filterIcons[value]}
              <span className="hidden sm:inline">{label}</span>
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default ProjectFilter;
