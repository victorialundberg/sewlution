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
            <ActionButton onClick={props.onToggle} aria-expanded={props.isOpen}>
                {props.project.title}
            </ActionButton>
            {props.isOpen && (
                <ButtonContainerMobile>
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
                </ButtonContainerMobile>
            )}
        </ProjectOverviewItemMobile>
    );
};
