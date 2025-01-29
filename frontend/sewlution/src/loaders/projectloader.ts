import axios, { AxiosResponse } from "axios";
import { LoaderFunctionArgs } from "react-router-dom";
import { IProjectsResponse } from "../models/IProjectsResponse";

export const projectLoader = async ({
    params,
}: LoaderFunctionArgs): Promise<IProjectsResponse> => {
    const user = localStorage.getItem("username");
    const API_URL = process.env.REACT_APP_API_URL;

    const response: AxiosResponse<IProjectsResponse> = await axios.post(
        `${API_URL}/projects/read/project`,
        { project: params.id, username: user }
    );

    return response.data;
};
