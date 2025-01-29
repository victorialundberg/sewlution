import { FormEvent, useEffect, useState } from "react";
import { ITodo } from "../../models/ITodo";
import { TodoWrapper } from "../../styles/styledComponents/Wrappers";
import { Todo } from "./Todo";
import axios from "axios";
import { createTodo } from "../../services/todos/createTodoService";
import {
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

    useEffect(() => {
        const getTodos = async (projectId: number) => {
            try {
                const response = await axios.post<ITodo[]>(
                    "http://localhost:3000/projects/read/todo",
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
    }, [changed, todos.length, projectId]);

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
            <ul className="todoHeader">
                <li>Task</li>
                <li>Done</li>
                <li>Delete</li>
            </ul>
            <ul>
                {todos.map((todo, i) => (
                    <Todo onChange={handleChange} todo={todo} key={i} />
                ))}
            </ul>
            {props.showForm && (
                <div>
                    <form onSubmit={handleSubmit}>
                        <ProjectLabel htmlFor="todoInput">Todo: </ProjectLabel>
                        <InputField
                            type="text"
                            id="todoInput"
                            value={userInput}
                            onChange={(e) => handleOnChange(e.target.value)}
                        />
                        <ActionButton>Add todo</ActionButton>
                        {displayError && (
                            <p>Please provide a name for the todo</p>
                        )}
                    </form>
                </div>
            )}
        </TodoWrapper>
    );
};
