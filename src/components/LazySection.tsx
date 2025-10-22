import { Suspense, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

const DefaultFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold"></div>
  </div>
);

export const LazySection: React.FC<LazySectionProps> = ({
  children,
  fallback = <DefaultFallback />,
  threshold = 0.1,
  rootMargin = '3000px',
  className = '',
}) => {
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={className}>
      {inView ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        <div className="min-h-[400px] flex items-center justify-center">
          <div className="animate-pulse bg-gunmetal/30 rounded-lg w-full h-64"></div>
        </div>
      )}
    </div>
  );
};
