import axios from "axios";
import { IUpdateResponse } from "../../../models/IUpdateResponse";

export const updateLink = async (
    link: string,
    projectId: number
): Promise<IUpdateResponse> => {
    const response = await axios.patch(
        "http://localhost:3000/projects/edit/link",
        { link: link, project_id: projectId }
    );
    console.log(response);

    return response.data;
};
