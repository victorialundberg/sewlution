import { Logo } from "../../styles/logo/Logo";
import { LogoWrapper, LogoWrapperMenu } from "../../styles/logo/LogoWrapper";
import { MenuWrapper } from "../../styles/styledComponents/Wrappers";
import { colors } from "../../styles/colors";
import { SignOutButton } from "../buttons/SignOutButton";
import { Navbar } from "./Navbar";
import { useState } from "react";
import {
    HeaderButton,
    IconButton,
} from "../../styles/styledComponents/Buttons";
import { NavHeader } from "../../styles/styledComponents/Containers";
import { SignOutIcon } from "../../styles/icons/SignOutIcon";
import { MenuIcon } from "../../styles/icons/MenuIcon";
import { MenuOverlay } from "../../styles/styledComponents/Items";
import { CloseIcon } from "../../styles/icons/CloseIcon";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navigate = useNavigate();

    const signOut = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <>
            <NavHeader role="banner">
                <HeaderButton
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-controls="menu"
                    aria-label="Open main menu"
                >
                    <MenuIcon></MenuIcon>
                </HeaderButton>
                <LogoWrapper>
                    <Logo color={colors.grey} aria-hidden="true"></Logo>
                </LogoWrapper>
                <HeaderButton onClick={signOut} aria-label="Sign out">
                    <SignOutIcon></SignOutIcon>
                </HeaderButton>
            </NavHeader>
            <MenuOverlay
                className={isOpen ? "open" : ""}
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
            />
            <MenuWrapper
                id="menu"
                className={isOpen ? "open" : ""}
                role="navigation"
                aria-label="Main menu"
                aria-hidden={!isOpen}
                onClick={() => setIsOpen(false)}
            >
                <IconButton
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                >
                    <CloseIcon />
                </IconButton>
                <LogoWrapperMenu>
                    <Logo color={colors.grey} aria-hidden="true"></Logo>
                </LogoWrapperMenu>
                <Navbar />
                <SignOutButton />
            </MenuWrapper>
        </>
    );
};
