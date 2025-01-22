import { useState } from "react";
import { AddMaterialModal } from "../modals/AddMaterialModal";

interface IDialogProps {
    projectId: number;
    onSuccess: () => void;
}

export const AddMaterialButton = (props: IDialogProps) => {
    const [showDialog, setShowDialog] = useState(false);

    const openDialog = () => setShowDialog(true);
    const setDialogState = (data: boolean) => setShowDialog(data);
    const handleSuccess = () => {
        props.onSuccess();
    };
    return (
        <>
            <AddMaterialModal
                setDialogState={setDialogState}
                showDialog={showDialog}
                projectId={props.projectId}
                onAdded={handleSuccess}
            ></AddMaterialModal>

            <button onClick={openDialog}>Add new material</button>
        </>
    );
};
