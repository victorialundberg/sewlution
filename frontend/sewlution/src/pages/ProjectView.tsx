import { useLoaderData } from "react-router-dom";
import { IProjectResponse } from "../models/IProjectResponse";
import { Materials } from "../components/widgets/Materials";
import { Todos } from "../components/widgets/Todos";
import { Separator } from "../styles/styledComponents/Separator";
import {
    ProjectHeader,
    ProjectViewContainer,
} from "../styles/styledComponents/ProjectViewContainer";
import { ProjectViewWrapper } from "../styles/styledComponents/ProjectViewWrapper";

export const ProjectView = () => {
    const projectLoader = useLoaderData() as IProjectResponse;
    const project = projectLoader.project[0];
    const materials = projectLoader.material;
    const todos = projectLoader.todo;

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
                {materials && <Materials materials={materials} />}
                {todos && <Todos todos={todos} />}
            </ProjectViewWrapper>
        </>
    );
};
