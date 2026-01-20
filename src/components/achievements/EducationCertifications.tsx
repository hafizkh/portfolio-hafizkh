import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import AchievementCard from './AchievementCard';
import { educationAchievements } from '../../data/educationalAchie';
import { useTheme } from '../../context/ThemeContext';

type View = 'education' | 'certifications' | 'all';

function yearFromDate(date?: string): number {
  if (!date) return -Infinity;
  const match = date.match(/\b(\d{4})(?!.*\d{4})/);
  return match ? parseInt(match[1], 10) : -Infinity;
}

export default function EducationCertifications() {
  const [view, setView] = useState<View>('education');
  const { isDark } = useTheme();

  const items = useMemo(() => {
    const sorted = [...educationAchievements].sort(
      (a, b) => yearFromDate(b.date) - yearFromDate(a.date)
    );
    if (view === 'education') return sorted.filter((a) => !a.verification);
    if (view === 'certifications') return sorted.filter((a) => a.verification);
    return sorted; // "all"
  }, [view]);

  const tabs: { key: View; label: string }[] = [
    { key: 'education', label: 'Education' },
    { key: 'certifications', label: 'Certifications' },
    { key: 'all', label: 'All' },
  ];

  return (
    <div className="space-y-10">
      {/* Toggle Buttons */}
      <div className="flex justify-center gap-3">
        {tabs.map((tab) => (
          <motion.button
            key={tab.key}
            onClick={() => setView(tab.key)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              view === tab.key
                ? 'bg-gradient-to-r from-primary-500 to-accent-violet text-white shadow-glow'
                : `glass-card ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} hover:border-primary-500/30`
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        key={view}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <AchievementCard {...item} />
          </motion.div>
        ))}
      </motion.div>

      {items.length === 0 && (
        <p className="text-center text-sm text-gray-500">No items found.</p>
      )}
    </div>
  );
}
