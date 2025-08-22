import type { ReactNode } from 'react';

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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in eos
        non repellat laboriosam possimus magnam excepturi quidem sapiente
        provident, nulla dolores nemo incidunt veritatis nam atque minima
        repellendus iure!
      </>,
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in eos
        non repellat laboriosam possimus magnam excepturi quidem sapiente
        provident, nulla dolores nemo incidunt veritatis nam atque minima
        repellendus iure!
      </>,
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in eos
        non repellat laboriosam possimus magnam excepturi quidem sapiente
        provident, nulla dolores nemo incidunt veritatis nam atque minima
        repellendus iure!
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in eos
        non repellat laboriosam possimus magnam excepturi quidem sapiente
        provident, nulla dolores nemo incidunt veritatis nam atque minima
        repellendus iure!
      </>,
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in eos
        non repellat laboriosam possimus magnam excepturi quidem sapiente
        provident, nulla dolores nemo incidunt veritatis nam atque minima
        repellendus iure!
      </>,
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in eos
        non repellat laboriosam possimus magnam excepturi quidem sapiente
        provident, nulla dolores nemo incidunt veritatis nam atque minima
        repellendus iure!
      </>,
    ],
  },
];
