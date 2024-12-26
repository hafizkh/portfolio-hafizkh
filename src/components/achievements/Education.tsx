import React from 'react';
import AchievementCard from './AchievementCard';
import { educationAchievements } from '../../data/educationalAchie';


function Education() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {educationAchievements.map((achievement) => (
        <AchievementCard key={achievement.title} {...achievement} />
      ))}
    </div>
  );
}

export default Education