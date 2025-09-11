import type { ReactNode } from 'react';
import styles from '@/styles/experience/experience.module.css';

export interface IExperience {
  key: string;
  company: string;
  title: string;
  dateStart: Date;
  dateEnd?: Date;
  bullets: ReactNode[];
}

export const experience: IExperience[] = [
  {
    key: 'rightio-web-developer',
    company: 'Rightio',
    title: 'Web Developer',
    dateStart: new Date(2018, 7, 1),
    bullets: [
      <>
        Led the redevelopment of the company website using{' '}
        <strong className={styles['strong-tech']}>React (Gatsby.js)</strong>,
        implementing a modular,{' '}
        <strong className={styles['strong-tech']}>
          component-based system
        </strong>{' '}
        to streamline responsive, accessible layouts across all devices and
        browsers boost scalability. This{' '}
        <strong className={styles['strong-figure']}>
          increased visitors and user engagement by 20%
        </strong>
        .
      </>,
      <>
        Integrated{' '}
        <strong className={styles['strong-tech']}>Directus CMS</strong> to
        separate front-end and content management, enabling non-technical team
        members to update site content, whilst{' '}
        <strong className={styles['strong-figure']}>
          reducing server-side processes by 90%
        </strong>
        .
      </>,
      <>
        Conducted thorough{' '}
        <strong className={styles['strong-tech']}>
          technical SEO optimisation
        </strong>
        , increasing the{' '}
        <strong className={styles['strong-figure']}>
          Semrush site audit score from 76 to 97
        </strong>
        , achieving higher organic rankings.
      </>,
      <>
        Increased{' '}
        <strong className={styles['strong-tech']}>
          Lighthouse performance scores
        </strong>{' '}
        from an average of 50-60 to of
        <strong className={styles['strong-figure']}>
          97-100 on desktop
        </strong>{' '}
        and <strong className={styles['strong-figure']}>86-92 on mobile</strong>
        .
      </>,
      <>
        Migrated the legacy codebase from JavaScript to{' '}
        <strong className={styles['strong-tech']}>TypeScript</strong>, improving
        type safety and{' '}
        <strong className={styles['strong-figure']}>
          reducing bugs by 30%
        </strong>
        .
      </>,
      <>
        Set up an automated{' '}
        <strong className={styles['strong-tech']}>CI/CD pipeline</strong> using{' '}
        <strong className={styles['strong-tech']}>
          GitHub Actions and Azure
        </strong>
        , supporting safer and faster deployments and{' '}
        <strong className={styles['strong-figure']}>
          increasing efficiency by 60%
        </strong>
        .
      </>,
      <>
        Overhauled the company&apos;s{' '}
        <strong className={styles['strong-tech']}>
          customer review process
        </strong>
        , leading to the{' '}
        <strong className={styles['strong-figure']}>
          Google Review rating rising from 1.2 to 3.6 within 6 months
        </strong>
        .
      </>,
    ],
  },
  {
    key: 'recruitive-web-applications-developer',
    company: 'Recruitive',
    title: 'Web Applications Developer',
    dateStart: new Date(2013, 0, 1),
    dateEnd: new Date(2018, 6, 31),
    bullets: [
      <>
        Handled over{' '}
        <strong className={styles['strong-figure']}>200 integrations</strong>{' '}
        between the multi-job posting service and various sites using{' '}
        <strong className={styles['strong-tech']}>
          HTTP requests, APIs, and XML Feeds
        </strong>
        .
      </>,
      <>
        Developed over <strong className={styles['strong-figure']}>100</strong>{' '}
        <strong className={styles['strong-tech']}>
          custom responsive widgets and WordPress plugins
        </strong>{' '}
        for recruitment clients and companies, including{' '}
        <strong className={styles['strong-figure']}>
          Scania, Volvo, and The Works
        </strong>
        , integrating job data seamlessly and matching branding guidelines thus
        improving their careers pages and user application experiences.
      </>,
      <>
        Initiated{' '}
        <strong className={styles['strong-tech']}>
          job failure monitoring
        </strong>{' '}
        and{' '}
        <strong className={styles['strong-tech']}>
          admin interface updates
        </strong>
        , allowing internal teams to proactively handle posting issues,{' '}
        <strong className={styles['strong-figure']}>
          increasing efficiency and customer satisfaction by 80%
        </strong>
        .
      </>,
      <>
        Introduced{' '}
        <strong className={styles['strong-tech']}>multi-threading</strong> to
        the{' '}
        <strong className={styles['strong-tech']}>
          .NET job posting service
        </strong>
        , improving the rates jobs were posted to sites by{' '}
        <strong className={styles['strong-figure']}>over 600%</strong>.
      </>,
      <>
        <strong className={styles['strong-tech']}>Mentored</strong>{' '}
        <strong className={styles['strong-figure']}>2 junior developers</strong>
        , teaching them how to do integrations, monitor failed job postings,
        implement widgets and WordPress plugins.
      </>,
    ],
  },
];
