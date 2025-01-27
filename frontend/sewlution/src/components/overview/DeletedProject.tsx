import { IProject } from "../../models/IProject";
import { hardDeleteProject } from "../../services/projects/deleteProjectService";
import { restoreProject } from "../../services/projects/restoreProjectService";
import { colors } from "../../styles/colors";
import { SubmitButton } from "../../styles/styledComponents/Buttons";
import { DeletedProjectContainer } from "../../styles/styledComponents/Containers";
import { Heading } from "../../styles/styledComponents/Items";

interface IDeletedProjectProps {
    project: IProject;
    key: number;
    onDelete: () => void;
}

export const DeletedProject = (props: IDeletedProjectProps) => {
    const handleDelete = async () => {
        const response = await hardDeleteProject(props.project.project_id);
        if (response.message === "deleted") {
            props.onDelete();
        }
    };

    const handleRestore = async () => {
        await restoreProject(props.project.project_id);
    };

    return (
        <>
            <DeletedProjectContainer>
                <Heading>{props.project.title}</Heading>
                <SubmitButton
                    $backgroundColor={colors.lightGreen}
                    $color={colors.black}
                    type="button"
                    onClick={handleRestore}
                >
                    Restore
                </SubmitButton>
                <SubmitButton
                    $backgroundColor={colors.lightGrey}
                    $color={colors.black}
                    type="button"
                    onClick={handleDelete}
                >
                    Delete
                </SubmitButton>
            </DeletedProjectContainer>
        </>
    );
};
