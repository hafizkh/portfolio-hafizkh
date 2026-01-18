import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface AnimatedBackgroundProps {
  particleCount?: number;
  variant?: 'particles' | 'blobs' | 'mesh';
}

export default function AnimatedBackground({
  particleCount = 40,
  variant = 'mesh',
}: AnimatedBackgroundProps) {
  const { isDark } = useTheme();
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      })),
    [particleCount]
  );

  if (variant === 'blobs') {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? 'bg-dark-900' : 'bg-light-100'}`} />
        <motion.div
          className={`absolute w-[500px] h-[500px] rounded-full filter blur-[100px] ${isDark ? 'bg-purple-500/30' : 'bg-purple-500/15'}`}
          animate={{
            x: [0, 100, 50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '-10%', left: '-10%' }}
        />
        <motion.div
          className={`absolute w-[400px] h-[400px] rounded-full filter blur-[100px] ${isDark ? 'bg-cyan-500/30' : 'bg-cyan-500/15'}`}
          animate={{
            x: [0, -80, 40, 0],
            y: [0, 80, -40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{ top: '20%', right: '-5%' }}
        />
        <motion.div
          className={`absolute w-[450px] h-[450px] rounded-full filter blur-[100px] ${isDark ? 'bg-pink-500/20' : 'bg-pink-500/10'}`}
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -60, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          style={{ bottom: '-10%', left: '30%' }}
        />
        <motion.div
          className={`absolute w-[350px] h-[350px] rounded-full filter blur-[100px] ${isDark ? 'bg-blue-500/20' : 'bg-blue-500/10'}`}
          animate={{
            x: [0, -40, 80, 0],
            y: [0, 60, -20, 0],
            scale: [1, 0.95, 1.15, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
          style={{ bottom: '20%', right: '20%' }}
        />
      </div>
    );
  }

  if (variant === 'particles') {
    return (
      <div className={`fixed inset-0 -z-10 overflow-hidden ${isDark ? 'bg-dark-900' : 'bg-light-100'}`}>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${isDark ? 'bg-white/20' : 'bg-gray-400/30'}`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
        {/* Gradient overlays */}
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent ${isDark ? 'via-dark-900/50 to-dark-900' : 'via-light-100/50 to-light-100'}`} />
        <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${isDark ? 'from-purple-900/20' : 'from-purple-400/10'} via-transparent to-transparent`} />
      </div>
    );
  }

  // Default: mesh gradient
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className={`absolute inset-0 ${isDark ? 'bg-dark-900' : 'bg-light-100'}`} />
      {/* Gradient orbs */}
      <div className="absolute inset-0">
        <motion.div
          className={`absolute w-[600px] h-[600px] rounded-full ${isDark ? 'opacity-30' : 'opacity-20'}`}
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)',
            top: '-20%',
            left: '-10%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: isDark ? [0.2, 0.35, 0.2] : [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`absolute w-[500px] h-[500px] rounded-full ${isDark ? 'opacity-30' : 'opacity-20'}`}
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)',
            top: '30%',
            right: '-15%',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: isDark ? [0.25, 0.4, 0.25] : [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className={`absolute w-[550px] h-[550px] rounded-full ${isDark ? 'opacity-20' : 'opacity-15'}`}
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%)',
            bottom: '-15%',
            left: '20%',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: isDark ? [0.15, 0.3, 0.15] : [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
      </div>
      {/* Subtle grid pattern overlay */}
      <div
        className={`absolute inset-0 ${isDark ? 'opacity-[0.02]' : 'opacity-[0.03]'}`}
        style={{
          backgroundImage: isDark
            ? `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`
            : `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      {/* Floating particles */}
      {particles.slice(0, 20).map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${isDark ? 'bg-white/10' : 'bg-gray-400/20'}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size * 1.5,
            height: particle.size * 1.5,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
