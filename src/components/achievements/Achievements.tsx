import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import EducationCertifications from './EducationCertifications';
import { useTheme } from '../../context/ThemeContext';
import { GraduationCap, Award, BookOpen, Trophy } from 'lucide-react';

// Floating icon component
const FloatingIcon = ({
  icon: Icon,
  className,
  delay = 0,
}: {
  icon: React.ElementType;
  className: string;
  delay?: number;
}) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className={`p-3 rounded-2xl backdrop-blur-sm
          ${isDark
            ? "bg-white/[0.05] border border-white/[0.1]"
            : "bg-white/80 border border-gray-200/50 shadow-lg"
          }`}
      >
        <Icon className={`w-5 h-5 ${isDark ? "text-primary-400/60" : "text-primary-500/50"}`} />
      </motion.div>
    </motion.div>
  );
};

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
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl
            ${isDark ? "bg-violet-500/[0.07]" : "bg-violet-500/[0.12]"}`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl
            ${isDark ? "bg-primary-500/[0.07]" : "bg-primary-500/[0.12]"}`}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl
            ${isDark ? "bg-cyan-500/[0.04]" : "bg-cyan-500/[0.08]"}`}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid pattern */}
        <div
          className={`absolute inset-0 ${isDark ? "opacity-[0.02]" : "opacity-[0.03]"}`}
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? 'white' : 'black'} 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Floating icons */}
      {isInView && (
        <>
          <FloatingIcon icon={BookOpen} className="top-20 left-[10%] hidden lg:block" delay={0.5} />
          <FloatingIcon icon={Trophy} className="top-40 right-[8%] hidden lg:block" delay={0.7} />
          <FloatingIcon icon={Award} className="bottom-40 left-[5%] hidden lg:block" delay={0.9} />
          <FloatingIcon icon={GraduationCap} className="bottom-20 right-[12%] hidden lg:block" delay={1.1} />
        </>
      )}

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Section Header - Enhanced Bento style */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-16">
          {/* Main header card */}
          <motion.div
            className={`lg:col-span-3 p-8 sm:p-10 rounded-3xl relative overflow-hidden
              ${isDark
                ? "bg-gradient-to-br from-violet-500/[0.12] via-primary-500/[0.08] to-transparent backdrop-blur-xl border border-violet-500/20"
                : "bg-gradient-to-br from-violet-50 via-primary-50 to-white backdrop-blur-xl border border-violet-200/60 shadow-2xl shadow-violet-200/30"
              }`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative elements */}
            <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none
              ${isDark ? "bg-violet-500/20" : "bg-violet-300/30"}`}
            />
            <div className={`absolute bottom-0 left-0 w-60 h-60 rounded-full blur-3xl pointer-events-none
              ${isDark ? "bg-primary-500/10" : "bg-primary-200/30"}`}
            />

            {/* Animated lines */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl pointer-events-none">
              <motion.div
                className={`absolute top-0 left-1/4 w-px h-full
                  ${isDark ? "bg-gradient-to-b from-transparent via-violet-500/20 to-transparent" : "bg-gradient-to-b from-transparent via-violet-300/30 to-transparent"}`}
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className={`absolute top-0 right-1/3 w-px h-full
                  ${isDark ? "bg-gradient-to-b from-transparent via-primary-500/20 to-transparent" : "bg-gradient-to-b from-transparent via-primary-300/30 to-transparent"}`}
                animate={{ y: ["100%", "-100%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold mb-6
                  ${isDark
                    ? "bg-gradient-to-r from-violet-500/20 to-primary-500/20 text-violet-300 border border-violet-400/30 shadow-lg shadow-violet-500/10"
                    : "bg-gradient-to-r from-violet-100 to-primary-100 text-violet-700 border border-violet-200 shadow-lg shadow-violet-200/50"
                  }`}
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <GraduationCap className="w-4 h-4" />
                </motion.span>
                Learning & Growth
              </motion.div>

              <motion.h2
                id="achievements-heading"
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight ${isDark ? "text-white" : "text-gray-900"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                Education &{' '}
                <span className="relative inline-block">
                  <span className="gradient-text">Certifications</span>
                  <motion.span
                    className={`absolute -bottom-2 left-0 h-1 rounded-full bg-gradient-to-r from-violet-500 to-primary-500`}
                    initial={{ width: "0%" }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </span>
              </motion.h2>

              <motion.p
                className={`text-lg sm:text-xl max-w-xl leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                Academic achievements and professional certifications that validate my expertise in technology and innovation.
              </motion.p>
            </div>
          </motion.div>

          {/* Stats card - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className={`p-6 sm:p-8 rounded-3xl flex flex-col justify-center relative overflow-hidden
              ${isDark
                ? "bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent backdrop-blur-xl border border-white/10"
                : "bg-gradient-to-br from-white via-gray-50/90 to-white backdrop-blur-xl border border-gray-200/60 shadow-2xl shadow-gray-200/50"
              }`}
          >
            {/* Animated ring */}
            <motion.div
              className={`absolute inset-4 rounded-2xl border-2 border-dashed
                ${isDark ? "border-violet-500/20" : "border-violet-300/30"}`}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10">
              <motion.div
                className="flex items-center justify-center mb-5"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className={`relative p-5 rounded-2xl
                    ${isDark
                      ? "bg-gradient-to-br from-violet-500/30 to-purple-600/20"
                      : "bg-gradient-to-br from-violet-100 to-purple-100"
                    }`}
                  animate={{
                    boxShadow: isDark
                      ? ["0 0 0 0 rgba(139, 92, 246, 0)", "0 0 30px 10px rgba(139, 92, 246, 0.2)", "0 0 0 0 rgba(139, 92, 246, 0)"]
                      : ["0 0 0 0 rgba(139, 92, 246, 0)", "0 0 30px 10px rgba(139, 92, 246, 0.15)", "0 0 0 0 rgba(139, 92, 246, 0)"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Award className={`w-10 h-10 ${isDark ? "text-violet-400" : "text-violet-600"}`} />
                </motion.div>
              </motion.div>

              <div className="text-center">
                <motion.div
                  className={`text-5xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                >
                  <span className="gradient-text">10+</span>
                </motion.div>
                <motion.div
                  className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  Certifications Earned
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education & Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <EducationCertifications />
        </motion.div>
      </div>
    </section>
  );
}
