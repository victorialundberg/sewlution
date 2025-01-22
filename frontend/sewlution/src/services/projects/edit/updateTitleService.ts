import axios from "axios";
import { IUpdateResponse } from "../../../models/IUpdateResponse";

export const updateTitle = async (
    title: string,
    projectId: number
): Promise<IUpdateResponse> => {
    const response = await axios.patch(
        "http://localhost:3000/projects/edit/title",
        { title: title, project_id: projectId }
    );
    console.log(response);

    return response.data;
};
