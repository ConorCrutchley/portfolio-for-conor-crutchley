import type { IImageAttr } from '@/models/imageAttr.model';
import type { SpecificSkillTitles } from '@/models/skills.model';
import { thumbnails } from '@/models/projectThumbnails.model';

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
    key: 'rightio',
    title: 'Rightio',
    excerpt:
      'During my time at Rightio, my most significant project was leading the ' +
      'redevelopment of the company&apos;s main website, rightio.co.uk. Orginially ' +
      'a slow, outdated WordPress site, I transformed it into a modern, scalable React and ' +
      'Gatsby.js application which integrated with the headless CMS, Directus for ' +
      'marketers to manage content. I implemented a C#/.NET Core API with Entity ' +
      'Framework for form submissions, deployed the front end via Azure Static Web Apps ' +
      'and the API with Azure App Services. To improve deployments, I implemented a ' +
      'CI/CD pipeline using GitHub Actions, reducing bottlenecks and ensuring updates went ' +
      'live quickly and safely. I also extended Directus with a custom GitHub Actions ' +
      'integration, enabling non-technical staff to automatically publish content ' +
      'without technical assistance. All of this resulted in a modern, SEO-friendly ' +
      'website that improved search visibility, boosted load speeds, and streamlined ' +
      'content management, delivering long-term value to both the marketing team and ' +
      'the wider business.',
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
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repudiandae veritatis eius error reiciendis, ipsam ad est? Quaerat, alias vero ipsam placeat consequatur distinctio aliquid dolore voluptatum assumenda eveniet ut?',
    githubLink: '',
    siteLink: 'https://careclub.co.uk',
    skills: ['React', 'TypeScript', 'Next.js', 'CI/CD Pipelines', '.Net'],
    thumbnail: thumbnails.careclub,
  },
  {
    key: 'tantracker',
    title: 'TanTracker - TanStack Start Project',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repudiandae veritatis eius error reiciendis, ipsam ad est? Quaerat, alias vero ipsam placeat consequatur distinctio aliquid dolore voluptatum assumenda eveniet ut?',
    githubLink: 'https://github.com/ConorCrutchley/tantracker-course',
    siteLink: 'https://tantracker-course-rho.vercel.app/',
    skills: ['TanStack Start', 'React', 'TypeScript', 'Tailwind', 'Shadcn'],
    thumbnail: thumbnails.tantracker,
  },
  {
    key: 'astro-portfolio',
    title: 'Astro Portfolio',
    excerpt:
      'The Astro portfolio is a project I built whilst following along the AstroJS 101: ' +
      'Build Blazing Fast Frondends! course on Udemy. The project covers the basics of ' +
      'Astro.js including Astro components, setting up pages with both components and ' +
      'markdown, and how best to style and script components within Astro.',
    githubLink: 'https://github.com/ConorCrutchley/astro-react-and-vue-islands',
    siteLink: '',
    skills: ['Astro.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
    thumbnail: thumbnails.astro,
  },
  {
    key: 'css-art-gallery',
    title: 'CSS Art Gallery',
    excerpt: '',
    githubLink: 'https://github.com/ConorCrutchley/css-art-gallery',
    siteLink:
      'The CSS Art Gallery is a project I created alongside the Creative CSS Drawing ' +
      'Course: Make Art With CSS course on Udemy. I took this course as I&apos;ve always ' +
      'been interested in creating art through CSS and wanted to expand my CSS ' +
      'capabilities. The project includes all of the CSS art I created as part of the ' +
      'course. In the course, there was a lot of duplicated code which made for bulky CSS ' +
      'files, so once the course was done, I took the time to refactor the code so that ' +
      'there was less duplication.',
    skills: ['CSS3', 'HTML5'],
    thumbnail: thumbnails.cssArtGallery,
  },
  {
    key: 'tribe-post',
    title: 'Tribe Post WordPress Plugin',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repudiandae veritatis eius error reiciendis, ipsam ad est? Quaerat, alias vero ipsam placeat consequatur distinctio aliquid dolore voluptatum assumenda eveniet ut?',
    githubLink: '',
    siteLink: 'https://www.tribepost.co.uk/jobs/',
    skills: ['WordPress', 'PHP', 'MySQL'],
    thumbnail: thumbnails.tribepost,
  },
  {
    key: 'kata-dojo',
    title: 'The Kata Dojo - University Final Year Project',
    excerpt:
      'For my final-year university project, I combined my technical and creative skills ' +
      'to build The Kata Dojo, an interactive website to help beginners (particularly ' +
      'children) learn karate katas in an engaging, interactive way. The site combined ' +
      'animations, storytelling, and comics to make learning more fun and accessible, ' +
      'while also presenting practical applications of each move. I designed and ' +
      'animated 3D models in Autodesk 3DS Max, created comic panels in Photoshop, ' +
      'and implemented the site using HTML, CSS, JavaScript, and HTML5 video. ' +
      'This project allowed me to merge front-end development with animation and design, ' +
      'blending creativity with technology, and deliver a unique project that stood out ' +
      'from traditional informational websites. The project was highly successful, ' +
      'earning me a first-class honours degree.',
    githubLink: 'https://github.com/ConorCrutchley/The-Kata-Dojo',
    siteLink: '',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Cross Browser Compatibility'],
    thumbnail: thumbnails.theKataDojo,
  },
  {
    key: 'full-circle-martial-arts',
    title: 'Full Circle Martial Arts - My First Website',
    excerpt:
      'My first real project in web development was creating a promotional ' +
      'website for my karate club, Full Circle Martial Arts, as part of my BTEC Level 3 ' +
      'IT course. Using Adobe Dreamweaver&apos;s WYSIWYG editor, I created a multi-page ' +
      'site featuring instructor bios, event recaps, photo and video galleries, class ' +
      'schedules with integrated Google Maps, and a contact page. At the time, the site ' +
      'was built using tables, inline styling, and Flash for media content, standards ' +
      'that have since been replaced by responsive design and HTML5. Although simple by ' +
      'today&apos;s standards, the site was well-received and served as an effective ' +
      'online presence for the club at the time. More importantly, it gave me my first ' +
      'taste of bringing real-world value to a local business through web development, ' +
      'sparking my long-term passion for web development.',
    githubLink: 'https://github.com/ConorCrutchley/Full-Circle-Website',
    siteLink: '',
    skills: ['HTML5', 'CSS3'],
    thumbnail: thumbnails.fullCircle,
  },
];
