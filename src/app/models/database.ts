import { Links, NameSection, ProjectList, Header, Skills } from './interface';

export const sectionName: NameSection[] = [
  { id: 1, name: 'start', className: 'noActive' },
  { id: 2, name: 'about', className: 'noActive' },
  { id: 3, name: 'project', className: 'noActive' },
];

export const projectList: ProjectList[] = [
  {
    id: 1,
    name: 'POLmed JavaScript',
    className: 'activeProject',
    folder: 'POLmed_javascript',
    photoGallery: ['mainPage.png', 'doctorPage.png', 'confirmPage.png'],
    technologyGallery: [
      { name: 'HTML', image: 'HTML' },
      { name: 'CSS', image: 'CSS' },
      { name: 'JavaScript', image: 'JavaScript' },
      { name: 'JQuery', image: 'JQuery' },
      { name: 'JSON', image: 'JSON' },
    ],
    link: 'https://maciejkubon.github.io/Strona/',
  },
  {
    id: 2,
    name: 'PIMI.PK.EDU.PL',
    className: 'noActiveProject',
    folder: 'PIMI',
    photoGallery: ['01.png', '02.png', '03.png', '04.png', '05.png', '06.png'],
    technologyGallery: [
      { name: 'HTML', image: 'HTML' },
      { name: 'CSS', image: 'CSS' },
      { name: 'JavaScript', image: 'JavaScript' },
      { name: 'JSON', image: 'JSON' },
    ],
    link: 'https://pimi.pk.edu.pl/',
  },
  {
    id: 3,
    name: 'POLmed TypeScript',
    className: 'noActiveProject',
    folder: 'POLMED_typescript',
    photoGallery: ['mainPage.png', 'doctorPage.png', 'confirmPage.png'],
    technologyGallery: [
      { name: 'HTML', image: 'HTML' },
      { name: 'CSS', image: 'CSS' },
      { name: 'TypeScript', image: 'TypeScript' },
      { name: 'JSON', image: 'JSON' },
    ],
    link: 'https://maciejkubon.github.io/polmed_typescrip/',
  },
  {
    id: 4,
    name: 'Portfolio',
    className: 'noActiveProject',
    folder: 'Portfolio',
    photoGallery: ['01.png', '02.png', '03.png'],
    technologyGallery: [
      { name: 'HTML', image: 'HTML' },
      { name: 'CSS', image: 'CSS' },
      { name: 'TypeScript', image: 'TypeScript' },
      { name: 'Angular', image: 'Angular' },
    ],
    link: 'https://maciejkubon.github.io/Portfolio/',
  },
  {
    id: 5,
    name: 'FuelForecast',
    className: 'noActiveProject',
    folder: 'FuelForecast',
    photoGallery: [
      '01.png',
      '02.png',
      '03.png',
      '04.png',
      '05.png',
      '06.png',
      '07.png',
      '08.png',
      '09.png',
    ],
    technologyGallery: [
      { name: 'HTML', image: 'HTML' },
      { name: 'CSS', image: 'CSS' },
      { name: 'TypeScript', image: 'TypeScript' },
      { name: 'Angular', image: 'Angular' },
    ],
    link: 'https://nielogiczne-paliwo.github.io/FuelForecast/',
  },
  {
    id: 6,
    name: 'CTP Application',
    className: 'noActiveProject',
    folder: 'CTPApplication',
    photoGallery: [
      '01.png',
      '02.png',
      '03.png',
      '04.png',
      '05.png',
      '06.png',
      '07.png',
      '08.png',
      '09.png',
    ],
    technologyGallery: [
      { name: 'HTML', image: 'HTML' },
      { name: 'CSS', image: 'CSS' },
      { name: 'TypeScript', image: 'TypeScript' },
      { name: 'Angular', image: 'Angular' },
    ],
    link: 'https://maciejkubon.github.io/CTP-APPLICATION/',
  },
];
export const links: Links[] = [
  {
    name: 'LinkedIn',
    image: 'LinkedIn.png',
    link: 'https://www.linkedin.com/in/maciej-kubo%C5%84-9780a320a/',
  },
  {
    name: 'Github',
    image: 'Github.png',
    link: 'https://github.com/MaciejKubon',
  },
  {
    name: 'maciejk2233@gmail.com',
    image: 'email.png',
    link: 'mailto:maciejk2233@gmail.com',
  },
  {
    name: 'Curriculum vitae',
    image: 'CV.png',
    link: './assets/MaciejKubon.pdf',
  },
];
export const skills: Skills[] = [
  {
    name: 'Angular',
    image: 'Angular.png',
  },
  {
    name: 'JavaScript',
    image: 'JavaScript.png',
  },
  {
    name: 'TypeScript',
    image: 'TypeScript.png',
  },
  {
    name: 'JQuery',
    image: 'JQuery.png',
  },
  {
    name: 'HTML',
    image: 'HTML.png',
  },
  {
    name: 'CSS',
    image: 'CSS.png',
  },
];
export const languages: Skills[] = [
  {
    name: 'polish',
    image: 'polish.png',
    level: 'NATIVE',
  },
  {
    name: 'english',
    image: 'english.png',
    level: 'B2',
  },
];

export const headers: Header[] = [
  {
    title: 'skills',
  },
  {
    title: 'language',
  },
  {
    title: 'links',
  },
];
