import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { LayoutNav } from "./pages/LayoutNav";
import { Start } from "./pages/Start";
import { ProjectsOverview } from "./components/overview/ProjectsOverview";
import { CreateView } from "./pages/CreateView";
import { ProjectView } from "./pages/ProjectView";
import { DeletedView } from "./pages/DeletedView";
import { SignIn } from "./components/widgets/SignIn";
import { SignUp } from "./components/widgets/SignUp";
import { ProtectedRoutes } from "./components/utils/ProtectedRoutes";
import { About } from "./pages/About";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Start />,
            },
            {
                path: "/signin",
                element: <SignIn />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
        ],
    },
    {
        element: <ProtectedRoutes />,
        children: [
            {
                element: <LayoutNav />,
                errorElement: <NotFound />,
                children: [
                    {
                        path: "/overview",
                        element: <ProjectsOverview />,
                    },
                    {
                        path: "/create",
                        element: <CreateView />,
                    },
                    {
                        path: "/project/:id",
                        element: <ProjectView />,
                    },
                    {
                        path: "/deleted",
                        element: <DeletedView />,
                    },
                    {
                        path: "/about",
                        element: <About />,
                    },
                ],
            },
        ],
    },
]);
