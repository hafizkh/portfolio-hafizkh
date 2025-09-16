import React, { useMemo, useState } from 'react';
import AchievementCard from './AchievementCard';
import { educationAchievements } from '../../data/educationalAchie';

type View = 'education' | 'certifications' | 'all';

function yearFromDate(date?: string): number {
  if (!date) return -Infinity;
  const match = date.match(/\b(\d{4})(?!.*\d{4})/);
  return match ? parseInt(match[1], 10) : -Infinity;
}

export default function EducationCertifications() {
  const [view, setView] = useState<View>('education');

  const items = useMemo(() => {
    const sorted = [...educationAchievements].sort(
      (a, b) => yearFromDate(b.date) - yearFromDate(a.date)
    );
    if (view === 'education') return sorted.filter(a => !a.verification);
    if (view === 'certifications') return sorted.filter(a => a.verification);
    return sorted; // "all"
  }, [view]);

  return (
    <div className="space-y-8">
      {/* Toggle Buttons */}
      <div className="flex justify-center gap-3">
        {(['education','certifications','all'] as View[]).map(tab => (
          <button
            key={tab}
            onClick={() => setView(tab)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition
              ${view === tab
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
              }`}
          >
            {tab === 'education' && 'Education'}
            {tab === 'certifications' && 'Certifications'}
            {tab === 'all' && 'All'}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map(item => (
          <AchievementCard key={item.title} {...item} />
        ))}
      </div>

      {items.length === 0 && (
        <p className="text-center text-sm text-gray-500">No items found.</p>
      )}
    </div>
  );
}
