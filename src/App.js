import { useEffect, useState, } from 'react';
import './App.css';
import About from './components/About/About';
import Certificate from './components/Certificates/Certificate';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
function App() {

  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Certificate />
    </div>
  );
}

export default App;
