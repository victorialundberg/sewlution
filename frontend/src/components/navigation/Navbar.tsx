import { Link } from "react-router-dom";
import { NewProjectNav } from "./NewProjectNav";
import { NavbarWrapper } from "../../styles/styledComponents/Wrappers";

export const Navbar = () => {
    return (
        <>
            <NavbarWrapper>
                <NewProjectNav />
                <li>
                    <Link to={"/overview"} aria-label="Go to active project">
                        Active Projects
                    </Link>
                </li>
                <li>
                    <Link to={"/deleted"} aria-label="Go to deleted projects">
                        Deleted Projects
                    </Link>
                </li>
                <li>
                    <Link to={"/about"} aria-label="Go to about Sewlution">
                        About Sewlution
                    </Link>
                </li>
            </NavbarWrapper>
        </>
    );
};
