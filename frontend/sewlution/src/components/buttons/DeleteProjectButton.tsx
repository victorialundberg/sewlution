import { useState } from "react";
import { DeleteProjectModal } from "../modals/DeleteProjectModal";

interface IDialogProps {
    projectId: number;
}

export const DeleteProjectButton = (props: IDialogProps) => {
    const [showDialog, setShowDialog] = useState(false);

    const openDialog = () => setShowDialog(true);
    const setDialogState = (data: boolean) => setShowDialog(data);

    return (
        <>
            <DeleteProjectModal
                setDialogState={setDialogState}
                showDialog={showDialog}
                projectId={props.projectId}
            ></DeleteProjectModal>

            <button onClick={openDialog}>Delete icon</button>
        </>
    );
};
