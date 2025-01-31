import styled from "styled-components";
import { colors } from "../colors";

interface IInputFieldProps {
    $bordercolor?: string;
}

export const ProjectOverviewItem = styled.li`
    padding: 1rem 0;
    list-style: none;
    display: grid;
    grid-template-columns: 40% 20% 20% 20%;
    text-align: center;
    border-bottom: 1px solid #a8a8b0;
    font-size: 1.5rem;
    > :first-child {
        padding-left: 2rem;
        text-align: left;
        color: ${colors.grey};
        &:hover {
            text-decoration: underline;
        }
    }
    .buttonContainer {
        grid-column: 4;
        display: flex;
        width: max-content;
        margin: 0 auto;
        button {
            margin: 0 0.4rem;
        }
        @media (max-width: 1024px) {
            justify-content: end;
        }
    }
    @media (max-width: 1024px) {
        grid-template-columns: 35% 20% 20% 25%;
    }
    @media (max-width: 775px) {
        font-size: 1.2rem;
    }
`;

export const ProjectOverviewItemMobile = styled.li`
    list-style: none;
    text-align: center;
    margin-bottom: 1rem;
    > button {
        color: ${colors.grey};
        font-size: 2rem;
        padding: 0.5rem 0 0 0;
        border-radius: 25px;
        width: 80%;
        background-color: #d4e2d9;
    }
`;

export const TodoItem = styled.li`
    width: 100%;
    padding: 0;
    height: 38px;
    display: grid;
    grid-template-columns: 70% 15% 15%;
    margin: 0;
    list-style: none;
    border-bottom: 1px solid #a8a8b0;
    align-items: center;
    label {
        margin: 0;
        font-size: 1.2rem;
        padding-left: 2rem;
    }

    input[type="checkbox"] {
        box-sizing: border-box;
        width: 24px;
        height: 24px;
        margin: 6px;
        padding: 0;
        border: 1px solid ${colors.red};
        appearance: none;
        background-color: transparent;
        outline: none;
        position: relative;
        cursor: pointer;
        transition: background-color 0.2s, border-color 0.2s, outline 0.1s;
        justify-self: center;
        &:checked {
            background-color: ${colors.white};
            border-color: ${colors.red};

            &::after {
                content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
                position: absolute;
                top: 40%;
                left: 35%;
                transform: translate(-50%, -50%);
                width: 16px;
                height: 16px;
                display: block;
                pointer-events: none;
            }
        }

        &:focus {
            outline: 2px solid ${colors.black};
            outline-offset: 2px;
        }

        &:hover {
            outline: 2px solid ${colors.black};
            outline-offset: 2px;
        }
    }
`;

export const InputField = styled.input<IInputFieldProps>`
    height: 44px;
    border-radius: 25px;
    border: 1px solid ${(props) => props.$bordercolor || colors.black};
    padding: 0 15px;
    font-family: "Just Me Again Down Here", serif;
    font-size: 1.3rem;
    color: ${colors.grey};
`;

export const ProjectLabel = styled.label`
    font-size: 1.8rem;
`;

export const Heading = styled.p`
    font-size: 2rem;
    margin: 0;
    padding-bottom: 1rem;
    text-align: center;
    @media (max-width: 450px) {
        font-size: 1.5rem;
    }
`;

export const ErrorMessage = styled.p`
    margin-top: 1rem;
    color: ${colors.red};
    font-size: 1.5rem;
`;

export const Dialog = styled.dialog`
    width: 35vw;
    border: none;
    border-radius: 25px;
    &::backdrop {
        background-color: ${colors.black};
        opacity: 50%;
    }
    @media (max-width: 650px) {
        width: 75vw;
    }
`;

export const FormDialog = styled(Dialog)`
    min-height: 250px;
    > form {
        height: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        label,
        p {
            text-align: center;
        }
        p,
        label,
        input {
            grid-column: span 2;
        }
        button {
            margin-top: 1rem;
            justify-self: center;
            width: 70%;
            @media (max-width: 400px) {
                width: 90%;
            }
        }
    }
`;

export const MaterialDialog = styled(FormDialog)`
    min-height: 500px;
`;

export const ButtonDialog = styled(Dialog)`
    height: fit-content;
    > form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 1rem;
        p {
            grid-column: span 2;
        }
        button {
            margin-top: 1rem;
            justify-self: center;
            width: 70%;
            @media (max-width: 400px) {
                width: 90%;
            }
        }
    }
`;

export const MenuOverlay = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: none;

    &.open {
        display: block;
    }

    @media (min-width: 1024px) {
        display: none;
    }
`;
