import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const TechParticles = () => {
  // Generate random positions for particles with more variety
  const particles = useMemo(() => Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 3, // Bigger particles
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.5 + 0.2, // Higher opacity
    xOffset: Math.random() * 100 - 50, // Random horizontal movement range
    yOffset: Math.random() * 100 - 50  // Random vertical movement range
  })), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900/50 via-transparent to-charcoal-800/50" />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-silver-400/30 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: `
              0 0 ${particle.size * 2}px rgba(255, 255, 255, 0.3),
              0 0 ${particle.size * 4}px rgba(255, 255, 255, 0.2)
            `,
          }}
          animate={{
            x: [
              particle.xOffset * -1,
              particle.xOffset,
              particle.xOffset * -1
            ],
            y: [
              particle.yOffset * -1,
              particle.yOffset,
              particle.yOffset * -1
            ],
            opacity: [
              particle.opacity,
              particle.opacity * 1.5,
              particle.opacity
            ],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Tech grid with animation */}
      <motion.div 
        className="absolute inset-0 opacity-40"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148,163,184,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148,163,184,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Enhanced glowing orbs */}
      <motion.div
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
          y: [-20, 20, -20]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0.1) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <motion.div
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1.2, 1, 1.2],
          x: [20, -20, 20],
          y: [20, -20, 20]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-40 right-20 w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(168,85,247,0.1) 40%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      <motion.div
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.3, 1],
          x: [-30, 30, -30],
          y: [-30, 30, -30]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[40%] right-[30%] w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.25) 0%, rgba(236,72,153,0.08) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Depth overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/40 via-transparent to-transparent" />
    </div>
  );
};

export default TechParticles; 