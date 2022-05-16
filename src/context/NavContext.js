/**
 * This custom hook was originally designed by Daniel Shapiro. It is used 
 * here with annotations for my understanding.
 * 
 * Original Author: Daniel Shapiro (Medium, GitHub)
 * Date: May 6, 2021
 * URL: https://medium.com/geekculture/scrollable-single-page-site-navigation-with-react-custom-hooks-4e7af716f6b1
 */
import React, { useState } from 'react';

export const NavContext = React.createContext();

const NavProvider = ({ children }) => {
    // This context provider will pass the active nav link to all of the nav children
    const [activeNavLinkId, setActiveNavLinkId] = useState('');

    // Children will be able to both access the active link and set the active link
    const providerValue = {
        activeNavLinkId,
        setActiveNavLinkId,
    };

    return (
        <NavContext.Provider value={providerValue}>
            {children}
        </NavContext.Provider>
    );
};

export default NavProvider;