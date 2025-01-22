import { Logo } from "../../styles/logo/Logo";
import { LogoWrapperMenu } from "../../styles/logo/LogoWrapper";
import { MenuWrapper } from "../../styles/styledComponents/Wrappers";
import { variables } from "../../styles/variables";
import { SignOutButton } from "../buttons/SignOutButton";
import { Navbar } from "./Navbar";

export const Menu = () => {
    return (
        <>
            <MenuWrapper>
                <LogoWrapperMenu>
                    <Logo color={variables.logoColorBlack}></Logo>
                </LogoWrapperMenu>
                <Navbar />
                <SignOutButton />
            </MenuWrapper>
        </>
    );
};
