import NavLink from './NavLink'
import { pageSections } from '../data/pageSectionData';
import '../style/Navbar.css'

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
