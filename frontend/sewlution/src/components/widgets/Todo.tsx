import { ITodo } from "../../models/ITodo";

interface ITodoProps {
    todo: ITodo;
}

export const Todo = (props: ITodoProps) => {
    return <>{props.todo.todo}</>;
};
