import axios from "axios";
import { IUpdateResponse } from "../../../models/IUpdateResponse";

export const updateMeasurements = async (
    measurements: string,
    projectId: number
): Promise<IUpdateResponse> => {
    const response = await axios.patch(
        "http://localhost:3000/projects/edit/measurements",
        { measurements: measurements, project_id: projectId }
    );
    return response.data;
};
