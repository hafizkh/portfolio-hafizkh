import React from 'react';
import { motion } from 'framer-motion';
import { filters } from '../../data/projectFilter';
import { ProjectFilterProps } from '../../types/project';





function ProjectFilter({ activeFilter, onFilterChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {filters.map(({ value, label }) => (
        <motion.button
          key={value}
          onClick={() => onFilterChange(value)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === value
            ? 'bg-indigo-600 text-white shadow-lg'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {label}
        </motion.button>
      ))}
    </div>
  );
}

export default ProjectFilter