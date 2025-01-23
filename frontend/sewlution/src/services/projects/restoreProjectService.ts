import axios, { AxiosResponse } from "axios";
import { IDeleteResponse } from "../../models/IDeleteResponse";

export const restoreProject = async (
    projectId: number
): Promise<IDeleteResponse> => {
    const response: AxiosResponse<IDeleteResponse> = await axios.patch(
        "http://localhost:3000/projects/restore/project",
        {
            data: { project_id: projectId },
        }
    );
    console.log(response.data);

    return response.data;
};
