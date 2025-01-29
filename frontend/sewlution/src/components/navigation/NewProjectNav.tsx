import { useState } from "react";
import { ArrowRight } from "../../styles/icons/ArrowRight";
import { NewProjectModal } from "../modals/NewProjectModal";
import { NavButton } from "../../styles/styledComponents/Buttons";

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
                <NavButton
                    onClick={openDialog}
                    aria-haspopup="dialog"
                    aria-expanded={showDialog}
                    aria-controls="new-project-modal"
                >
                    <span>New Project</span>
                    <ArrowRight aria-hidden="true" />
                </NavButton>
            </li>
        </>
    );
};
