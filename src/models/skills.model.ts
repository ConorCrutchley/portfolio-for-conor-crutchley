import * as skillLogos from '@/models/skillLogos.model';

import type { IImageAttr } from '@/models/imageAttr.model';

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
        logo: {
          src: skillLogos.reactLogo,
          alt: 'React Logo',
        },
      },
      {
        key: 'typescript',
        skill: 'TypeScript',
        level: 90,
        logo: {
          src: skillLogos.typescriptLogo,
          alt: 'TypeScript Logo',
        },
      },
      {
        key: 'html',
        skill: 'HTML5',
        level: 100,
        logo: {
          src: skillLogos.htmlLogo,
          alt: 'HTML Logo',
        },
      },
      {
        key: 'css',
        skill: 'CSS3',
        level: 100,
        logo: {
          src: skillLogos.cssLogo,
          alt: 'CSS Logo',
        },
      },
      {
        key: 'javascript',
        skill: 'JavaScript',
        level: 100,
        logo: {
          src: skillLogos.jsLogo,
          alt: 'JavaScript Logo',
        },
      },
      {
        key: 'gatsby',
        skill: 'Gatsby.js',
        level: 85,
        logo: {
          src: skillLogos.gatsbyLogo,
          alt: 'Gatsby Logo',
        },
      },
      {
        key: 'next-js',
        skill: 'Next.js',
        level: 50,
        logo: {
          src: skillLogos.nextJsLogo,
          alt: 'Next.js Logo',
        },
      },
      {
        key: 'astro-js',
        skill: 'Astro.js',
        level: 30,
        logo: {
          src: skillLogos.astroLogo,
          alt: 'Astro.js Logo',
        },
      },
      {
        key: 'tanstack-start',
        skill: 'TanStack Start',
        level: 35,
        logo: {
          src: skillLogos.tanstackLogo,
          alt: 'TanStack Start Logo',
        },
      },
      {
        key: 'mui',
        skill: 'MUI',
        level: 50,
        logo: {
          src: skillLogos.muiLogo,
          alt: 'MUI Logo',
        },
      },
      {
        key: 'shadcn',
        skill: 'Shadcn',
        level: 25,
        logo: {
          src: skillLogos.shadcnLogo,
          alt: 'Shadcn Logo',
        },
      },
      {
        key: 'tailwind',
        skill: 'Tailwind',
        level: 25,
        logo: {
          src: skillLogos.tailwindLogo,
          alt: 'Tailwind Logo',
        },
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
        logo: {
          src: skillLogos.cSharpLogo,
          alt: 'C# Logo',
        },
      },
      {
        key: 'visual-basic',
        skill: 'Visual Basic',
        level: 70,
        logo: {
          src: skillLogos.visualBasicLogo,
          alt: 'Visual Basic Logo',
        },
      },
      {
        key: 'dot-net',
        skill: '.Net',
        level: 60,
        logo: {
          src: skillLogos.dotNetLogo,
          alt: '.Net Logo',
        },
      },
      {
        key: 'entity-framework',
        skill: 'Entity Framework',
        level: 50,
        logo: {
          src: skillLogos.entityFrameworkLogo,
          alt: 'Entity Framework Logo',
        },
      },
      {
        key: 'sql',
        skill: 'SQL',
        level: 60,
        logo: {
          src: skillLogos.sqlLogo,
          alt: 'SQL Logo',
        },
      },
      {
        key: 'php',
        skill: 'PHP',
        level: 70,
        logo: {
          src: skillLogos.phpLogo,
          alt: 'PHP Logo',
        },
      },
      {
        key: 'mysql',
        skill: 'MySQL',
        level: 60,
        logo: {
          src: skillLogos.mysqlLogo,
          alt: 'MySQL Logo',
        },
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
        logo: {
          src: skillLogos.gitLogo,
          alt: 'Git Logo',
        },
      },
      {
        key: 'github',
        skill: 'GitHub/GitHub Actions',
        level: 80,
        logo: {
          src: skillLogos.githubLogo,
          alt: 'GitHub Logo',
        },
      },
      {
        key: 'azure',
        skill: 'Azure',
        level: 70,
        logo: {
          src: skillLogos.azureLogo,
          alt: 'Azure Logo',
        },
      },
      {
        key: 'azure-devops',
        skill: 'Azure DevOps',
        level: 60,
        logo: {
          src: skillLogos.devopsLogo,
          alt: 'Azure Logo',
        },
      },
      {
        key: 'ci-cd-pipelines',
        skill: 'CI/CD Pipelines',
        level: 80,
        logo: {
          src: skillLogos.cicdPipelinesLogo,
          alt: 'CI/CD Logo',
        },
      },

      {
        key: 'vs-code',
        skill: 'VS Code',
        level: 100,
        logo: {
          src: skillLogos.vsCodeLogo,
          alt: 'VS Code Logo',
        },
      },
      {
        key: 'visual-studio',
        skill: 'Visual Studio',
        level: 100,
        logo: {
          src: skillLogos.visualStudioLogo,
          alt: 'Visual Studio Logo',
        },
      },
      {
        key: 'lighthouse',
        skill: 'Lighthouse',
        level: 100,
        logo: {
          src: skillLogos.lighthouseLogo,
          alt: 'Lighthouse Logo',
        },
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
        logo: {
          src: skillLogos.directusLogo,
          alt: 'Directus Logo',
        },
      },
      {
        key: 'wordpress',
        skill: 'WordPress',
        level: 80,
        logo: {
          src: skillLogos.wordpressLogo,
          alt: 'WordPress Logo',
        },
      },
      {
        key: 'rest-apis',
        skill: 'REST APIs',
        level: 100,
        logo: {
          src: skillLogos.restLogo,
          alt: 'REST Logo',
        },
      },
      {
        key: 'seo',
        skill: 'SEO',
        level: 90,
        logo: {
          src: skillLogos.seoLogo,
          alt: 'SEO Logo',
        },
      },
      {
        key: 'structured-data',
        skill: 'Structured Data',
        level: 100,
        logo: {
          src: skillLogos.structuredDataLogo,
          alt: 'Structured Data Logo',
        },
      },
      {
        key: 'cross-browser-compatibility',
        skill: 'Cross Browser Compatibility',
        level: 60,
        logo: {
          src: skillLogos.crossBrowserLogo,
          alt: 'Cross Browser Compatibility Logo',
        },
      },
    ],
  },
];
