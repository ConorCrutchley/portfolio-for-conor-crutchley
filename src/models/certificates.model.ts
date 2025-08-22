import type { IImageAttr } from './imageAttr.model';

export interface ICertificateGroup {
  group: string;
  certificates: ICertificate[];
}

export interface ICertificate {
  key: string;
  title: string;
  subtitle: string;
  provider: string;
  thumbnail: IImageAttr;
  link: string;
  platform: keyof ICertificatePlatforms;
}

export interface ICertificatePlatforms {
  udemy: IImageAttr;
  semrush: IImageAttr;
}

export const certificatePlatforms: ICertificatePlatforms = {
  udemy: {
    src: '',
    alt: '',
  },
  semrush: {
    src: '',
    alt: '',
  },
};

export const certificateGroups: ICertificateGroup[] = [
  {
    group: 'Technical Courses',
    certificates: [
      {
        key: 'react-the-complete-guide',
        title: 'React - The Complete Guide',
        subtitle: '(incl Hooks, React Router, Redux)',
        provider: 'Acadamind',
        thumbnail: {
          src: '',
          alt: '',
        },
        platform: 'udemy',
        link: '',
      },
    ],
  },
];
