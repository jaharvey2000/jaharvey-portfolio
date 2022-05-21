import '../style/Home.css';
import { useNav } from '../customHooks/useNav';

function ContactButton() {
    const handleClick = () => {
        // Since contact is at the bottom we can just scroll directly
        const element = document.getElementById("contactSection");
        element.scrollIntoView({behavior: 'smooth'});
    };
    
    return (
        <button onClick={handleClick}>Contact Me!</button>
    );
}

function ResumeButton() {
    return (
        <a className="linkButton" href="../data/Resume.pdf">My Resume</a>
    );
}

function PageButtons() {
    return (
        <div class="pageButtons">
            <ContactButton />
            <ResumeButton />
        </div>
    )
};

function Home() {
    const homeRef = useNav('Home');
    return (
        <section ref={homeRef}>
            <div id="homeSection">
                <div className="intro">
                    <p className="greetings">Hi, my name is</p>
                    <h1>Jared Harvey.</h1>
                    <h1>I'm a student, developer, & engineer.</h1>
                    <p className="blurb">
                        I'm pivoting my career from embedded system design to web and application development and scalable system design. 
                        I'll be joining Carnegie Mellon's Master of Software Engineering - Scalable Systems program in Fall 2022.
                    </p>
                    <PageButtons />
                </div>
                <div className="image">
                    <img src="https://i.imgur.com/ZaJDuuy.jpg" alt="That's me!" />
                </div>
            </div>
        </section>
    );
};

export default Home;