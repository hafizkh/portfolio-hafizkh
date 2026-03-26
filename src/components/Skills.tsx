import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../data/skillsData';
import { useTheme } from '../context/ThemeContext';
import { Sparkles } from 'lucide-react';

// Animated skill bar component
const SkillBar = ({ name, level, delay, icon }: { name: string; level: number; delay: number; icon: React.ReactNode }) => {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={`group flex items-center gap-4 p-3 rounded-xl transition-all duration-300 cursor-default
        ${isDark ? "hover:bg-white/5" : "hover:bg-gray-100"}`}
    >
      <div className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300
        ${isDark
          ? "bg-white/5 text-gray-400 group-hover:text-primary-400 group-hover:bg-primary-500/10"
          : "bg-gray-100 text-gray-500 group-hover:text-primary-600 group-hover:bg-primary-100"
        }`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1.5">
          <span className={`text-sm font-medium transition-colors
            ${isDark ? "text-gray-300 group-hover:text-white" : "text-gray-700 group-hover:text-gray-900"}`}>
            {name}
          </span>
          <span className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>
            {level}%
          </span>
        </div>
        <div className={`h-1.5 rounded-full overflow-hidden ${isDark ? "bg-white/10" : "bg-gray-200"}`}>
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-primary-500 to-violet-500"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${level}%` } : {}}
            transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

// Category card component
const CategoryCard = ({
  skill,
  index,
  isLarge = false
}: {
  skill: typeof skills[0];
  index: number;
  isLarge?: boolean;
}) => {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -5 }}
      className={`
        relative overflow-hidden rounded-3xl p-6
        ${isDark
          ? "bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/20"
          : "bg-gradient-to-br from-white to-gray-50/80 border border-gray-200/60 hover:border-primary-300 shadow-lg shadow-gray-200/50"
        }
        transition-all duration-300
        ${isLarge ? "md:col-span-2" : ""}
      `}
    >
      {/* Background gradient */}
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none
        ${isDark ? "bg-primary-500" : "bg-primary-300"}`}
      />

      {/* Category Header */}
      <div className="flex items-center gap-4 mb-6 relative">
        <motion.div
          className={`p-3 rounded-2xl ${isDark
            ? "bg-gradient-to-br from-primary-500/20 to-violet-500/20 text-primary-400"
            : "bg-gradient-to-br from-primary-100 to-violet-100 text-primary-600"
          }`}
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {skill.icon}
        </motion.div>
        <div>
          <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
            {skill.category}
          </h3>
          <p className={`text-sm ${isDark ? "text-gray-500" : "text-gray-500"}`}>
            {skill.technologies.length} technologies
          </p>
        </div>
      </div>

      {/* Technologies */}
      <div className="space-y-1">
        {skill.technologies.map((tech, techIndex) => (
          <SkillBar
            key={tech.name}
            name={tech.name}
            level={tech.level || 85 + Math.floor(Math.random() * 15)} // Random level between 85-100 if not specified
            delay={techIndex * 0.05}
            icon={tech.icon}
          />
        ))}
      </div>
    </motion.div>
  );
};

function Skills() {
  const { isDark } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      aria-labelledby="skills-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl
          ${isDark ? "bg-primary-500/5" : "bg-primary-500/10"}`}
        />
        <div className={`absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl
          ${isDark ? "bg-violet-500/5" : "bg-violet-500/10"}`}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6
              ${isDark
                ? "bg-white/5 text-primary-400 border border-white/10"
                : "bg-primary-50 text-primary-600 border border-primary-100"
              }`}
          >
            <Sparkles className="w-4 h-4" />
            What I Work With
          </motion.div>

          <h2
            id="skills-heading"
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Technical{" "}
            <span className="gradient-text">Expertise</span>
          </h2>

          <p className={`max-w-2xl mx-auto text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            A comprehensive toolkit spanning frontend, backend, cloud, and security technologies
          </p>
        </motion.div>

        {/* Skills Grid - Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <CategoryCard
              key={skill.category}
              skill={skill}
              index={index}
              isLarge={index === 0 || index === 3} // Make first and fourth cards span 2 columns on md
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Technologies", value: skills.reduce((acc, s) => acc + s.technologies.length, 0) + "+" },
            { label: "Years Experience", value: "4+" },
            { label: "Projects Completed", value: "15+" },
            { label: "Security Labs", value: "10+" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 + i * 0.1 }}
              className={`text-center p-6 rounded-2xl
                ${isDark
                  ? "bg-white/5 border border-white/10"
                  : "bg-white border border-gray-200 shadow-sm"
                }`}
            >
              <div className={`text-3xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                {stat.value}
              </div>
              <div className={`text-sm ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
