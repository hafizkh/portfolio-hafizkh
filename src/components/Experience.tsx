import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Briefcase, ArrowUpRight } from 'lucide-react';
import { experiences } from '../data/experience';
import Achievements from './achievements/Achievements';
import { useTheme } from '../context/ThemeContext';

// Timeline dot with pulse animation
const TimelineDot = ({ isFirst }: { isFirst: boolean }) => {
  const { isDark } = useTheme();

  return (
    <div className="absolute left-0 top-3 -translate-x-1/2 z-10">
      <motion.div
        className={`w-4 h-4 rounded-full border-4 transition-colors
          ${isDark
            ? "bg-dark-900 border-primary-500"
            : "bg-white border-primary-500"
          }`}
        animate={isFirst ? {
          boxShadow: [
            '0 0 0 0 rgba(99, 102, 241, 0.4)',
            '0 0 0 12px rgba(99, 102, 241, 0)',
          ],
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  );
};

// Experience card component
const ExperienceCard = ({
  exp,
  index,
}: {
  exp: typeof experiences[0];
  index: number;
}) => {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative pl-10 pb-12 last:pb-0"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      {/* Timeline line */}
      <div className={`absolute left-0 top-0 h-full w-px
        ${isDark
          ? "bg-gradient-to-b from-primary-500 via-violet-500 to-primary-500/20"
          : "bg-gradient-to-b from-primary-500 via-violet-500 to-primary-200"
        }`}
      />

      <TimelineDot isFirst={index === 0} />

      {/* Card */}
      <motion.div
        className={`p-6 rounded-2xl transition-all duration-300
          ${isDark
            ? "bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-primary-500/30"
            : "bg-gradient-to-br from-white to-gray-50/80 border border-gray-200/60 hover:border-primary-300 shadow-lg"
          }`}
        whileHover={{ x: 5, y: -2 }}
        transition={{ duration: 0.2 }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div className="flex-1">
            <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {exp.position}
            </h3>
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <motion.img
                  src={exp.icon}
                  alt={`${exp.company} logo`}
                  className={`w-6 h-6 rounded-md object-contain mr-2 ${isDark ? 'bg-white/5 p-0.5' : 'bg-gray-100 p-0.5'}`}
                  whileHover={{ scale: 1.1 }}
                />
                <span className={`font-medium text-sm ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>
                  {exp.company}
                </span>
              </div>
            </div>
          </div>

          <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium
            ${isDark
              ? "bg-primary-500/10 text-primary-400 border border-primary-500/20"
              : "bg-primary-50 text-primary-600 border border-primary-100"
            }`}
          >
            <Calendar className="w-3 h-3 mr-1.5" />
            {exp.period}
          </div>
        </div>

        {/* Description */}
        <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {exp.description}
        </p>

        {/* Achievements */}
        <div className={`p-4 rounded-xl ${isDark ? "bg-white/5" : "bg-gray-50"}`}>
          <h4 className={`text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2
            ${isDark ? "text-gray-500" : "text-gray-500"}`}>
            <ArrowUpRight className="w-3 h-3" />
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {exp.achievements.map((achievement, i) => (
              <motion.li
                key={i}
                className={`flex items-start text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <span className={`inline-block w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0
                  ${isDark ? "bg-gradient-to-r from-primary-500 to-violet-500" : "bg-primary-500"}`}
                />
                {achievement}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

function Experience() {
  const { isDark } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      aria-labelledby="experience-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl
          ${isDark ? "bg-primary-500/5" : "bg-primary-500/10"}`}
        />
        <div className={`absolute bottom-1/4 left-0 w-96 h-96 rounded-full blur-3xl
          ${isDark ? "bg-violet-500/5" : "bg-violet-500/10"}`}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Main header */}
          <motion.div
            className={`lg:col-span-2 p-8 rounded-3xl relative overflow-hidden
              ${isDark
                ? "bg-gradient-to-br from-primary-500/10 to-violet-500/5 border border-primary-500/20"
                : "bg-gradient-to-br from-primary-50 to-violet-50 border border-primary-200 shadow-lg"
              }`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none bg-primary-500" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4
                ${isDark
                  ? "bg-primary-500/20 text-primary-400 border border-primary-500/30"
                  : "bg-primary-100 text-primary-700 border border-primary-200"
                }`}
            >
              <Briefcase className="w-4 h-4" />
              My Journey
            </motion.div>

            <h2
              id="experience-heading"
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Professional <span className="gradient-text">Experience</span>
            </h2>

            <p className={`text-lg max-w-xl ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              A timeline of my professional growth, from software development to cybersecurity.
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
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className={`text-3xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                  4+
                </div>
                <div className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                  {experiences.length}
                </div>
                <div className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                  Positions
                </div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold mb-1 ${isDark ? "text-primary-400" : "text-primary-600"}`}>
                  15+
                </div>
                <div className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold mb-1 ${isDark ? "text-violet-400" : "text-violet-600"}`}>
                  5+
                </div>
                <div className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                  Companies
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <Achievements />
    </section>
  );
}

export default Experience;
