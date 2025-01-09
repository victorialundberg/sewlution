import { useNavigate } from "react-router-dom";

export const SignOutButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <>
            <button onClick={handleClick}>Sign out</button>
        </>
    );
};
