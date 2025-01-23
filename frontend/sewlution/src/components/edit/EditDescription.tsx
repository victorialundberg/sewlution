import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { EditContainer } from "../../styles/styledComponents/Containers";
import { updateDescriptions } from "../../services/projects/edit/updateDescriptionService";

interface IEditorProps {
    initialValue: string;
    projectId: number;
}

export const EditDescriptions = (props: IEditorProps) => {
    const [content, setContent] = useState("");
    const [enabled, setEnabled] = useState(false);

    const handleEditorChange = (content: string) => {
        setContent(content);
        setEnabled(true);
    };

    const handleClick = async () => {
        const response = await updateDescriptions(content, props.projectId);
        if (response.data.success) {
            setEnabled(false);
        }
    };

    return (
        <>
            <EditContainer>
                <h2>Description</h2>
                <Editor
                    tinymceScriptSrc="/tinymce/tinymce.min.js"
                    licenseKey="gpl"
                    initialValue={props.initialValue}
                    value={content}
                    onEditorChange={handleEditorChange}
                    init={{
                        height: 400,
                        menubar: false,
                        toolbar:
                            "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify",
                        content_style:
                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                ></Editor>
                <button disabled={!enabled} type="button" onClick={handleClick}>
                    Save
                </button>
            </EditContainer>
        </>
    );
};
