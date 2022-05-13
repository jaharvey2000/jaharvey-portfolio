function NavLink({navLinkId, scrollToId}) {
    // TODO: Use Context

    const handleClick = () => {
        const element = document.getElementById(scrollToId);
        const scrollOffset = -60;
        const posY = element.getBoundingClientRect().top + window.pageYOffset + scrollOffset;

        window.scrollTo({top: posY, behavior: 'smooth'});
    };

    return (
        <span id={navLinkId} onClick={handleClick}>
            {navLinkId}
        </span>
    );
};

export default NavLink;