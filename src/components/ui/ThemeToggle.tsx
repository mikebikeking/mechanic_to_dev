import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import './ThemeToggle.css';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      data-theme={theme}
      className={`theme-toggle-button ${theme}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Track background */}
      <div className={`theme-toggle-track ${theme}`} />

      {/* Sliding circle */}
      <motion.div
        className={`theme-toggle-slider ${theme}`}
        data-theme={theme}
        id="theme-toggle-slider-circle"
        initial={false}
        animate={{ 
          x: isDark ? 14 : -14,
          backgroundColor: theme === 'light' ? '#3B82F6' : '#FFD60A',
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {/* Icon inside circle */}
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 0 : 180,
            scale: isDark ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <Moon size={14} className="text-gunmetal" />
          ) : (
            <Sun size={14} className="text-white" />
          )}
        </motion.div>
      </motion.div>

      {/* Static icons on the track */}
      <div className="theme-toggle-icons">
        <Sun 
          size={12} 
          className="transition-opacity duration-300"
          style={{
            opacity: isDark ? 0.4 : 0,
            color: isDark ? '#FFD60A' : '#3B82F6',
          }}
        />
        <Moon 
          size={12} 
          className="transition-opacity duration-300"
          style={{
            opacity: isDark ? 0 : 0.4,
            color: isDark ? '#FFD60A' : '#3B82F6',
          }}
        />
      </div>
    </motion.button>
  );
};
