import { useLoaderData } from "react-router-dom";
import { IProjectsResponse } from "../models/IProjectsResponse";
import { EditContainer } from "../styles/styledComponents/Containers";
import { ProjectViewWrapper } from "../styles/styledComponents/Wrappers";
import { EditTitle } from "../components/edit/EditTitle";
import { EditDeadline } from "../components/edit/EditDeadline";
import { AddLink } from "../components/edit/EditLink";

export const EditView = () => {
    const projectLoader = useLoaderData() as IProjectsResponse;
    const project = projectLoader.projects[0];

    return (
        <>
            <ProjectViewWrapper>
                <EditTitle
                    title={project.title}
                    projectId={project.project_id}
                ></EditTitle>
                <EditContainer>
                    <h2>Notes</h2>
                </EditContainer>
                <EditDeadline
                    deadline={project.deadline}
                    projectId={project.project_id}
                ></EditDeadline>
                <EditContainer>
                    <p>Measurements</p>
                </EditContainer>
                <AddLink
                    link={project.link}
                    projectId={project.project_id}
                ></AddLink>
            </ProjectViewWrapper>
        </>
    );
};
