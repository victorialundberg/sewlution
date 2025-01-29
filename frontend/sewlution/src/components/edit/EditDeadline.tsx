import { FormEvent, useEffect, useState } from "react";
import { EditContainer } from "../../styles/styledComponents/Containers";
import axios from "axios";
import { updateDeadline } from "../../services/projects/edit/updateDeadlineService";
import {
    Heading,
    InputField,
    ProjectLabel,
} from "../../styles/styledComponents/Items";
import { ActionButton } from "../../styles/styledComponents/Buttons";
import { colors } from "../../styles/colors";

interface IDeadlineProps {
    deadline: string | undefined;
    projectId: number;
}

export const EditDeadline = (props: IDeadlineProps) => {
    const [deadlineInput, setDeadlineInput] = useState("");
    const [deadline, setDeadline] = useState(props.deadline);
    const [changed, setChanged] = useState(false);

    useEffect(() => {
        const getDeadline = async (projectId: number) => {
            try {
                const response = await axios.post(
                    "http://localhost:3000/projects/read/deadline",
                    { project_id: projectId }
                );
                setDeadline(response.data.data.deadline);
                setDeadlineInput("");
            } catch (error) {
                console.log("Error fetching title", error);
            }
        };

        if (changed) {
            console.log("New deadline addded, fetching new deadline");
            getDeadline(props.projectId);
            setChanged(false);
        }
    }, [changed, props.projectId]);

    const handleUpdate = async (e: FormEvent) => {
        e.preventDefault();
        const response = await updateDeadline(deadlineInput, props.projectId);
        if (response.data.success) {
            setChanged(true);
        }
    };

    return (
        <>
            <EditContainer className="editDeadline">
                <form onSubmit={handleUpdate} aria-labelledby="deadline-label">
                    <ProjectLabel htmlFor="deadline" id="deadline-label">
                        Deadline
                    </ProjectLabel>
                    <Heading>{deadline}</Heading>
                    <InputField
                        type="text"
                        id="deadline"
                        name="deadline"
                        value={deadlineInput}
                        onChange={(e) => setDeadlineInput(e.target.value)}
                        $bordercolor={colors.grey}
                    />
                    {!deadline ? (
                        <ActionButton
                            $backgroundColor={colors.grey}
                            aria-label="Add deadline to project"
                        >
                            Add
                        </ActionButton>
                    ) : (
                        <ActionButton
                            $backgroundColor={colors.grey}
                            aria-label="Update project deadline"
                        >
                            Update
                        </ActionButton>
                    )}
                </form>
            </EditContainer>
        </>
    );
};
