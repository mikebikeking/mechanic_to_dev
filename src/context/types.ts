export const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'] as const;
export type SectionId = typeof SECTION_IDS[number];
export type Theme = 'light' | 'dark';
