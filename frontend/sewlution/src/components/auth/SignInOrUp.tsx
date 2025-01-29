import { Link } from "react-router-dom";
import { AuthContainer } from "../../styles/styledComponents/Containers";
import { ActionButton } from "../../styles/styledComponents/Buttons";
import { colors } from "../../styles/colors";

export const SignInOrUp = () => {
    return (
        <>
            <AuthContainer>
                <h1 hidden>Sign in or sign up to Sewlution</h1>
                <Link to={"/signin"} aria-label="Go to sign-in page">
                    <ActionButton $backgroundColor={colors.red}>
                        Sign in
                    </ActionButton>
                </Link>
                <span role="presentation">or</span>
                <Link to={"/signup"} aria-label="Go to sign-up page">
                    Sign up
                </Link>
            </AuthContainer>
        </>
    );
};
