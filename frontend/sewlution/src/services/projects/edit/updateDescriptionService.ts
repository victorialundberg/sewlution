import axios from "axios";
import { IUpdateResponse } from "../../../models/IUpdateResponse";

export const updateDescriptions = async (
    description: string,
    projectId: number
): Promise<IUpdateResponse> => {
    const API_URL = process.env.REACT_APP_API_URL;

    const response = await axios.patch(`${API_URL}/projects/edit/description`, {
        description: description,
        project_id: projectId,
    });
    return response.data;
};
