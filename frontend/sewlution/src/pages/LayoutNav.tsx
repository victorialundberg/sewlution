import { NavLink, Outlet } from "react-router-dom";

export const LayoutNav = () => {
    return (
        <>
            <header className="header">
                <h1>Sewlution</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Hem</NavLink>
                        </li>
                        <li>Active</li>
                        <li>Deleted</li>
                        <li>About</li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    );
};
