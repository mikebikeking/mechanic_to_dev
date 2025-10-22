import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export const LogoAnimation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide animation after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-gunmetal"
        >
          <div className="relative">
            {/* Animated bicycle wheel */}
            <motion.svg
              width="200"
              height="200"
              viewBox="0 0 100 100"
              initial={{ rotate: 0 }}
              animate={{ rotate: 720 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              {/* Outer rim */}
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-blue-500 dark:text-gold"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-blue-500/50 dark:text-gold/50"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
              />
              
              {/* Spokes */}
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 360) / 12;
                const rad = (angle * Math.PI) / 180;
                const x1 = 50 + 10 * Math.cos(rad);
                const y1 = 50 + 10 * Math.sin(rad);
                const x2 = 50 + 42 * Math.cos(rad);
                const y2 = 50 + 42 * Math.sin(rad);
                return (
                  <motion.line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-blue-500/40 dark:text-gold/40"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                  />
                );
              })}
              
              {/* Hub */}
              <motion.circle
                cx="50"
                cy="50"
                r="8"
                fill="currentColor"
                className="text-blue-500/30 dark:text-gold/30"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              />
              <motion.circle
                cx="50"
                cy="50"
                r="4"
                fill="currentColor"
                className="text-blue-500 dark:text-gold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.2 }}
              />
            </motion.svg>

            {/* Brand text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <div className="text-center">
                <motion.h1
                  className="text-3xl font-heading text-gray-900 dark:text-textPrimary mb-1"
                  initial={{ letterSpacing: "0.5em", opacity: 0 }}
                  animate={{ letterSpacing: "0.1em", opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                >
                  MICHAEL KING
                </motion.h1>
                <motion.div
                  className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-textSecondary font-mono"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                >
                  <span>🔧</span>
                  <motion.div
                    className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-blue-500 dark:from-gold dark:to-gold"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 2.4 }}
                  />
                  <span>💻</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-48 h-1 bg-gray-200 dark:bg-gunmetal/50 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-gold dark:to-torch"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

