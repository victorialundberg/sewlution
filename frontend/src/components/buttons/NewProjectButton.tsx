import { useState } from "react";
import { NewProjectModal } from "../modals/NewProjectModal";
import { ActionButton } from "../../styles/styledComponents/Buttons";
import { colors } from "../../styles/colors";

export const NewProjectButton = () => {
    const [showDialog, setShowDialog] = useState(false);

    const openDialog = () => setShowDialog(true);
    const setDialogState = (data: boolean) => setShowDialog(data);

    return (
        <>
            <NewProjectModal
                setDialogState={setDialogState}
                showDialog={showDialog}
            ></NewProjectModal>
            <ActionButton
                $backgroundColor={colors.green}
                onClick={openDialog}
                aria-label="Create a new project"
            >
                Add new +
            </ActionButton>
        </>
    );
};
