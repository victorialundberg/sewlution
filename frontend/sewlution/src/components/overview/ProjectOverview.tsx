import { Link } from "react-router-dom";
import { IProject } from "../../models/IProject";
import { ProjectOverviewItem } from "../../styles/styledComponents/Items";
import { DeleteProjectButton } from "../buttons/DeleteProjectButton";
import { IconButton } from "../../styles/styledComponents/Buttons";
import { EditIcon } from "../../styles/icons/EditIcon";
import { OpenIcon } from "../../styles/icons/OpenIcon";

interface IOverViewProps {
    project: IProject;
    key: number;
    onDelete: () => void;
}

export const ProjectOverview = (props: IOverViewProps) => {
    const onDelete = () => props.onDelete();

    return (
        <>
            <ProjectOverviewItem>
                <Link
                    to={`/project/${props.project.project_id}`}
                    aria-label={`View project: ${props.project.title}`}
                >
                    {props.project.title}
                </Link>
                <span
                    aria-label={`Created on ${props.project.created.slice(
                        0,
                        10
                    )}`}
                >
                    {props.project.created.slice(0, 10)}
                </span>
                {props.project.deadline && (
                    <span aria-label={`Deadline: ${props.project.deadline}`}>
                        {props.project.deadline}
                    </span>
                )}
                <div className="buttonContainer">
                    <Link
                        to={`/project/${props.project.project_id}`}
                        aria-label={`Open project: ${props.project.title}`}
                    >
                        <IconButton>
                            <OpenIcon />
                        </IconButton>
                    </Link>
                    <Link
                        to={`/edit/${props.project.project_id}`}
                        aria-label={`Edit project: ${props.project.title}`}
                    >
                        <IconButton>
                            <EditIcon />
                        </IconButton>
                    </Link>
                    <DeleteProjectButton
                        onDelete={onDelete}
                        projectId={props.project.project_id}
                        aria-label={`Delete project: ${props.project.title}`}
                    />
                </div>
            </ProjectOverviewItem>
        </>
    );
};
