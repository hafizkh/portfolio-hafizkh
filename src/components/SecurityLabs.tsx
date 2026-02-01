import { useState } from "react";
import LabCard from "./securityLabs/LabCard";
import { securityLabs } from "../data/projects";
import { SecurityLab } from "../types/project";
import { motion, AnimatePresence } from "framer-motion";
import StaggerContainer, { staggerItem } from "./effects/StaggerContainer";
import { useTheme } from "../context/ThemeContext";
import LabDetails from "./securityLabs/LabDetails";

const INITIAL_COUNT = 3;

function SecurityLabsSection() {
  const [selectedLab, setSelectedLab] = useState<SecurityLab | null>(null);
  const [showAll, setShowAll] = useState(false);
  const { isDark } = useTheme();

  const visibleLabs = showAll ? securityLabs : securityLabs.slice(0, INITIAL_COUNT);

  const handleOpenModal = (lab: SecurityLab) => {
    setSelectedLab(lab);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedLab(null);
    document.body.style.overflow = "auto";
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

        <AnimatePresence mode="wait">
          <StaggerContainer
            key={showAll ? "all" : "initial"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visibleLabs.map((lab) => (
              <motion.div key={lab.id} variants={staggerItem}>
                <LabCard
                  lab={lab}
                  onOpenModal={() => handleOpenModal(lab)}
                />
              </motion.div>
            ))}
          </StaggerContainer>
        </AnimatePresence>

        {securityLabs.length > INITIAL_COUNT && (
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={() => setShowAll((prev) => !prev)}
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

      {/* Modal */}
      <AnimatePresence>
        {selectedLab && (
          <motion.div
            key="modal-backdrop"
            className={`fixed inset-0 z-50 backdrop-blur-md flex justify-center items-center px-4 sm:px-6 ${
              isDark ? "bg-dark-900/80" : "bg-gray-900/50"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="glass-card shadow-2xl w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl p-6 relative"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={handleCloseModal}
                className={`absolute top-4 right-4 w-10 h-10 rounded-full glass-card flex items-center justify-center transition-all z-50 ${
                  isDark
                    ? "text-gray-400 hover:text-white hover:bg-white/10"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
                aria-label="Close Modal"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              {/* Modal Content */}
              <div className="overflow-y-auto max-h-[85vh] pr-2 custom-scrollbar">
                <LabDetails lab={selectedLab} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default SecurityLabsSection;
