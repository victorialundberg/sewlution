import axios from "axios";
import { IUpdateResponse } from "../../../models/IUpdateResponse";

export const updateTitle = async (
    title: string,
    projectId: number
): Promise<IUpdateResponse> => {
    const API_URL = import.meta.env.VITE_APP_API_URL;

    const response = await axios.patch(`${API_URL}/projects/edit/title`, {
        title: title,
        project_id: projectId,
    });
    console.log(response);

    return response.data;
};
