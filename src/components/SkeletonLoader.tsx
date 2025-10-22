import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  className?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ className = '' }) => {
  return (
    <motion.div
      className={`bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gunmetal/50 dark:via-blueprint/20 dark:to-gunmetal/50 rounded ${className}`}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        backgroundSize: '200% 100%',
      }}
    />
  );
};

export const StatCardSkeleton = () => (
  <div className="bg-blue-50 dark:bg-gunmetal/50 border border-blue-200 dark:border-blueprint/20 p-6 text-center">
    <SkeletonLoader className="h-8 w-24 mx-auto mb-2" />
    <SkeletonLoader className="h-4 w-32 mx-auto" />
  </div>
);

