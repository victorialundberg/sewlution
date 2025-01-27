import { useNavigate } from "react-router-dom";
import { SubmitButton } from "../../styles/styledComponents/Buttons";
import { colors } from "../../styles/colors";

export const SignOutButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <>
            <SubmitButton $backgroundColor={colors.red} onClick={handleClick}>
                Sign out
            </SubmitButton>
        </>
    );
};
