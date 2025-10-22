import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    // Hide loading screen after animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gunmetal"
        >
          <div className="text-center">
            {/* Animated Bicycle Wheel */}
            <motion.svg
              width="120"
              height="120"
              viewBox="0 0 100 100"
              className="mx-auto mb-8"
            >
              {/* Outer rim */}
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#FFD700"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />

              {/* Rotating spokes */}
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                style={{ originX: '50px', originY: '50px' }}
              >
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i * 360) / 12;
                  const rad = (angle * Math.PI) / 180;
                  const x1 = 50 + 10 * Math.cos(rad);
                  const y1 = 50 + 10 * Math.sin(rad);
                  const x2 = 50 + 42 * Math.cos(rad);
                  const y2 = 50 + 42 * Math.sin(rad);
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#FFD700"
                      strokeWidth="1"
                      opacity="0.6"
                    />
                  );
                })}
              </motion.g>

              {/* Hub */}
              <circle cx="50" cy="50" r="8" fill="#FFD700" opacity="0.3" />
              <circle cx="50" cy="50" r="4" fill="#FFD700" />
            </motion.svg>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <h1 className="text-4xl font-heading text-gold mb-2">
                MICHAEL KING
              </h1>
              <p className="text-blueprint font-mono text-sm">
                Frontend Developer
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 mx-auto">
              <div className="h-1 bg-gunmetal/50 rounded-full overflow-hidden mb-2">
                <motion.div
                  className="h-full bg-gradient-to-r from-gold via-torch to-blueprint"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <motion.p
                className="text-textSecondary text-xs font-mono text-center"
                key={progress}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
              >
                {progress}%
              </motion.p>
            </div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-textSecondary text-sm font-heading mt-4"
            >
              LOADING PORTFOLIO...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}