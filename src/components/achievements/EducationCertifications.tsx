import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AchievementCard from './AchievementCard';
import { educationAchievements } from '../../data/educationalAchie';
import { useTheme } from '../../context/ThemeContext';
import { GraduationCap, Award, Layers } from 'lucide-react';

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
    return sorted;
  }, [view]);

  const tabs: { key: View; label: string; icon: React.ReactNode; count: number }[] = [
    {
      key: 'education',
      label: 'Education',
      icon: <GraduationCap className="w-4 h-4" />,
      count: educationAchievements.filter((a) => !a.verification).length,
    },
    {
      key: 'certifications',
      label: 'Certifications',
      icon: <Award className="w-4 h-4" />,
      count: educationAchievements.filter((a) => a.verification).length,
    },
    {
      key: 'all',
      label: 'All',
      icon: <Layers className="w-4 h-4" />,
      count: educationAchievements.length,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Toggle Buttons - Pill style */}
      <div className="flex justify-center">
        <div className={`inline-flex items-center gap-1 p-1.5 rounded-full
          ${isDark
            ? "bg-white/5 border border-white/10"
            : "bg-gray-100 border border-gray-200"
          }`}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.key}
              onClick={() => setView(tab.key)}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                ${view === tab.key
                  ? 'text-white'
                  : isDark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {view === tab.key && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 to-violet-500 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {tab.icon}
                {tab.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full
                  ${view === tab.key
                    ? 'bg-white/20'
                    : isDark
                      ? 'bg-white/10'
                      : 'bg-gray-200'
                  }`}
                >
                  {tab.count}
                </span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Grid with AnimatePresence for smooth transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <AchievementCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {items.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-center py-12 rounded-2xl
            ${isDark ? "bg-white/5 border border-white/10" : "bg-gray-50 border border-gray-200"}`}
        >
          <p className={`text-sm ${isDark ? "text-gray-500" : "text-gray-500"}`}>
            No items found in this category.
          </p>
        </motion.div>
      )}
    </div>
  );
}
