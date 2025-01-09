import { Outlet } from "react-router-dom";
import { Menu } from "../components/navigation/Menu";

export const LayoutNav = () => {
    return (
        <>
            <Menu></Menu>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    );
};
