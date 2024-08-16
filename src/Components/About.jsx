import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid  md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='Code, Caffeine, and Creativity' />
          <p className='text-slate-600 mt-8 leading-loose'>
            I'm a full-stack developer who trades sleep for code and coffee.
            With a passion for crafting intuitive user experiences, I bring
            ideas to life through clean, efficient code. From designing stunning
            front-ends with React and Tailwind CSS to building robust back-ends
            with Node.js and Express, I've got you covered.
          </p>
          <p className='text-slate-600 mt-8 leading-loose'>
            When I'm not hunched over my keyboard, you can find me lost on the
            street of Youtube, or consuming information online that i wont be
            needing, or reading personal development or history, biography
            books. I really want to dive into open-source projects, I want to
            explore new frameworks. I believe that code should be elegant,
            maintainable, and, most importantly, fun.
          </p>
          <p className='text-slate-600 mt-8 leading-loose'>
            Let's build something amazing together. Whether you need a custom
            web application, a sleek e-commerce platform, or just want to chat
            about the latest JavaScript trends, feel free to reach out.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
