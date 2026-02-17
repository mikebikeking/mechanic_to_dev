import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Cog } from 'lucide-react';

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
          initial={{ clipPath: 'inset(0 0 0 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: 'var(--color-bg)' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="flex items-center justify-center mb-4"
            >
              <Cog size={40} className="text-safety" />
            </motion.div>
            <div className="text-3xl font-heading" style={{ color: 'var(--color-text-primary)' }}>
              MK
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
