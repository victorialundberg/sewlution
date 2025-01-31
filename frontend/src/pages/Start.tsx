import { SignInOrUp } from "../components/auth/SignInOrUp";
import { Logo } from "../styles/logo/Logo";
import { colors } from "../styles/colors";
import { LogoWrapper } from "../styles/logo/LogoWrapper";
import { StartContainer } from "../styles/styledComponents/Containers";

export const Start = () => {
    localStorage.clear();
    return (
        <>
            <StartContainer>
                <LogoWrapper>
                    <Logo color={colors.red}></Logo>
                </LogoWrapper>

                <SignInOrUp></SignInOrUp>
            </StartContainer>
        </>
    );
};
