import { createContext, useEffect, useState} from 'react';
import './App.css';
import About from './components/About/About';
import Certificate from './components/Certificates/Certificate';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

export const ThemeChanger = createContext()

function App() {
const [showbtn,setShowbtn] = useState('')


  useEffect(() => {
    setTimeout(() => {
      
      setShowbtn('dark-btn-container-down')
    }, 500);
  }, [])
  

  const [dark,setDark] = useState(false)

  const darkMode = ()=> {
    setDark( preve => !preve)
  }

  const darkModeStyle = {
    backgroundColor: dark ? "black" : "",
  };

  return (
    <ThemeChanger.Provider value={dark}>
    <div style={darkModeStyle} className="App">

    <div className={`dark-btn-container ${showbtn}`}>
      <div className='line'></div>
      <button className='dark-btn' onClick={darkMode}>
        {dark ? 'Light': 'Dark'}
      </button>
    </div>

      <Header />
      <About />
      <Skills />
      <Projects />
      <Certificate />
    </div>
    </ThemeChanger.Provider>
  );
}

export default App;
