import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glareEnabled?: boolean;
  tiltAmount?: number;
}

export default function TiltCard({
  children,
  className = '',
  glareEnabled = true,
  tiltAmount = 10,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 30 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const rotateX = useTransform(ySpring, [-0.5, 0.5], [`${tiltAmount}deg`, `-${tiltAmount}deg`]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [`-${tiltAmount}deg`, `${tiltAmount}deg`]);

  // Glare position
  const glareX = useTransform(xSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(ySpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="relative h-full">
        {children}
        {glareEnabled && (
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden"
            style={{
              background: `radial-gradient(circle at ${glareX}px ${glareY}px, rgba(255,255,255,0.15) 0%, transparent 50%)`,
            }}
          />
        )}
      </div>
    </motion.div>
  );
}
