import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Second from './components/Second';
import Skills from './components/Skills';
import Education from './components/Education';
import Myprojects from './components/Myproject';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Second />
      <Skills />
      <Education />
      <Myprojects />
      <Contact />
    </div>
  );
}

export default App;
