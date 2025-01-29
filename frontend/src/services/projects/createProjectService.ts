import axios, { AxiosResponse } from "axios";
import { IResponse } from "../../models/IProjecResponse";

export const createProject = async (
    title: string,
    username: string
): Promise<number> => {
    const API_URL = import.meta.env.VITE_APP_API_URL;

    const response: AxiosResponse<IResponse> = await axios.post(
        `${API_URL}/projects/add/project`,
        { title: title, username: username }
    );
    return response.data.projectId;
};
