import React, { useContext } from 'react';
import { NavContext } from '../context/NavContext';

function NavLink({navLinkId, scrollToId}) {
    // Curly braces are used to destructure a dictionary
    const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

    const handleClick = () => {
        // Get the section we want to go to
        const element = document.getElementById(scrollToId);
        
        // Get the height of the navbar 
        const appHeader = document.getElementById("app-header");
        const headerHeight = appHeader.offsetHeight;

        // Calculate scroll offset
        const scrollY = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        // Scroll to the element & update the nav
        setActiveNavLinkId(navLinkId);
        window.scrollTo({top: scrollY, behavior: 'smooth'});
    };

    return (
        <span 
            id={navLinkId} 
            onClick={handleClick}
            className={(activeNavLinkId === navLinkId) ? 'activeClass' : ''}
        >
            {navLinkId}
        </span>
    );
};

export default NavLink;
