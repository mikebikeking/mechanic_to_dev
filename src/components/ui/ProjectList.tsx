import { useState } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../data/projects';
import { OptimizedImage } from './OptimizedImage';
import { MECHANICAL_EASE } from '../../utils/animations';
import { IndustrialButton } from './IndustrialButton';

interface ProjectListProps {
  projects: Project[];
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="border-b border-[var(--color-border)] cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center justify-between py-6 px-4 hover:bg-[var(--color-surface)] transition-colors">
        <div className="flex items-center gap-6 flex-1 min-w-0">
          <span className="font-mono text-safety text-sm flex-shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="min-w-0">
            <h3 className="font-heading text-xl md:text-2xl text-[var(--color-text-primary)] truncate">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {project.tech.map((tech, i) => (
                <span key={i} className="font-mono text-xs text-steel">
                  {tech}{i < project.tech.length - 1 ? ' ·' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>
        <motion.span
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-steel text-xl flex-shrink-0 ml-4"
        >
          +
        </motion.span>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: MECHANICAL_EASE }}
            className="overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8 px-4 pb-8">
              <div className="space-y-4">
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-xs">
                      <metric.icon className="text-safety mr-2 flex-shrink-0" size={16} />
                      <span className="text-steel mr-2">{metric.label}:</span>
                      <span className="text-[var(--color-text-primary)] font-mono">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 pt-2" onClick={(e) => e.stopPropagation()}>
                  <IndustrialButton
                    href={project.liveUrl}
                    as="a"
                    variant="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!px-4 !py-2 !text-sm gap-2"
                  >
                    <ExternalLinkIcon size={16} />
                    VIEW LIVE
                  </IndustrialButton>
                  <IndustrialButton
                    href={project.codeUrl}
                    as="a"
                    variant="outline"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!px-4 !py-2 !text-sm gap-2"
                  >
                    <GithubIcon size={16} />
                    CODE
                  </IndustrialButton>
                </div>
              </div>

              <motion.div
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                transition={{ duration: 0.6, delay: 0.2, ease: MECHANICAL_EASE }}
                className="border border-[var(--color-border)] overflow-hidden"
              >
                <OptimizedImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  width={600}
                  height={400}
                  priority={false}
                  placeholder="blur"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectRow key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
