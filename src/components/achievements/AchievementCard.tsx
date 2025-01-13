import React from 'react';
import { motion } from 'framer-motion';
import { AchievementCardProps } from '../../types/project';

function AchievementCard({ icon, title, description, date, verification, majors }: AchievementCardProps) {
  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
      whileHover={{ y: -10, scale: 1.03 }}
    >
      {/* Icon Section */}
      <motion.div
        className="flex justify-center items-center w-16 h-16 bg-gray-100 text-gray-700 rounded-full mb-6 shadow-sm"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8 }}
      >
        {icon}
      </motion.div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-center mb-4 leading-relaxed">
        {description}
      </p>

      {/* Majors Section */}
      {majors && (
        <div className="bg-gray-50 py-3 px-6 rounded-lg shadow-sm text-gray-700 text-center mt-4 border border-gray-200">
          <span className="font-semibold text-lg text-gray-800">Majors:</span>
          <span className="block font-normal text-sm mt-1">{majors}</span>
        </div>
      )}

      {/* Verification Link */}
      {verification && (
        <a
          href={verification}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 py-3 px-6 rounded-lg bg-blue-500 text-white text-center text-sm font-semibold shadow-md hover:shadow-lg hover:bg-blue-600 transition-all duration-300"
        >
          Verify Certification
        </a>
      )}

      {/* Date */}
      {date && (
        <p className="text-sm text-gray-500 text-center mt-4">{date}</p>
      )}

      {/* Divider Line */}
      <motion.div
        className="w-20 h-1 bg-blue-500 mx-auto mt-6 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
}

export default AchievementCard;
