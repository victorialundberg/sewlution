import { Link } from "react-router-dom";

export const SignInOrUp = () => {
    return (
        <>
            <div>
                <Link to={"/signin"}>
                    <button>Sign in</button>
                </Link>
                <span>or</span>
                <Link to={"/signup"}>Sign up</Link>
            </div>
        </>
    );
};
