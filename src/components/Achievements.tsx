import React from 'react';
import { Trophy, Award, Star, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const achievements = [
  {
    icon: <Trophy className="w-12 h-12 text-yellow-500" />,
    title: "Best Developer Award 2023",
    description: "Recognized for exceptional contributions to open-source projects"
  },
  {
    icon: <Award className="w-12 h-12 text-blue-500" />,
    title: "100+ Projects Completed",
    description: "Successfully delivered over 100 projects for clients worldwide"
  },
  {
    icon: <Star className="w-12 h-12 text-purple-500" />,
    title: "5-Star Rating",
    description: "Maintained perfect client satisfaction across all projects"
  },
  {
    icon: <Target className="w-12 h-12 text-red-500" />,
    title: "Industry Recognition",
    description: "Featured in top tech publications and conferences"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <AnimatedSection key={achievement.title}>
              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className="mb-6 flex justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {achievement.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-center mb-3">{achievement.title}</h3>
                <p className="text-gray-600 text-center">{achievement.description}</p>
                <motion.div
                  className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}