import { motion } from 'framer-motion';
import { Cog } from 'lucide-react';
import { useState, useEffect } from 'react';

interface GearShiftProps {
  size?: number;
  className?: string;
  variant?: 'default' | 'compact';
  position?: 'left' | 'right';
  isParentHovered?: boolean;
  isParentClicked?: boolean;
}

export const GearShift: React.FC<GearShiftProps> = ({
  size = 16,
  className = '',
  variant = 'default',
  position = 'right',
  isParentHovered = false,
  isParentClicked = false,
}) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (isParentHovered || isParentClicked) {
      setRotation(360);
    } else {
      setRotation(0);
    }
  }, [isParentHovered, isParentClicked]);

  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      animate={{
        rotate: rotation,
        scale: isParentClicked ? 0.9 : 1,
      }}
      transition={{
        rotate: {
          duration: 0.3,
          ease: 'easeOut',
        },
        scale: {
          duration: 0.1,
        },
      }}
      style={{
        display: 'inline-flex',
      }}
    >
      <Cog 
        size={size} 
        className="text-current"
        strokeWidth={variant === 'compact' ? 2.5 : 2}
      />
    </motion.div>
  );
};

