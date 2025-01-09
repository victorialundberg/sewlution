import { Link } from "react-router-dom";
import { NavbarWrapper } from "../../styles/styledComponents/NavbarWrapper";
import { NewProjectNav } from "./NewProjectNav";

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
                    <Link to={"/about"}>About Sewlutions</Link>
                </li>
            </NavbarWrapper>
        </>
    );
};
