import React from 'react';
import { useNav } from '../customHooks/useNav';
import { experienceList } from './experienceList';

function ExperienceBlock(props) {
    return (
        <div className="experience">
            <div className="experienceHeader">
                <h3 className="experienceTitle">{ props.title }</h3>
                <h3 className="experienceDates">{ props.dates }</h3>
            </div>
            <h4>
                { props.description } <span className="location">@ { props.location }</span>
                <br />
                <span className="experienceSkills">{ props.skillsUsed }</span>
            </h4>
            <p>
                { props.summary }
            </p>
        </div>
    );
};

function Experience() {
    // Use Nav Hook
    const experienceRef = useNav('Experience');

    return (
        <section ref={experienceRef}>
            <div id="experienceSection">
                <h2>Experience</h2>
                {experienceList.map(({title, description, location, dates, skillsUsed, summary}) => (
                    <ExperienceBlock 
                        title={title} 
                        description={description} 
                        location={location}
                        dates={dates} 
                        skillsUsed={skillsUsed} 
                        summary={summary} 
                    />
                ))}
            </div>
        </section>
    );
};

export default Experience;