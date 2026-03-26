import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';
import { AchievementCardProps } from '../../types/project';
import { useTheme } from '../../context/ThemeContext';

function AchievementCard({
  icon,
  title,
  description,
  date,
  verification,
  majors,
}: AchievementCardProps) {
  const { isDark } = useTheme();
  const isCertification = !!verification;

  return (
    <motion.div
      className={`group relative h-full rounded-2xl overflow-hidden transition-all duration-300
        ${isDark
          ? "bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-primary-500/30"
          : "bg-gradient-to-br from-white to-gray-50/80 border border-gray-200/60 hover:border-primary-300 shadow-lg"
        }`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top accent bar */}
      <div className={`h-1 w-full bg-gradient-to-r
        ${isCertification
          ? "from-violet-500 to-primary-500"
          : "from-primary-500 to-cyan-500"
        }`}
      />

      <div className="p-6 flex flex-col h-full">
        {/* Header with icon and badge */}
        <div className="flex items-start justify-between mb-4">
          <motion.div
            className={`p-3 rounded-xl
              ${isCertification
                ? isDark
                  ? "bg-violet-500/20 text-violet-400"
                  : "bg-violet-100 text-violet-600"
                : isDark
                  ? "bg-primary-500/20 text-primary-400"
                  : "bg-primary-100 text-primary-600"
              }`}
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.div>

          {isCertification && (
            <span className={`px-2.5 py-1 text-xs font-medium rounded-full
              ${isDark
                ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                : "bg-violet-100 text-violet-600 border border-violet-200"
              }`}
            >
              Certified
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className={`text-lg font-bold mb-2 line-clamp-2 transition-colors
          ${isDark
            ? "text-white group-hover:text-primary-400"
            : "text-gray-900 group-hover:text-primary-600"
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p className={`text-sm mb-4 line-clamp-3 flex-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {description}
        </p>

        {/* Majors Section */}
        {majors && (
          <div className={`p-3 rounded-xl mb-4
            ${isDark ? "bg-white/5" : "bg-gray-50"}`}
          >
            <span className={`text-xs font-semibold uppercase tracking-wider
              ${isDark ? "text-primary-400" : "text-primary-600"}`}
            >
              Majors
            </span>
            <p className={`text-sm mt-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {majors}
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto space-y-3">
          {/* Verification Link */}
          {verification && (
            <motion.a
              href={verification}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white
                bg-gradient-to-r from-primary-500 to-violet-500 hover:from-primary-600 hover:to-violet-600
                shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-4 h-4" />
              Verify Credential
            </motion.a>
          )}

          {/* Date */}
          {date && (
            <div className={`flex items-center justify-center gap-2 text-xs
              ${isDark ? "text-gray-500" : "text-gray-500"}`}
            >
              <Calendar className="w-3 h-3" />
              {date}
            </div>
          )}
        </div>
      </div>

      {/* Hover glow effect */}
      <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100
        ${isDark
          ? "shadow-[inset_0_0_60px_rgba(99,102,241,0.1)]"
          : "shadow-[inset_0_0_60px_rgba(99,102,241,0.05)]"
        }`}
      />
    </motion.div>
  );
}

export default AchievementCard;
