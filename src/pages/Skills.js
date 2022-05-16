import React, {useState} from 'react';
import { useNav } from '../customHooks/useNav';

function Skills() {
    // Use Nav Hook
    const skillsRef = useNav('Skills');

    return (
        <section ref={skillsRef}>
            <div id="skillsSection">
                <h2>Skills</h2>
                <p>
                    Languages: C/C++, Python, Java, JavaScript, C#
                </p>
                <p>
                    Frontend: React.js, Bootstrap, HTML/CSS, WPF
                </p>
                <p>
                    Backend: Node.js, .NET, SQL (Oracle), NoSQL (MondoDB)
                </p>
            </div>
        </section>
    );
};

export default Skills;