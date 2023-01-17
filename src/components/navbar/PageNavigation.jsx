import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

function PageNavigation () {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        if (currentPage === 'home') {
            return <Home/>;
        };
        if (currentPage === 'contact') {
            return <Contact/>;
        };
        return <Resume/>;
    };
    
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}

export default PageNavigation;