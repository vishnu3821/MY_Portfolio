import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building, Users, Calendar } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Member",
      organization: "Zero One Code Club",
      period: "2023 - 2024",
      type: "Leadership Role",
      description: "Active member of the official coding club, participating in coding competitions, hackathons, and technical workshops.",
      achievements: [
        "Participated in multiple coding competitions",
        "Attended technical workshops on web development",
        "Collaborated on team projects",
        "Enhanced problem-solving and coding skills"
      ],
      icon: Users,
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      title: "Member",
      organization: "VYHUA Club",
      period: "2024 - 2027",
      type: "Leadership Role",
      description: "Active member of the VYHUA club, participating in various cultural and technical events organized by the club.",
      achievements: [
        "Participated in club events and activities",
        "Collaborated with team members on projects",
        "Developed leadership and teamwork skills",
        "Contributed to club initiatives"
      ],
      icon: Users,
      gradient: "from-purple-400 to-pink-400"
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 bg-gradient-to-r ${exp.gradient} bg-opacity-20 rounded-xl`}>
                      <exp.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${exp.gradient} bg-opacity-20 rounded-full text-sm font-semibold text-white border border-white/10`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <h4 className="text-lg text-blue-300 mb-2 flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    {exp.organization}
                  </h4>
                  
                  <div className="flex items-center gap-2 text-purple-300 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>

                  <p className="text-white/70 mb-6 leading-relaxed">{exp.description}</p>

                  <div>
                    <h5 className="text-white font-semibold mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.3 + idx * 0.1 }}
                          className="flex items-start gap-3 text-white/80"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Visual Element */}
              <div className="flex-shrink-0">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className={`w-32 h-32 bg-gradient-to-br ${exp.gradient} bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10`}>
                    <exp.icon className="w-16 h-16 text-white" />
                  </div>
                  
                  {/* Floating particles around the icon */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;