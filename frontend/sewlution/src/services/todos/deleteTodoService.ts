import axios, { AxiosResponse } from "axios";
import { IDeleteResponse } from "../../models/IDeleteResponse";

export const deleteTodo = async (todo: number): Promise<IDeleteResponse> => {
    const response: AxiosResponse<IDeleteResponse> = await axios.delete(
        "http://localhost:3000/projects/delete/hard/todo",
        {
            data: { todo_id: todo },
        }
    );
    return response.data;
};
