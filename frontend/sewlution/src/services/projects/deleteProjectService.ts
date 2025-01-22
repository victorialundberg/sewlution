import axios, { AxiosResponse } from "axios";
import { IDeleteResponse } from "../../models/IDeleteResponse";

export const softDeleteProject = async (
    projectId: number
): Promise<IDeleteResponse> => {
    const response: AxiosResponse<IDeleteResponse> = await axios.delete(
        "http://localhost:3000/projects/delete/soft/project",
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
        "http://localhost:3000/projects/delete/hard/project",
        {
            data: { project_id: projectId },
        }
    );
    console.log(response.data);

    return response.data;
};
