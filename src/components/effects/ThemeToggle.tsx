import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
      style={{
        background: isDark
          ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
          : 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
      }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Track background glow */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-50"
        animate={{
          boxShadow: isDark
            ? '0 0 15px rgba(99, 102, 241, 0.3)'
            : '0 0 15px rgba(99, 102, 241, 0.2)',
        }}
      />

      {/* Sliding circle */}
      <motion.div
        className="relative w-5 h-5 rounded-full flex items-center justify-center"
        animate={{
          x: isDark ? 0 : 28,
          backgroundColor: isDark ? '#818cf8' : '#ffffff',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {/* Icon */}
        <motion.div
          animate={{ rotate: isDark ? 0 : 360 }}
          transition={{ duration: 0.5 }}
        >
          {isDark ? (
            <Moon className="w-3 h-3 text-white" />
          ) : (
            <Sun className="w-3 h-3 text-yellow-500" />
          )}
        </motion.div>
      </motion.div>

      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
        <Moon className={`w-3 h-3 transition-opacity ${isDark ? 'opacity-0' : 'opacity-30 text-gray-600'}`} />
        <Sun className={`w-3 h-3 transition-opacity ${isDark ? 'opacity-30 text-gray-400' : 'opacity-0'}`} />
      </div>
    </motion.button>
  );
}
