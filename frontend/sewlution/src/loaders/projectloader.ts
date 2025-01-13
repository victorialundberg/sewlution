import axios, { AxiosResponse } from "axios";
import { LoaderFunctionArgs } from "react-router-dom";
import { IProjectResponse } from "../models/IProjectResponse";

export const projectLoader = async ({
    params,
}: LoaderFunctionArgs): Promise<IProjectResponse> => {
    const user = localStorage.getItem("username");

    const response: AxiosResponse<IProjectResponse> = await axios.post(
        "http://localhost:3000/projects/read/project",
        { project: params.id, username: user }
    );

    return response.data;
};
