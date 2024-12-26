import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import hafizPic from "../assets/hafizpic.png"; // Ensure this is a transparent PNG image.
import { socialLinks } from '../data/socialIcons';

export default function Hero() {
  return (
    <section className=" py-40 pt-30 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-600 text-gray-800">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Section */}
          <AnimatedSection className="lg:w-1/2 text-center lg:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Full Stack Developer
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8 text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Crafting exceptional digital experiences with modern technologies and creative solutions.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <a
                href="#contact"
                className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 font-semibold transition-colors rounded-full hover:bg-opacity-90 transform hover:scale-105 flex items-center gap-2"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="border border-white hover:bg-white/10 px-6 py-3 font-semibold transition-colors rounded-full hover:bg-opacity-90 transform hover:scale-105 flex items-center gap-2"
              >
                View Projects
              </a>
            </motion.div>
            <motion.div
              className="flex gap-6 mt-8 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {
                socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    className="text-2xl md:text-3xl hover:text-indigo-100
                  transition-colors transform hover:scale-105"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))
              }
            </motion.div>
          </AnimatedSection>

          {/* Right Section */}
          <AnimatedSection
            className="lg:w-1/2 flex justify-center"
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              initial={{ scale: 0.5, opacity: 0.9 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                className="w-full h-full object-contain transform hover:scale-105 transition-transform rounded-lg"
                src={hafizPic}
                alt="Hafiz Picture"
                style={{
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                  borderRadius: "10x",
                }}
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
