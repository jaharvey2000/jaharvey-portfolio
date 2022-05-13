// TODO: Use Context

function NavLink({navLinkId, scrollToId}) {
    // TODO: Use Context

    const handleClick = () => {
        // Get the section we want to go to
        const element = document.getElementById(scrollToId);
        
        // Get the height of the navbar 
        const appHeader = document.getElementById("app-header");
        const headerHeight = appHeader.offsetHeight;

        // Calculate scroll offset
        const scrollY = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        // Scroll to the element
        window.scrollTo({top: scrollY, behavior: 'smooth'});
    };

    return (
        <span id={navLinkId} onClick={handleClick}>
            {navLinkId}
        </span>
    );
};

export default NavLink;
