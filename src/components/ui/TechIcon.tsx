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

const techIconMap: Record<string, { icon: IconType }> = {
  'React': { icon: SiReact },
  'TypeScript': { icon: SiTypescript },
  'JavaScript': { icon: SiJavascript },
  'Next.js': { icon: SiNextdotjs },
  'Tailwind': { icon: SiTailwindcss },
  'TailwindCSS': { icon: SiTailwindcss },
  'Framer Motion': { icon: SiFramer },
  'OpenAI': { icon: SiOpenai },
  'Vercel': { icon: SiVercel },
  'Node.js': { icon: SiNodedotjs },
  'MongoDB': { icon: SiMongodb },
  'Firebase': { icon: SiFirebase },
  'GitHub': { icon: SiGithub },
  'Git': { icon: SiGit },
  'HTML5': { icon: SiHtml5 },
  'CSS3': { icon: SiCss3 },
  'Redux': { icon: SiRedux },
  'GraphQL': { icon: SiGraphql },
  'PostgreSQL': { icon: SiPostgresql },
  'Docker': { icon: SiDocker },
  'Vite': { icon: SiVite },
  'Webpack': { icon: SiWebpack },
  'npm': { icon: SiNpm },
  'Yarn': { icon: SiYarn },
  'Prisma': { icon: SiPrisma },
  'Stripe': { icon: SiStripe },
  'Socket.io': { icon: SiSocketdotio },
  'Jest': { icon: SiJest },
  'Figma': { icon: SiFigma },
  'VS Code': { icon: DiVisualstudio },
};

interface TechIconProps {
  tech: string;
  size?: number;
  showLabel?: boolean;
}

export function TechIcon({
  tech,
  size = 20,
  showLabel = true,
}: TechIconProps) {
  const techInfo = techIconMap[tech];

  if (!techInfo) {
    return showLabel ? (
      <span className="px-2 py-1 font-mono text-xs text-steel border border-[var(--color-border)] hover:border-safety hover:text-safety transition-colors">
        {tech}
      </span>
    ) : null;
  }

  const Icon = techInfo.icon;

  return showLabel ? (
    <span className="inline-flex items-center gap-1.5 px-2 py-1 font-mono text-xs text-steel border border-[var(--color-border)] hover:border-safety hover:text-safety transition-colors">
      <Icon size={size} />
      <span>{tech}</span>
    </span>
  ) : (
    <Icon size={size} title={tech} />
  );
}
