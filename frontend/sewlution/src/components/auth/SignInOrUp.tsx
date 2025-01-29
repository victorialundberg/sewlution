import { Link } from "react-router-dom";
import { AuthContainer } from "../../styles/styledComponents/Containers";
import { ActionButton } from "../../styles/styledComponents/Buttons";
import { colors } from "../../styles/colors";

export const SignInOrUp = () => {
    return (
        <>
            <AuthContainer>
                <Link to={"/signin"}>
                    <ActionButton $backgroundColor={colors.red}>
                        Sign in
                    </ActionButton>
                </Link>
                <span>or</span>
                <Link to={"/signup"}>Sign up</Link>
            </AuthContainer>
        </>
    );
};
