import axios from "axios";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    ErrorMessage,
    InputField,
    ProjectLabel,
} from "../../styles/styledComponents/Items";
import {
    AuthFooter,
    AuthSubmitContainer,
    StartContainer,
} from "../../styles/styledComponents/Containers";
import { colors } from "../../styles/colors";
import { Logo } from "../../styles/logo/Logo";
import { LogoWrapper } from "../../styles/logo/LogoWrapper";
import { ActionButton } from "../../styles/styledComponents/Buttons";

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

    const API_URL = process.env.REACT_APP_API_URL;

    const addUser = async (username: string, password: string) => {
        try {
            const response = await axios.post(`${API_URL}/users/add`, {
                username: username,
                password: password,
            });
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
        <StartContainer>
            <LogoWrapper>
                <Logo color={colors.red}></Logo>
            </LogoWrapper>
            <AuthSubmitContainer>
                <form onSubmit={handleSubmit} aria-labelledby="signup-heading">
                    <h1 id="signup-heading" hidden>
                        Sign Up
                    </h1>
                    <ProjectLabel htmlFor="username">Username</ProjectLabel>
                    <InputField
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                            setValidationMessage(false);
                        }}
                        aria-required="true"
                        aria-describedby={
                            displayError ? "error-message" : undefined
                        }
                    />
                    <ProjectLabel htmlFor="password">Password</ProjectLabel>
                    <InputField
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setValidationMessage(false);
                        }}
                        aria-required="true"
                        aria-describedby={
                            displayError ? "error-message" : undefined
                        }
                    />
                    <ActionButton
                        $backgroundColor={colors.red}
                        aria-label="Sign up to Sewlution"
                    >
                        Sign up
                    </ActionButton>
                </form>
                {displayError && (
                    <span id="error-message" role="alert">
                        Username already exists
                    </span>
                )}
                {validationMessage && (
                    <ErrorMessage id="validation-message" role="alert">
                        Please enter username and password
                    </ErrorMessage>
                )}
            </AuthSubmitContainer>
            <AuthFooter>
                <Link to={"/"} aria-label="Go back to the homepage">
                    back
                </Link>
            </AuthFooter>
        </StartContainer>
    );
};
