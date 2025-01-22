import axios from "axios";
import { IUpdateResponse } from "../../../models/IUpdateResponse";

export const updateDeadline = async (
    deadline: string,
    projectId: number
): Promise<IUpdateResponse> => {
    const response = await axios.patch(
        "http://localhost:3000/projects/edit/deadline",
        { deadline: deadline, project_id: projectId }
    );
    return response.data;
};
