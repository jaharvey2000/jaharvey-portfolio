import React from 'react';
import { useNav } from '../customHooks/useNav';
import Skills from './Skills'
import '../style/About.css'

function About() {
    // Use the Nav Hook 
    const aboutRef = useNav('About');

    return (
        <section ref={aboutRef}>
            <div id="aboutSection">
                <div className="aboutContainer">
                    <h2>About Me</h2>
                    <p>
                        Hello! My name is Jared Harvey. I am a budding software engineer with a broad knowledge of 
                        software design principles, systems engineering, computer architecture, and embedded system design.
                        I'm currently working on developing my skills in full-stack development and scalable system design,
                        including learning tools such as React.js, Node.js, and cloud services such as AWS and Azure.
                    </p>
                    <p>
                        I graduated from The University of Alabama in May 2022, with a dual-major in Computer Science and
                        Computer Engineering. This background has given me a large breadth of knowledge of both low- and high-
                        level systems. To help build a deeper understanding of application development and systems at scale, 
                        I am joining Carnegie Mellon's MSE-SS cohort in August 2022.
                    </p>
                    <p>
                        I'm most happy when challenging myself to learn new skills and technologies. I have a curious mind which
                        loves to tinker and master concepts. Whether in the classroom, working on a project, or just testing an
                        idea in a sandbox, I love to workshop my skills to become a better engineer.
                    </p>
                </div>
            </div>
            <Skills />
        </section>
    );
};

export default About;
