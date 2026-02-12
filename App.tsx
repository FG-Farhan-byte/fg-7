
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('work');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['work', 'about', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-violet-500/30">
      <Navbar activeSection={activeSection} />
      
      <main className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <section id="work" className="min-h-screen pt-32 pb-20">
          <Hero />
        </section>

        <section id="about" className="py-24 border-t border-white/5">
          <About />
        </section>

        <section id="skills" className="py-24 border-t border-white/5">
          <Skills />
        </section>

        <section id="projects" className="py-24 border-t border-white/5">
          <Projects />
        </section>

        <section id="awards" className="py-24 border-t border-white/5">
          <Awards />
        </section>

        <section id="contact" className="py-32 border-t border-white/5">
          <Contact />
        </section>

        <footer className="py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest text-[#9A9A9A] uppercase">
          <p>© 2026 FARHAN AHMAD — ALL RIGHTS RESERVED</p>
        </footer>
      </main>
    </div>
  );
};

export default App;