import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AchievementCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  date?: string;
}

export default function AchievementCard({ icon, title, description, date }: AchievementCardProps) {
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
      {date && (
        <p className="text-sm text-indigo-600 text-center">{date}</p>
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