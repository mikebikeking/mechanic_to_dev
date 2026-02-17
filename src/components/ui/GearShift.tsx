import { motion } from 'framer-motion';
import { Cog } from 'lucide-react';

interface GearShiftProps {
  size?: number;
  className?: string;
}

export const GearShift: React.FC<GearShiftProps> = ({
  size = 16,
  className = '',
}) => {
  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      whileHover={{ rotate: 90 }}
      transition={{ duration: 0.3 }}
    >
      <Cog size={size} className="text-current" />
    </motion.div>
  );
};
