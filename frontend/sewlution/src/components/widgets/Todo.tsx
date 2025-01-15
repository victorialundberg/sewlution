import { ITodo } from "../../models/ITodo";
import { TodoItem } from "../../styles/styledComponents/ProjectViewContainer";

interface ITodoProps {
    todo: ITodo;
}

export const Todo = (props: ITodoProps) => {
    return (
        <TodoItem>
            <p>{props.todo.todo}</p>
            <input type="checkbox" name="" id="" />
            <button>Delete</button>
        </TodoItem>
    );
};
