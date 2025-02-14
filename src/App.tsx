import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/achievements/Achievements';
import Contact from './components/Contact';
import WhatsAppFloatingIcon from './components/WhatsAppIcon';

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
      <section id="experience">
        <Experience />
      </section>
      <section id="achievements">
        {/* <Achievements /> */}
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <WhatsAppFloatingIcon />
      </div>
    </Router>
  );
}

export default App;