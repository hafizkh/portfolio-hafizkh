import { motion } from 'framer-motion';
import hafizPic from '../assets/pichafiz.png';
import { socialLinks } from '../data/socialIcons';
import TypeWriter from './effects/TypeWriter';
import MagneticButton from './effects/MagneticButton';
import { useTheme } from '../context/ThemeContext';

// Floating shapes component for background decoration - professional, subtle
const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute w-72 h-72 rounded-full opacity-15"
      style={{
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
        top: '10%',
        left: '5%',
      }}
      animate={{
        x: [0, 20, 0],
        y: [0, -15, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute w-64 h-64 rounded-full opacity-12"
      style={{
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
        top: '60%',
        right: '10%',
      }}
      animate={{
        x: [0, -15, 0],
        y: [0, 20, 0],
        scale: [1, 0.95, 1],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
    />
    <motion.div
      className="absolute w-48 h-48 rounded-full opacity-10"
      style={{
        background: 'radial-gradient(circle, rgba(100, 116, 139, 0.2) 0%, transparent 70%)',
        bottom: '20%',
        left: '15%',
      }}
      animate={{
        x: [0, 15, 0],
        y: [0, -10, 0],
      }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
    />
  </div>
);

function Hero() {
  const { isDark } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 pt-32 overflow-hidden">
      <FloatingShapes />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Section - Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Available for work</span>
            </motion.div>

            {/* Name with gradient */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className={isDark ? 'text-white' : 'text-gray-900'}>Hello, I'm </span>
              <span className="gradient-text-animated">Hafiz</span>
            </motion.h1>

            {/* Typing Effect Title */}
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 h-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <TypeWriter
                texts={[
                  'Full Stack Developer',
                  'React Specialist',
                  'Backend Engineer',
                  'Cloud Enthusiast',
                ]}
                className={isDark ? 'text-primary-400' : 'text-primary-600'}
              />
            </motion.h2>

            {/* Description */}
            <motion.p
              className={`text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Passionate about building dynamic and user-friendly web solutions that make a
              difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <MagneticButton to="contact" variant="primary">
                Hire Me
              </MagneticButton>
              <MagneticButton to="projects" variant="outline">
                View Projects
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-6 mt-10 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl md:text-3xl transition-all duration-300 ${
                    isDark ? 'text-gray-400 hover:text-primary-400' : 'text-gray-500 hover:text-primary-600'
                  }`}
                  aria-label={link.label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Section - Profile Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative">
              {/* Animated glow ring - subtle professional */}
              <motion.div
                className="absolute -inset-4 rounded-full opacity-40"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(99, 102, 241, 0.4), rgba(139, 92, 246, 0.3), rgba(99, 102, 241, 0.3))',
                  filter: 'blur(30px)',
                }}
                animate={{
                  rotate: 360,
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  rotate: { duration: 12, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
              />

              {/* Rotating border - professional blue gradient */}
              <motion.div
                className="absolute -inset-1 rounded-full"
                style={{
                  background:
                    'linear-gradient(135deg, #4f46e5, #6366f1, #8b5cf6, #4f46e5)',
                  padding: '3px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                <div className={`w-full h-full rounded-full ${isDark ? 'bg-dark-900' : 'bg-light-100'}`} />
              </motion.div>

              {/* Profile Image */}
              <motion.img
                src={hafizPic}
                alt="Portrait of Hafiz"
                className={`relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover object-top border-4 ${
                  isDark ? 'border-dark-800' : 'border-light-200'
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating decoration elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 rounded-xl glass-card flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-6 w-14 h-14 rounded-xl glass-card flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <span className="text-2xl">💻</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 w-10 h-10 rounded-lg glass-card flex items-center justify-center"
                animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              >
                <span className="text-lg">⚡</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className={`w-6 h-10 rounded-full border-2 flex justify-center pt-2 ${
            isDark ? 'border-white/20' : 'border-gray-300'
          }`}
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className={`w-1 h-2 rounded-full ${isDark ? 'bg-primary-400' : 'bg-primary-500'}`}
            animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
