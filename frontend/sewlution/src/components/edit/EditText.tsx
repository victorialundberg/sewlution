import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { EditContainer } from "../../styles/styledComponents/Containers";

export const TextEditor = () => {
    // Create a loader, purify content and set initial content, useState(purified)
    const [content, setContent] = useState("");
    const [enabled, setEnabled] = useState(false);

    const handleEditorChange = (content: string) => {
        setContent(content);
        setEnabled(true);
    };

    const handleClick = () => {
        setEnabled(false);
    };

    return (
        <>
            <EditContainer>
                <Editor
                    tinymceScriptSrc="/tinymce/tinymce.min.js"
                    licenseKey="gpl"
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
