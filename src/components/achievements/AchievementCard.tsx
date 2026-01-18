import { motion } from 'framer-motion';
import { AchievementCardProps } from '../../types/project';
import TiltCard from '../effects/TiltCard';
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

  return (
    <TiltCard tiltAmount={6}>
      <motion.div
        className="glass-card-hover p-6 h-full flex flex-col"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Icon Section */}
        <motion.div
          className={`flex justify-center items-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-cyan/20 mb-5 mx-auto ${
            isDark ? 'text-primary-400' : 'text-primary-600'
          }`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3 className={`text-lg font-semibold text-center mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>{title}</h3>

        {/* Description */}
        <p className={`text-sm text-center mb-4 leading-relaxed flex-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {description}
        </p>

        {/* Majors Section */}
        {majors && (
          <div className="glass-card py-3 px-4 text-center mb-4">
            <span className={`font-medium text-sm ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>Majors:</span>
            <span className={`block text-xs mt-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{majors}</span>
          </div>
        )}

        {/* Verification Link */}
        {verification && (
          <motion.a
            href={verification}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2.5 px-4 rounded-lg bg-gradient-to-r from-primary-500 to-accent-cyan text-white text-center text-sm font-medium hover:shadow-glow transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Verify Certification
          </motion.a>
        )}

        {/* Date */}
        {date && <p className={`text-xs text-center mt-4 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{date}</p>}

        {/* Divider Line */}
        <motion.div
          className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan mx-auto mt-4 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </TiltCard>
  );
}

export default AchievementCard;
