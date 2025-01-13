import axios, { AxiosResponse } from "axios";
import { IResponse } from "../models/ICreateProject";

export const createProject = async (
    title: string,
    username: string
): Promise<number> => {
    const response: AxiosResponse<IResponse> = await axios.post(
        "http://localhost:3000/projects/add/project",
        { title: title, username: username }
    );
    return response.data.projectId;
};
