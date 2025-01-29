import { FormEvent, useEffect, useState } from "react";
import { ITodo } from "../../models/ITodo";
import { TodoWrapper } from "../../styles/styledComponents/Wrappers";
import { Todo } from "./Todo";
import axios from "axios";
import { createTodo } from "../../services/todos/createTodoService";
import {
    ErrorMessage,
    Heading,
    InputField,
    ProjectLabel,
} from "../../styles/styledComponents/Items";
import { ActionButton } from "../../styles/styledComponents/Buttons";

interface ITodoSProps {
    todos: ITodo[];
    projectId: number;
    showForm: boolean;
}

export const Todos = (props: ITodoSProps) => {
    const [todos, setTodos] = useState<ITodo[]>(props.todos);
    const [userInput, setUserInput] = useState("");
    const [changed, setChanged] = useState(false);
    const [displayError, setDisplayError] = useState(false);
    const projectId = props.projectId;
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const getTodos = async (projectId: number) => {
            try {
                const response = await axios.post<ITodo[]>(
                    `${API_URL}/projects/read/todo`,
                    { project_id: projectId }
                );
                setTodos(response.data);
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        };

        if (changed || todos.length !== 0) {
            console.log("Todos changed, fetching all todos");
            getTodos(projectId);
            setChanged(false);
        }
    }, [changed, todos.length, projectId, API_URL]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (userInput === "") {
            setDisplayError(true);
            return;
        }
        await createTodo(projectId, userInput);
        setUserInput("");
        setChanged(true);
    };

    const handleOnChange = (input: string) => {
        setUserInput(input);
        setDisplayError(false);
    };

    const handleChange = () => {
        setChanged(true);
    };

    return (
        <TodoWrapper className="editTodos">
            <Heading>Todo</Heading>
            <ul className="todoHeader" aria-label="Todo headers">
                <li>Task</li>
                <li>Done</li>
                <li>Delete</li>
            </ul>
            <ul aria-label="Todo list">
                {todos.map((todo, i) => (
                    <Todo onChange={handleChange} todo={todo} key={i} />
                ))}
            </ul>
            {props.showForm && (
                <div>
                    <form onSubmit={handleSubmit} aria-labelledby="todo-label">
                        <ProjectLabel htmlFor="todoInput" id="todo-label">
                            Todo:{" "}
                        </ProjectLabel>
                        <InputField
                            type="text"
                            id="todoInput"
                            value={userInput}
                            onChange={(e) => handleOnChange(e.target.value)}
                            required
                            aria-required="true"
                        />
                        <ActionButton aria-label="Add todo to list">
                            Add todo
                        </ActionButton>
                        {displayError && (
                            <ErrorMessage role="alert">
                                Please provide a name for the todo
                            </ErrorMessage>
                        )}
                    </form>
                </div>
            )}
        </TodoWrapper>
    );
};
