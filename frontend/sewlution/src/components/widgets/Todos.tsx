import { ITodo } from "../../models/ITodo";
import { TodoContainer } from "../../styles/styledComponents/ProjectViewContainer";
import { Todo } from "./Todo";

interface ITodoSProps {
    todos: ITodo[];
}

export const Todos = (props: ITodoSProps) => {
    return (
        <TodoContainer>
            <h2>Todo</h2>
            <ul className="header">
                <li>Task</li>
                <li>Done</li>
                <li>Delete</li>
            </ul>
            <ul>
                {props.todos.map((todo, i) => (
                    <Todo todo={todo} key={i} />
                ))}
            </ul>
        </TodoContainer>
    );
};
