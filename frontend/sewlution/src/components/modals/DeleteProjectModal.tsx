import { FormEvent, useEffect, useRef } from "react";
import { softDeleteProject } from "../../services/projects/deleteProjectService";
import { ButtonDialog, Heading } from "../../styles/styledComponents/Items";
import { ActionButton } from "../../styles/styledComponents/Buttons";
import { colors } from "../../styles/colors";

interface IModalProps {
    showDialog: boolean;
    setDialogState: (data: boolean) => void;
    projectId: number;
    onDelete: () => void;
}

export const DeleteProjectModal = (props: IModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (props.showDialog) {
            if (dialogRef.current) {
                dialogRef.current.showModal();
            }
            props.setDialogState(false);
        }
    }, [props.showDialog, props]);

    const handleClose = (e: FormEvent) => {
        e.preventDefault();
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await softDeleteProject(props.projectId);
        props.onDelete();

        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    return (
        <>
            <ButtonDialog ref={dialogRef}>
                <form aria-labelledby="dialog-heading">
                    <Heading id="dialog-heading">Delete Project?</Heading>
                    <ActionButton
                        type="button"
                        $backgroundColor={colors.grey}
                        onClick={handleClose}
                        aria-label="CLose dialog"
                    >
                        Cancel
                    </ActionButton>
                    <ActionButton
                        type="submit"
                        $backgroundColor={colors.green}
                        onClick={handleSubmit}
                        aria-label="Confirm delete project"
                    >
                        Delete
                    </ActionButton>
                </form>
            </ButtonDialog>
        </>
    );
};
