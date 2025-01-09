import { useState } from "react";
import { ArrowRight } from "../../styles/icons/ArrowRight";
import { NewProjectModal } from "../widgets/NewProjectModal";

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
            <li>
                <button onClick={openDialog}>
                    <span>New Project</span>
                    <ArrowRight aria-hidden="true" />
                </button>
            </li>
        </>
    );
};
