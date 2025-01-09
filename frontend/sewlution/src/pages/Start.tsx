import { SignInOrUp } from "../components/widgets/SignInOrUp";
import { BackgroundContainer } from "../styles/styledComponents/BackgroundContainer";
import { Logo } from "../styles/logo/Logo";
import { variables } from "../styles/variables";
import { LogoWrapper } from "../styles/logo/LogoWrapper";

export const Start = () => {
    return (
        <>
            <BackgroundContainer>
                <LogoWrapper>
                    <Logo color={variables.logoColorRed}></Logo>
                </LogoWrapper>

                <SignInOrUp></SignInOrUp>
            </BackgroundContainer>
        </>
    );
};
