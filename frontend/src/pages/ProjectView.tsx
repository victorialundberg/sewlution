import { Link, useLoaderData } from "react-router-dom";
import { IProjectsResponse } from "../models/IProjectsResponse";
import { Materials } from "../components/overview/Materials";
import { Todos } from "../components/overview/Todos";
import { Separator } from "../styles/styledComponents/Separator";
import {
    ProjectHeader,
    ProjectViewContainer,
    ProjectViewFooter,
} from "../styles/styledComponents/Containers";
import {
    HeaderWrapper,
    LeftProjectColumn,
    ProjectViewWrapper,
    RightProjectColumn,
} from "../styles/styledComponents/Wrappers";
import DOMPurify from "dompurify";
import { Heading } from "../styles/styledComponents/Items";
import { ActionButton } from "../styles/styledComponents/Buttons";
import { colors } from "../styles/colors";

export const ProjectView = () => {
    const projectLoader = useLoaderData() as IProjectsResponse;
    const project = projectLoader.projects[0];
    const materials = projectLoader.materials;
    const todos = projectLoader.todos;

    const sanitizedNotes = project.notes
        ? DOMPurify.sanitize(project.notes)
        : "";
    const sanitizedMeasurements = project.measurements
        ? DOMPurify.sanitize(project.measurements)
        : "";

    const isValidUrl = (url: string) => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    };

    return (
        <>
            <HeaderWrapper>
                <ProjectHeader>
                    <h1>{project.title}</h1>
                    {project.link && isValidUrl(project.link) && (
                        <a
                            href={
                                project.link.startsWith("http")
                                    ? project.link
                                    : `https://${project.link}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {project.link}
                        </a>
                    )}
                    {project.deadline && <Separator />}
                    {project.deadline && (
                        <Heading>Deadline: {project.deadline}</Heading>
                    )}
                </ProjectHeader>
            </HeaderWrapper>

            <ProjectViewWrapper>
                <LeftProjectColumn>
                    {sanitizedNotes !== "" && (
                        <ProjectViewContainer>
                            <Heading>Notes</Heading>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: sanitizedNotes,
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
            <ProjectViewFooter>
                <Link to={`/edit/${project.project_id}`}>
                    <ActionButton $backgroundColor={colors.grey}>
                        Edit project
                    </ActionButton>
                </Link>
            </ProjectViewFooter>
        </>
    );
};
