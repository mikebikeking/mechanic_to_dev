import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-gunmetal"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <div className="text-3xl font-heading text-blue-700 dark:text-gold mb-2">
              MK
            </div>
            <div className="w-12 h-0.5 bg-blue-500 dark:bg-gold mx-auto" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
