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
    console.log(todo.done);

    const response: AxiosResponse<ITodoResponse> = await axios.patch(
        "http://localhost:3000/projects/edit/todo",
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
