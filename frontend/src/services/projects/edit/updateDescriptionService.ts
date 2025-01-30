import axios from "axios";
import { IUpdateResponse } from "../../../models/IUpdateResponse";

export const updateNotes = async (
    notes: string,
    projectId: number
): Promise<IUpdateResponse> => {
    const API_URL = import.meta.env.VITE_APP_API_URL;

    const response = await axios.patch(`${API_URL}/projects/edit/notes`, {
        notes: notes,
        project_id: projectId,
    });
    return response.data;
};
