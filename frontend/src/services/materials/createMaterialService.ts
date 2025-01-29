import axios, { AxiosResponse } from "axios";
import { IMaterial } from "../../models/IMaterial";

interface IMaterialResponse {
    data: {
        addedMaterial: string;
        success: boolean;
    };
}

export const createMaterial = async (
    material: IMaterial
): Promise<IMaterialResponse> => {
    const API_URL = import.meta.env.VITE_APP_API_URL;
    const response: AxiosResponse<IMaterialResponse> = await axios.post(
        `${API_URL}/projects/add/material"`,
        {
            project_id: material.project_id,
            material_row: material,
        }
    );
    return response.data;
};
