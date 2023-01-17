import React from 'React';

function NavTabs ({ currentPage, handlePageChange }) {
    return (
        <ul className='nav-bar'>
            <li className='nav-tab'>
                <a
                    href= '#home'
                    onClick= {() => handlePageChange ('home')}
                    className= {currentPage === 'home' ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </a>
            </li>
            <li className='nav-tab'>
                <a
                    href= '#contact'
                    onClick= {() => handlePageChange ('contact')}
                    className= {currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
            <li className='nav-tab'>
                <a
                    href= '#resume'
                    onClick= {() => handlePageChange ('resume')}
                    className= {currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
        </ul>
    )
}

export default NavTabs;