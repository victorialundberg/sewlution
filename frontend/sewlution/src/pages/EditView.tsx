import { useLoaderData } from "react-router-dom";
import { IProjectsResponse } from "../models/IProjectsResponse";
import { EditContainer } from "../styles/styledComponents/Containers";
import { ProjectViewWrapper } from "../styles/styledComponents/Wrappers";
import { EditTitle } from "../components/edit/EditTitle";
import { EditDeadline } from "../components/edit/EditDeadline";
import { AddLink } from "../components/edit/EditLink";
import { Materials } from "../components/overview/Materials";
import { Todos } from "../components/overview/Todos";
import { TextEditor } from "../components/edit/EditText";

export const EditView = () => {
    const projectLoader = useLoaderData() as IProjectsResponse;
    const project = projectLoader.projects[0];
    const materials = projectLoader.materials;
    const todos = projectLoader.todos;

    return (
        <>
            <ProjectViewWrapper>
                <TextEditor></TextEditor>
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
                <Materials
                    materials={materials}
                    showButtons={true}
                    projectId={project.project_id}
                />
                <Todos
                    showForm={true}
                    todos={todos}
                    projectId={project.project_id}
                />
            </ProjectViewWrapper>
        </>
    );
};
