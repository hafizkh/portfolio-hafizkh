import { useRef, useState } from 'react';
import { Mail, MapPin, Send, MessageCircle, Clock, Linkedin, Github } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTheme } from '../context/ThemeContext';
import { socialLinks } from '../data/socialIcons';

// Animated gradient orb component
const GradientOrb = ({ className }: { className: string }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Contact info card component
const InfoCard = ({
  icon: Icon,
  label,
  value,
  href,
  color,
  delay,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
  color: string;
  delay: number;
}) => {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const content = (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`p-4 rounded-2xl transition-all duration-300 cursor-pointer group h-full
        ${isDark
          ? "bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-primary-500/30"
          : "bg-gradient-to-br from-white to-gray-50/80 border border-gray-200/60 hover:border-primary-300 shadow-lg"
        }`}
    >
      <div className="flex items-center gap-3">
        <div className={`p-2.5 rounded-xl flex-shrink-0 ${color}`}>
          <Icon className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <p className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>{label}</p>
          <p className={`text-sm font-medium ${isDark ? "text-white group-hover:text-primary-400" : "text-gray-900 group-hover:text-primary-600"} transition-colors break-all`}>
            {value}
          </p>
        </div>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<InstanceType<typeof ReCAPTCHA> | null>(null);
  const { isDark } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      toast.error('Please complete the CAPTCHA challenge.');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_API_KEY
      );
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send the message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background decorations */}
      <GradientOrb className={`w-96 h-96 -top-48 -left-48 ${isDark ? "bg-primary-500/20" : "bg-primary-500/10"}`} />
      <GradientOrb className={`w-96 h-96 -bottom-48 -right-48 ${isDark ? "bg-violet-500/20" : "bg-violet-500/10"}`} />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Header Card - spans 2 columns */}
          <motion.div
            className={`lg:col-span-2 p-8 rounded-3xl relative overflow-hidden
              ${isDark
                ? "bg-gradient-to-br from-primary-500/10 to-violet-500/5 border border-primary-500/20"
                : "bg-gradient-to-br from-primary-50 to-violet-50 border border-primary-200 shadow-lg"
              }`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none bg-primary-500" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4
                ${isDark
                  ? "bg-primary-500/20 text-primary-400 border border-primary-500/30"
                  : "bg-primary-100 text-primary-700 border border-primary-200"
                }`}
            >
              <MessageCircle className="w-4 h-4" />
              Let's Talk
            </motion.div>

            <h2
              id="contact-heading"
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Get in <span className="gradient-text">Touch</span>
            </h2>

            <p className={`text-lg max-w-xl ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </motion.div>

          {/* Availability Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={`p-6 rounded-3xl flex flex-col justify-center
              ${isDark
                ? "bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20"
                : "bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 shadow-lg"
              }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className={`w-3 h-3 rounded-full ${isDark ? "bg-green-400" : "bg-green-500"}`} />
                <div className={`absolute inset-0 w-3 h-3 rounded-full ${isDark ? "bg-green-400" : "bg-green-500"} animate-ping`} />
              </div>
              <span className={`font-medium ${isDark ? "text-green-400" : "text-green-600"}`}>
                Available for work
              </span>
            </div>
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Open for freelance projects and full-time opportunities.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Clock className={`w-4 h-4 ${isDark ? "text-gray-500" : "text-gray-400"}`} />
              <span className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                Usually responds within 24 hours
              </span>
            </div>
          </motion.div>

          {/* Contact Info Cards - Full width row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:col-span-3">
            <InfoCard
              icon={Mail}
              label="Email"
              value="hafiz@hafizkh.dev"
              href="mailto:hafiz@hafizkh.dev"
              color={isDark ? "bg-primary-500/20 text-primary-400" : "bg-primary-100 text-primary-600"}
              delay={0.4}
            />
            <InfoCard
              icon={MapPin}
              label="Location"
              value="Helsinki, FI"
              color={isDark ? "bg-cyan-500/20 text-cyan-400" : "bg-cyan-100 text-cyan-600"}
              delay={0.5}
            />
            <InfoCard
              icon={Linkedin}
              label="LinkedIn"
              value="Connect"
              href="https://linkedin.com/in/hafizkh"
              color={isDark ? "bg-blue-500/20 text-blue-400" : "bg-blue-100 text-blue-600"}
              delay={0.6}
            />
            <InfoCard
              icon={Github}
              label="GitHub"
              value="Follow"
              href="https://github.com/hafizkh"
              color={isDark ? "bg-violet-500/20 text-violet-400" : "bg-violet-100 text-violet-600"}
              delay={0.7}
            />
          </div>

          {/* Contact Form - spans full width */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              className={`p-8 rounded-3xl
                ${isDark
                  ? "bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10"
                  : "bg-gradient-to-br from-white to-gray-50/80 border border-gray-200/60 shadow-lg"
                }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl transition-all duration-300 outline-none
                      ${isDark
                        ? "bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:bg-white/10"
                        : "bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:bg-white"
                      }`}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl transition-all duration-300 outline-none
                      ${isDark
                        ? "bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:bg-white/10"
                        : "bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:bg-white"
                      }`}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl transition-all duration-300 outline-none resize-none
                    ${isDark
                      ? "bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:bg-white/10"
                      : "bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:bg-white"
                    }`}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              {/* CAPTCHA */}
              <div className="flex justify-center mb-6">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={setCaptchaToken}
                  theme={isDark ? 'dark' : 'light'}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl text-base font-semibold text-white transition-all duration-300
                  bg-gradient-to-r from-primary-500 to-violet-500 hover:from-primary-600 hover:to-violet-600
                  shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40
                  ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                whileHover={!isSubmitting ? { scale: 1.01, y: -2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.99 } : {}}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Social Links Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className={`mt-8 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4
            ${isDark
              ? "bg-white/5 border border-white/10"
              : "bg-white border border-gray-200 shadow-sm"
            }`}
        >
          <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Or connect with me on social media
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl transition-all duration-300
                  ${isDark
                    ? "text-gray-400 bg-white/5 hover:text-white hover:bg-primary-500/20 border border-white/10"
                    : "text-gray-500 bg-gray-100 hover:text-gray-900 hover:bg-primary-100 border border-gray-200"
                  }`}
                aria-label={link.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className={`mt-24 pt-8 border-t ${isDark ? 'border-white/5' : 'border-gray-200'}`}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              &copy; {new Date().getFullYear()} Hafiz. All rights reserved.
            </p>
            <p className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </motion.footer>

      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
          style: {
            borderRadius: '16px',
            background: isDark ? 'rgba(26, 26, 46, 0.95)' : 'rgba(255, 255, 255, 0.95)',
            color: isDark ? '#fff' : '#1f2937',
            backdropFilter: 'blur(10px)',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
            padding: '16px',
          },
          success: {
            iconTheme: {
              primary: '#6366f1',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </section>
  );
}

export default Contact;
