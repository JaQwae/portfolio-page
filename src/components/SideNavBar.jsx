import SideNav, { 
    Toggle,
    NavItem,
    NavIcon,
    NavText
} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useNavigate } from 'react-router-dom';
// import {useState} from 'react'
import '../assets/styles/sideNavBar.css';

const SideNavBar = (theme) => {

    let currentTheme = theme.theme;
    const navigate = useNavigate();

    function colorTheme(theme) {
        let color = "";

        if (theme === 'dark') {
            color = "#7D84B2"
            return color;
        } else {
            color = "#25CED1"
            return color;
        }
    }

    return <SideNav
        onSelect={selected=> {
            navigate('/portfolio-page/'+selected);
        }}
        className='side-nav-bar'
    >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected='' >
            <NavItem eventKey=''>
                <NavIcon>
                    <i className='side-nav-bar-icon fa fa-fw fa-home' style={{color:colorTheme(currentTheme)}}/>
                </NavIcon>
                <NavText style={{color:colorTheme(currentTheme)}}>Home</NavText>
            </NavItem>
            <NavItem eventKey='about-me'>
                <NavIcon>
                    <i className='side-nav-bar-icon fa-solid fa-address-card' style={{color:colorTheme(currentTheme)}}/>
                </NavIcon>
                <NavText style={{color:colorTheme(currentTheme)}}>About Me</NavText>
            </NavItem>
            <NavItem eventKey='experience'>
                <NavIcon>
                    <i className='side-nav-bar-icon fa-solid fa-briefcase' style={{color:colorTheme(currentTheme)}}/>
                </NavIcon>
                <NavText style={{color:colorTheme(currentTheme)}}>Experience</NavText>
                    <NavItem eventKey='portfolio'>
                        <NavText>Portfolio</NavText>
                    </NavItem>
                    <NavItem eventKey='resume'>
                        <NavText>Resume</NavText>
                    </NavItem>
                    
            </NavItem>
            <NavItem eventKey='connect'>
                <NavIcon>
                    <i className='side-nav-bar-icon fa-sharp fa-solid fa-circle-nodes' style={{color:colorTheme(currentTheme)}}/>
                </NavIcon>
                <NavText style={{color:colorTheme(currentTheme)}}>Connect</NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
};

export default SideNavBar;