import axios, { AxiosResponse } from "axios";
import { IProject } from "../models/IProject";

export const getProjects = async (username: string): Promise<IProject[]> => {
    const response: AxiosResponse<IProject[]> = await axios.post(
        "http://localhost:3000/projects/read/all/projects",
        { username: username }
    );

    return response.data;
};
