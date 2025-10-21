import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo 3.png";
import { navItems, socialLinks } from "../data/socialIcons";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const hideLogoProjectDetail = location.pathname.startsWith("/project/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };

    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`pt-4 fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-100 backdrop-blur-md shadow-lg text-gray-800"
          : "bg-transparent"
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
                <img
                  src={logo}
                  alt="Logo"
                  className="h-16 w-16 rounded-full border-2 group-hover:scale-110 transform transition duration-300"
                />
                <span className=" font-bold text-xl tracking-widest hover:text-indigo-500  transition duration-300">
                  {/* HJ */}
                </span>
              </Link>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className={`cursor-pointer hover:text-indigo-500 transition-colors ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
                activeClass="text-indigo-500 font-bold underline"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md"
            >
              {isOpen ? (
                <X size={24} className="text-gray-800" />
              ) : (
                <Menu size={24} className="text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gray-800/70 backdrop-blur-lg z-40"
            >
              <div className="relative bg-white rounded-md shadow-lg max-w-md mx-auto mt-20 px-6 py-4">
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 text-gray-800 hover:text-indigo-500 transition"
                >
                  <X size={28} />
                </button>

                {/* Menu Items */}
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-64}
                      duration={500}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-800 hover:bg-gray-200 hover:text-indigo-500 transition cursor-pointer"
                      activeClass="text-indigo-500 font-bold bg-gray-200"
                    >
                      <span className="text-indigo-500">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>

                {/* Social Media Icons */}
                <div className="mt-6 border-t border-gray-300 pt-4 flex justify-evenly">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-indigo-400 transition"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;
