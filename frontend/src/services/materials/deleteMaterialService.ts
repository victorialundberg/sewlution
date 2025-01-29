import axios, { AxiosResponse } from "axios";
import { IDeleteResponse } from "../../models/IDeleteResponse";

export const deleteMaterial = async (
    materialId: number
): Promise<IDeleteResponse> => {
    const API_URL = import.meta.env.VITE_APP_API_URL;

    const response: AxiosResponse<IDeleteResponse> = await axios.delete(
        `${API_URL}/projects/delete/hard/material`,
        { data: { material_id: materialId } }
    );
    return response.data;
};
