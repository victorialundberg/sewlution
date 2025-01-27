import { useState } from "react";
import { ArrowRight } from "../../styles/icons/ArrowRight";
import { NewProjectModal } from "../modals/NewProjectModal";

export const NewProjectNav = () => {
    const [showDialog, setShowDialog] = useState(false);

    const openDialog = () => setShowDialog(true);
    const setDialogState = (data: boolean) => setShowDialog(data);

    return (
        <>
            <NewProjectModal
                setDialogState={setDialogState}
                showDialog={showDialog}
            ></NewProjectModal>
            <li onClick={openDialog} role="button">
                <span>New Project</span>
                <ArrowRight aria-hidden="true" />
            </li>
        </>
    );
};
