import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { Link } from 'react-scroll';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  to?: string; // For react-scroll
  strength?: number;
  variant?: 'primary' | 'outline';
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  to,
  strength = 0.3,
  variant = 'primary',
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClass = variant === 'primary' ? 'magnetic-btn' : 'btn-outline';

  const content = (
    <motion.span
      className={`${baseClass} ${className} flex items-center justify-center gap-2`}
      style={{ x: xSpring, y: ySpring }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.span>
  );

  // Scroll link
  if (to) {
    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-block cursor-pointer"
      >
        <Link to={to} spy={true} smooth={true} offset={-64} duration={500}>
          {content}
        </Link>
      </div>
    );
  }

  // External link
  if (href) {
    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      </div>
    );
  }

  // Button
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
      onClick={onClick}
    >
      {content}
    </div>
  );
}
