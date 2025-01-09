import axios from "axios";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [displayError, setDisplayError] = useState(false);
    const [validationMessage, setValidationMessage] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (username && password) {
            signIn(username, password);
        } else {
            setValidationMessage(true);
            setDisplayError(false);
        }
    };

    //   const API_URL = process.env.REACT_APP_API_URL;

    const signIn = async (username: string, password: string) => {
        try {
            const response = await axios.post(
                "http://localhost:3000/users/signin",
                {
                    username: username,
                    password: password,
                }
            );
            console.log(response);
            setDisplayError(false);
            navigate("/overview");
            localStorage.setItem("user_id", response.data.user_id);
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
                <button>Sign in</button>
            </form>
            {displayError && <span>Sign in failed</span>}
            {validationMessage && (
                <span>Please enter username and password</span>
            )}
        </>
    );
};
