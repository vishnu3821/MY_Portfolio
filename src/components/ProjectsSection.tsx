import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Zap, Shield } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Disaster Management System",
      description: "A comprehensive web application for disaster preparedness, response coordination, and resource management with real-time alerts and mapping functionality.",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      status: "Live Demo",
      icon: Shield,
      gradient: "from-red-400 to-orange-400",
      features: ["Real-time Alerts", "Resource Tracking", "Emergency Contacts", "Interactive Maps"],
      link: "https://steady-malabi-8ac3bb.netlify.app/"
    },
    {
      title: "Panzer Tanker",
      description: "An academic project showcasing advanced game development concepts with 3D graphics, physics simulation, and multiplayer capabilities.",
      technologies: ["Java", "OpenGL", "Physics Engine"],
      status: "Academic Project",
      icon: Zap,
      gradient: "from-blue-400 to-purple-400",
      features: ["3D Graphics", "Physics Engine", "Multiplayer", "AI Opponents"],
      link: "#"
    },
    {
      title: "SkillRatha – Smart Resume Builder",
      description: "A smart, AI-powered resume builder designed to help students and professionals create tailored, professional resumes with ease.",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
      status: "Live Demo",
      icon: Zap,
      gradient: "from-purple-500 to-pink-500",
      features: ["Smart Resume Builder", "Profile Customization", "User-Friendly UI", "Secure Authentication"],
      link: "https://skillrathacob2025.vercel.app/"
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                y: -10, 
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div 
                className="relative block bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform-gpu"
                onClick={() => project.link && window.open(project.link, '_blank', 'noopener,noreferrer')}
                style={{ cursor: project.link ? 'pointer' : 'default' }}
              >
                {/* Floating animation background */}
                <motion.div
                  animate={{ 
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    opacity: [0, 0.1, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10`}
                />

                {/* Project Icon */}
                <div className="p-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 bg-gradient-to-r ${project.gradient} bg-opacity-20 rounded-xl mb-4`}
                  >
                    <project.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-white/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 text-xs rounded-full ${project.status === 'Live Demo' ? 'bg-green-900/30 text-green-400' : project.status === 'Academic' ? 'bg-blue-900/30 text-blue-400' : 'bg-yellow-900/30 text-yellow-400'}`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <a 
                        href={project.link || '#'} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => !project.link && e.preventDefault()}
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-white/70" />
                      </a>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/10 rounded-lg text-xs text-white/80"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-300 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 rounded-full text-sm text-white border border-white/10`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="mb-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Live Demo' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                      project.status === 'Academic' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                      'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 justify-center">
                    {project.status === 'Live Demo' && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (project.link) {
                            window.open(project.link, '_blank', 'noopener,noreferrer');
                          }
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        View
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Hover Effects */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;