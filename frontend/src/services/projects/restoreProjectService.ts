import axios, { AxiosResponse } from "axios";
import { IDeleteResponse } from "../../models/IDeleteResponse";

export const restoreProject = async (
    projectId: number
): Promise<IDeleteResponse> => {
    const API_URL = import.meta.env.VITE_APP_API_URL;
    const response: AxiosResponse<IDeleteResponse> = await axios.patch(
        `${API_URL}/projects/restore/project`,
        {
            project_id: projectId,
        }
    );
    return response.data;
};
