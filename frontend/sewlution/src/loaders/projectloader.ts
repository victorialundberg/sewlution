import axios, { AxiosResponse } from "axios";
import { LoaderFunctionArgs } from "react-router-dom";
import { IProject } from "../models/IProject";

export const projectLoader = async ({
    params,
}: LoaderFunctionArgs): Promise<IProject> => {
    const user = localStorage.getItem("username");

    const response: AxiosResponse<IProject[]> = await axios.post(
        "http://localhost:3000/projects/read/project",
        { project: params.id, username: user }
    );

    return response.data[0];
};
