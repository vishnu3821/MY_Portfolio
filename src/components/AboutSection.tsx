import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, Code, Zap, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Code, title: 'Full Stack Development', desc: 'End-to-end web solutions' },
    { icon: Zap, title: 'AI & Innovation', desc: 'Cutting-edge technology' },
    { icon: Users, title: 'Team Collaboration', desc: 'Effective teamwork' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotateY: [0, 5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10">
                <img 
                  src="/images/passport%20photo%20edited.jpg" 
                  alt="Vishnu Prabhakar"
                  className="w-60 h-60 rounded-full object-cover border-4 border-white/20"
                />
              </div>
            </motion.div>
            
            {/* Floating elements */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${30 + i * 20}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                I am Pedasanaganti Vishnu Prabhakar, a passionate learner with a strong academic foundation. 
                I completed my 10th grade and Intermediate education at Tirumala Junior Kalasala, Rajahmundry, 
                and I am currently pursuing a B.Tech in Computer Science at KL University, Vijayawada.
              </p>
              
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                I am enthusiastic about exploring new technologies, enhancing my problem-solving skills, 
                and contributing to innovative projects.
              </p>

              <div className="grid gap-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{feature.title}</h4>
                      <p className="text-white/60 text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="/MY_RESUME_UPDATED.pdf"
                download
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;