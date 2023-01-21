import './App.css';
import SideNavBar from './components/pageNavigation/SideNavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Connect from './pages/Connect';



const App = () => {
  return (
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
  )
}

export default App;
