import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Database } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "Python", icon: <span className="text-yellow-400 text-4xl">🐍</span> },
    { name: "C", icon: <span className="text-blue-400 text-4xl">C</span> },
    { name: "C++", icon: <span className="text-purple-400 text-4xl">C++</span> },
    { name: "Java", icon: <span className="text-orange-400 text-4xl">☕</span> },
    { name: "HTML", icon: <span className="text-orange-500 text-4xl">#</span> },
    { name: "CSS", icon: <span className="text-blue-500 text-4xl">✎</span> },
    { name: "JavaScript", icon: <span className="text-yellow-300 text-4xl">JS</span> },
    { name: "React", icon: <span className="text-cyan-400 text-4xl">⚛</span> },
    { name: "Git", icon: <span className="text-orange-600 text-4xl">⎇</span> },
    { name: "SQL", icon: <Database className="text-blue-400 w-8 h-8" /> },
  ];

  // Animation variants for the rotation effect
  const iconVariants = {
    initial: { 
      rotateY: 0,
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const
      }
    },
    hover: {
      rotateY: 360,
      scale: 1.2,
      transition: { 
        duration: 2,
        repeat: Infinity,
        ease: [0.4, 0, 0.2, 1] as const,
        repeatType: 'loop' as const
      }
    }
  };

  return (
    <section id="skills" ref={ref} className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.15,
                  y: -5,
                }}
                className="flex flex-col items-center justify-center w-24 h-24 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-default group"
              >
                <motion.div 
                  className="mb-2"
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  onHoverEnd={() => {
                    // Reset to initial state when hover ends
                    return { rotateY: 0, scale: 1 };
                  }}
                >
                  {skill.icon}
                </motion.div>
                <span className="text-white/90 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
false