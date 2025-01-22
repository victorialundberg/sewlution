import axios, { AxiosResponse } from "axios";
import { IDeleteResponse } from "../../models/IDeleteResponse";

export const deleteMaterial = async (
    materialId: number
): Promise<IDeleteResponse> => {
    const response: AxiosResponse<IDeleteResponse> = await axios.delete(
        "http://localhost:3000/projects/delete/hard/material",
        { data: { material_id: materialId } }
    );
    return response.data;
};
