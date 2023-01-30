import './App.css';
import ParticlesBackground from './components/ParticlesBackground';
import SideNavBar from './components/SideNavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Connect from './components/pages/Connect';
import { useState } from 'react';



const App = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }


  return (
    <div className= {`App ${theme}`}>
      <Router>
        <SideNavBar/>
        <Routes>
          <Route path='/' element ={<Home/>} />
          <Route path='/home' element ={<Home/>} />
          <Route path='/about-me' element ={<AboutMe/>} />
          <Route path='/portfolio' element ={<Portfolio/>} />
          <Route path='/resume' element ={<Resume/>} />
          <Route path='/connect' element ={<Connect/>} />
        </Routes>
      </Router>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ParticlesBackground theme={`${theme}`}/>
    </div>
  )
  
}

export default App;
