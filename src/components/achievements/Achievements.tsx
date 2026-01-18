import { motion } from 'framer-motion';
import EducationCertifications from './EducationCertifications';

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 mt-12 relative"
      style={{
        background:
          'linear-gradient(180deg, rgba(26, 26, 46, 1) 0%, rgba(30, 20, 50, 1) 50%, rgba(26, 26, 46, 1) 100%)',
      }}
    >
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
            className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary-400 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Learning & Growth
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Education & Certifications
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Academic achievements and professional certifications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <EducationCertifications />
        </motion.div>
      </div>
    </section>
  );
}
