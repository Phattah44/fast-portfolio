import { nanoid } from 'nanoid';
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaDatabase,
} from 'react-icons/fa';
import { SiTypescript, SiDjango } from 'react-icons/si';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in crafting visually appealing and responsive user interfaces using HTML and CSS, ensuring optimal user experiences across different devices.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expert in JavaScript, building dynamic and interactive web applications with a strong focus on performance and user engagement.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Master of React, developing scalable and maintainable front-end applications using component-based architecture and state management.',
  },
  {
    id: nanoid(),
    title: 'Typescript',
    icon: <SiTypescript className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in TypeScript, writing robust and type-safe code for large-scale applications, enhancing code quality and maintainability.',
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <FaPython className='h-16 w-16 text-emerald-500' />,
    text: 'Skilled in Python, developing efficient and scalable backend systems, creating different AI agents, and using different python librabies',
  },
  {
    id: nanoid(),
    title: 'Django',
    icon: <SiDjango className='h-16 w-16 text-emerald-500' />,
    text: 'Experienced in Django, building robust and secure web applications with a focus on rapid development and scalability.',
  },
  {
    id: nanoid(),
    title: 'NodeJS/ExpressJS',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in Node.js and Express.js, developing high-performance and scalable web APIs and server-side applications.',
  },
  {
    id: nanoid(),
    title: 'Database',
    icon: <FaDatabase className='h-16 w-16 text-emerald-500' />,
    text: 'Familiar with MongoDB and PostgreSQL, designing and implementing efficient database solutions for data storage and retrieval.',
  },
  {
    id: nanoid(),
    title: 'Docker and Kubernete',
    icon: <FaDocker className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in Docker and Kubernetes, building and deploying containerized applications for efficient and scalable infrastructure management.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
