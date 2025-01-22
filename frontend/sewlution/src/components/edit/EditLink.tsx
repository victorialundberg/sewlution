import { FormEvent, useEffect, useState } from "react";
import { EditContainer } from "../../styles/styledComponents/Containers";
import axios from "axios";
import { updateLink } from "../../services/projects/edit/updateLinkService";

interface ILinkProps {
    link: string | undefined;
    projectId: number;
}

export const AddLink = (props: ILinkProps) => {
    const [link, setLink] = useState(props.link);
    const [linkInput, setLinkInput] = useState("");
    const [changed, setChanged] = useState(false);

    useEffect(() => {
        const getLink = async (projectId: number) => {
            try {
                const response = await axios.post(
                    "http://localhost:3000/projects/read/link",
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
    }, [changed, props.projectId]);

    const handleUpdate = async (e: FormEvent) => {
        e.preventDefault();
        const response = await updateLink(linkInput, props.projectId);
        if (response.data.success) {
            setChanged(true);
        }
    };

    return (
        <>
            <EditContainer>
                <form onSubmit={handleUpdate}>
                    <p>Link to moodboard</p>
                    <h2>{link}</h2>
                    <input
                        type="text"
                        id="link"
                        name="link"
                        value={linkInput}
                        onChange={(e) => setLinkInput(e.target.value)}
                    />
                    {!link ? <button>Add</button> : <button>Update</button>}
                </form>
            </EditContainer>
        </>
    );
};
