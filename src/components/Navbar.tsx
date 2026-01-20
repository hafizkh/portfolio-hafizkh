import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo 3.png';
import { navItems, socialLinks } from '../data/socialIcons';
import { useLocation } from 'react-router-dom';
import ThemeToggle from './effects/ThemeToggle';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const hideLogoProjectDetail = location.pathname.startsWith('/project/');
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`pt-4 fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-card rounded-none border-t-0 border-x-0 shadow-lg shadow-primary-500/5'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div>
              {!hideLogoProjectDetail && (
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="flex items-center space-x-2 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <img
                      src={logo}
                      alt="Logo"
                      className="h-14 w-14 rounded-full border-2 border-white/20 group-hover:border-primary-500/50 transition-all duration-300 group-hover:shadow-glow"
                    />
                  </motion.div>
                </Link>
              )}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className={`cursor-pointer transition-colors animated-underline py-2 ${
                    isDark
                      ? 'text-gray-300 hover:text-primary-400'
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                  activeClass={isDark ? 'text-primary-400 font-semibold' : 'text-primary-600 font-semibold'}
                >
                  {item.name}
                </Link>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors relative z-[60] ${
                  isDark ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'
                }`}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Rendered outside nav for proper z-index stacking */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] md:hidden"
            onClick={() => setIsOpen(false)}
          >
            {/* Solid opaque background - no transparency */}
            <div
              className="absolute inset-0"
              style={{ backgroundColor: isDark ? '#0f0f23' : '#f8fafc' }}
            />
            {/* Gradient overlay for visual interest */}
            <div
              className="absolute inset-0"
              style={{
                background: isDark
                  ? 'linear-gradient(180deg, rgba(99, 102, 241, 0.08) 0%, #0f0f23 30%, #0f0f23 100%)'
                  : 'linear-gradient(180deg, rgba(99, 102, 241, 0.05) 0%, #f8fafc 30%, #f8fafc 100%)'
              }}
            />

            {/* Menu Card */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative glass-card max-w-md mx-4 sm:mx-auto mt-28 px-6 py-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setIsOpen(false)}
                className={`absolute top-4 right-4 p-2 transition-colors ${
                  isDark ? 'text-gray-400 hover:text-primary-400' : 'text-gray-500 hover:text-primary-600'
                }`}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={28} />
              </motion.button>

              {/* Menu Items */}
              <div className="flex flex-col space-y-2 mt-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-64}
                      duration={500}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all cursor-pointer group ${
                        isDark
                          ? 'text-gray-300 hover:bg-white/5 hover:text-primary-400'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-primary-600'
                      }`}
                      activeClass={isDark ? 'text-primary-400 font-semibold bg-white/5' : 'text-primary-600 font-semibold bg-primary-50'}
                    >
                      <span className={`group-hover:scale-110 transition-transform ${isDark ? 'text-primary-500' : 'text-primary-600'}`}>
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Social Media Icons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className={`mt-6 pt-6 border-t flex justify-center gap-6 ${
                  isDark ? 'border-white/10' : 'border-gray-200'
                }`}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors text-xl ${
                      isDark ? 'text-gray-400 hover:text-primary-400' : 'text-gray-500 hover:text-primary-600'
                    }`}
                    aria-label={link.label}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
