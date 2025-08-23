import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import ContactForm from './ContactForm';

const HeroSection: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-4"
          >
            <div className="bg-slate-900 rounded-full p-6">
              <img 
                src="/passport photo edited.jpg" 
                alt="Vishnu Prabhakar"
                className="w-24 h-24 rounded-full object-cover border-2 border-white/20"
              />
            </div>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Vishnu Prabhakar
              </span>
              <span className="text-white"> 🚀</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 }}
              className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            >
              I build responsive websites, explore AI, and solve real-world problems
              with cutting-edge technology and innovative solutions.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5 }}
            className="pt-8 relative inline-block"
          >
            <div className="relative">
              <motion.button
                onClick={() => setIsContactOpen(true)}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="relative z-10 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium text-base transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
              >
                Let's Talk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-0"
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </motion.button>
      </motion.div>
      {isContactOpen && <ContactForm onClose={() => setIsContactOpen(false)} />}
    </section>
  );
};

export default HeroSection;