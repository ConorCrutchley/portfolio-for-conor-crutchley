import type { IImageAttr } from '@/models/imageAttr.model';
import { skillLogos } from '@/models/skillLogos.model';

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
  | '.Net'
  | 'Astro.js'
  | 'Azure'
  | 'Azure DevOps'
  | 'C#'
  | 'CI/CD Pipelines'
  | 'Cross Browser Compatibility'
  | 'CSS3'
  | 'Directus'
  | 'Entity Framework'
  | 'Gatsby.js'
  | 'Git'
  | 'GitHub/GitHub Actions'
  | 'HTML5'
  | 'JavaScript'
  | 'Lighthouse'
  | 'MUI'
  | 'MySQL'
  | 'Next.js'
  | 'PHP'
  | 'React'
  | 'REST APIs'
  | 'SEO'
  | 'Shadcn'
  | 'SQL'
  | 'Structured Data'
  | 'Tailwind'
  | 'TanStack Start'
  | 'TypeScript'
  | 'Visual Basic'
  | 'Visual Studio'
  | 'VS Code'
  | 'WordPress';

export const skills: ISkill[] = [
  {
    key: 'front-end-development',
    title: 'Front-End Development',
    specificSkills: [
      {
        key: 'react',
        skill: 'React',
        level: 85,
        logo: skillLogos.react,
      },
      {
        key: 'typescript',
        skill: 'TypeScript',
        level: 90,
        logo: skillLogos.typescript,
      },
      {
        key: 'html',
        skill: 'HTML5',
        level: 100,
        logo: skillLogos.html,
      },
      {
        key: 'css',
        skill: 'CSS3',
        level: 100,
        logo: skillLogos.css,
      },
      {
        key: 'javascript',
        skill: 'JavaScript',
        level: 100,
        logo: skillLogos.js,
      },
      {
        key: 'gatsby',
        skill: 'Gatsby.js',
        level: 85,
        logo: skillLogos.gatsby,
      },
      {
        key: 'next-js',
        skill: 'Next.js',
        level: 50,
        logo: skillLogos.nextJs,
      },
      {
        key: 'astro-js',
        skill: 'Astro.js',
        level: 30,
        logo: skillLogos.astro,
      },
      {
        key: 'tanstack-start',
        skill: 'TanStack Start',
        level: 35,
        logo: skillLogos.tanstack,
      },
      {
        key: 'mui',
        skill: 'MUI',
        level: 50,
        logo: skillLogos.mui,
      },
      {
        key: 'shadcn',
        skill: 'Shadcn',
        level: 25,
        logo: skillLogos.shadcn,
      },
      {
        key: 'tailwind',
        skill: 'Tailwind',
        level: 25,
        logo: skillLogos.tailwind,
      },
    ],
  },
  {
    key: 'back-end-development',
    title: 'Back-End Development',
    specificSkills: [
      {
        key: 'csharp',
        skill: 'C#',
        level: 80,
        logo: skillLogos.cSharp,
      },
      {
        key: 'visual-basic',
        skill: 'Visual Basic',
        level: 70,
        logo: skillLogos.visualBasic,
      },
      {
        key: 'dot-net',
        skill: '.Net',
        level: 60,
        logo: skillLogos.dotNet,
      },
      {
        key: 'entity-framework',
        skill: 'Entity Framework',
        level: 50,
        logo: skillLogos.entityFramework,
      },
      {
        key: 'sql',
        skill: 'SQL',
        level: 60,
        logo: skillLogos.sql,
      },
      {
        key: 'php',
        skill: 'PHP',
        level: 70,
        logo: skillLogos.php,
      },
      {
        key: 'mysql',
        skill: 'MySQL',
        level: 60,
        logo: skillLogos.mysql,
      },
    ],
  },
  {
    key: 'devops-and-tools',
    title: 'DevOps & Tools',
    specificSkills: [
      {
        key: 'git',
        skill: 'Git',
        level: 80,
        logo: skillLogos.git,
      },
      {
        key: 'github',
        skill: 'GitHub/GitHub Actions',
        level: 80,
        logo: skillLogos.github,
      },
      {
        key: 'azure',
        skill: 'Azure',
        level: 70,
        logo: skillLogos.azure,
      },
      {
        key: 'azure-devops',
        skill: 'Azure DevOps',
        level: 60,
        logo: skillLogos.devops,
      },
      {
        key: 'ci-cd-pipelines',
        skill: 'CI/CD Pipelines',
        level: 80,
        logo: skillLogos.cicdPipelines,
      },

      {
        key: 'vs-code',
        skill: 'VS Code',
        level: 100,
        logo: skillLogos.vsCode,
      },
      {
        key: 'visual-studio',
        skill: 'Visual Studio',
        level: 100,
        logo: skillLogos.visualStudio,
      },
      {
        key: 'lighthouse',
        skill: 'Lighthouse',
        level: 100,
        logo: skillLogos.lighthouse,
      },
    ],
  },
  {
    key: 'cms-and-integrations',
    title: 'CMS & Integrations',
    specificSkills: [
      {
        key: 'directus',
        skill: 'Directus',
        level: 80,
        logo: skillLogos.directus,
      },
      {
        key: 'wordpress',
        skill: 'WordPress',
        level: 80,
        logo: skillLogos.wordpress,
      },
      {
        key: 'rest-apis',
        skill: 'REST APIs',
        level: 100,
        logo: skillLogos.rest,
      },
      {
        key: 'seo',
        skill: 'SEO',
        level: 90,
        logo: skillLogos.seo,
      },
      {
        key: 'structured-data',
        skill: 'Structured Data',
        level: 100,
        logo: skillLogos.structuredData,
      },
      {
        key: 'cross-browser-compatibility',
        skill: 'Cross Browser Compatibility',
        level: 60,
        logo: skillLogos.crossBrowser,
      },
    ],
  },
];
