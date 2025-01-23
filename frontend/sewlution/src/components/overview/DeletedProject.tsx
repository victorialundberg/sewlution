import { IProject } from "../../models/IProject";
import { hardDeleteProject } from "../../services/projects/deleteProjectService";
import { restoreProject } from "../../services/projects/restoreProjectService";
import { DeletedProjectContainer } from "../../styles/styledComponents/Containers";

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
                <h2>{props.project.title}</h2>
                <button type="button" onClick={handleRestore}>
                    Restore
                </button>
                <button type="button" onClick={handleDelete}>
                    Delete
                </button>
            </DeletedProjectContainer>
        </>
    );
};
