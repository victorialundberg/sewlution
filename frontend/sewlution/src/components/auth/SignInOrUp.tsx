import { Link } from "react-router-dom";
import { AuthContainer } from "../../styles/styledComponents/Containers";
import { SubmitButton } from "../../styles/styledComponents/Buttons";
import { colors } from "../../styles/colors";

export const SignInOrUp = () => {
    return (
        <>
            <AuthContainer>
                <Link to={"/signin"}>
                    <SubmitButton $backgroundColor={colors.red}>
                        Sign in
                    </SubmitButton>
                </Link>
                <span>or</span>
                <Link to={"/signup"}>Sign up</Link>
            </AuthContainer>
        </>
    );
};
