import axios, { AxiosResponse } from "axios";
import { ITodo } from "../../models/ITodo";

interface ITodoResponse {
    updatedTodo: {
        todo_id: number;
        todo: string;
        done: number;
        success: boolean;
    };
}

export const editTodo = async (todo: ITodo): Promise<ITodoResponse> => {
    const API_URL = import.meta.env.VITE_APP_API_URL;
    const response: AxiosResponse<ITodoResponse> = await axios.patch(
        `${API_URL}/projects/edit/todo`,
        {
            todo: {
                todo_id: todo.todo_id,
                todo: todo.todo,
                done: todo.done,
            },
        }
    );
    return response.data;
};
