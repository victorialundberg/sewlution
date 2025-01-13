import { ITodo } from "../../models/ITodo";
import { Todo } from "./Todo";

interface ITodoSProps {
    todos: ITodo[];
}

export const Todos = (props: ITodoSProps) => {
    return (
        <>
            {props.todos.map((todo, i) => (
                <Todo todo={todo} key={i} />
            ))}
        </>
    );
};
