import { useLoaderData } from "react-router-dom";
import { IProjectsResponse } from "../models/IProjectsResponse";
import { Materials } from "../components/overview/Materials";
import { Todos } from "../components/overview/Todos";
import { Separator } from "../styles/styledComponents/Separator";
import {
    ProjectHeader,
    ProjectViewContainer,
} from "../styles/styledComponents/Containers";
import { ProjectViewWrapper } from "../styles/styledComponents/Wrappers";
import DOMPurify from "dompurify";

export const ProjectView = () => {
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
                <ProjectHeader>
                    <h1>{project.title}</h1>
                    {project.link && <p>{project.link}</p>}
                    {project.deadline && <Separator />}
                    {project.deadline && <p>{project.deadline}</p>}
                </ProjectHeader>
                {sanitizedDescription !== "" && (
                    <ProjectViewContainer>
                        <h2>Notes</h2>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: sanitizedDescription,
                            }}
                        ></p>
                    </ProjectViewContainer>
                )}
                {sanitizedMeasurements !== "" && (
                    <ProjectViewContainer>
                        <h2>Measurements</h2>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: sanitizedMeasurements,
                            }}
                        ></p>
                    </ProjectViewContainer>
                )}
                {materials.length > 0 && (
                    <Materials
                        materials={materials}
                        showButtons={false}
                        projectId={project.project_id}
                    />
                )}
                {todos.length > 0 && (
                    <Todos
                        showForm={false}
                        todos={todos}
                        projectId={project.project_id}
                    />
                )}
            </ProjectViewWrapper>
        </>
    );
};
