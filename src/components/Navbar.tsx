import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems, socialLinks } from '../data/socialIcons';
import { useLocation } from 'react-router-dom';
import ThemeToggle from './effects/ThemeToggle';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const hideLogoProjectDetail = location.pathname.startsWith('/project/');
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? isDark
              ? 'py-3 bg-dark-900/80 backdrop-blur-xl border-b border-white/10'
              : 'py-3 bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div>
              {!hideLogoProjectDetail && (
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="flex items-center space-x-3 group cursor-pointer"
                  onSetActive={() => setActiveSection('hero')}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className={`relative w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg overflow-hidden
                      ${isDark
                        ? "bg-gradient-to-br from-primary-500 to-violet-600 text-white"
                        : "bg-gradient-to-br from-primary-500 to-violet-600 text-white"
                      }`}
                  >
                    HK
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                  <motion.span
                    className={`hidden sm:block font-semibold text-lg transition-colors duration-300
                      ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    Hafiz<span className="text-primary-500">.</span>
                  </motion.span>
                </Link>
              )}
            </div>

            {/* Desktop Menu - Pill style */}
            <div className="hidden md:flex items-center">
              <div className={`flex items-center gap-1 p-1.5 rounded-full
                ${isDark
                  ? "bg-white/5 border border-white/10"
                  : "bg-gray-100 border border-gray-200"
                }`}>
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onSetActive={() => setActiveSection(item.to)}
                    className={`relative cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                      ${activeSection === item.to
                        ? isDark
                          ? 'text-white'
                          : 'text-white'
                        : isDark
                          ? 'text-gray-400 hover:text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    {activeSection === item.to && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gradient-to-r from-primary-500 to-violet-500 rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side - Theme toggle & CTA */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-violet-500 hover:from-primary-600 hover:to-violet-600 shadow-lg shadow-primary-500/25 transition-all duration-300"
                >
                  Let's Talk
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2.5 rounded-xl transition-all duration-300 relative z-[60]
                  ${isDark
                    ? "text-white bg-white/5 hover:bg-white/10 border border-white/10"
                    : "text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200"
                  }`}
                whileTap={{ scale: 0.95 }}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={22} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] md:hidden"
            onClick={() => setIsOpen(false)}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute inset-0 ${isDark ? "bg-dark-900/95" : "bg-white/95"} backdrop-blur-xl`}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative h-full flex flex-col pt-24 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation Links */}
              <nav className="flex-1">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group
                          ${isDark
                            ? "text-gray-300 hover:bg-white/5 hover:text-white active:bg-white/10"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 active:bg-gray-200"
                          }`}
                      >
                        <span className={`text-xl transition-transform duration-300 group-hover:scale-110
                          ${isDark ? "text-primary-400" : "text-primary-500"}`}>
                          {item.icon}
                        </span>
                        <span className="text-lg font-medium">{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* Bottom Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`py-6 border-t ${isDark ? "border-white/10" : "border-gray-200"}`}
              >
                {/* CTA Button */}
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block cursor-pointer"
                >
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-2xl text-lg font-semibold text-white bg-gradient-to-r from-primary-500 to-violet-500 shadow-lg shadow-primary-500/25"
                  >
                    Let's Talk
                  </motion.button>
                </Link>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-6">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl text-xl transition-all duration-300
                        ${isDark
                          ? "text-gray-400 bg-white/5 hover:text-white hover:bg-white/10"
                          : "text-gray-500 bg-gray-100 hover:text-gray-900 hover:bg-gray-200"
                        }`}
                      aria-label={link.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
