import axios, { AxiosResponse } from "axios";

interface ITodoResponse {
    addedTodo: string;
}

export const createTodo = async (
    projectId: number,
    todo: string
): Promise<ITodoResponse> => {
    const response: AxiosResponse<ITodoResponse> = await axios.post(
        "http://localhost:3000/projects/add/todo",
        {
            project_id: projectId,
            todo: todo,
        }
    );
    return response.data;
};
