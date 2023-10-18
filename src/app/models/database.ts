import {
  Links,
  NameSection,
  ProjectList,
  language,
  technology,
} from './interface';

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
    description: `The website was created as an academic project and was developed according to clear guidelines. The website is intended to showcase the appearance and functionality of the front-end platform for booking doctor's appointments. It allows users to select medical specialties and then choose a specific doctor. Next, users can select the purpose of the visit along with the date and time. Users also have the option to cancel appointments.`,
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
    description:
      'The website was created for the needs of the Academic Circle of Programmers and Computer Enthusiasts operating at the Faculty of Mechanical Engineering of the Cracow University of Technology. It was developed as one of the first projects after the reactivation of the circle. Several members of the academic circle were involved in the creation of the website.',
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
    description:
      'The project was completed during the process of learning TypeScript. As part of the learning process, I rewrote one of the previous projects from JavaScript/JQuery to TypeScript. All functionalities remained unchanged, such as selecting medical specialties and then a specific doctor, choosing the purpose of the visit, along with the date and time. ',
    technologyGallery: [
      { name: 'HTML', image: 'HTML' },
      { name: 'CSS', image: 'CSS' },
      { name: 'TypeScript', image: 'TypeScript' },
      { name: 'JSON', image: 'JSON' },
    ],
    link: 'https://maciejkubon.github.io/polmed_typescrip/',
  },
  {
    id:4,
    name:'Portfolio',
    className: 'noActiveProject',
    folder: 'Portfolio',
    photoGallery: ['01.png', '02.png', '03.png'],
    description:
      'The project was completed during the process of learning TypeScript. As part of the learning process, I rewrote one of the previous projects from JavaScript/JQuery to TypeScript. All functionalities remained unchanged, such as selecting medical specialties and then a specific doctor, choosing the purpose of the visit, along with the date and time. ',
      technologyGallery: [
        { name: 'HTML', image: 'HTML' },
        { name: 'CSS', image: 'CSS' },
        { name: 'TypeScript', image: 'TypeScript' },
        { name: 'Angular', image: 'Angular' },
      ],
      link: 'https://maciejkubon.github.io/polmed_typescrip/',
  }
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
export const skills: technology[] = [
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
    image: 'JQuery.png'
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
export const languages: language[] = [
  {
    image: 'polish.png',
    level: 'NATIVE',
  },
  {
    image: 'english.png',
    level: 'B2',
  },
];
