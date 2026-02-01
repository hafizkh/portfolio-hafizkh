import { useState } from "react";
import LabCard from "./securityLabs/LabCard";
import { securityLabs } from "../data/projects";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const INITIAL_COUNT = 3;

function SecurityLabsSection() {
  const [openLabId, setOpenLabId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const { isDark } = useTheme();

  const visibleLabs = showAll
    ? securityLabs
    : securityLabs.slice(0, INITIAL_COUNT);

  const handleToggle = (id: string) => {
    setOpenLabId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="security-labs" className="py-24 section-gradient relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className={`inline-block px-4 py-2 rounded-full glass-card text-sm mb-4 ${
              isDark ? "text-primary-400" : "text-primary-600"
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Wazuh Ambassador - Finland
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Wazuh SIEM Labs
          </h2>
          <p
            className={`mt-4 max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Hands-on security labs and walkthroughs built with Wazuh SIEM
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={() => {
                setShowAll((prev) => !prev);
                if (showAll) setOpenLabId(null);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 glass-card ${
                isDark
                  ? "text-gray-400 hover:text-white hover:border-primary-500/30"
                  : "text-gray-600 hover:text-gray-900 hover:border-primary-500/30"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll
                ? "Show Less"
                : `See More (${securityLabs.length - INITIAL_COUNT} more)`}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default SecurityLabsSection;
