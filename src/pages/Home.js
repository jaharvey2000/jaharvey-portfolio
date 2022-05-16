function Home() {
    const handleClick = () => {
        // Since contact is at the bottom we can just scroll directly
        const element = document.getElementById("contactSection");
        element.scrollIntoView({behavior: 'smooth'});
    };
    
    return (
        <section>
            <div id="homeSection">
                <p className="greetings">
                    Hi, I'm
                </p>
                <h1>
                    Jared Harvey.
                    <br />
                    I'm a student, developer, & engineer.
                </h1>
                <p className="blurb">
                    I'm pivoting my career from embedded system design to web and application development and scalable system design. 
                    I'll be joining Carnegie Mellon's Master of Software Engineering - Scalable Systems program in Fall 2022.
                </p>
                <button onClick={handleClick}>Contact Me!</button>
            </div>
        </section>
    );
};

export default Home;