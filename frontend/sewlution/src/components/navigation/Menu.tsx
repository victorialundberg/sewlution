import { Logo } from "../../styles/logo/Logo";
import { LogoWrapperMenu } from "../../styles/logo/LogoWrapper";
import { MenuWrapper } from "../../styles/styledComponents/Wrappers";
import { colors } from "../../styles/colors";
import { SignOutButton } from "../buttons/SignOutButton";
import { Navbar } from "./Navbar";

export const Menu = () => {
    return (
        <>
            <MenuWrapper>
                <LogoWrapperMenu>
                    <Logo color={colors.black}></Logo>
                </LogoWrapperMenu>
                <Navbar />
                <SignOutButton />
            </MenuWrapper>
        </>
    );
};
