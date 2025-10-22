import { BoxIcon, Cog, PaletteIcon, WrenchIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });
  const skillCategories = [{
    icon: BoxIcon,
    title: 'FRAME',
    subtitle: 'Core Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'JavaScript', 'HTML5/CSS3'],
    color: 'gold'
  }, {
    icon: Cog,
    title: 'DRIVETRAIN',
    subtitle: 'State & Logic',
    skills: ['Context API', 'Redux', 'REST APIs', 'Node.js', 'Firebase'],
    color: 'blueprint'
  }, {
    icon: PaletteIcon,
    title: 'PAINT',
    subtitle: 'Styling & Animation',
    skills: ['TailwindCSS', 'GSAP', 'Framer Motion', 'Responsive Design'],
    color: 'torch'
  }, {
    icon: WrenchIcon,
    title: 'ACCESSORIES',
    subtitle: 'Tools',
    skills: ['Git/GitHub', 'Figma', 'VS Code', 'Vercel', 'Testing Library'],
    color: 'gold'
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };
  return <section id="skills" className="py-20 bg-white/80 dark:bg-black/50 backdrop-blur-sm relative overflow-hidden">
      {/* Animated background */}
      <motion.div className="absolute inset-0 opacity-10" style={{
      backgroundImage: 'radial-gradient(circle, rgba(255, 214, 10, 0.1) 1px, transparent 1px)',
      backgroundSize: '50px 50px'
    }} animate={{
      backgroundPosition: ['0px 0px', '50px 50px']
    }} transition={{
      duration: 20,
      repeat: Infinity,
      ease: 'linear'
    }} />
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
            THE DRIVETRAIN
          </h2>
          <p className="text-xl text-gray-600 dark:text-textSecondary font-heading">THE TOOLKIT</p>
          <motion.div className="w-24 h-1 bg-blueprint mx-auto mt-4" initial={{
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
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => <motion.div key={index} variants={cardVariants} whileHover={{
          y: -10,
          scale: 1.02,
          boxShadow: '0 20px 40px rgba(255, 214, 10, 0.3)'
        }} className="group p-6 bg-white dark:bg-gunmetal border-2 border-blue-300 dark:border-blueprint/30 hover:border-blue-600 dark:hover:border-gold transition-all duration-300 relative overflow-hidden">
              {/* Animated background gradient */}
              <motion.div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/10 group-hover:to-transparent" initial={false} transition={{
            duration: 0.3
          }} />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <motion.div animate={{
                rotate: [0, 10, 0, -10, 0]
              }} transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.3
              }}>
                    <category.icon className={`text-${category.color} group-hover:scale-110 transition-transform`} size={32} />
                  </motion.div>
                  <motion.div className="w-8 h-8">
                    <motion.svg viewBox="0 0 100 100" className="w-full h-full" animate={{
                  rotate: 360
                }} transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: index * 0.2
                }}>
                      {/* Outer rim */}
                      <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(10, 132, 255, 0.3)" strokeWidth="2" />
                      <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(10, 132, 255, 0.2)" strokeWidth="1" />
                      {/* Spokes */}
                      {Array.from({
                    length: 12
                  }).map((_, i) => {
                    const angle = i * 360 / 12;
                    const rad = angle * Math.PI / 180;
                    const x1 = 50 + 10 * Math.cos(rad);
                    const y1 = 50 + 10 * Math.sin(rad);
                    const x2 = 50 + 42 * Math.cos(rad);
                    const y2 = 50 + 42 * Math.sin(rad);
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(10, 132, 255, 0.25)" strokeWidth="1" />;
                  })}
                      {/* Hub */}
                      <circle cx="50" cy="50" r="8" fill="rgba(10, 132, 255, 0.2)" stroke="rgba(10, 132, 255, 0.4)" strokeWidth="2" />
                      <circle cx="50" cy="50" r="4" fill="rgba(10, 132, 255, 0.3)" />
                    </motion.svg>
                  </motion.div>
                </div>
                <h3 className="text-2xl font-heading text-gray-900 dark:text-textPrimary mb-1 group-hover:text-blue-600 dark:group-hover:text-gold transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-textSecondary font-mono mb-4">
                  {category.subtitle}
                </p>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => <motion.li key={skillIndex} initial={{
                opacity: 0,
                x: -10
              }} animate={inView ? {
                opacity: 1,
                x: 0
              } : {}} transition={{
                duration: 0.3,
                delay: index * 0.1 + skillIndex * 0.05
              }} className="text-gray-700 dark:text-textSecondary text-sm flex items-center group/item">
                      <motion.span className="w-1.5 h-1.5 bg-blueprint mr-2 rounded-full" whileHover={{
                  scale: 2,
                  backgroundColor: '#FFD60A'
                }} />
                      <span className="group-hover/item:text-textPrimary transition-colors">
                        {skill}
                      </span>
                    </motion.li>)}
                </ul>
              </div>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
}