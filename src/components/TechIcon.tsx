import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiNextdotjs, 
  SiTailwindcss,
  SiFramer,
  SiOpenai,
  SiVercel,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiGithub,
  SiGit,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiGraphql,
  SiPostgresql,
  SiDocker,
  SiVite,
  SiWebpack,
  SiNpm,
  SiYarn,
  SiPrisma,
  SiStripe,
  SiSocketdotio,
  SiJest,
  SiFigma
} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import { IconType } from 'react-icons';

const techIconMap: Record<string, { icon: IconType; color: string }> = {
  'React': { icon: SiReact, color: '#61DAFB' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
  'Next.js': { icon: SiNextdotjs, color: '#000000' },
  'Tailwind': { icon: SiTailwindcss, color: '#06B6D4' },
  'TailwindCSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'Framer Motion': { icon: SiFramer, color: '#0055FF' },
  'OpenAI': { icon: SiOpenai, color: '#412991' },
  'Vercel': { icon: SiVercel, color: '#000000' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  'MongoDB': { icon: SiMongodb, color: '#47A248' },
  'Firebase': { icon: SiFirebase, color: '#FFCA28' },
  'GitHub': { icon: SiGithub, color: '#181717' },
  'Git': { icon: SiGit, color: '#F05032' },
  'HTML5': { icon: SiHtml5, color: '#E34F26' },
  'CSS3': { icon: SiCss3, color: '#1572B6' },
  'Redux': { icon: SiRedux, color: '#764ABC' },
  'GraphQL': { icon: SiGraphql, color: '#E10098' },
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1' },
  'Docker': { icon: SiDocker, color: '#2496ED' },
  'Vite': { icon: SiVite, color: '#646CFF' },
  'Webpack': { icon: SiWebpack, color: '#8DD6F9' },
  'npm': { icon: SiNpm, color: '#CB3837' },
  'Yarn': { icon: SiYarn, color: '#2C8EBB' },
  'Prisma': { icon: SiPrisma, color: '#2D3748' },
  'Stripe': { icon: SiStripe, color: '#008CDD' },
  'Socket.io': { icon: SiSocketdotio, color: '#010101' },
  'Jest': { icon: SiJest, color: '#C21325' },
  'Figma': { icon: SiFigma, color: '#F24E1E' },
  'VS Code': { icon: DiVisualstudio, color: '#007ACC' },
};

interface TechIconProps {
  tech: string;
  size?: number;
  showLabel?: boolean;
}

export const TechIcon: React.FC<TechIconProps> = ({ 
  tech, 
  size = 20, 
  showLabel = true 
}) => {
  const techInfo = techIconMap[tech];
  
  if (!techInfo) {
    return showLabel ? (
      <span className="px-2 py-1 bg-blue-100 dark:bg-blueprint/20 text-blue-700 dark:text-blueprint text-xs font-mono border border-blue-300 dark:border-blueprint/30">
        {tech}
      </span>
    ) : null;
  }

  const Icon = techInfo.icon;
  
  // Theme-aware colors for black/dark logos
  const getIconColor = () => {
    const darkLogos = ['Next.js', 'Vercel', 'GitHub'];
    if (darkLogos.includes(tech)) {
      return 'currentColor'; // Will use text color from parent
    }
    return techInfo.color;
  };

  return showLabel ? (
    <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-white dark:bg-gunmetal/50 border border-gray-300 dark:border-blueprint/30 rounded-sm hover:border-blue-500 dark:hover:border-gold transition-colors">
      <Icon 
        size={size} 
        style={{ color: getIconColor() }} 
        className={tech === 'Next.js' || tech === 'Vercel' || tech === 'GitHub' ? 'text-gray-900 dark:text-white' : ''}
      />
      <span className="text-xs font-mono text-gray-700 dark:text-textSecondary">{tech}</span>
    </span>
  ) : (
    <Icon 
      size={size} 
      style={{ color: getIconColor() }} 
      title={tech}
      className={tech === 'Next.js' || tech === 'Vercel' || tech === 'GitHub' ? 'text-gray-900 dark:text-white' : ''}
    />
  );
};

