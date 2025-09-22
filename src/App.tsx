import './App.css';
import '@fontsource/stalinist-one/index.css';
import '@fontsource/righteous/index.css';

import About from '@/components/About/About';
import Background from '@/components/Background';
import Certificates from '@/components/Certificates/Certificates';
import Contact from '@/components/Contact';
import ExperienceList from '@/components/Experience/ExperienceList';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero/Hero';
import Navbar from '@/components/Navbar/Navbar';
import Projects from '@/components/Projects/Projects';
import Skills from '@/components/Skills/Skills';

/**
 * The main app component that renders the entire application.
 */
const App = () => {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ExperienceList />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
