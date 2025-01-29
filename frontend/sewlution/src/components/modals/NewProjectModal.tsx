import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProject } from "../../services/projects/createProjectService";
import {
    FormDialog,
    ErrorMessage,
    Heading,
    InputField,
    ProjectLabel,
} from "../../styles/styledComponents/Items";
import { ActionButton } from "../../styles/styledComponents/Buttons";
import { colors } from "../../styles/colors";

interface IModalProps {
    showDialog: boolean;
    setDialogState: (data: boolean) => void;
}

export const NewProjectModal = (props: IModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [projectTitle, setProjectTitle] = useState("");
    const [displayError, setDisplayError] = useState(false);
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
        setDisplayError(false);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (projectTitle.trim() === "") {
            setDisplayError(true);
            return;
        }
        const projectId = await createProject(projectTitle, user);
        navigate("/edit/" + projectId);
        setProjectTitle("");
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    return (
        <>
            <FormDialog ref={dialogRef}>
                <form>
                    <Heading>New Project</Heading>
                    <ProjectLabel htmlFor="projectTitle">
                        Add Title
                    </ProjectLabel>
                    <InputField
                        $bordercolor={colors.red}
                        type="text"
                        id="projectTitle"
                        value={projectTitle}
                        onChange={(e) => {
                            setProjectTitle(e.target.value);
                            setDisplayError(false);
                        }}
                    />
                    <ActionButton
                        $backgroundColor={colors.grey}
                        aria-label="Close dialog"
                        onClick={handleClose}
                    >
                        Cancel
                    </ActionButton>
                    <ActionButton
                        aria-disabled={projectTitle.trim() === ""}
                        aria-label="Create Project"
                        onClick={handleSubmit}
                    >
                        Create
                    </ActionButton>
                    {displayError && (
                        <ErrorMessage>Please provide a title!</ErrorMessage>
                    )}
                </form>
            </FormDialog>
        </>
    );
};
