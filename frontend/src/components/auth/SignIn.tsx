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

    const API_URL = import.meta.env.VITE_APP_API_URL;

    const signIn = async (username: string, password: string) => {
        try {
            const response = await axios.post(`${API_URL}/users/signin`, {
                username: username,
                password: password,
            });
            setDisplayError(false);
            localStorage.setItem("username", response.data.username);
            navigate("/overview");
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
                <form onSubmit={handleSubmit} aria-labelledby="signin-heading">
                    <h1 id="signin-heading" hidden>
                        Sign In
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
                        aria-label="Sign in to your account"
                    >
                        Sign in
                    </ActionButton>
                </form>
                {displayError && (
                    <span id="error-message" role="alert">
                        Sign in failed
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
