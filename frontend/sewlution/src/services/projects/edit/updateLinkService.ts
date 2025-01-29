import axios from "axios";
import { IUpdateResponse } from "../../../models/IUpdateResponse";

export const updateLink = async (
    link: string,
    projectId: number
): Promise<IUpdateResponse> => {
    const API_URL = process.env.REACT_APP_API_URL;
    const response = await axios.patch(`${API_URL}/projects/edit/link`, {
        link: link,
        project_id: projectId,
    });
    console.log(response);

    return response.data;
};
