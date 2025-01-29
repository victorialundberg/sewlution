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
