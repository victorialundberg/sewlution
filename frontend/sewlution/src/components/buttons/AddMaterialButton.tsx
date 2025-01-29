import { useState } from "react";
import { AddMaterialModal } from "../modals/AddMaterialModal";
import { ActionButton } from "../../styles/styledComponents/Buttons";
import { colors } from "../../styles/colors";

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

            <ActionButton
                $backgroundColor={colors.brown}
                onClick={openDialog}
                aria-label="Add new material to table"
            >
                Add new material
            </ActionButton>
        </>
    );
};
