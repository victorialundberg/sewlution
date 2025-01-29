import axios, { AxiosResponse } from "axios";

interface ITodoResponse {
    addedTodo: string;
}

export const createTodo = async (
    projectId: number,
    todo: string
): Promise<ITodoResponse> => {
    const API_URL = process.env.REACT_APP_API_URL;

    const response: AxiosResponse<ITodoResponse> = await axios.post(
        `${API_URL}/projects/add/todo`,
        {
            project_id: projectId,
            todo: todo,
        }
    );
    return response.data;
};
