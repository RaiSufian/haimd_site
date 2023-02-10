import Header from './components/Header';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/experience';
import Skills from './components/skills';
import Project from './components/projects';
import Enquire from './components/equire';
import Footer from './components/footer';
import ContactUS from './components/contactus';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ContactUS/>
      <Experience />
      <Skills />
      <Project />
      <Enquire />
      <Footer />
    </>
  );
}

export default App;
