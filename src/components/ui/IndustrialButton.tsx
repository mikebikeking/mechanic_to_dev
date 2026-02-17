import { motion } from 'framer-motion';

interface IndustrialButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'outline';
  as?: 'button' | 'a';
  target?: string;
  rel?: string;
}

export function IndustrialButton({
  children,
  className = '',
  onClick,
  href,
  variant = 'primary',
  as = 'button',
  target,
  rel,
}: IndustrialButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-8 py-4 font-heading text-lg transition-all duration-200 cursor-pointer';

  const variantClasses = variant === 'primary'
    ? 'bg-safety text-garage shadow-[inset_0_0_0_2px_var(--color-border)] hover:shadow-[inset_0_0_0_2px_#FF6B00] active:translate-y-[2px]'
    : 'bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-safety hover:text-safety active:translate-y-[2px]';

  const classes = `${baseClasses} ${variantClasses} ${className}`;

  if (as === 'a' || href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        onClick={onClick}
        whileTap={{ y: 2 }}
        transition={{ duration: 0.1 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      whileTap={{ y: 2 }}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.button>
  );
}
