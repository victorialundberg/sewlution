import { ITodo } from "../../models/ITodo";
import { deleteTodo } from "../../services/todos/deleteTodoService";
import { editTodo } from "../../services/todos/editTodoService";
import { TodoItem } from "../../styles/styledComponents/Items";

interface ITodoProps {
    todo: ITodo;
    onChange: () => void;
}

export const Todo = (props: ITodoProps) => {
    return (
        <TodoItem>
            <p>{props.todo.todo}</p>
            <button
                onClick={async () => {
                    if (props.todo.todo_id !== undefined) {
                        const updatedTodo = {
                            ...props.todo,
                            done: props.todo.done === 1 ? 0 : 1,
                        };
                        const response = await editTodo(updatedTodo);
                        if (response.updatedTodo.success) {
                            props.onChange();
                        }
                    }
                }}
            >
                Done
            </button>
            <button
                onClick={() => {
                    if (props.todo.todo_id !== undefined) {
                        deleteTodo(props.todo.todo_id);
                        props.onChange();
                    }
                }}
            >
                Delete
            </button>
        </TodoItem>
    );
};
