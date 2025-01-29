import { ITodo } from "../../models/ITodo";
import { deleteTodo } from "../../services/todos/deleteTodoService";
import { editTodo } from "../../services/todos/editTodoService";
import { TrashIcon } from "../../styles/icons/TrashIcon";
import { IconButton } from "../../styles/styledComponents/Buttons";
import { ProjectLabel, TodoItem } from "../../styles/styledComponents/Items";
import { colors } from "../../styles/colors";

interface ITodoProps {
    todo: ITodo;
    onChange: () => void;
}

export const Todo = (props: ITodoProps) => {
    return (
        <TodoItem>
            <ProjectLabel htmlFor={`todo-checkbox-${props.todo.todo_id}`}>
                {props.todo.todo}
            </ProjectLabel>
            <input
                type="checkbox"
                checked={props.todo.done === 1}
                onChange={async (e) => {
                    if (props.todo.todo_id !== undefined) {
                        const updatedTodo = {
                            ...props.todo,
                            done: e.target.checked ? 1 : 0,
                        };
                        const response = await editTodo(updatedTodo);
                        if (response.updatedTodo.success) {
                            props.onChange();
                        }
                    }
                }}
                aria-label={`Mark todo as ${
                    props.todo.done === 1 ? "not done" : "done"
                }`}
            />
            <IconButton
                onClick={() => {
                    if (props.todo.todo_id !== undefined) {
                        deleteTodo(props.todo.todo_id);
                        props.onChange();
                    }
                }}
                aria-label="Delete todo"
            >
                <TrashIcon color={colors.red} />
            </IconButton>
        </TodoItem>
    );
};
