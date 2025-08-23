import React from 'react';
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

function App() {
  return (
    <div className="relative min-h-screen font-['Poppins'] text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <FooterSection />
      </main>
    </div>
  );
}

export default App;