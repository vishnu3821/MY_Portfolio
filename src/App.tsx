import { useState, useEffect } from 'react';
import { AnimatePresence, motion, Transition } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';
import FooterSection from './components/FooterSection';
import { LoadingSpinner } from './components/ui/LoadingSpinner';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransition: Transition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  return (
    <div className="relative min-h-screen font-['Poppins'] text-white overflow-x-hidden">
      <AnimatedBackground />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Navbar />
            <motion.main 
              className="relative z-10"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <HeroSection />
              <AboutSection />
              <EducationSection />
              <SkillsSection />
              <ProjectsSection />
              <ExperienceSection />
              <CertificationsSection />
              <FooterSection />
            </motion.main>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;