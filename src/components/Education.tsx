import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCapIcon, AwardIcon, WrenchIcon } from 'lucide-react';
export function Education() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const credentials = [{
    icon: GraduationCapIcon,
    title: 'BS Computer Science',
    institution: 'Southern New Hampshire University',
    year: '2019-2024',
    color: 'gold'
  }, {
    icon: AwardIcon,
    title: 'Meta Front-End Developer Certificate',
    institution: 'Meta',
    year: 'Sep 2025',
    color: 'blueprint'
  }, {
    icon: WrenchIcon,
    title: 'CompTIA A+',
    institution: 'CompTIA',
    year: 'Mar 2025',
    color: 'torch'
  }, {
    icon: WrenchIcon,
    title: 'CompTIA IT Fundamentals',
    institution: 'CompTIA',
    year: 'Feb 2025',
    color: 'gold'
  }];
  return <section className="py-20 bg-white/80 dark:bg-gunmetal/50 backdrop-blur-sm relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blueprint/5 rounded-full blur-3xl opacity-30" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-blue-700 dark:text-gold mb-4">
            EDUCATION & CERTIFICATIONS
          </h2>
          <motion.div 
            className="w-24 h-1 bg-blue-500 dark:bg-blueprint mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {credentials.map((cred, index) => {
            // Map colors to proper Tailwind classes for both light and dark modes
            const colorClasses = {
              gold: 'bg-yellow-100 dark:bg-gold/20 border-yellow-300 dark:border-gold/30 text-yellow-700 dark:text-gold',
              blueprint: 'bg-blue-100 dark:bg-blueprint/20 border-blue-300 dark:border-blueprint/30 text-blue-700 dark:text-blueprint',
              torch: 'bg-orange-100 dark:bg-torch/20 border-orange-300 dark:border-torch/30 text-orange-700 dark:text-torch'
            };
            const colorClass = colorClasses[cred.color as keyof typeof colorClasses];
            
            return <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group p-6 bg-blue-50 dark:bg-gunmetal border-2 border-blue-200 dark:border-blueprint/30 hover:border-blue-600 dark:hover:border-gold transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 border ${colorClass}`}>
                  <cred.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading text-gray-900 dark:text-textPrimary mb-1 group-hover:text-blue-600 dark:group-hover:text-gold transition-colors">
                    {cred.title}
                  </h3>
                  <p className="text-gray-600 dark:text-textSecondary text-sm mb-1">
                    {cred.institution}
                  </p>
                  <p className="text-blue-600 dark:text-blueprint text-xs font-mono">
                    {cred.year}
                  </p>
                </div>
              </div>
            </motion.div>;
          })}
        </motion.div>
      </div>
    </section>;
}