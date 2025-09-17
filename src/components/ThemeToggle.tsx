import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc'; // Light mode background
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0f172a'; // Dark mode background
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      // Switch to light theme
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc';
      localStorage.setItem('theme', 'light');
    } else {
      // Switch to dark theme
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0f172a';
      localStorage.setItem('theme', 'dark');
    }
    setIsDark(!isDark);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center 
                 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 
                 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 
                 focus:ring-offset-slate-900 focus:ring-blue-500"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ opacity: 0, rotate: 90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: -90 }}
          transition={{ duration: 0.2 }}
          className="text-white"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
