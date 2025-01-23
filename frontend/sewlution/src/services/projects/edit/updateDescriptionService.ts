import axios from "axios";
import { IUpdateResponse } from "../../../models/IUpdateResponse";

export const updateDescriptions = async (
    description: string,
    projectId: number
): Promise<IUpdateResponse> => {
    const response = await axios.patch(
        "http://localhost:3000/projects/edit/description",
        { description: description, project_id: projectId }
    );
    return response.data;
};
