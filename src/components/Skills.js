import React, {useState} from 'react';
import { useNav } from '../customHooks/useNav';
import { languages, frontend, backend } from '../data/skillList';
import '../style/Skills.css'

function Skill(props) {
    return (
        <div className="skill">
            <i class={ props.deviconName } />
            <p class="skillName">{ props.skillName }</p>
            <p class="skillKnowledge">{ props.level }</p>
        </div>
    )
}

function Skills() {
    // Use Nav Hook
    const skillsRef = useNav('Skills');

    return (
        <section ref={skillsRef}>
            <div id="skillsSection">
                <h2>Skills</h2>
                <h3>Languages</h3>
                <div class="skillList">
                    {languages.map(({name, level, icon}) => (
                        <Skill
                            skillName={name}
                            level={level}
                            deviconName={icon}
                        />
                    ))}
                </div>
                <h3>Frontend</h3>
                <div class="skillList">
                    {frontend.map(({name, level, icon}) => (
                        <Skill
                            skillName={name}
                            level={level}
                            deviconName={icon}
                        />
                    ))}
                </div>
                <h3>Backend</h3>
                <div class="skillList">
                    {backend.map(({name, level, icon}) => (
                        <Skill
                            skillName={name}
                            level={level}
                            deviconName={icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;