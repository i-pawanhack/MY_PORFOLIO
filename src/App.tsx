import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [activeSection, setActiveSection] = useState<'home' | 'about' | 'skills' | 'experience' | 'projects' | 'contact'>('home');
  const [isAppReady, setIsAppReady] = useState(false);

  // Handle hash changes for external navigation or initial load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['about', 'skills', 'experience', 'projects', 'contact'].includes(hash)) {
        setActiveSection(hash as any);
      } else if (!hash) {
        setActiveSection('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'about': return <About />;
      case 'skills': return <Skills />;
      case 'experience': return <Experience />;
      case 'projects': return <Projects />;
      case 'contact': return <Contact />;
      default: return <Hero isStarted={isAppReady} />;
    }
  };

  return (
    <div className="relative min-h-screen Selection:bg-accent Selection:text-bg">
      <Loader onComplete={() => setIsAppReady(true)} />
      <CustomCursor />
      
      {/* Dynamic Scanline Overlay */}
      <AnimatePresence>
        {isAppReady && (
          <>
            <motion.div
              key={`scanline-${activeSection}`}
              initial={{ top: '-10%', opacity: 0 }}
              animate={{ top: '110%', opacity: [0, 1, 1, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="fixed inset-x-0 h-[20vh] bg-gradient-to-b from-transparent via-accent/20 to-transparent z-[60] pointer-events-none blur-sm"
            />
            <motion.div
              key={`bar-${activeSection}`}
              initial={{ top: '0%', opacity: 0 }}
              animate={{ top: '100%', opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="fixed inset-x-0 h-px bg-accent z-[61] pointer-events-none shadow-[0_0_20px_rgba(255,255,255,0.8)]"
            />
          </>
        )}
      </AnimatePresence>

      {/* Persistent Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:40px_40px]" />
      </div>

      <Header isVisible={isAppReady} />
      <main>
        <AnimatePresence mode="wait">
          {isAppReady && (
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {renderSection()}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      {isAppReady && activeSection !== 'home' && <Footer />}
    </div>
  );
}
