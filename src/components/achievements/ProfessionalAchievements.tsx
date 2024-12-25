import React from 'react';
import { Trophy, Award, Star, Target } from 'lucide-react';
import AchievementCard from './AchievementCard';

const professionalAchievements = [
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

export default function ProfessionalAchievements() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {professionalAchievements.map((achievement) => (
        <AchievementCard key={achievement.title} {...achievement} />
      ))}
    </div>
  );
}