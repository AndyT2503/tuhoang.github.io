import { ProjectData } from '../models';

export const FEATURED_PROJECTS: ReadonlyArray<ProjectData> = [
  {
    name: 'Ngx-Danmaku',
    description:
      'Ngx-Danmaku is the Angular library to display flying comments on iframe element.',
    image: 'assets/img/danmaku.png',
    repoUrls: [
      {
        tooltip: 'Ngx-Danmaku',
        url: 'https://github.com/AndyT2503/ngx-danmanku',
      },
    ],
    tech: ['Angular', 'Typescript'],
  },
  {
    name: 'E-commerce Shop',
    description: `E-commerce shop using Angular and .Net Core. Users can search, buy favorite products. Provide admin's management module, notification service that can send web notification or email notification.`,
    image: 'assets/img/cellphones.png',
    repoUrls: [
      {
        tooltip: 'Front-end',
        url: 'https://github.com/AndyT2503/ecommerceFE',
      },
      {
        tooltip: 'Back-end',
        url: 'https://github.com/AndyT2503/ecommerceBE',
      },
    ],
    tech: ['Angular', 'MailKit', '.NET Core', 'Redis'],
  },
  {
    name: 'RealWorld Conduit',
    description:
      'Medium.com clone (called Conduit) was built using Angular version 14 with Standalone Component.',
    image: 'assets/img/realworld.png',
    repoUrls: [
      {
        tooltip: 'RealWorld Conduit',
        url: 'https://github.com/AndyT2503/real-word-conduit-angular',
      },
    ],
    linkDemo: {
      tooltip: 'Demo RealWorld Conduit',
      url: 'https://bright-centaur-dc348e.netlify.app/#/',
    },
    tech: ['Angular', 'Typescript'],
  },
];
