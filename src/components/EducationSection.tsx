import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "KL University",
      period: "2023 - 2027",
      description: "Focused on mastering programming languages, data structures, algorithms, and full-stack development with hands-on projects.",
      grade: "9.24 CGPA",
      image: "/images/education/KL-Image.jpg",
      imagePosition: "left"
    },
    {
      degree: "Higher Secondary",
      field: "",
      institution: "Tirumala Junior College",
      period: "2021 - 2023",
      description: "Strong foundation in mathematics, physics, and Chemistry.",
      grade: "88.1%",
      image: "/images/education/Tirumala_Logo.jpg",
      imagePosition: "right"
    }
  ];

  return (
    <section id="education" ref={ref} className="py-12 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 transform md:-translate-x-1/2"></div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
                  className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transform md:-translate-x-1/2 z-10 border-4 border-slate-900"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
                  />
                </motion.div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-10 md:ml-0`}>
                  {edu.image && (
                    <div className={`mb-4 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <div className="inline-block bg-white p-2 rounded-lg shadow-lg">
                        <img 
                          src={edu.image} 
                          alt={`${edu.institution} Logo`}
                          className="h-20 w-auto max-w-[220px] object-contain"
                          style={{ 
                            imageRendering: 'auto',
                            mixBlendMode: 'multiply' 
                          }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                  )}
                  
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                        <GraduationCap className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="flex items-center gap-2 text-blue-300 text-sm">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <h4 className="text-lg text-purple-300 mb-3">{edu.field}</h4>
                    <h5 className="text-blue-400 font-semibold mb-3">{edu.institution}</h5>
                    
                    <p className="text-white/70 mb-4 leading-relaxed">{edu.description}</p>
                    
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30">
                      <span className="text-green-400 font-semibold text-sm">{edu.grade}</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;