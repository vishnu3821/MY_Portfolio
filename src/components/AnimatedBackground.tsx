import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-purple-800/30 to-pink-900/20 animate-pulse" />
      </div>
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-sm"
          style={{
            width: Math.random() * 6 + 4,
            height: Math.random() * 6 + 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Flowing Blobs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`blob-${i}`}
          className="absolute rounded-full filter blur-3xl"
          style={{
            width: 300 + Math.random() * 200,
            height: 300 + Math.random() * 200,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${
              i === 0 
                ? 'rgba(59, 130, 246, 0.15)' 
                : i === 1 
                ? 'rgba(139, 92, 246, 0.15)' 
                : 'rgba(236, 72, 153, 0.15)'
            } 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 5,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;