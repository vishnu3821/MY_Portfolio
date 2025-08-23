import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, ChevronUp } from 'lucide-react';

const FooterSection: React.FC = () => {
  const socialLinks = [
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/vishnu-prabhakar-/", 
      label: "LinkedIn",
      gradient: "from-blue-500 to-blue-600"
    },
    { 
      icon: Github, 
      href: "https://github.com/vishnu3821", 
      label: "GitHub",
      gradient: "from-gray-600 to-gray-800"
    },
    { 
      icon: Code, 
      href: "https://www.codechef.com/dashboard", 
      label: "CodeChef",
      gradient: "from-orange-500 to-red-500"
    },
    { 
      icon: Mail, 
      href: "mailto:2300033040cseh@gmail.com", 
      label: "Email",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Animated Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.blockquote
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-300% mb-4"
          >
            "Problem Solving. Team Collaboration. Innovation."
          </motion.blockquote>
          <p className="text-white/60 text-lg">Building the future, one line of code at a time.</p>
        </motion.div>

        {/* Avatar with blinking animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white relative overflow-hidden">
              VP
              {/* Blinking eyes effect */}
              <motion.div
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                className="absolute inset-0 bg-slate-900 rounded-full"
                style={{ transformOrigin: '50% 60%' }}
              />
            </div>
            
            {/* Floating particles around avatar */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                style={{
                  left: `${50 + 40 * Math.cos(i * Math.PI / 3)}%`,
                  top: `${50 + 40 * Math.sin(i * Math.PI / 3)}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.6 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.2, 
                rotate: 360,
                y: -5
              }}
              whileTap={{ scale: 0.9 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`p-4 bg-gradient-to-r ${link.gradient} rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                <link.icon className="w-6 h-6 text-white relative z-10" />
                
                {/* Pulsing background */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-white/20 rounded-xl"
                />
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>
              
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {link.label}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll to top button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-blue-500/30 rounded-full text-white hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 group"
          >
            <ChevronUp className="w-6 h-6 group-hover:animate-bounce" />
          </motion.button>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-2"
        >
          <div className="text-white/60">
            <p>Made by Vishnu Prabhakar</p>
            <p className="text-white/40 text-sm mt-2">
              © 2025 Pedasanaganti Vishnu Prabhakar. All rights reserved.
            </p>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
      </div>
    </footer>
  );
};

export default FooterSection;