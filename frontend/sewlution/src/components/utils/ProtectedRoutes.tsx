import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
    const user = localStorage.getItem("user_id");

    if (user) {
        return <Outlet></Outlet>;
    } else {
        return <Navigate to={"/"}></Navigate>;
    }
};
