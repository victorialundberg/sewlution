import axios, { AxiosResponse } from "axios";
import { IProject } from "../../models/IProject";
const API_URL = import.meta.env.VITE_APP_API_URL;

export const getProjects = async (username: string): Promise<IProject[]> => {
    const response: AxiosResponse<IProject[]> = await axios.post(
        `${API_URL}/projects/read/all/projects`,
        { username: username }
    );

    return response.data;
};

export const getDeletedProjects = async (
    username: string
): Promise<IProject[]> => {
    const response: AxiosResponse<IProject[]> = await axios.post(
        `${API_URL}/projects/read/all/projects/deleted`,
        { username: username }
    );

    return response.data;
};
