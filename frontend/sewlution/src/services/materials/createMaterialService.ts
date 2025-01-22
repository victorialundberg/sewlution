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
    const response: AxiosResponse<IMaterialResponse> = await axios.post(
        "http://localhost:3000/projects/add/material",
        {
            project_id: material.project_id,
            material_row: material,
        }
    );
    return response.data;
};
