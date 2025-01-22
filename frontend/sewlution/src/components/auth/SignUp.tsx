import axios from "axios";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [displayError, setDisplayError] = useState(false);
    const [validationMessage, setValidationMessage] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (username && password) {
            addUser(username, password);
        } else {
            setValidationMessage(true);
        }
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
            setDisplayError(false);
            navigate("/overview");
            localStorage.setItem("username", response.data);
        } catch (error) {
            setDisplayError(true);
            setValidationMessage(false);
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
            {displayError && <span>Username already exists</span>}
            {validationMessage && (
                <span>Please enter username and password</span>
            )}
        </>
    );
};
