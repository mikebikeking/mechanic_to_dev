import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function MagneticCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 400 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    setIsVisible(true);

    const target = e.target as HTMLElement;
    const interactive = target.closest('a, button, [data-magnetic]');
    setIsHovering(!!interactive);

    if (interactive) {
      const rect = (interactive as HTMLElement).getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = (e.clientX - centerX) * 0.15;
      const dy = (e.clientY - centerY) * 0.15;
      (interactive as HTMLElement).style.transform = `translate(${dx}px, ${dy}px)`;
      (interactive as HTMLElement).style.transition = 'transform 0.2s ease-out';
    }
  }, [cursorX, cursorY]);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    const resetElements = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-magnetic]');
      if (interactive) {
        (interactive as HTMLElement).style.transform = '';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseleave', resetElements, true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseleave', resetElements, true);
    };
  }, [handleMouseMove, handleMouseLeave]);

  if (!isVisible) return null;

  const lineSize = isHovering ? 30 : 20;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden md:block">
      <motion.div
        className="absolute bg-safety"
        style={{
          left: x,
          top: y,
          width: lineSize,
          height: 1,
          x: -lineSize / 2,
          y: -0.5,
        }}
        animate={{ width: lineSize }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute bg-safety"
        style={{
          left: x,
          top: y,
          width: 1,
          height: lineSize,
          x: -0.5,
          y: -lineSize / 2,
        }}
        animate={{ height: lineSize }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}
