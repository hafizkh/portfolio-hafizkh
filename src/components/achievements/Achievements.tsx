import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import EducationCertifications from './EducationCertifications';
import { useTheme } from '../../context/ThemeContext';
import { GraduationCap, Award } from 'lucide-react';

export default function Achievements() {
  const { isDark } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-24 mt-12 relative overflow-hidden"
      aria-labelledby="achievements-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl
          ${isDark ? "bg-violet-500/5" : "bg-violet-500/10"}`}
        />
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl
          ${isDark ? "bg-primary-500/5" : "bg-primary-500/10"}`}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Section Header - Bento style */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          {/* Main header */}
          <motion.div
            className={`lg:col-span-3 p-8 rounded-3xl relative overflow-hidden
              ${isDark
                ? "bg-gradient-to-br from-violet-500/10 to-primary-500/5 border border-violet-500/20"
                : "bg-gradient-to-br from-violet-50 to-primary-50 border border-violet-200 shadow-lg"
              }`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none bg-violet-500" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4
                ${isDark
                  ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                  : "bg-violet-100 text-violet-700 border border-violet-200"
                }`}
            >
              <GraduationCap className="w-4 h-4" />
              Learning & Growth
            </motion.div>

            <h2
              id="achievements-heading"
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Education & <span className="gradient-text">Certifications</span>
            </h2>

            <p className={`text-lg max-w-xl ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Academic achievements and professional certifications that validate my expertise.
            </p>
          </motion.div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={`p-6 rounded-3xl flex flex-col justify-center
              ${isDark
                ? "bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10"
                : "bg-gradient-to-br from-white to-gray-50/80 border border-gray-200/60 shadow-lg"
              }`}
          >
            <div className="flex items-center justify-center mb-4">
              <div className={`p-4 rounded-2xl
                ${isDark ? "bg-violet-500/20" : "bg-violet-100"}`}>
                <Award className={`w-8 h-8 ${isDark ? "text-violet-400" : "text-violet-600"}`} />
              </div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                10+
              </div>
              <div className={`text-sm ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                Certifications Earned
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education & Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <EducationCertifications />
        </motion.div>
      </div>
    </section>
  );
}
