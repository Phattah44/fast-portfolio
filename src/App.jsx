import About from './Components/About';
// import Certificates from './Components/Certificates';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      {/* <Certificates /> */}
    </>
  );
};

export default App;
