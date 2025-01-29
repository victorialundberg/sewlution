import { FormEvent, useEffect, useState } from "react";
import { EditContainer } from "../../styles/styledComponents/Containers";
import axios from "axios";
import { updateLink } from "../../services/projects/edit/updateLinkService";
import {
    Heading,
    InputField,
    ProjectLabel,
} from "../../styles/styledComponents/Items";
import { colors } from "../../styles/colors";
import { ActionButton } from "../../styles/styledComponents/Buttons";

interface ILinkProps {
    link: string | undefined;
    projectId: number;
}

export const EditLink = (props: ILinkProps) => {
    const [link, setLink] = useState(props.link);
    const [linkInput, setLinkInput] = useState("");
    const [changed, setChanged] = useState(false);
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const getLink = async (projectId: number) => {
            try {
                const response = await axios.post(
                    `${API_URL}/projects/read/link"`,
                    { project_id: projectId }
                );
                setLink(response.data.data.link);
                setLinkInput("");
            } catch (error) {
                console.log("Error fetching title", error);
            }
        };

        if (changed) {
            console.log("New link addded, fetching new link");
            getLink(props.projectId);
            setChanged(false);
        }
    }, [changed, props.projectId, API_URL]);

    const handleUpdate = async (e: FormEvent) => {
        e.preventDefault();
        const response = await updateLink(linkInput, props.projectId);
        if (response.data.success) {
            setChanged(true);
        }
    };

    return (
        <>
            <EditContainer className="editLink">
                <form onSubmit={handleUpdate} aria-labelledby="link-label">
                    <ProjectLabel htmlFor="link" id="link-label">
                        Link to moodboard
                    </ProjectLabel>
                    <Heading>{link}</Heading>
                    <InputField
                        type="text"
                        id="link"
                        name="link"
                        value={linkInput}
                        onChange={(e) => setLinkInput(e.target.value)}
                        $bordercolor={colors.green}
                    />
                    {!link ? (
                        <ActionButton
                            $backgroundColor={colors.green}
                            aria-label="Add link to project"
                        >
                            Add
                        </ActionButton>
                    ) : (
                        <ActionButton
                            $backgroundColor={colors.green}
                            aria-label="Update project link"
                        >
                            Update
                        </ActionButton>
                    )}
                </form>
            </EditContainer>
        </>
    );
};
