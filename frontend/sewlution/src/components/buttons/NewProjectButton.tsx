import { useState } from "react";
import { NewProjectModal } from "../modals/NewProjectModal";
import { SubmitButton } from "../../styles/styledComponents/Buttons";
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
            <SubmitButton $backgroundColor={colors.green} onClick={openDialog}>
                Add new +
            </SubmitButton>
        </>
    );
};
