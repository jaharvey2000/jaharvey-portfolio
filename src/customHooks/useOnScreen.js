/**
 * This custom hook was originally designed by Filip Szczepanski. It is used 
 * here with annotations for my understanding.
 * 
 * Original Author: Filip Szczepanski (StackOverflow)
 * Date: June 3, 2021
 * URL: https://stackoverflow.com/questions/58341787/intersectionobserver-with-react-hooks/67826055#67826055
 */
import { useEffect, useState, useRef } from 'react';

export function useOnScreen(ref) {
    // Boolean state, returned from function
    const [isOnScreen, setIsOnScreen] = useState(false);

    // useRef provides a constant reference, essentially prevents new observers 
    // from being created every render
    const observerRef = useRef(null);
    
    // First useEffect declares IntersectionObserver object & sets callback
    // Only triggers once
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            ([entry]) => setIsOnScreen(entry.isIntersecting),   // Callback
            { threshold: [0.25, 0.5, 0.75] }                    // Options
        );
    }, []);

    // Second useEffect sets the HTML element to watch
    useEffect(() => {
        observerRef.current.observe(ref.current);

        // Free the object when done
        return () => {
            observerRef.current.disconnect();
        };
    }, [ref]);

    return isOnScreen;
}