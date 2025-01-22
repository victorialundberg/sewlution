import { SignInOrUp } from "../components/auth/SignInOrUp";
import { Logo } from "../styles/logo/Logo";
import { variables } from "../styles/variables";
import { LogoWrapper } from "../styles/logo/LogoWrapper";
import { StartContainer } from "../styles/styledComponents/Containers";

export const Start = () => {
    return (
        <>
            <StartContainer>
                <LogoWrapper>
                    <Logo color={variables.logoColorRed}></Logo>
                </LogoWrapper>

                <SignInOrUp></SignInOrUp>
            </StartContainer>
        </>
    );
};
