import styled from "styled-components";

export const MenuWrapper = styled.div`
    background-color: white;
    height: 100vh;
    margin: 0;
    width: 20%;
    position: fixed;
`;

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

export const TodoWrapper = styled.div`
    background-color: white;
    width: 579px;
    min-height: 150px;
    border-radius: 25px;
    padding-bottom: 85px;
    margin-bottom: 1rem;
    color: #3e3e3e;
    h2 {
        margin: 0;
        text-align: center;
    }
    .header {
        height: 38px;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 70% 15% 15%;
        background-color: #5c2332;
        color: white;
        align-items: center;
        li {
            font-size: 1.5rem;
            display: flex;
            align-items: center;
        }
        :first-child {
            padding-left: 2rem;
        }
        :nth-child(2),
        :nth-child(3) {
            justify-self: center;
        }
    }
    ul {
        width: 100%;
        margin: 0;
        padding: 0;
        align-items: center;
        li {
            margin: 0;
            list-style: none;
            height: 38px;
        }
    }
`;
export const ProjectViewWrapper = styled.div`
    /* display: grid;
    grid-template-columns: 60% 40%; */
    max-width: 80vw;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    margin-left: 5%;
`;
