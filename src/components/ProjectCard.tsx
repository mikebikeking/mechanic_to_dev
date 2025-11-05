import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { Project } from '../data/projects';
import { OptimizedImage } from './OptimizedImage';
import { MagneticLink } from './MagneticLink';
import Tilt from 'react-parallax-tilt';
import { TechIcon } from './TechIcon';

interface ProjectCardProps {
  project: Project;
  variant?: 'featured' | 'other';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  variant = 'featured' 
}) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.02}
      transitionSpeed={2000}
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor={variant === 'featured' ? '#3B82F6' : '#FFD60A'}
      glarePosition="all"
      glareBorderRadius="0px"
      className="h-full"
    >
      <div className="group bg-white dark:bg-gunmetal border-2 border-blue-300 dark:border-blueprint/30 hover:border-blue-600 dark:hover:border-gold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/20 dark:hover:shadow-gold/20 flex flex-col h-full">
        {variant === 'featured' && (
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-200/40 to-purple-200/40 dark:from-blueprint/20 dark:to-gold/20">
            <OptimizedImage
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              width={600}
              height={400}
              priority={false}
              placeholder="blur"
            />
            <div className="absolute top-2 right-2 px-3 py-1 bg-blue-600 dark:bg-gold text-white dark:text-gunmetal text-xs font-heading">
              {project.subtitle}
            </div>
          </div>
        )}
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex-grow">
            <h3 className="text-2xl font-heading text-gray-900 dark:text-textPrimary mb-2">
              {project.title}
            </h3>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <TechIcon key={techIndex} tech={tech} size={16} showLabel={true} />
              ))}
            </div>
            
            <p className="text-gray-600 dark:text-textSecondary text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
          </div>
          
          <div className="space-y-2 mb-6">
            {project.metrics.map((metric, metricIndex) => (
              <div key={metricIndex} className="flex items-center text-xs">
                <metric.icon 
                  className="text-blue-600 dark:text-gold mr-2 flex-shrink-0" 
                  size={16} 
                  strokeWidth={2}
                />
                <span className="text-gray-600 dark:text-textSecondary mr-2">
                  {metric.label}:
                </span>
                <span className="text-gray-900 dark:text-textPrimary font-mono">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
          
          <div className="flex gap-3 mt-auto">
            <MagneticLink
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              intensity={0.3}
              showGear={true}
              gearPosition="left"
              className="flex-1 px-4 py-3 bg-blue-600 dark:bg-gold text-white dark:text-gunmetal text-center font-heading text-sm hover:bg-blue-700 dark:hover:bg-torch transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <ExternalLinkIcon size={16} className="flex-shrink-0" />
              VIEW LIVE
            </MagneticLink>
            <MagneticLink
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              intensity={0.3}
              showGear={true}
              gearPosition="left"
              className="flex-1 px-4 py-3 border-2 border-blue-600 dark:border-blueprint text-blue-600 dark:text-blueprint text-center font-heading text-sm hover:bg-blue-600 dark:hover:bg-blueprint hover:text-white dark:hover:text-gunmetal transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <GithubIcon size={16} className="flex-shrink-0" />
              CODE
            </MagneticLink>
          </div>
        </div>
      </div>
    </Tilt>
  );
};
