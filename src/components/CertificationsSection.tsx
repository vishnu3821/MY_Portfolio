import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const CertificationsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Lingua Skills Certification",
      issuer: "Lingua Skills",
      date: "2023",
      description: "Certification in language proficiency and communication skills.",
      skills: ["Language Proficiency", "Communication", "Verbal Skills"],
      gradient: "from-indigo-400 to-purple-400",
      pdf: "/certificates/Lingua_skill_certificate.jpg"
    },
    {
      title: "JPMorgan Investment Banking",
      issuer: "JPMorgan Chase & Co.",
      date: "2024",
      description: "Certification in investment banking fundamentals, financial analysis, and market strategies.",
      skills: ["Investment Banking", "Financial Analysis", "Market Strategies"],
      gradient: "from-blue-400 to-cyan-400",
      pdf: "/certificates/JPMORGAN INVESTEMENT CERTIFIVATE.pdf"
    },
    {
      title: "Data Analytics Certificate",
      issuer: "Professional Certification",
      date: "2024",
      description: "Comprehensive training in data analysis, visualization, and interpretation techniques.",
      skills: ["Data Analysis", "Visualization", "Statistics", "Python"],
      gradient: "from-green-400 to-teal-400",
      pdf: "/certificates/dataAnalyticscertificate.pdf"
    },
    {
      title: "Software Engineer Internship",
      issuer: "Professional Certification",
      date: "2023",
      description: "Hands-on experience in software development, coding, and team collaboration.",
      skills: ["Software Development", "Coding", "Teamwork", "Problem Solving"],
      gradient: "from-purple-400 to-pink-400",
      pdf: "/certificates/software_engineer_intern certificate.pdf"
    },
    {
      title: "Resume Writing & Job Interviewing",
      issuer: "HP Certification",
      date: "2023",
      description: "Professional certification in resume building and interview preparation techniques.",
      skills: ["Resume Writing", "Interview Skills", "Career Development"],
      gradient: "from-yellow-400 to-orange-400",
      pdf: "/certificates/(HP CERTIFICATE)Resume Writing and Job Interviewing.pdf"
    },
    {
      title: "AI-ML Virtual Internship",
      issuer: "EduSkills | AICTE | Google for Developers",
      date: "Jul - Sep 2025",
      description: "10-week intensive program on Artificial Intelligence & Machine Learning with hands-on projects and real-world problem statements. Mentored under the Google for Developers ecosystem.",
      skills: ["Python", "Machine Learning", "Data Preprocessing", "Model Deployment"],
      gradient: "from-red-500 to-purple-600",
      pdf: "/certificates/eduskills_ai_ml_internship.pdf"
    }
  ];

  return (
    <section id="certifications" ref={ref} className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform-gpu">
                {/* Animated background gradient */}
                <motion.div
                  animate={{ 
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                  className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                />

                {/* Certification Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-3 bg-gradient-to-r ${cert.gradient} bg-opacity-20 rounded-xl mb-4 relative z-10`}
                >
                  <Award className="w-6 h-6 text-white" />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl"
                  />
                </motion.div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  <a 
                    href={cert.pdf} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {cert.title}
                  </a>
                </h3>

                <div className="flex items-center gap-2 text-purple-300 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{cert.issuer} • {cert.date}</span>
                </div>

                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className={`px-2 py-1 bg-gradient-to-r ${cert.gradient} bg-opacity-20 rounded-lg text-xs text-white/90 border border-white/10`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Verify Button */}
                <a 
                  href={cert.pdf} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-md border border-blue-500/30 rounded-lg text-white font-medium hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-600/30 transition-all duration-300 group/button"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/button:animate-bounce" />
                    View Certificate
                  </motion.div>
                </a>

                {/* Floating glow effect */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Certification badge glow */}
                <motion.div
                  className={`absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r ${cert.gradient} rounded-full opacity-60 blur-sm`}
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 0.9, 0.6]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;