import { useLoaderData, useNavigate } from "react-router-dom";
import { ProjectOverview } from "./ProjectOverview";
import { IProject } from "../../models/IProject";
import { ProjectOverviewContainer } from "../../styles/styledComponents/Containers";
import { NewProjectButton } from "../buttons/NewProjectButton";

export const ProjectsOverview = () => {
    const user = localStorage.getItem("username");
    const navigate = useNavigate();
    const projects = useLoaderData() as IProject[];

    if (user) {
        console.log(user, "is signed in");
    } else {
        console.log("no user");
        navigate("/");
    }

    return (
        <>
            <ProjectOverviewContainer>
                <h1>Active Projects</h1>
                <ul>
                    <li>Title</li>
                    <li>Deadline</li>
                    <li>Added</li>
                </ul>
                <ul>
                    {projects.map((project) => (
                        <ProjectOverview
                            project={project}
                            key={project.project_id}
                        ></ProjectOverview>
                    ))}
                    ;
                </ul>
                <NewProjectButton />
            </ProjectOverviewContainer>
        </>
    );
};
