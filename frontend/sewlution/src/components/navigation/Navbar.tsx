import { Link } from "react-router-dom";
import { NewProjectNav } from "./NewProjectNav";
import { NavbarWrapper } from "../../styles/styledComponents/Wrappers";

export const Navbar = () => {
    return (
        <>
            <NavbarWrapper>
                <NewProjectNav />
                <li>
                    <Link to={"/overview"}>Active Projects</Link>
                </li>
                <li>
                    <Link to={"/deleted"}>Deleted Projects</Link>
                </li>
                <li>
                    <Link to={"/about"}>About Sewlution</Link>
                </li>
            </NavbarWrapper>
        </>
    );
};
