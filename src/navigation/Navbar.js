import NavLink from './NavLink'
import { pageSections } from './pageSections';

function Navbar() {
    return (
        <header id="app-header">
            <nav>
                {pageSections.map(({sectionId, scrollToId}, idx) => (
                    <NavLink key={idx} navLinkId={sectionId} scrollToId={scrollToId} />
                ))}
            </nav>
        </header>
    );
};

export default Navbar;
