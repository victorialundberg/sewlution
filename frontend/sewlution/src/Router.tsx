import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { LayoutNav } from "./pages/LayoutNav";
import { Start } from "./pages/Start";
import { ProjectsOverview } from "./components/overview/ProjectsOverview";
import { ProjectView } from "./pages/ProjectView";
import { DeletedView } from "./pages/DeletedView";
import { SignIn } from "./components/auth/SignIn";
import { SignUp } from "./components/auth/SignUp";
import { ProtectedRoutes } from "./components/utils/ProtectedRoutes";
import { About } from "./pages/About";
import { HydrateFallback } from "./components/utils/HydrateFallback";
import { projectsLoader } from "./loaders/projectsLoader";
import { EditView } from "./pages/EditView";
import { projectLoader } from "./loaders/projectLoader";
import { deletedProjectsLoader } from "./loaders/deletedProjectsLoader";

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
                        loader: projectsLoader,
                        hydrateFallbackElement: (
                            <HydrateFallback></HydrateFallback>
                        ),
                    },
                    {
                        path: "/edit/:id",
                        element: <EditView />,
                        loader: projectLoader,
                        hydrateFallbackElement: (
                            <HydrateFallback></HydrateFallback>
                        ),
                    },
                    {
                        path: "/project/:id",
                        element: <ProjectView />,
                        loader: projectLoader,
                        hydrateFallbackElement: (
                            <HydrateFallback></HydrateFallback>
                        ),
                    },
                    {
                        path: "/deleted",
                        element: <DeletedView />,
                        loader: deletedProjectsLoader,
                        hydrateFallbackElement: (
                            <HydrateFallback></HydrateFallback>
                        ),
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
