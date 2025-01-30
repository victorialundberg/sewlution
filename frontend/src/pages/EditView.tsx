import { Link, useLoaderData } from "react-router-dom";
import { IProjectsResponse } from "../models/IProjectsResponse";
import {
    EditVievWrapper,
    LeftProjectColumn,
    RightProjectColumn,
} from "../styles/styledComponents/Wrappers";
import { EditTitle } from "../components/edit/EditTitle";
import { EditDeadline } from "../components/edit/EditDeadline";
import { EditLink } from "../components/edit/EditLink";
import { Materials } from "../components/overview/Materials";
import { Todos } from "../components/overview/Todos";
import { EditMeasurements } from "../components/edit/EditMeasurements";
import DOMPurify from "dompurify";
import { colors } from "../styles/colors";
import { ActionButton } from "../styles/styledComponents/Buttons";
import { ProjectViewFooter } from "../styles/styledComponents/Containers";
import { EditNotes } from "../components/edit/EditDescription";

export const EditView = () => {
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

    return (
        <>
            <EditVievWrapper>
                <LeftProjectColumn>
                    <EditTitle
                        title={project.title}
                        projectId={project.project_id}
                    ></EditTitle>
                    <EditNotes
                        initialValue={sanitizedNotes}
                        projectId={project.project_id}
                    ></EditNotes>
                    <EditDeadline
                        deadline={project.deadline}
                        projectId={project.project_id}
                    ></EditDeadline>
                    <EditMeasurements
                        initialValue={sanitizedMeasurements}
                        projectId={project.project_id}
                    ></EditMeasurements>
                    <EditLink
                        link={project.link}
                        projectId={project.project_id}
                    ></EditLink>
                </LeftProjectColumn>
                <RightProjectColumn>
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
                </RightProjectColumn>
            </EditVievWrapper>
            <ProjectViewFooter>
                <Link to={`/project/${project.project_id}`}>
                    <ActionButton $backgroundColor={colors.grey}>
                        View project
                    </ActionButton>
                </Link>
            </ProjectViewFooter>
        </>
    );
};
