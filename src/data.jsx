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
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Typescript',
    icon: <SiTypescript className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced knowledge of Typescript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.',
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <FaPython className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced Knowledge of Python, utilizing python resources and library in building a more sophisticated and functional application.',
  },
  {
    id: nanoid(),
    title: 'Django',
    icon: <SiDjango className='h-16 w-16 text-emerald-500' />,
    text: 'Knowlwdge of Django, developing efficient and robust backend applications with a Django.',
  },
  {
    id: nanoid(),
    title: 'NodeJS/ExpressJS',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in NodeJS and ExpressJS, developing efficient, scalable REST API and backend server.',
  },
  {
    id: nanoid(),
    title: 'Postgresql',
    icon: <FaDatabase className='h-16 w-16 text-emerald-500' />,
    text: 'Knowledge of Database management tools which include Mongo DB and PostgreSQL.',
  },
  {
    id: nanoid(),
    title: 'Docker and Kubernete',
    icon: <FaDocker className='h-16 w-16 text-emerald-500' />,
    text: 'Knowlwdege of DevOps tool which include Docker and Kubernete.',
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
