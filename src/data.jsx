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
    img: '/public/Oskat_Properties.png',
    url: 'https://oskat-property-frontend-pi.vercel.app/',
    github: 'https://github.com/Phattah44/oskatProperty_Frontend/tree/main',
    title: 'Oskat Properties',
    text: 'Oskat Properties is a modern real estate platform I developed, featuring user-friendly design, property listings, and seamless navigation for clients to explore and invest in homes.',
  },
  {
    id: nanoid(),
    img: '/public/media_africa.png',
    url: 'https://media-africa-frontend-vqin.vercel.app/',
    github: 'https://github.com/Phattah44/media-africa-frontend',
    title: 'Media Africa',
    text: 'Media Africa is a dynamic marketing agency I developed, focused on creating innovative campaigns to help businesses thrive in the African market through digital strategies and brand solutions.',
  },
  {
    id: nanoid(),
    img: '/public/cranbrook.png',
    url: 'https://cranbrook.netlify.app/',
    github: 'https://github.com/Phattah44/Cranbrook',
    title: 'Cranbrook',
    text: 'I developed Cranbrook Educational Platform, a static website offering management courses, Safety courses, History, and other business training. Classes run across Africa.',
  },
];
