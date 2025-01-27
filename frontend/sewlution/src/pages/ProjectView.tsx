import { useLoaderData } from "react-router-dom";
import { IProjectsResponse } from "../models/IProjectsResponse";
import { Materials } from "../components/overview/Materials";
import { Todos } from "../components/overview/Todos";
import { Separator } from "../styles/styledComponents/Separator";
import {
    ProjectHeader,
    ProjectViewContainer,
} from "../styles/styledComponents/Containers";
import {
    HeaderWrapper,
    LeftProjectColumn,
    ProjectViewWrapper,
    RightProjectColumn,
} from "../styles/styledComponents/Wrappers";
import DOMPurify from "dompurify";
import { Heading } from "../styles/styledComponents/Items";

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
            <HeaderWrapper>
                <ProjectHeader>
                    <h1>{project.title}</h1>
                    {project.link && <Heading>{project.link}</Heading>}
                    {project.deadline && <Separator />}
                    {project.deadline && <Heading>{project.deadline}</Heading>}
                </ProjectHeader>
            </HeaderWrapper>

            <ProjectViewWrapper>
                <LeftProjectColumn>
                    {sanitizedDescription !== "" && (
                        <ProjectViewContainer>
                            <Heading>Notes</Heading>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: sanitizedDescription,
                                }}
                            ></p>
                        </ProjectViewContainer>
                    )}
                    {sanitizedMeasurements !== "" && (
                        <ProjectViewContainer>
                            <Heading>Measurements</Heading>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: sanitizedMeasurements,
                                }}
                            ></p>
                        </ProjectViewContainer>
                    )}
                </LeftProjectColumn>
                <RightProjectColumn>
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
                </RightProjectColumn>
            </ProjectViewWrapper>
        </>
    );
};
