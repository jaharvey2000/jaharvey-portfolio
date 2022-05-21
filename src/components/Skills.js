import '../style/Skills.css'
import { languages, frontend, backend } from '../data/skillData';
import React from 'react';

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
    return (
        <div id="skillsSection">
            <h3>What I Use</h3>
            <div class="skillList">
                {languages.map(({name, level, icon}) => (
                    <Skill
                        skillName={name}
                        level={level}
                        deviconName={icon}
                    />
                ))}
                {frontend.map(({name, level, icon}) => (
                    <Skill
                        skillName={name}
                        level={level}
                        deviconName={icon}
                    />
                ))}
                {backend.map(({name, level, icon}) => (
                    <Skill
                        skillName={name}
                        level={level}
                        deviconName={icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default Skills;