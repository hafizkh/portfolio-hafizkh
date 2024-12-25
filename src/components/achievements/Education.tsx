import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import AchievementCard from './AchievementCard';

const educationAchievements = [
  {
    icon: <GraduationCap className="w-12 h-12 text-indigo-500" />,
    title: "Master of Computer Science",
    description: "Stanford University",
    date: "2020 - 2022"
  },
  {
    icon: <GraduationCap className="w-12 h-12 text-blue-500" />,
    title: "Bachelor of Engineering",
    description: "MIT",
    date: "2016 - 2020"
  },
  {
    icon: <BookOpen className="w-12 h-12 text-green-500" />,
    title: "AWS Solutions Architect",
    description: "Professional Certification",
    date: "2023"
  },
  {
    icon: <Award className="w-12 h-12 text-orange-500" />,
    title: "Google Cloud Professional",
    description: "Cloud Architecture Certification",
    date: "2023"
  }
];

export default function Education() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {educationAchievements.map((achievement) => (
        <AchievementCard key={achievement.title} {...achievement} />
      ))}
    </div>
  );
}