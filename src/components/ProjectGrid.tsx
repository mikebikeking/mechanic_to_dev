import { Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  variant: 'featured' | 'other';
  columns?: '2' | '3';
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ 
  projects, 
  variant,
  columns = '4'
}) => {
  const gridClass = columns === '4' 
    ? 'grid md:grid-cols-2 gap-16' 
    : 'grid md:grid-cols-2 lg:grid-cols-3 gap-8';

  return (
    <div className={gridClass}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          variant={variant}
        />
      ))}
    </div>
  );
};
