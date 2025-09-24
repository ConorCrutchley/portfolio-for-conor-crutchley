import type { IImageAttr } from '@/models/imageAttr.model';
import type { ReactNode } from 'react';
import type { SpecificSkillTitles } from '@/models/skills.model';
import { thumbnails } from '@/models/projectThumbnails.model';

export interface IProject {
  key: string;
  thumbnail: IImageAttr;
  title: string;
  excerpt: ReactNode;
  githubLink?: string;
  siteLink: string;
  skills: SpecificSkillTitles[];
}

export const projects: IProject[] = [
  {
    key: 'rightio',
    title: 'Rightio',
    excerpt: (
      <>
        <p>
          During my time at Rightio, my most significant project was leading the
          redevelopment of the company&apos;s main website, rightio.co.uk.
        </p>
        <p>
          Orginially a slow, outdated WordPress site, I transformed it into a
          modern, scalable React and Gatsby.js application which integrated with
          the headless CMS, Directus for marketers to manage content. I
          implemented a C#/.NET Core API with Entity Framework for form
          submissions, deployed the front end via Azure Static Web Apps and the
          API with Azure App Services.
        </p>
        <p>
          To improve deployments, I implemented a CI/CD pipeline using GitHub
          Actions, reducing bottlenecks and ensuring updates went live quickly
          and safely. I also extended Directus with a custom GitHub Actions
          integration, enabling non-technical staff to automatically publish
          content without technical assistance.
        </p>
        <p>
          All of this resulted in a modern, SEO-friendly website that improved
          search visibility, boosted load speeds, and streamlined content
          management, delivering long-term value to both the marketing team and
          the wider business.
        </p>
      </>
    ),
    githubLink: '',
    siteLink: 'https://www.rightio.co.uk',
    skills: [
      'React',
      'TypeScript',
      'Gatsby.js',
      'GitHub/GitHub Actions',
      'Azure',
      'CI/CD Pipelines',
      'Directus',
      '.Net',
      'SEO',
    ],
    thumbnail: thumbnails.rightio,
  },
  {
    key: 'care-club',
    title: 'Care Club',
    excerpt: (
      <>
        <p>
          Another significant project I have taken over during my time at
          Rightio has been the maintenance of the Care Club website, the sister
          company to Rightio that overs home emergency plans to cover plumbing
          and boiler breakdowns.
        </p>
        <p>
          Initially, the site was built in WordPress, but to bring it up to
          modern standards, a React contractor was hired to redevelop the site.
          The contractor built the site using Next.js and used Azure DevOps to
          implement a CI/CD pipeline then deployed the site to an Azure App
          Service. After their contract ended, I was asked to maintain the site
          and implement updates.
        </p>
        <p>
          In being asked this, I took a course on React to get a better
          understanding of how it worked and how best to maintain the site. Some
          of the changes I implemented included updating the language from
          JavaScript to TypeScript, fixing a number of type related issues and
          other bugs the contractor had not picked up on, and updating the
          purchase plan form so account registration was done automatically once
          the customer had filled in the form instead of manually at the first
          step as this caused a lot of customers confusion with them thinking
          they had a plan when they hadn&apos;t.
        </p>
      </>
    ),
    githubLink: '',
    siteLink: 'https://careclub.co.uk',
    skills: [
      'React',
      'TypeScript',
      'Next.js',
      'MUI',
      'CI/CD Pipelines',
      '.Net',
    ],
    thumbnail: thumbnails.careclub,
  },
  {
    key: 'tantracker',
    title: 'TanTracker - TanStack Start Project',
    excerpt: (
      <>
        <p>
          This project was built as part of a course I took which taught you how
          to use the new framework by TanStack, TanStack Start. The idea behind
          it is quite simple, a project designed to allow users to track their
          expenses over time.
        </p>
        <p>
          It uses Clerk for account management (allowing the user to sign up and
          sign in with their Google account), Neon for database management,
          Shadcn for common UI components, Tailwind for styling, React-hook-form
          with zod for form validity checking, and vercel for hosting.
        </p>
        <p>
          It should be noted that TanStack Start is still in beta meaning that
          whilst this project works currently, aspects of it may have tochange
          in future to fit the latest updates.
        </p>
      </>
    ),
    githubLink: 'https://github.com/ConorCrutchley/tantracker-course',
    siteLink: 'https://tantracker-course-rho.vercel.app/',
    skills: ['TanStack Start', 'React', 'TypeScript', 'Tailwind', 'Shadcn'],
    thumbnail: thumbnails.tantracker,
  },
  {
    key: 'astro-portfolio',
    title: 'Astro Portfolio',
    excerpt: (
      <>
        <p>
          The Astro portfolio is a project I built whilst following along the
          AstroJS 101: Build Blazing Fast Frondends! course on Udemy. The
          project covers the basics of Astro.js including Astro components,
          setting up pages with both components and markdown, and how best to
          style and script components within Astro.
        </p>
      </>
    ),
    githubLink: 'https://github.com/ConorCrutchley/astro-react-and-vue-islands',
    siteLink: 'https://astro-portfolio-lemon-ten.vercel.app/',
    skills: ['Astro.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
    thumbnail: thumbnails.astro,
  },
  {
    key: 'css-art-gallery',
    title: 'CSS Art Gallery',
    excerpt: (
      <>
        <p>
          The CSS Art Gallery is a project I created alongside the Creative CSS
          Drawing Course: Make Art With CSS course on Udemy.
        </p>
        <p>
          I took this course as I&apos;ve always been interested in creating art
          through CSS and wanted to expand my CSS capabilities. The project
          includes all of the CSS art I created as part of the course.
        </p>
        <p>
          In the course, there was a lot of duplicated code which made for bulky
          CSS files, so once the course was done, I took the time to refactor
          the code so that there was less duplication. I also took the time to
          make the art responsive as most of it only looked good on desktop
          devices
        </p>
      </>
    ),
    githubLink: 'https://github.com/ConorCrutchley/css-art-gallery',
    siteLink:
      'https://css-art-gallery-17ui4ssoe-conors-projects-1f2d0b51.vercel.app/',
    skills: ['CSS3', 'HTML5'],
    thumbnail: thumbnails.cssArtGallery,
  },
  {
    key: 'tribe-post',
    title: 'Tribe Post WordPress Plugin',
    excerpt: (
      <>
        <p>
          During my time at Recruitive, I created a large number of widgets,
          WordPress themes and WordPress plugins for displaying careers on the
          site. One example of my work that is in use is Tribe Post.
        </p>
        <p>
          Initially, this recruitment agency wanted a widget, which was
          essentially an iframe on the site that displayed the jobs posted
          through Recruitive&apos;s multi-posting software, JobMate. However,
          they later found out that we could provide them with a WordPress
          plugin for a more seamless integration with their site. This WordPress
          plugin remains on their site today.
        </p>
        <p>
          Modelled after Total Jobs, the WordPress plugin allowed them not only
          to upload jobs, but to also add clients onto their site. Prospective
          applicants could then filter through jobs, click on job descriptions
          and click on client profiles to see a bit more about the company and
          what other roles Tribe Post are advertising for them.
        </p>
      </>
    ),
    githubLink: '',
    siteLink: 'https://www.tribepost.co.uk/jobs/',
    skills: ['WordPress', 'PHP', 'MySQL'],
    thumbnail: thumbnails.tribepost,
  },
  {
    key: 'kata-dojo',
    title: 'The Kata Dojo - University Final Year Project',
    excerpt: (
      <>
        <p>
          For my final-year university project, I combined my technical and
          creative skills to build The Kata Dojo, an interactive website to help
          beginners (particularly children) learn karate katas in an engaging,
          interactive way. The site combined animations, storytelling, and
          comics to make learning more fun and accessible, while also presenting
          practical applications of each move.
        </p>
        <p>
          I designed and animated 3D models in Autodesk 3DS Max, created comic
          panels in Photoshop, and implemented the site using HTML, CSS,
          JavaScript, and HTML5 video.
        </p>
        <p>
          This project allowed me to merge front-end development with animation
          and design, blending creativity with technology, and deliver a unique
          project that stood out from traditional informational websites. The
          project was highly successful, earning me a first-class honours
          degree.
        </p>
      </>
    ),
    githubLink: 'https://github.com/ConorCrutchley/The-Kata-Dojo',
    siteLink: 'https://the-kata-dojo.vercel.app/',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Cross Browser Compatibility'],
    thumbnail: thumbnails.theKataDojo,
  },
  {
    key: 'full-circle-martial-arts',
    title: 'Full Circle Martial Arts - My First Website',
    excerpt: (
      <>
        <p>
          My first real project in web development was creating a promotional
          website for my karate club, Full Circle Martial Arts, as part of my
          BTEC Level 3 IT course.
        </p>
        <p>
          Using Adobe Dreamweaver&apos;s WYSIWYG editor, I created a multi-page
          site featuring instructor bios, event recaps, photo and video
          galleries, class schedules with integrated Google Maps, and a contact
          page. At the time, the site was built using tables, inline styling,
          and Flash for media content, standards that have since been replaced
          by responsive design and HTML5.
        </p>
        <p>
          Although simple by today&apos;s standards, the site was well-received
          and served as an effective online presence for the club at the time.
          More importantly, it gave me my first taste of bringing real-world
          value to a local business through web development, sparking my
          long-term passion for web development.
        </p>
      </>
    ),
    githubLink: 'https://github.com/ConorCrutchley/Full-Circle-Website',
    siteLink: '',
    skills: ['HTML5', 'CSS3'],
    thumbnail: thumbnails.fullCircle,
  },
];
