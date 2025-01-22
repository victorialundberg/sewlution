import axios, { AxiosResponse } from "axios";
import { LoaderFunctionArgs } from "react-router-dom";
import { IProjectsResponse } from "../models/IProjectsResponse";

export const projectLoader = async ({
    params,
}: LoaderFunctionArgs): Promise<IProjectsResponse> => {
    const user = localStorage.getItem("username");

    const response: AxiosResponse<IProjectsResponse> = await axios.post(
        "http://localhost:3000/projects/read/project",
        { project: params.id, username: user }
    );

    return response.data;
};
