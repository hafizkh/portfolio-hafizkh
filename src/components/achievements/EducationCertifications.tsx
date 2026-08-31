import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AchievementCard from './AchievementCard';
import { educationAchievements } from '../../data/educationalAchie';
import { useTheme } from '../../context/ThemeContext';
import { GraduationCap, Award, Layers, Sparkles } from 'lucide-react';

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

  const tabs: { key: View; label: string; icon: React.ReactNode; count: number; color: string }[] = [
    {
      key: 'education',
      label: 'Education',
      icon: <GraduationCap className="w-4 h-4" />,
      count: educationAchievements.filter((a) => !a.verification).length,
      color: 'from-primary-500 to-cyan-500',
    },
    {
      key: 'certifications',
      label: 'Certifications',
      icon: <Award className="w-4 h-4" />,
      count: educationAchievements.filter((a) => a.verification).length,
      color: 'from-violet-500 to-purple-500',
    },
    {
      key: 'all',
      label: 'All',
      icon: <Layers className="w-4 h-4" />,
      count: educationAchievements.length,
      color: 'from-primary-500 to-violet-500',
    },
  ];

  const activeTab = tabs.find(t => t.key === view);

  return (
    <div className="space-y-10">
      {/* Enhanced Toggle Buttons */}
      <div className="flex justify-center px-4">
        <motion.div
          className={`relative inline-flex items-center gap-2 p-2 rounded-2xl w-full sm:w-auto overflow-x-auto scrollbar-hide
            ${isDark
              ? "bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.1] shadow-2xl shadow-black/20"
              : "bg-gradient-to-br from-white to-gray-50 backdrop-blur-xl border border-gray-200/60 shadow-xl shadow-gray-200/50"
            }`}
          role="tablist"
          aria-label="Filter education and certifications"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated glow behind active tab */}
          <AnimatePresence>
            {activeTab && (
              <motion.div
                layoutId="tabGlow"
                className={`absolute inset-0 rounded-2xl blur-xl opacity-30 bg-gradient-to-r ${activeTab.color}`}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </AnimatePresence>

          {tabs.map((tab) => (
            <motion.button
              key={tab.key}
              onClick={() => setView(tab.key)}
              role="tab"
              aria-selected={view === tab.key}
              aria-controls={`tabpanel-${tab.key}`}
              className={`relative flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 flex-1 sm:flex-none min-w-0 touch-manipulation
                ${view === tab.key
                  ? 'text-white'
                  : isDark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              whileHover={{ scale: view === tab.key ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {view === tab.key && (
                <motion.div
                  layoutId="activeTabBg"
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${tab.color} shadow-lg`}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  {/* Shine effect on active tab */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                  />
                </motion.div>
              )}

              <span className="relative z-10 flex items-center gap-2">
                <motion.span
                  animate={view === tab.key ? { rotate: [0, -10, 10, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {tab.icon}
                </motion.span>
                <span className="hidden sm:inline">{tab.label}</span>
                <motion.span
                  className={`text-xs px-2 py-0.5 rounded-full font-bold
                    ${view === tab.key
                      ? 'bg-white/25 text-white'
                      : isDark
                        ? 'bg-white/10 text-gray-400'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  animate={view === tab.key ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {tab.count}
                </motion.span>
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Category indicator */}
      <motion.div
        className="flex items-center justify-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className={`h-px flex-1 max-w-24 bg-gradient-to-r from-transparent ${isDark ? 'to-white/20' : 'to-gray-300'}`} />
        <motion.div
          key={view}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium
            ${isDark
              ? "bg-white/5 text-gray-400 border border-white/10"
              : "bg-gray-100 text-gray-500 border border-gray-200"
            }`}
        >
          <Sparkles className="w-3 h-3" />
          <span>Showing {items.length} {view === 'all' ? 'items' : view}</span>
        </motion.div>
        <div className={`h-px flex-1 max-w-24 bg-gradient-to-l from-transparent ${isDark ? 'to-white/20' : 'to-gray-300'}`} />
      </motion.div>

      {/* Grid with staggered animations */}
      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
            >
              <AchievementCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {items.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`text-center py-16 rounded-3xl
            ${isDark
              ? "bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08]"
              : "bg-gradient-to-br from-gray-50 to-white border border-gray-100"
            }`}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center
              ${isDark ? "bg-white/10" : "bg-gray-100"}`}
          >
            <Layers className={`w-8 h-8 ${isDark ? "text-gray-500" : "text-gray-400"}`} />
          </motion.div>
          <p className={`text-sm ${isDark ? "text-gray-500" : "text-gray-500"}`}>
            No items found in this category.
          </p>
        </motion.div>
      )}
    </div>
  );
}
