import axios from "axios";
import { FormEvent, useState } from "react";

export const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        addUser(username, password);

        // Go to landing or display error
    };

    //   const API_URL = process.env.REACT_APP_API_URL;

    const addUser = async (username: string, password: string) => {
        try {
            const response = await axios.post(
                "http://localhost:3000/users/add",
                {
                    username: username,
                    password: password,
                }
            );
            console.log(response);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error(
                    "Error: ",
                    error.response ? error.response.data : error.message
                );
            } else {
                console.error("Unknown error: ", error);
            }
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Sign up</button>
            </form>
        </>
    );
};
