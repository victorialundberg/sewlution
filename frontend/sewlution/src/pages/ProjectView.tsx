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

export const ProjectView = () => {
    const projectLoader = useLoaderData() as IProjectsResponse;
    const project = projectLoader.projects[0];
    const materials = projectLoader.materials;
    const todos = projectLoader.todos;

    return (
        <>
            <ProjectViewWrapper>
                <ProjectHeader>
                    <h1>{project.title}</h1>
                    {project.link && <p>{project.link}</p>}
                    {project.deadline && <Separator />}
                    {project.deadline && <p>{project.deadline}</p>}
                </ProjectHeader>
                {project.description && (
                    <ProjectViewContainer>
                        <h2>Notes</h2>
                        <p>{project.description}</p>
                    </ProjectViewContainer>
                )}
                {project.measurements && (
                    <ProjectViewContainer>
                        <h2>Measurements</h2>
                        <p>{project.measurements}</p>
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
