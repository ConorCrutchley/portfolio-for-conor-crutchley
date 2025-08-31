import type { IImageAttr } from '@/models/imageAttr.model';
import astroLogo from '@/assets/skill-logos/astro.png';
import azureLogo from '@/assets/skill-logos/azure.png';
import cSharpLogo from '@/assets/skill-logos/c-sharp-logo.png';
import cicdPipelinesLogo from '@/assets/skill-logos/ci-cd-pipelines-logo.png';
import crossBrowserLogo from '@/assets/skill-logos/cross-browser-testing-logo.png';
import cssLogo from '@/assets/skill-logos/css3-logo.png';
import devopsLogo from '@/assets/skill-logos/azure-devops-logo.png';
import directusLogo from '@/assets/skill-logos/directus-logo.png';
import dotNetLogo from '@/assets/skill-logos/dotnet-logo.png';
import entityFrameworkLogo from '@/assets/skill-logos/entity-framework.png';
import gatsbyLogo from '@/assets/skill-logos/gastby-icon.png';
import gitLogo from '@/assets/skill-logos/git-logo.png';
import githubLogo from '@/assets/skill-logos/github-logo.png';
import htmlLogo from '@/assets/skill-logos/html5-logo.png';
import jsLogo from '@/assets/skill-logos/javascript-logo.png';
import lighthouseLogo from '@/assets/skill-logos/google-lighthouse-logo.png';
import muiLogo from '@/assets/skill-logos/mui-logo.png';
import mysqlLogo from '@/assets/skill-logos/mysql-logo-png.png';
import nextJsLogo from '@/assets/skill-logos/next-js-icon-logo.png';
import phpLogo from '@/assets/skill-logos/php-logo.png';
import reactLogo from '@/assets/skill-logos/react.png';
import restLogo from '@/assets/skill-logos/rest-api.png';
import seoLogo from '@/assets/skill-logos/seo-search-engine-optimization-logo.png';
import shadcnLogo from '@/assets/skill-logos/shadcn-logo.png';
import sqlLogo from '@/assets/skill-logos/sql-logo.png';
import structuredDataLogo from '@/assets/skill-logos/curly-braces.png';
import tailwindLogo from '@/assets/skill-logos/tailwind-css-logo.png';
import tanstackLogo from '@/assets/skill-logos/tanstack-logo.png';
import typescriptLogo from '@/assets/skill-logos/typescript.png';
import visualBasicLogo from '@/assets/skill-logos/visual-basic.png';
import visualStudioLogo from '@/assets/skill-logos/visual-studio.png';
import vsCodeLogo from '@/assets/skill-logos/vs-code.png';
import wordpressLogo from '@/assets/skill-logos/wordpress-icon-logo.png';

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
          src: reactLogo,
          alt: 'React Logo',
        },
      },
      {
        key: 'typescript',
        skill: 'TypeScript',
        level: 90,
        logo: {
          src: typescriptLogo,
          alt: 'TypeScript Logo',
        },
      },
      {
        key: 'html',
        skill: 'HTML5',
        level: 100,
        logo: {
          src: htmlLogo,
          alt: 'HTML Logo',
        },
      },
      {
        key: 'css',
        skill: 'CSS3',
        level: 100,
        logo: {
          src: cssLogo,
          alt: 'CSS Logo',
        },
      },
      {
        key: 'javascript',
        skill: 'JavaScript',
        level: 100,
        logo: {
          src: jsLogo,
          alt: 'JavaScript Logo',
        },
      },
      {
        key: 'gatsby',
        skill: 'Gatsby.js',
        level: 85,
        logo: {
          src: gatsbyLogo,
          alt: 'Gatsby Logo',
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
        level: 30,
        logo: {
          src: astroLogo,
          alt: 'Astro.js Logo',
        },
      },
      {
        key: 'tanstack-start',
        skill: 'TanStack Start',
        level: 35,
        logo: {
          src: tanstackLogo,
          alt: 'TanStack Start Logo',
        },
      },
      {
        key: 'mui',
        skill: 'MUI',
        level: 50,
        logo: {
          src: muiLogo,
          alt: 'MUI Logo',
        },
      },
      {
        key: 'shadcn',
        skill: 'Shadcn',
        level: 25,
        logo: {
          src: shadcnLogo,
          alt: 'Shadcn Logo',
        },
      },
      {
        key: 'tailwind',
        skill: 'Tailwind',
        level: 25,
        logo: {
          src: tailwindLogo,
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
          src: cSharpLogo,
          alt: 'C# Logo',
        },
      },
      {
        key: 'visual-basic',
        skill: 'Visual Basic',
        level: 70,
        logo: {
          src: visualBasicLogo,
          alt: 'Visual Basic Logo',
        },
      },
      {
        key: 'dot-net',
        skill: '.Net',
        level: 60,
        logo: {
          src: dotNetLogo,
          alt: '.Net Logo',
        },
      },
      {
        key: 'entity-framework',
        skill: 'Entity Framework',
        level: 50,
        logo: {
          src: entityFrameworkLogo,
          alt: 'Entity Framework Logo',
        },
      },
      {
        key: 'sql',
        skill: 'SQL',
        level: 60,
        logo: {
          src: sqlLogo,
          alt: 'SQL Logo',
        },
      },
      {
        key: 'php',
        skill: 'PHP',
        level: 70,
        logo: {
          src: phpLogo,
          alt: 'PHP Logo',
        },
      },
      {
        key: 'mysql',
        skill: 'MySQL',
        level: 60,
        logo: {
          src: mysqlLogo,
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
          src: gitLogo,
          alt: 'Git Logo',
        },
      },
      {
        key: 'github',
        skill: 'GitHub/GitHub Actions',
        level: 80,
        logo: {
          src: githubLogo,
          alt: 'GitHub Logo',
        },
      },
      {
        key: 'azure',
        skill: 'Azure',
        level: 70,
        logo: {
          src: azureLogo,
          alt: 'Azure Logo',
        },
      },
      {
        key: 'azure-devops',
        skill: 'Azure DevOps',
        level: 60,
        logo: {
          src: devopsLogo,
          alt: 'Azure Logo',
        },
      },
      {
        key: 'ci-cd-pipelines',
        skill: 'CI/CD Pipelines',
        level: 80,
        logo: {
          src: cicdPipelinesLogo,
          alt: 'CI/CD Logo',
        },
      },

      {
        key: 'vs-code',
        skill: 'VS Code',
        level: 100,
        logo: {
          src: vsCodeLogo,
          alt: 'VS Code Logo',
        },
      },
      {
        key: 'visual-studio',
        skill: 'Visual Studio',
        level: 100,
        logo: {
          src: visualStudioLogo,
          alt: 'Visual Studio Logo',
        },
      },
      {
        key: 'lighthouse',
        skill: 'Lighthouse',
        level: 100,
        logo: {
          src: lighthouseLogo,
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
          src: directusLogo,
          alt: 'Directus Logo',
        },
      },
      {
        key: 'wordpress',
        skill: 'WordPress',
        level: 80,
        logo: {
          src: wordpressLogo,
          alt: 'WordPress Logo',
        },
      },
      {
        key: 'rest-apis',
        skill: 'REST APIs',
        level: 100,
        logo: {
          src: restLogo,
          alt: 'REST Logo',
        },
      },
      {
        key: 'seo',
        skill: 'SEO',
        level: 90,
        logo: {
          src: seoLogo,
          alt: 'SEO Logo',
        },
      },
      {
        key: 'structured-data',
        skill: 'Structured Data',
        level: 100,
        logo: {
          src: structuredDataLogo,
          alt: 'Structured Data Logo',
        },
      },
      {
        key: 'cross-browser-compatibility',
        skill: 'Cross Browser Compatibility',
        level: 60,
        logo: {
          src: crossBrowserLogo,
          alt: 'Cross Browser Compatibility Logo',
        },
      },
    ],
  },
];
