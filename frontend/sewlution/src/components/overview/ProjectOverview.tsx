import { Link } from "react-router-dom";
import { IProject } from "../../models/IProject";
import { ProjectOverviewItem } from "../../styles/styledComponents/Items";
import { DeleteProjectButton } from "../buttons/DeleteProjectButton";

interface IOverViewProps {
    project: IProject;
    key: number;
}

export const ProjectOverview = (props: IOverViewProps) => {
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
                <Link to={`/project/${props.project.project_id}`}>
                    <button>Open icon</button>
                </Link>
                <Link to={`/edit/${props.project.project_id}`}>
                    <button>Edit Icon</button>
                </Link>
                <DeleteProjectButton projectId={props.project.project_id} />
            </ProjectOverviewItem>
        </>
    );
};
