import './App.css';
import '@fontsource/stalinist-one';
import '@fontsource/righteous';

import About from './components/About/About';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact';
import ExperienceList from './components/Experience/ExperienceList';
import Footer from './components/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <div className="content">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ExperienceList />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
