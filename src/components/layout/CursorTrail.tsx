import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface TrailDot {
  id: number;
  x: number;
  y: number;
}

export function CursorTrail() {
  const [isVisible, setIsVisible] = useState(false);
  const [trails, setTrails] = useState<TrailDot[]>([]);
  const trailIdRef = useRef(0);

  // Main cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring animation for smooth following
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    let lastTime = Date.now();
    const trailInterval = 50; // Add trail dot every 50ms

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);

      // Add trail dots at intervals
      const now = Date.now();
      if (now - lastTime > trailInterval) {
        setTrails((prev) => {
          const newTrail = {
            id: trailIdRef.current++,
            x: e.clientX,
            y: e.clientY,
          };
          // Keep only last 10 trail dots
          return [...prev.slice(-9), newTrail];
        });
        lastTime = now;
      }
    };

    const hideCursor = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseleave', hideCursor);
    };
  }, [cursorX, cursorY]);

  // Clean up old trail dots
  useEffect(() => {
    const interval = setInterval(() => {
      setTrails((prev) => prev.slice(1));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden md:block">
      {/* Trail dots */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute w-2 h-2 bg-blue-500 dark:bg-gold rounded-full"
          style={{
            left: trail.x - 4,
            top: trail.y - 4,
            opacity: (index + 1) / trails.length,
          }}
        />
      ))}

      {/* Main cursor ring */}
      <motion.div
        className="absolute w-10 h-10 border-2 border-blue-500 dark:border-gold rounded-full mix-blend-difference"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: -20,
          y: -20,
        }}
      />

      {/* Inner cursor dot */}
      <motion.div
        className="absolute w-2 h-2 bg-blue-500 dark:bg-gold rounded-full"
        style={{
          left: cursorX,
          top: cursorY,
          x: -4,
          y: -4,
        }}
      />
    </div>
  );
}