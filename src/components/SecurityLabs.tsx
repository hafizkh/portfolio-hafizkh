import { useState, useRef } from "react";
import LabCard from "./securityLabs/LabCard";
import { securityLabs } from "../data/projects";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Shield, Terminal, Lock, Eye } from "lucide-react";

const INITIAL_COUNT = 3;

// Floating security icons for background decoration
const FloatingIcons = () => {
  const { isDark } = useTheme();
  const icons = [
    { Icon: Shield, x: "10%", y: "20%", delay: 0 },
    { Icon: Terminal, x: "85%", y: "15%", delay: 0.5 },
    { Icon: Lock, x: "90%", y: "70%", delay: 1 },
    { Icon: Eye, x: "5%", y: "75%", delay: 1.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute ${isDark ? "text-primary-500/10" : "text-primary-500/5"}`}
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { delay, duration: 0.5 },
            scale: { delay, duration: 0.5 },
            y: { delay: delay + 0.5, duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Icon className="w-16 h-16 md:w-24 md:h-24" />
        </motion.div>
      ))}
    </div>
  );
};

// Stats card component
const StatCard = ({ value, label, delay }: { value: string; label: string; delay: number }) => {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay, duration: 0.5 }}
      className={`text-center p-4 rounded-2xl
        ${isDark
          ? "bg-gradient-to-br from-cyan-500/10 to-primary-500/10 border border-cyan-500/20"
          : "bg-gradient-to-br from-cyan-50 to-primary-50 border border-cyan-200"
        }`}
    >
      <div className={`text-2xl md:text-3xl font-bold mb-1
        ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
        {value}
      </div>
      <div className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>
        {label}
      </div>
    </motion.div>
  );
};

function SecurityLabsSection() {
  const [openLabId, setOpenLabId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const { isDark } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const visibleLabs = showAll
    ? securityLabs
    : securityLabs.slice(0, INITIAL_COUNT);

  const handleToggle = (id: string) => {
    setOpenLabId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="security-labs"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      aria-labelledby="security-labs-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl
          ${isDark ? "bg-cyan-500/5" : "bg-cyan-500/10"}`}
        />
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl
          ${isDark ? "bg-primary-500/5" : "bg-primary-500/10"}`}
        />
      </div>

      <FloatingIcons />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Section Header - Bento style */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Main header card */}
          <motion.div
            className={`lg:col-span-2 p-8 rounded-3xl relative overflow-hidden
              ${isDark
                ? "bg-gradient-to-br from-cyan-500/10 to-primary-500/5 border border-cyan-500/20"
                : "bg-gradient-to-br from-cyan-50 to-primary-50 border border-cyan-200 shadow-lg"
              }`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none bg-cyan-500" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4
                ${isDark
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                  : "bg-cyan-100 text-cyan-700 border border-cyan-200"
                }`}
            >
              <Shield className="w-4 h-4" />
              Wazuh Ambassador - Finland
            </motion.div>

            <h2
              id="security-labs-heading"
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Wazuh <span className="gradient-text">SIEM Labs</span>
            </h2>

            <p className={`text-lg max-w-xl ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Hands-on security labs and walkthroughs demonstrating enterprise-grade threat detection and security monitoring with Wazuh SIEM platform.
            </p>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <StatCard value={`${securityLabs.length}+`} label="Labs Created" delay={0.4} />
            <StatCard value="100+" label="Security Rules" delay={0.5} />
            <StatCard value="5+" label="Attack Scenarios" delay={0.6} />
            <StatCard value="24/7" label="Monitoring" delay={0.7} />
          </motion.div>
        </div>

        {/* Labs Grid - Modern cards */}
        <div className="space-y-4">
          {visibleLabs.map((lab, index) => (
            <LabCard
              key={lab.id}
              lab={lab}
              index={index}
              isOpen={openLabId === lab.id}
              onToggle={() => handleToggle(lab.id)}
            />
          ))}
        </div>

        {/* See More / Show Less */}
        {securityLabs.length > INITIAL_COUNT && (
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={() => {
                setShowAll((prev) => !prev);
                if (showAll) setOpenLabId(null);
              }}
              className={`group px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden
                ${isDark
                  ? "bg-gradient-to-r from-cyan-500/20 to-primary-500/20 text-white border border-cyan-500/30 hover:border-cyan-400"
                  : "bg-gradient-to-r from-cyan-100 to-primary-100 text-gray-800 border border-cyan-200 hover:border-cyan-300"
                }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {showAll ? (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                    Show Less
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    See More ({securityLabs.length - INITIAL_COUNT} more labs)
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default SecurityLabsSection;
