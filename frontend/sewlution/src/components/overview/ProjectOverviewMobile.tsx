import { Link } from "react-router-dom";
import { IProject } from "../../models/IProject";
import { EditIcon } from "../../styles/icons/EditIcon";
import { OpenIcon } from "../../styles/icons/OpenIcon";
import {
    IconButton,
    ActionButton,
    ButtonContainerMobile,
} from "../../styles/styledComponents/Buttons";
import { DeleteProjectButton } from "../buttons/DeleteProjectButton";
import { ProjectOverviewItemMobile } from "../../styles/styledComponents/Items";

interface IOverViewProps {
    project: IProject;
    key: number;
    onDelete: () => void;
    isOpen: boolean;
    onToggle: () => void;
}

export const ProjectOverviewMobile = (props: IOverViewProps) => {
    const onDelete = () => props.onDelete();

    return (
        <ProjectOverviewItemMobile>
            <ActionButton
                onClick={props.onToggle}
                aria-expanded={props.isOpen}
                aria-label="Toggle options view"
            >
                {props.project.title}
            </ActionButton>
            {props.isOpen && (
                <ButtonContainerMobile>
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
                </ButtonContainerMobile>
            )}
        </ProjectOverviewItemMobile>
    );
};
