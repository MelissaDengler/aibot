import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const TechParticles = () => {
  // Generate different types of particles
  const particles = useMemo(() => {
    const particleTypes = [
      // Small fast particles
      ...Array.from({ length: 50 }).map((_, i) => ({
        id: `small-${i}`,
        type: 'small',
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 2,
        opacity: Math.random() * 0.4 + 0.2,
        xOffset: Math.random() * 40 - 20,
        yOffset: Math.random() * 40 - 20,
        color: 'rgba(226, 232, 240, 0.3)' // silver
      })),
      
      // Medium particles with glow
      ...Array.from({ length: 40 }).map((_, i) => ({
        id: `medium-${i}`,
        type: 'medium',
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 2,
        duration: Math.random() * 6 + 4,
        delay: Math.random() * 3,
        opacity: Math.random() * 0.5 + 0.3,
        xOffset: Math.random() * 60 - 30,
        yOffset: Math.random() * 60 - 30,
        color: 'rgba(147, 197, 253, 0.4)' // blue
      })),

      // Large slow-moving particles
      ...Array.from({ length: 30 }).map((_, i) => ({
        id: `large-${i}`,
        type: 'large',
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 3,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 4,
        opacity: Math.random() * 0.6 + 0.2,
        xOffset: Math.random() * 80 - 40,
        yOffset: Math.random() * 80 - 40,
        color: 'rgba(167, 139, 250, 0.3)' // purple
      }))
    ];

    return particleTypes;
  }, []);

  const getParticleAnimation = (particle: any) => {
    switch (particle.type) {
      case 'small':
        return {
          x: [particle.xOffset * -1, particle.xOffset, particle.xOffset * -1],
          y: [particle.yOffset * -1, particle.yOffset, particle.yOffset * -1],
          opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
          scale: [1, 1.2, 1]
        };
      case 'medium':
        return {
          x: [particle.xOffset * -1, 0, particle.xOffset],
          y: [particle.yOffset, particle.yOffset * -1, particle.yOffset],
          opacity: [particle.opacity, particle.opacity * 2, particle.opacity],
          scale: [1, 1.4, 1]
        };
      case 'large':
        return {
          x: [particle.xOffset, particle.xOffset * -1, particle.xOffset],
          y: [particle.yOffset * -1, particle.yOffset, particle.yOffset * -1],
          opacity: [particle.opacity * 0.8, particle.opacity * 1.5, particle.opacity * 0.8],
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360]
        };
      default:
        return {};
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900/50 via-transparent to-charcoal-800/50" />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.color,
            boxShadow: `
              0 0 ${particle.size * 2}px ${particle.color},
              0 0 ${particle.size * 4}px ${particle.color.replace(/[\d.]+\)$/g, '0.1)')}
            `,
          }}
          animate={getParticleAnimation(particle)}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
        />
      ))}

      {/* Tech grid with faster animation */}
      <motion.div 
        className="absolute inset-0 opacity-40"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{
          duration: 20, // Faster grid movement
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
      
      {/* Enhanced glowing orbs with faster animations */}
      <motion.div
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
          y: [-20, 20, -20]
        }}
        transition={{
          duration: 8, // Faster orb movement
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
          duration: 10,
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
          duration: 6, // Faster movement
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