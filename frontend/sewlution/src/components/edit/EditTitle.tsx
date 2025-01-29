import { FormEvent, useEffect, useState } from "react";
import { EditContainer } from "../../styles/styledComponents/Containers";
import axios from "axios";
import { updateTitle } from "../../services/projects/edit/updateTitleService";
import {
    Heading,
    InputField,
    ProjectLabel,
} from "../../styles/styledComponents/Items";
import { ActionButton } from "../../styles/styledComponents/Buttons";
import { colors } from "../../styles/colors";

interface ITitleProps {
    title: string;
    projectId: number;
}

export const EditTitle = (props: ITitleProps) => {
    const [title, setTitle] = useState(props.title);
    const [titleInput, setTitleInput] = useState("");
    const [changed, setChanged] = useState(false);

    useEffect(() => {
        const getTitle = async (projectId: number) => {
            try {
                const response = await axios.post(
                    "http://localhost:3000/projects/read/title",
                    { project_id: projectId }
                );
                setTitle(response.data.data.title);
                setTitleInput("");
            } catch (error) {
                console.log("Error fetching title", error);
            }
        };

        if (changed) {
            console.log("New title addded, fetching new title");
            getTitle(props.projectId);
            setChanged(false);
        }
    }, [changed, props.projectId]);

    const handleUpdate = async (e: FormEvent) => {
        e.preventDefault();
        const response = await updateTitle(titleInput, props.projectId);
        if (response.data.success) {
            setChanged(true);
        }
    };

    return (
        <>
            <EditContainer className="editTitle">
                <form onSubmit={handleUpdate} aria-labelledby="title-label">
                    <ProjectLabel htmlFor="title" id="title-label">
                        Title
                    </ProjectLabel>
                    <Heading>{title}</Heading>
                    <InputField
                        type="text"
                        id="title"
                        name="title"
                        value={titleInput}
                        onChange={(e) => setTitleInput(e.target.value)}
                        $bordercolor={colors.red}
                    />

                    <ActionButton aria-label="Update project title">
                        Update
                    </ActionButton>
                </form>
            </EditContainer>
        </>
    );
};
