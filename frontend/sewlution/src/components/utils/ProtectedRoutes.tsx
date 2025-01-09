import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
    const user = localStorage.getItem("username");

    if (user) {
        return <Outlet></Outlet>;
    } else {
        return <Navigate to={"/"}></Navigate>;
    }
};
