import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  Shield,
  Code2,
  Rocket,
  Terminal,
  Lock,
  Globe,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-scroll";
import hafizPic from "../assets/pichafiz.png";
import { socialLinks } from "../data/socialIcons";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";

// Animated counter component
const AnimatedCounter = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

// Magnetic effect hook
const useMagnetic = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.1);
    y.set((e.clientY - centerY) * 0.1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { springX, springY, handleMouseMove, handleMouseLeave };
};

// Bento card component
interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

const BentoCard = ({
  children,
  className = "",
  delay = 0,
  hover = true,
}: BentoCardProps) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
      className={`
        relative overflow-hidden rounded-3xl p-6
        ${
          isDark
            ? "bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/20"
            : "bg-gradient-to-br from-white to-gray-50/80 border border-gray-200/60 hover:border-primary-300 shadow-lg shadow-gray-200/50"
        }
        transition-all duration-300
        ${className}
      `}
    >
      {/* Subtle gradient overlay on hover */}
      <div
        className={`absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none
        ${
          isDark
            ? "bg-gradient-to-br from-primary-500/5 to-transparent"
            : "bg-gradient-to-br from-primary-100/50 to-transparent"
        }`}
      />
      {children}
    </motion.div>
  );
};

// Floating orbs background
const FloatingOrbs = () => {
  const { isDark } = useTheme();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
          top: "-10%",
          right: "-10%",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
          bottom: "10%",
          left: "-5%",
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full blur-3xl"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(34, 211, 238, 0.06) 0%, transparent 70%)",
          top: "50%",
          left: "30%",
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
    </div>
  );
};

