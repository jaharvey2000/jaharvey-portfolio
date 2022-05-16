/**
 * This custom hook was originally designed by Daniel Shapiro. It is used 
 * here with annotations for my understanding.
 * 
 * Original Author: Daniel Shapiro (Medium, GitHub)
 * Date: May 6, 2021
 * URL: https://medium.com/geekculture/scrollable-single-page-site-navigation-with-react-custom-hooks-4e7af716f6b1
 */
import { useRef, useContext, useEffect } from 'react';
import { useOnScreen } from './useOnScreen';
import { NavContext } from '../context/NavContext';

export const useNav = navLinkId => {
    // The ref object reacted here will be used in each page section
    const ref = useRef(null);

    // References the 'setActiveNavLinkId' function from the NavContext Provider's
    // value prop ('providerValue')
    const { setActiveNavLinkId } = useContext(NavContext);

    // Pass this ref down to the isOnScreen observer
    const isOnScreen = useOnScreen(ref);

    // Re-render whenever the active link changes
    useEffect(() => {
        if (isOnScreen) {
            // This will update the Navbar's active link, overwriting
            // whatever link was active before then
            setActiveNavLinkId(navLinkId);
        }
    }, [isOnScreen, setActiveNavLinkId, navLinkId]);

    return ref;
};