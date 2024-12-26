import React from 'react';
import AchievementCard from './AchievementCard';
import { professionalAchievements } from '../../data/educationalAchie';



export default function ProfessionalAchievements() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {professionalAchievements.map((achievement) => (
        <AchievementCard key={achievement.title} {...achievement} />
      ))}
    </div>
  );
}