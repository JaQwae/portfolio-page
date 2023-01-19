import SideNav, { 
    Toggle,
    NavItem,
    NavIcon,
    NavText
} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../../assets/pageNavigation/sidebar.css';

const SideNavBar = () => {
    return <SideNav
        onSelect={selected=> {
            console.log(selected);
        }}

    >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected='home'>
            <NavItem eventKey='home'>
                <NavIcon>
                    <i className='fa fa-fw fa-home side-bar-icons'/>
                </NavIcon>
                <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey='about-me'>
                <NavIcon>
                    <i className='fa-solid fa-address-card side-bar-icons'/>
                </NavIcon>
                <NavText>About Me</NavText>
            </NavItem>
            <NavItem eventKey='experience'>
                <NavIcon>
                    <i className='fa-solid fa-briefcase side-bar-icons'/>
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
                    <i className='fa-sharp fa-solid fa-circle-nodes side-bar-icons'/>
                </NavIcon>
                <NavText>Connect</NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
};

export default SideNavBar;