import styled from "styled-components";

export const NavbarWrapper = styled.div`
    width: 100%;
    .newProjectModal::backdrop {
        background-color: black;
        opacity: 50%;
    }
    li:first-child {
        border-top: 1px solid lightgray;
        button {
            background-color: white;
            display: flex;
        }
    }
    li {
        border-bottom: 1px solid lightgray;
        list-style: none;
        a {
            color: #3e3e3e;
            display: block;
            width: 100%;
            padding: 1em 0 1em 1em;
        }
    }
`;
