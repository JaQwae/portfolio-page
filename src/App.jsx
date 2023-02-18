import './App.css';
import { useState } from 'react';
// Background import
import ParticlesBackground from './components/ParticlesBackground';
// Nav bar imports
import SideNavBar from './components/SideNavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Connect from './components/pages/Connect';
// Theme button imports
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness6OutlinedIcon from '@mui/icons-material/Brightness6Outlined';
// Assist with button placement
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const App = () => {
  // State for the application
  const [theme, setTheme] = useState('dark');

  // Materialize icon button logic
  const [isDark, setIsDark] = useState(true);
  
  const light ={
    palette: {
      mode:'light'
    }
  };

  const dark ={
    palette: {
      mode:'dark'
    }
  };

  // Handles theme changes
  function toggleTheme() {
      if (theme === 'dark') {
        setTheme('light');
        setIsDark('false');
      } else {
        setTheme('dark');
        setIsDark('true');
      }
  }

  return (
    <div className= {`app ${theme}`}>
      <ParticlesBackground theme={`${theme}`}/>
      
      
      <ThemeProvider theme={isDark?createTheme(light):createTheme(dark)}>
        <Router>
          <SideNavBar />
          <Routes>
            <Route path='/' element ={<Home theme={`${theme}`}/>} />
            <Route path='/home' element ={<Home theme={`${theme}`}/>} />
            <Route path='/about-me' element ={<AboutMe/>} />
            <Route path='/portfolio' element ={<Portfolio/>} />
            <Route path='/resume' element ={<Resume theme={`${theme}`}/>} />
            <Route path='/connect' element ={<Connect theme={`${theme}`}/>} />
          </Routes>
        </Router>
        <Brightness6OutlinedIcon onClick={toggleTheme} className="position-absolute top-0 end-0 theme-icon-button"/ >
      </ThemeProvider>
    </div>
  )
}

export default App;
