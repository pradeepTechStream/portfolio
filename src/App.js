import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contacts';
import Education from './components/Education';


function App() {
  return (
    <div className="header-gradient text-white py-3 px-4">


    <Header />
    <About />
    <Skills />
    <Projects />
    <Education />
    <Contact />
    
  </div>

  );
}

export default App;
