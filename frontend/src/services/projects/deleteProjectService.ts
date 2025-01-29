import axios, { AxiosResponse } from "axios";
import { IDeleteResponse } from "../../models/IDeleteResponse";

const API_URL = import.meta.env.VITE_APP_API_URL;
export const softDeleteProject = async (
    projectId: number
): Promise<IDeleteResponse> => {
    const response: AxiosResponse<IDeleteResponse> = await axios.delete(
        `${API_URL}/projects/delete/soft/project`,
        {
            data: { project_id: projectId },
        }
    );
    console.log(response.data);

    return response.data;
};

export const hardDeleteProject = async (
    projectId: number
): Promise<IDeleteResponse> => {
    const response: AxiosResponse<IDeleteResponse> = await axios.delete(
        `${API_URL}/projects/delete/hard/project`,
        {
            data: { project_id: projectId },
        }
    );
    console.log(response.data);

    return response.data;
};
