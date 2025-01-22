import { FormEvent, useEffect, useRef } from "react";
import { softDeleteProject } from "../../services/projects/deleteProjectService";

interface IModalProps {
    showDialog: boolean;
    setDialogState: (data: boolean) => void;
    projectId: number;
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

        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    return (
        <>
            <dialog ref={dialogRef} className="newProjectModal">
                <form>
                    <p>Delete Project?</p>
                    <button onClick={handleClose}>Cancel</button>
                    <button onClick={handleSubmit}>Delete</button>
                </form>
            </dialog>
        </>
    );
};
