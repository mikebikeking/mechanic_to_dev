import { BoxIcon, Cog, PaletteIcon, WrenchIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SkillCategory {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    icon: BoxIcon,
    title: "FRAME",
    subtitle: "Core Frontend",
    skills: ["React", "TypeScript", "Next.js", "JavaScript", "HTML5/CSS3"],
    color: "gold",
  },
  {
    icon: Cog,
    title: "DRIVETRAIN",
    subtitle: "State & Logic",
    skills: ["Context API", "Redux", "REST APIs", "Node.js", "Firebase"],
    color: "blueprint",
  },
  {
    icon: PaletteIcon,
    title: "PAINT",
    subtitle: "Styling & Animation",
    skills: ["TailwindCSS", "GSAP", "Framer Motion", "Responsive Design"],
    color: "torch",
  },
  {
    icon: WrenchIcon,
    title: "ACCESSORIES",
    subtitle: "Tools",
    skills: ["Git/GitHub", "Figma", "VS Code", "Vercel", "Testing Library"],
    color: "gold",
  },
];
