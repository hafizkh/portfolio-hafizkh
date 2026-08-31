import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Sparkles, MapPin } from 'lucide-react';
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
      className={`group relative h-full rounded-3xl overflow-hidden transition-all duration-500
        ${isDark
          ? "bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent backdrop-blur-xl border border-white/[0.08]"
          : "bg-gradient-to-br from-white via-gray-50/90 to-white backdrop-blur-xl border border-gray-200/60 shadow-xl shadow-gray-200/40"
        }`}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Animated gradient border on hover */}
      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
        ${isDark
          ? "bg-gradient-to-r from-primary-500/20 via-violet-500/20 to-cyan-500/20"
          : "bg-gradient-to-r from-primary-100 via-violet-100 to-cyan-100"
        }`}
      />

      {/* Animated top accent bar */}
      <div className="relative h-1.5 w-full overflow-hidden">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r
            ${isCertification
              ? "from-violet-500 via-purple-500 to-primary-500"
              : "from-primary-500 via-cyan-500 to-teal-500"
            }`}
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          animate={{ x: ["-200%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
        />
      </div>

      <div className="relative p-6 sm:p-7 flex flex-col h-full">
        {/* Floating particles effect on hover */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <motion.div
            animate={{ y: [-2, 2, -2], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className={`w-4 h-4 ${isDark ? "text-primary-400/50" : "text-primary-500/40"}`} />
          </motion.div>
        </div>

        {/* Header with icon and badge */}
        <div className="flex items-start justify-between mb-5">
          <motion.div
            className={`relative p-4 rounded-2xl overflow-hidden
              ${isCertification
                ? isDark
                  ? "bg-gradient-to-br from-violet-500/30 to-purple-600/20"
                  : "bg-gradient-to-br from-violet-100 to-purple-100"
                : isDark
                  ? "bg-gradient-to-br from-primary-500/30 to-cyan-500/20"
                  : "bg-gradient-to-br from-primary-100 to-cyan-100"
              }`}
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {/* Icon glow effect */}
            <div className={`absolute inset-0 rounded-2xl blur-xl opacity-50
              ${isCertification ? "bg-violet-500/30" : "bg-primary-500/30"}`}
            />
            <div className="relative">
              {icon}
            </div>
          </motion.div>

          {isCertification && (
            <motion.span
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
              className={`px-3 py-1.5 text-xs font-bold rounded-full flex items-center gap-1.5
                ${isDark
                  ? "bg-gradient-to-r from-violet-500/30 to-purple-500/30 text-violet-300 border border-violet-400/30"
                  : "bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 border border-violet-200"
                }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Verified
            </motion.span>
          )}
        </div>

        {/* Title with gradient on hover */}
        <h3 className={`text-xl font-bold mb-3 leading-tight transition-all duration-300
          ${isDark
            ? "text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-violet-400"
            : "text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-violet-600"
          }`}
        >
          {title}
        </h3>

        {/* Institution/Description with icon */}
        <div className={`flex items-center gap-2 mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <p className="text-sm font-medium">{description}</p>
        </div>

        {/* Majors Section - Enhanced */}
        {majors && (
          <motion.div
            className={`p-4 rounded-2xl mb-5 relative overflow-hidden
              ${isDark
                ? "bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.08]"
                : "bg-gradient-to-br from-gray-50 to-white border border-gray-100"
              }`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-1 h-4 rounded-full bg-gradient-to-b
                ${isCertification ? "from-violet-500 to-purple-500" : "from-primary-500 to-cyan-500"}`}
              />
              <span className={`text-xs font-bold uppercase tracking-wider
                ${isDark ? "text-primary-400" : "text-primary-600"}`}
              >
                Focus Areas
              </span>
            </div>
            <p className={`text-sm leading-relaxed pl-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {majors}
            </p>
          </motion.div>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer */}
        <div className="space-y-4">
          {/* Verification Link - Enhanced Button */}
          {verification && (
            <motion.a
              href={verification}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-sm font-bold text-white overflow-hidden
                bg-gradient-to-r from-primary-500 via-violet-500 to-primary-500 bg-[length:200%_100%]
                shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-300`}
              whileHover={{ scale: 1.03, backgroundPosition: "100% 0" }}
              whileTap={{ scale: 0.98 }}
              style={{ backgroundPosition: "0% 0" }}
            >
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
              />
              <ExternalLink className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Verify Credential</span>
            </motion.a>
          )}

          {/* Date - Enhanced */}
          {date && (
            <motion.div
              className={`flex items-center justify-center gap-2 py-2 px-4 rounded-xl mx-auto
                ${isDark
                  ? "bg-white/[0.04] border border-white/[0.06]"
                  : "bg-gray-50 border border-gray-100"
                }`}
              whileHover={{ scale: 1.05 }}
            >
              <Calendar className={`w-4 h-4 ${isDark ? "text-primary-400" : "text-primary-500"}`} />
              <span className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                {date}
              </span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Corner decoration */}
      <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none
        ${isCertification
          ? isDark ? "bg-violet-500/20" : "bg-violet-200/50"
          : isDark ? "bg-primary-500/20" : "bg-primary-200/50"
        }`}
      />
    </motion.div>
  );
}

export default AchievementCard;
