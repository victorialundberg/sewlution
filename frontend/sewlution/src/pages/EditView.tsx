import { useLoaderData } from "react-router-dom";
import { IProjectsResponse } from "../models/IProjectsResponse";
import { ProjectViewWrapper } from "../styles/styledComponents/Wrappers";
import { EditTitle } from "../components/edit/EditTitle";
import { EditDeadline } from "../components/edit/EditDeadline";
import { AddLink } from "../components/edit/EditLink";
import { Materials } from "../components/overview/Materials";
import { Todos } from "../components/overview/Todos";
import { EditMeasurements } from "../components/edit/EditMeasurements";
import DOMPurify from "dompurify";
import { EditDescriptions } from "../components/edit/EditDescription";

export const EditView = () => {
    const projectLoader = useLoaderData() as IProjectsResponse;
    const project = projectLoader.projects[0];
    const materials = projectLoader.materials;
    const todos = projectLoader.todos;

    const sanitizedDescription = project.description
        ? DOMPurify.sanitize(project.description)
        : "";
    const sanitizedMeasurements = project.measurements
        ? DOMPurify.sanitize(project.measurements)
        : "";

    return (
        <>
            <ProjectViewWrapper>
                <EditTitle
                    title={project.title}
                    projectId={project.project_id}
                ></EditTitle>
                <EditDescriptions
                    initialValue={sanitizedDescription}
                    projectId={project.project_id}
                ></EditDescriptions>
                <EditDeadline
                    deadline={project.deadline}
                    projectId={project.project_id}
                ></EditDeadline>
                <EditMeasurements
                    initialValue={sanitizedMeasurements}
                    projectId={project.project_id}
                ></EditMeasurements>
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
