import type { IImageAttr } from './imageAttr.model';
import astroLogo from '../assets/skill-logos/astro.png';
import azureLogo from '../assets/skill-logos/azure.png';
import githubLogo from '../assets/skill-logos/github.png';
import nextJsLogo from '../assets/skill-logos/next-js.png';
import reactLogo from '../assets/skill-logos/react.png';
import typescriptLogo from '../assets/skill-logos/typescript.png';
import vsCodeLogo from '../assets/skill-logos/vs-code.png';

interface ISkill {
  key: string;
  title: string;
  specificSkills: ISpecificSkill[];
}

export interface ISpecificSkill {
  key: string;
  skill: SpecificSkillTitles;
  level: number;
  logo: IImageAttr;
}

export type SpecificSkillTitles =
  | 'React'
  | 'TypeScript'
  | 'Next.js'
  | 'Astro.js'
  | 'GitHub'
  | 'Azure'
  | 'VS Code';

export const skills: ISkill[] = [
  {
    key: 'front-end-development',
    title: 'Front-End Development',
    specificSkills: [
      {
        key: 'react',
        skill: 'React',
        level: 80,
        logo: {
          src: reactLogo,
          alt: 'React Logo',
        },
      },
      {
        key: 'typescript',
        skill: 'TypeScript',
        level: 80,
        logo: {
          src: typescriptLogo,
          alt: 'TypeScript Logo',
        },
      },
      {
        key: 'next-js',
        skill: 'Next.js',
        level: 50,
        logo: {
          src: nextJsLogo,
          alt: 'Next.js Logo',
        },
      },
      {
        key: 'astro-js',
        skill: 'Astro.js',
        level: 20,
        logo: {
          src: astroLogo,
          alt: 'Astro.js Logo',
        },
      },
    ],
  },
  {
    key: 'back-end-development',
    title: 'Back-End Development',
    specificSkills: [],
  },
  {
    key: 'devops-and-tools',
    title: 'DevOps & Tools',
    specificSkills: [
      {
        key: 'github',
        skill: 'GitHub',
        level: 80,
        logo: {
          src: githubLogo,
          alt: 'GitHub Logo',
        },
      },
      {
        key: 'azure',
        skill: 'Azure',
        level: 80,
        logo: {
          src: azureLogo,
          alt: 'Azure Logo',
        },
      },
      {
        key: 'vs-code',
        skill: 'VS Code',
        level: 80,
        logo: {
          src: vsCodeLogo,
          alt: 'VS Code Logo',
        },
      },
    ],
  },
  {
    key: 'cms-and-integrations',
    title: 'CMS & Integrations',
    specificSkills: [],
  },
];
