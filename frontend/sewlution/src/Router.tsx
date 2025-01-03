import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { LayoutNav } from "./pages/LayoutNav";
import { Start } from "./pages/Start";
import { ProjectsOverview } from "./components/ProjectsOverview";
import { CreateView } from "./pages/CreateView";
import { ProjectView } from "./pages/ProjectView";
import { DeletedView } from "./pages/DeletedView";
import { SignIn } from "./components/SignIn";

export const router = createBrowserRouter([
    {
        element: <Layout></Layout>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Start></Start>,
            },
        ],
    },
    {
        element: <LayoutNav></LayoutNav>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/signin",
                element: <SignIn></SignIn>,
            },
            {
                path: "/overview",
                element: <ProjectsOverview></ProjectsOverview>,
            },
            {
                path: "/create",
                element: <CreateView></CreateView>,
            },
            {
                path: "/project/:id",
                element: <ProjectView></ProjectView>,
            },
            {
                path: "/deleted",
                element: <DeletedView></DeletedView>,
            },
        ],
    },
]);