function Hero() {
  const { isDark } = useTheme();
  const magnetic = useMagnetic();

  const roles = [
    "Full Stack Developer",
    "Wazuh Ambassador",
    "Security Engineer",
    "React Specialist",
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-8 pt-24 lg:pt-28 overflow-hidden"
      aria-label="Hero section introducing Hafiz Khuram"
    >
      <FloatingOrbs />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {/* Main Profile Card - Spans 2 columns */}
          <BentoCard className="md:col-span-2 lg:row-span-2" delay={0}>
            <div className="flex flex-col h-full">
              <div className="flex items-start gap-5 mb-6">
                {/* Profile Image with animated border */}
                <motion.div
                  className="relative shrink-0"
                  style={{ x: magnetic.springX, y: magnetic.springY }}
                  onMouseMove={magnetic.handleMouseMove}
                  onMouseLeave={magnetic.handleMouseLeave}
                >
                  <motion.div
                    className="absolute -inset-1 rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)",
                      backgroundSize: "300% 300%",
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <img
                    src={hafizPic}
                    alt="Hafiz Khuram - Full Stack Developer and Security Expert"
                    className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-2xl object-cover object-top"
                  />
                  {/* Online indicator */}
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-dark-900 dark:border-dark-900" />
                </motion.div>

                <div className="flex-1 min-w-0">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-2
                      ${isDark ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-green-100 text-green-700 border border-green-200"}`}
                  >
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Available for work
                  </motion.div>

                  <h1
                    className={`text-3xl lg:text-4xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    Hafiz Khuram
                  </h1>

                  {/* Animated role text */}
                  <div className="h-7 overflow-hidden">
                    <motion.p
                      key={currentRole}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg font-medium gradient-text"
                    >
                      {roles[currentRole]}
                    </motion.p>
                  </div>
                </div>
              </div>

              <p
                className={`text-base lg:text-lg leading-relaxed mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                Building secure, scalable web applications and privacy-focused
                tools. Creator of{" "}
                <a
                  href="https://trustscan.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 hover:text-primary-400 transition-colors inline-flex items-center gap-1"
                >
                  TrustScan.dev <ExternalLink className="w-3 h-3" />
                </a>{" "}
                - a free privacy compliance platform trusted by businesses
                worldwide.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 mt-auto">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 shadow-lg shadow-primary-500/25 transition-all duration-300"
                  >
                    Let's Talk
                  </motion.button>
                </Link>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300
                      ${
                        isDark
                          ? "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20"
                          : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 hover:border-gray-300"
                      }`}
                  >
                    View Work
                  </motion.button>
                </Link>
              </div>
            </div>
          </BentoCard>

          {/* Security Focus Card */}
          <BentoCard className="lg:col-span-1" delay={0.1}>
            <div className="flex flex-col h-full">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4
                ${isDark ? "bg-cyan-500/10" : "bg-cyan-100"}`}
              >
                <Shield
                  className={`w-6 h-6 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}
                />
              </div>
              <h3
                className={`text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Security First
              </h3>
              <p
                className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                Wazuh Ambassador building SIEM solutions and privacy tools
              </p>
              <div className="mt-auto pt-4">
                <span
                  className={`text-3xl font-bold ${isDark ? "text-cyan-400" : "text-cyan-600"}`}
                >
                  <AnimatedCounter value={30} suffix="+" />
                </span>
                <span
                  className={`block text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}
                >
                  Privacy laws covered
                </span>
              </div>
            </div>
          </BentoCard>

          {/* Code Stats Card */}
          <BentoCard className="lg:col-span-1" delay={0.15}>
            <div className="flex flex-col h-full">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4
                ${isDark ? "bg-violet-500/10" : "bg-violet-100"}`}
              >
                <Code2
                  className={`w-6 h-6 ${isDark ? "text-violet-400" : "text-violet-600"}`}
                />
              </div>
              <h3
                className={`text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Full Stack
              </h3>
              <p
                className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                React, TypeScript, Node.js, Python, AWS
              </p>
              <div className="mt-auto pt-4">
                <span
                  className={`text-3xl font-bold ${isDark ? "text-violet-400" : "text-violet-600"}`}
                >
                  <AnimatedCounter value={15} suffix="+" />
                </span>
                <span
                  className={`block text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}
                >
                  Projects shipped
                </span>
              </div>
            </div>
          </BentoCard>

          {/* Featured Project Card - TrustScan */}
          <BentoCard className="md:col-span-2" delay={0.2}>
            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0
                ${isDark ? "bg-gradient-to-br from-primary-500/20 to-violet-500/20" : "bg-gradient-to-br from-primary-100 to-violet-100"}`}
              >
                <Lock
                  className={`w-7 h-7 ${isDark ? "text-primary-400" : "text-primary-600"}`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3
                    className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    TrustScan.dev
                  </h3>
                  <span
                    className={`px-2 py-0.5 text-xs font-medium rounded-full
                    ${isDark ? "bg-green-500/10 text-green-400" : "bg-green-100 text-green-700"}`}
                  >
                    Live
                  </span>
                </div>
                <p
                  className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                >
                  Free privacy compliance platform — 8 tools, 100% client-side,
                  zero data collection
                </p>
              </div>
              <a
                href="https://trustscan.dev"
                target="_blank"
                rel="noopener noreferrer"
                className={`shrink-0 p-3 rounded-xl transition-all duration-300
                  ${
                    isDark
                      ? "bg-white/5 hover:bg-white/10 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                aria-label="Visit TrustScan.dev"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </BentoCard>

          {/* Tech Stack Mini Cards */}
          <BentoCard className="lg:col-span-1" delay={0.25} hover={false}>
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <Terminal
                  className={`w-5 h-5 ${isDark ? "text-primary-400" : "text-primary-600"}`}
                />
                <span
                  className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  Tech Stack
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Python",
                  "AWS",
                  "Wazuh",
                ].map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg
                      ${
                        isDark
                          ? "bg-white/5 text-gray-300 border border-white/10"
                          : "bg-gray-100 text-gray-700 border border-gray-200"
                      }`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Location Card */}
          <BentoCard className="lg:col-span-1" delay={0.3}>
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center
                ${isDark ? "bg-rose-500/10" : "bg-rose-100"}`}
              >
                <Globe
                  className={`w-6 h-6 ${isDark ? "text-rose-400" : "text-rose-600"}`}
                />
              </div>
              <div>
                <p
                  className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
                >
                  Based in
                </p>
                <p
                  className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  Helsinki, Finland
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Social Links Card */}
          <BentoCard
            className="md:col-span-2 lg:col-span-2"
            delay={0.35}
            hover={false}
          >
            <div className="flex items-center justify-between">
              <span
                className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                Connect with me
              </span>
              <div className="flex gap-2">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl text-xl transition-all duration-300
                      ${
                        isDark
                          ? "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                          : "bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                      }`}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </BentoCard>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className={`flex flex-col items-center gap-2 ${isDark ? "text-gray-500 hover:text-gray-300" : "text-gray-400 hover:text-gray-600"} transition-colors`}
            >
              <span className="text-sm">Scroll to explore</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
