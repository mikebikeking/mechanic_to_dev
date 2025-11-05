import { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { GearShift } from './GearShift';

interface MagneticLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  intensity?: number;
  target?: string;
  rel?: string;
  'aria-label'?: string;
  download?: boolean;
  showGear?: boolean;
  gearPosition?: 'left' | 'right';
}

export const MagneticLink: React.FC<MagneticLinkProps> = ({
  children,
  href,
  className = '',
  intensity = 0.3,
  target,
  rel,
  'aria-label': ariaLabel,
  download = false,
  showGear = true,
  gearPosition = 'right',
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * intensity);
    y.set(distanceY * intensity);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      download={download}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
      whileHover={{ scale: isHovered ? 1.05 : 1 }}
      whileTap={{ 
        scale: 0.95,
        y: 2, // Mechanical "click" effect
      }}
      transition={{ 
        duration: 0.2,
        y: { duration: 0.1, ease: 'easeOut' },
      }}
    >
      {showGear && gearPosition === 'left' && (
        <GearShift 
          size={16} 
          variant="compact" 
          className="mr-2"
          isParentHovered={isHovered}
          isParentClicked={false}
        />
      )}
      {children}
      {showGear && gearPosition === 'right' && (
        <GearShift 
          size={16} 
          variant="compact" 
          className="ml-2"
          isParentHovered={isHovered}
          isParentClicked={false}
        />
      )}
    </motion.a>
  );
};

