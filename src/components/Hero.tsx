import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import hafizPic from "../assets/pichafiz.png";
import { socialLinks } from '../data/socialIcons';
import { Link } from 'react-scroll';

function Hero() {
  return (
    <section className="py-40 pt-30 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-600 text-gray-800">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Section */}
          <AnimatedSection className="lg:w-1/2 text-center lg:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hello, I'm Hafiz
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-4xl font-semibold mb-4 text-gray-800"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Full Stack Developer
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl mb-8 text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Passionate about building dynamic and user-friendly web solutions.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 font-semibold transition-colors rounded-full hover:bg-opacity-90 transform hover:scale-105 flex items-center gap-2 cursor-pointer text-white"
              >
                Hire Me
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="border border-white hover:bg-white/10 px-6 py-3 font-semibold transition-colors rounded-full hover:bg-opacity-90 transform hover:scale-105 flex items-center gap-2 cursor-pointer text-white"
              >
                View Projects
              </Link>
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
            className="lg:w-1/2 flex flex-col place-items-center"
          >
            <motion.div
            // className=" w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            // initial={{ scale: 0.8, opacity: 0.8 }}
            // animate={{ scale: 1, opacity: 1 }}
            // transition={{ duration: 0.5 }}
            >
              <img
                className="w-96 h-96 object-contain transform hover:scale-105 transition-transform rounded-e-xl"
                src={hafizPic}
                alt="Hafiz Picture"


              />
            </motion.div>
            {/* <motion.a
              href="/Resume-Javid-Hafiz.pdf"
              download
              className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors rounded-full hover:bg-opacity-90 transform hover:scale-105 flex items-center gap-2 cursor-pointer mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Resume <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4' /></svg>
            </motion.a> */}
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}

export default Hero