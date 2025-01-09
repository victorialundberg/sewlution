import { FormEvent, useRef, useState } from "react";

interface IModalProps {
    showDialog: boolean;
    setDialogState: (data: boolean) => void;
}

export const NewProjectModal = (props: IModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [projectTitle, setProjectTitle] = useState("");

    if (props.showDialog) {
        if (dialogRef.current) {
            dialogRef.current?.showModal();
        }
        props.setDialogState(false);
    }

    const handleClose = (e: FormEvent) => {
        e.preventDefault();
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (dialogRef.current) {
            dialogRef.current.close();
        }
        // Create new project with title
        // Go to edit mode for this project
    };

    return (
        <>
            <dialog ref={dialogRef} className="newProjectModal">
                <form>
                    <p>New Project</p>
                    <label htmlFor="projectTitle">Add Title</label>
                    <input
                        type="text"
                        id="projectTitle"
                        value={projectTitle}
                        onChange={(e) => setProjectTitle(e.target.value)}
                    />
                    <button onClick={handleClose}>Cancel</button>
                    <button onClick={handleSubmit}>Create</button>
                </form>
            </dialog>
        </>
    );
};
