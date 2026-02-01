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

function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="security-labs">
        <SecurityLabsSection />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen relative overflow-x-hidden transition-colors duration-300">
          <AnimatedBackground variant="mesh" />
          <CursorGlow />
          <ScrollProgress />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <ChatWidget />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
