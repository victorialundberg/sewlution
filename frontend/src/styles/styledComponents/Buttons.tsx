import styled from "styled-components";

interface IButtonProps {
    $backgroundColor?: string;
    $color?: string;
}

export const BaseButton = styled.button`
    border-radius: 10px;
    &:hover,
    &:focus {
        outline: 2px solid black;
        outline-offset: 2px;
    }
`;

export const ActionButton = styled(BaseButton)<IButtonProps>`
    align-self: center;
    color: ${(props) => props.$color || "white"};
    background-color: ${(props) => props.$backgroundColor || "#5c2332"};
    width: fit-content;
    height: fit-content;
    &[aria-disabled="true"] {
        opacity: 50%;
        cursor: default;
        &:hover,
        &:focus {
            outline: none;
            outline-offset: none;
        }
    }
`;

export const IconButton = styled(BaseButton)`
    padding: 0;
    margin: 0;
    justify-self: center;
    border-radius: 0;
    background-color: white;
    display: flex;
`;

export const HeaderButton = styled(IconButton)`
    @media (max-width: 450px) {
        width: 20%;
        min-width: 15%;
    }
`;

export const ButtonContainerMobile = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 1rem auto;
    padding: 1rem;
    width: 80%;
    border-bottom: 1px solid #d9d9d9;
`;

export const NavButton = styled.button`
    all: unset;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
        background-color: #d4e2d9;
    }
    span {
        flex-grow: 1;
        padding: 1rem 0 1rem 1rem;
    }
    svg {
        flex-shrink: 0;
        padding-right: 1rem;
    }
    a {
        color: #3e3e3e;
        display: block;
        width: 100%;
        padding: 1rem 0 1rem 1rem;
    }
`;
