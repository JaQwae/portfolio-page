import './App.css';
import { useState } from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import SideNavBar from './components/SideNavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Connect from './components/pages/Connect';



const App = () => {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    switch (theme) {
      case 'light':
        setTheme('dark');
        break;
      case 'dark':
        setTheme('light')
        break;
    }
  }
  return (
    <div>
      <ParticlesBackground/>
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
    </div>
  )
  
}

export default App;
