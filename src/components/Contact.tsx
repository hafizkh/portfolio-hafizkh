import { useRef, useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import ReCAPTCHA from 'react-google-recaptcha';
import MagneticButton from './effects/MagneticButton';
import { useTheme } from '../context/ThemeContext';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const { isDark } = useTheme();

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
    } catch {
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
    <section id="contact" className="py-24 section-gradient-alt relative">
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
              isDark ? 'text-primary-400' : 'text-primary-600'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's Talk
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Get in Touch</h2>
          <p className={`mt-4 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Have a project in mind? Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Contact Info */}
          <motion.div
            className="md:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="glass-card p-8 h-full bg-gradient-to-br from-primary-500/10 to-accent-cyan/10">
              <h3 className={`text-2xl font-semibold mb-8 ${isDark ? 'text-white' : 'text-gray-800'}`}>Contact Information</h3>
              <div className="space-y-6">
                <motion.a
                  href="mailto:hafiz@hafizkh.dev"
                  className={`flex items-center transition-colors group ${
                    isDark ? 'text-gray-300 hover:text-primary-400' : 'text-gray-600 hover:text-primary-600'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center mr-4 group-hover:bg-primary-500/30 transition-colors">
                    <Mail className={`w-5 h-5 ${isDark ? 'text-primary-400' : 'text-primary-600'}`} />
                  </div>
                  <div>
                    <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Email</p>
                    <p className="font-medium">hafiz@hafizkh.dev</p>
                  </div>
                </motion.a>

                <motion.div
                  className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-cyan/20 flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <div>
                    <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Location</p>
                    <p className="font-medium">Helsinki, FI</p>
                  </div>
                </motion.div>
              </div>

              {/* Decorative element */}
              <div className={`mt-12 pt-8 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Open for freelance projects and full-time opportunities.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="md:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="glow-input"
                  placeholder="Your name"
                  required
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="glow-input"
                  placeholder="your@email.com"
                  required
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="glow-input resize-none"
                  placeholder="Tell me about your project..."
                  required
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* CAPTCHA */}
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={setCaptchaToken}
                  theme={isDark ? 'dark' : 'light'}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <MagneticButton
                  onClick={() => {}}
                  className={`w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </MagneticButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        className={`mt-24 pt-8 border-t ${isDark ? 'border-white/5' : 'border-gray-200'}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            &copy; {new Date().getFullYear()} Hafiz. All rights reserved.
          </p>
        </div>
      </motion.footer>

      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
          style: {
            borderRadius: '12px',
            background: isDark ? 'rgba(26, 26, 46, 0.95)' : 'rgba(255, 255, 255, 0.95)',
            color: isDark ? '#fff' : '#1f2937',
            backdropFilter: 'blur(10px)',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
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
