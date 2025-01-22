import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProject } from "../../services/projects/createProjectService";

interface IModalProps {
    showDialog: boolean;
    setDialogState: (data: boolean) => void;
}

export const NewProjectModal = (props: IModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [projectTitle, setProjectTitle] = useState("");
    const storedUser = localStorage.getItem("username");
    let user = "";

    if (storedUser) {
        user = storedUser;
    }

    const navigate = useNavigate();

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
        const projectId = await createProject(projectTitle, user);
        navigate("/project/" + projectId);

        if (dialogRef.current) {
            dialogRef.current.close();
        }
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
