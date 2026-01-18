import { motion } from 'framer-motion';
import { filters } from '../../data/projectFilter';
import { ProjectFilterProps } from '../../types/project';

function ProjectFilter({ activeFilter, onFilterChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map(({ value, label }) => (
        <motion.button
          key={value}
          onClick={() => onFilterChange(value)}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            activeFilter === value
              ? 'bg-gradient-to-r from-primary-500 to-accent-cyan text-white shadow-glow'
              : 'glass-card text-gray-400 hover:text-white hover:border-primary-500/30'
          }`}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {label}
        </motion.button>
      ))}
    </div>
  );
}

export default ProjectFilter;
