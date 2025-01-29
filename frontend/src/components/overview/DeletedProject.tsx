import { IProject } from "../../models/IProject";
import { hardDeleteProject } from "../../services/projects/deleteProjectService";
import { restoreProject } from "../../services/projects/restoreProjectService";
import { colors } from "../../styles/colors";
import { ActionButton } from "../../styles/styledComponents/Buttons";
import { DeletedProjectContainer } from "../../styles/styledComponents/Containers";
import { Heading } from "../../styles/styledComponents/Items";

interface IDeletedProjectProps {
    project: IProject;
    key: number;
    onDelete: () => void;
    onRestore: () => void;
}

export const DeletedProject = (props: IDeletedProjectProps) => {
    const handleDelete = async () => {
        const response = await hardDeleteProject(props.project.project_id);
        if (response.message === "deleted") {
            props.onDelete();
        }
    };

    const handleRestore = async () => {
        const response = await restoreProject(props.project.project_id);
        if (response.message === "restored") {
            props.onRestore();
        }
    };

    return (
        <>
            <DeletedProjectContainer>
                <Heading>{props.project.title}</Heading>
                <div aria-live="polite">
                    <ActionButton
                        $backgroundColor={colors.lightGreen}
                        $color={colors.black}
                        type="button"
                        onClick={handleRestore}
                        aria-label={`Restore project ${props.project.title}`}
                    >
                        Restore
                    </ActionButton>
                    <ActionButton
                        $backgroundColor={colors.lightGrey}
                        $color={colors.black}
                        type="button"
                        onClick={handleDelete}
                        aria-label={`Permanently delete project ${props.project.title}`}
                    >
                        Delete
                    </ActionButton>
                </div>
            </DeletedProjectContainer>
        </>
    );
};
