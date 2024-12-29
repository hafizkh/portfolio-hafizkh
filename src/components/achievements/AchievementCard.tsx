import React from 'react';
import { motion } from 'framer-motion';
import { AchievementCardProps } from '../../types/project';



function AchievementCard({ icon, title, description, date, majors }: AchievementCardProps) {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <motion.div
        className="mb-6 flex justify-center"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold text-center mb-3">{title}</h3>
      <p className="text-gray-600 text-center mb-2">{description}</p>
      {majors && (
        <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 py-2 px-4 rounded-lg shadow-md text-gray-800 text-center mt-4">
          <span className="font-semibold text-base text-gray-700">Majors:</span>
          <span className="block font-normal text-sm mt-1 text-gray-600">
            {majors}
          </span>
        </div>
      )}
      {date && (
        <p className="text-sm text-indigo-600 text-center pt-2">{date}</p>
      )}
      <motion.div
        className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
}

export default AchievementCard