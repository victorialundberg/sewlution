import { useState } from "react";
import { NewProjectModal } from "./NewProjectModal";

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
            <button onClick={openDialog}>Add new +</button>
        </>
    );
};
