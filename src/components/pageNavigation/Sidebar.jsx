import SideNav, { 
    Toggle,
    NavItem,
    NavIcon,
    NavText
} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../../assets/pageNavigation/sidebar.css';

const Sidebar = () => {
    return <SideNav
        onSelect={selected=> {
            console.log(selected);
        }}
    >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected='home'>
            <NavItem>
                <NavIcon>
                    <i className='fa fa-fw fa-home'/>
                </NavIcon>
                <NavText>Home</NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
};

export default Sidebar;