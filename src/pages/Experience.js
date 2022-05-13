function ExperienceBlock(props) {
    return (
        <div className="experience">
            <h3>{ props.title }</h3>
            <h4>
                { props.description } @ { props.location }
                <br />
                { props.startDate } - { props.endDate }
                <br />
                { props.skillsUsed }
            </h4>
            <p>
                { props.summary }
            </p>
        </div>
    );
};

function Experience() {
    return (
        <div id="experience" className="section">
            <h2>Experience</h2>
            <ExperienceBlock 
                title = "Fluid Shift Monitoring"
                description = "Senior Capstone Project"
                location = "The University of Alabama"
                startDate = "August 2021"
                endDate = "May 2022"
                skillsUsed = "Embedded C, Arduino, Real-Time Operating Systems, MATLAB"
                summary = "Lorem ipsum." 
            />

            <ExperienceBlock 
                title = "Methods Time-Management"
                description = "Senior Research Project"
                location = "The University of Alabama & Mercedes-Benz U.S. International"
                startDate = "January 2022"
                endDate = "May 2022"
                skillsUsed = "C#, .NET, WPF, Kinect Hardware"
                summary = "Lorem ipsum." 
            />

            <ExperienceBlock 
                title = "Automated Software Testing Intern"
                description = "Internship"
                location = "Northrop Grumman, Huntsville, AL"
                startDate = "May 2021"
                endDate = "July 2021"
                skillsUsed = "FrogLogic Squish, Python, Automated Testing, Software Leadership"
                summary = "Lorem ipsum." 
            />

            <ExperienceBlock 
                title = "Machine Learning Intern"
                description = "Internship"
                location = "Northrop Grumman, Huntsville, AL"
                startDate = "May 2020"
                endDate = "July 2020"
                skillsUsed = "Python, Tensorflow, Keras, Scikit-Learn, Pandas, Numpy"
                summary = "Lorem ipsum." 
            />
        </div>
    );
};

export default Experience;