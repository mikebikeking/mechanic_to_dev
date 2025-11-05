import { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { GearShift } from './GearShift';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  as?: 'button' | 'a';
  href?: string;
  showGear?: boolean;
  gearPosition?: 'left' | 'right';
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  intensity = 0.3,
  onClick,
  disabled = false,
  type = 'button',
  as = 'button',
  href,
  showGear = true,
  gearPosition = 'right',
}) => {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (!ref.current || disabled) return;

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

  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  const Component = motion[as];
  const props = as === 'a' 
    ? { href, ref: ref as React.Ref<HTMLAnchorElement> }
    : { type, disabled, ref: ref as React.Ref<HTMLButtonElement> };

  return (
    <Component
      {...props}
      className={className}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
      whileHover={{ scale: isHovered ? 1.05 : 1 }}
      whileTap={{ 
        scale: disabled ? 1 : 0.95,
        y: disabled ? 0 : 2, // Mechanical "click" effect
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
    </Component>
  );
};

