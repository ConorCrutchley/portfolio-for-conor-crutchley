import type { IImageAttr } from '@/models/imageAttr.model';
import type { SpecificSkillTitles } from '@/models/skills.model';

export interface IProject {
  key: string;
  thumbnail: IImageAttr;
  title: string;
  excerpt: string;
  githubLink?: string;
  siteLink: string;
  skills: SpecificSkillTitles[];
}

export const projects: IProject[] = [
  {
    key: 'tanstack-start',
    title: 'TanStack Start',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in eos non repellat laboriosam possimus magnam excepturi quidem sapiente.',
    githubLink: '',
    siteLink: '',
    skills: ['React', 'TypeScript'],
    thumbnail: {
      src: '',
      alt: '',
    },
  },
];
