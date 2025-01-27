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
                <Link to={`/project/${props.project.project_id}`}>
                    {props.project.title}
                </Link>
                {props.project.deadline && (
                    <span>{props.project.deadline}</span>
                )}
                <span>{props.project.created.slice(0, 10)}</span>
                <div className="buttonContainer">
                    <Link to={`/project/${props.project.project_id}`}>
                        <IconButton>
                            <OpenIcon />
                        </IconButton>
                    </Link>
                    <Link to={`/edit/${props.project.project_id}`}>
                        <IconButton>
                            <EditIcon />
                        </IconButton>
                    </Link>
                    <DeleteProjectButton
                        onDelete={onDelete}
                        projectId={props.project.project_id}
                    />
                </div>
            </ProjectOverviewItem>
        </>
    );
};
