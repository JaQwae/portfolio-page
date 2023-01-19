import SideNav, { 
    Toggle,
    NavItem,
    NavIcon,
    NavText
} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../../assets/pageNavigation/sideNavbar.css';

const SideNavBar = () => {
    return <SideNav
        onSelect={selected=> {
            console.log(selected);
        }}
        className='side-nav-bar'

    >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected='home'>
            <NavItem eventKey='home'>
                <NavIcon>
                    <i className='side-nav-bar-icon fa fa-fw fa-home'/>
                </NavIcon>
                <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey='about-me'>
                <NavIcon>
                    <i className='side-nav-bar-icon fa-solid fa-address-card '/>
                </NavIcon>
                <NavText>About Me</NavText>
            </NavItem>
            <NavItem eventKey='experience'>
                <NavIcon>
                    <i className='side-nav-bar-icon fa-solid fa-briefcase'/>
                </NavIcon>
                <NavText>Experience</NavText>
                    <NavItem eventKey='portfolio'>
                        <NavText>Portfolio</NavText>
                    </NavItem>
                    <NavItem eventKey='resume'>
                        <NavText>Resume</NavText>
                    </NavItem>
                    
            </NavItem>
            <NavItem eventKey='connect'>
                <NavIcon>
                    <i className='side-nav-bar-icon fa-sharp fa-solid fa-circle-nodes'/>
                </NavIcon>
                <NavText>Connect</NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
};

export default SideNavBar;