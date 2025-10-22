import { WrenchIcon, CodeIcon, UsersIcon, GaugeIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MikeImage from '../assets/Mike_192.jpg';
export function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });
  const parallels = [{
    icon: WrenchIcon,
    from: 'Diagnosis',
    to: 'Debugging'
  }, {
    icon: CodeIcon,
    from: 'Attention to Detail',
    to: 'Code Quality'
  }, {
    icon: UsersIcon,
    from: 'Customer Service',
    to: 'User Experience'
  }, {
    icon: GaugeIcon,
    from: 'Performance Tuning',
    to: 'Web Vitals'
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  return <section id="about" className="py-20 bg-gray-50/80 dark:bg-gunmetal/50 backdrop-blur-sm relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: -30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-blue-700 dark:text-gold mb-4">
            THE MECHANIC'S CODE
          </h2>
          <motion.div className="w-24 h-1 bg-blueprint mx-auto" initial={{
          width: 0
        }} whileInView={{
          width: 96
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} />
        </motion.div>
        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={inView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8
        }} className="flex justify-center">
            <motion.div className="relative w-64 h-64 sm:w-80 sm:h-80" whileHover={{
            scale: 1.05
          }} transition={{
            duration: 0.3
          }}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 to-purple-200/40 dark:from-blueprint/20 dark:to-gold/20 rounded-lg border-2 border-blue-300 dark:border-blueprint/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  </div>
                  <img src={MikeImage} alt="Portrait of Mike" className="rounded-lg shadow-lg w-full h-full object-cover" />
              </div>
            </motion.div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={inView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8
        }} className="space-y-6">
            <motion.h3 initial={{
            opacity: 0
          }} animate={inView ? {
            opacity: 1
          } : {}} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="text-3xl font-heading text-textPrimary">
              FROM TUNING BIKES TO TUNING PIXELS
            </motion.h3>
            <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="space-y-4 text-textSecondary leading-relaxed">
              <motion.p variants={itemVariants}>
                After 20 years as a bicycle mechanic and service manager, I
                discovered that the same precision, problem-solving, and
                attention to detail that made me successful in the cycling
                industry translates perfectly to frontend development.
              </motion.p>
              <motion.p variants={itemVariants}>
                From diagnosing complex mechanical issues to debugging intricate
                code problems, from tuning bikes for peak performance to
                optimizing web applications for speed and efficiency—the
                parallels are striking.
              </motion.p>
              <motion.p variants={itemVariants}>
                Now I bring that same meticulous craftsmanship to building
                modern, high-performance web applications that are engineered to
                perfection.
              </motion.p>
            </motion.div>
            <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {parallels.map((item, index) => <motion.div key={index} variants={itemVariants} whileHover={{
              scale: 1.05,
            }} className="p-4 bg-white dark:bg-gunmetal border-2 border-blue-300 dark:border-blueprint/30 hover:border-blue-600 dark:hover:border-gold hover:shadow-lg hover:shadow-blue-600/20 dark:hover:shadow-gold/20 transition-all group cursor-default">
                  <item.icon className="text-blue-600 dark:text-blueprint group-hover:text-blue-700 dark:group-hover:text-gold transition-colors mb-2" size={24} />
                  <div className="font-mono text-xs text-gray-700 dark:text-textSecondary">
                    {item.from} → <span className="text-blue-700 dark:text-gold font-semibold">{item.to}</span>
                  </div>
                </motion.div>)}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
}