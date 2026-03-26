import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SecurityLabsSection from './components/SecurityLabs';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import AnimatedBackground from './components/effects/AnimatedBackground';
import CursorGlow from './components/effects/CursorGlow';
import ScrollProgress from './components/effects/ScrollProgress';
import { ThemeProvider } from './context/ThemeContext';

// Skip to main content link for accessibility
function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
    >
      Skip to main content
    </a>
  );
}

function HomePage() {
  return (
    <main id="main-content" role="main" tabIndex={-1}>
      <section id="hero" aria-label="Introduction">
        <Hero />
      </section>
      <section id="skills" aria-labelledby="skills-heading">
        <Skills />
      </section>
      <section id="projects" aria-labelledby="projects-heading">
        <Projects />
      </section>
      <section id="security-labs" aria-labelledby="security-labs-heading">
        <SecurityLabsSection />
      </section>
      <section id="experience" aria-labelledby="experience-heading">
        <Experience />
      </section>
      <section id="contact" aria-labelledby="contact-heading">
        <Contact />
      </section>
    </main>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen relative overflow-x-hidden transition-colors duration-300">
          <SkipToContent />
          <AnimatedBackground variant="mesh" />
          <CursorGlow />
          <ScrollProgress />
          <header role="banner">
            <Navbar />
          </header>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <ChatWidget />
          <footer role="contentinfo" className="sr-only">
            <p>© {new Date().getFullYear()} Hafiz Khuram. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
