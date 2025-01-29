import styled from "styled-components";

export const MenuWrapper = styled.div`
    background-color: white;
    height: 100vh;
    margin: 0;
    width: 20%;
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 3;

    transition: transform 0.3s ease;
    transform: translateX(-100%);

    @media (min-width: 1024px) {
        transform: translateX(0);
    }
    @media (max-width: 1024px) {
        width: 30%;
    }
    @media (max-width: 720px) {
        width: 50%;
    }
    @media (max-width: 400px) {
        width: 100vw;
    }

    &.open {
        transform: translateX(0);
    }

    > :first-child {
        justify-content: center;
        margin: 1rem auto;
        width: 90%;
        @media (min-width: 1024px) {
            display: none;
        }
    }
    > :last-child {
        font-size: 1.5rem;
        width: fit-content;
        margin-top: auto;
        margin-bottom: 1rem;
    }
`;

export const NavbarWrapper = styled.div`
    width: 100%;
    li:first-child {
        border-top: 1px solid lightgray;
        button {
            background-color: white;
            display: flex;
        }
    }
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid lightgray;
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
    }
`;

export const TodoWrapper = styled.div`
    background-color: white;
    width: 90%;
    min-height: 150px;
    border-radius: 25px;
    padding-bottom: 3rem;
    margin: 1rem;
    h2 {
        margin: 0;
        text-align: center;
    }
    .todoHeader {
        height: 38px;
        margin: 0;
        margin-top: -1rem;
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
            @media (max-width: 460px) {
                font-size: 1rem;
            }
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
    div {
        width: 100%;
        display: flex;
        justify-content: center;
        form {
            display: flex;
            justify-content: center;
            padding-top: 1.5rem;
            margin-bottom: -1.5rem;
            width: 80%;
            @media (max-width: 460px) {
                flex-direction: column;
                text-align: center;
            }
            button {
                width: 25%;
                margin-left: 1rem;
                background-color: #5c2332;
                @media (max-width: 460px) {
                    margin: 1rem 0;
                    width: 75%;
                }
            }
        }
    }
    @media (max-width: 800px) {
        margin: 1rem auto;
        width: 100%;
    }
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const ProjectOverviewWrapper = styled.div`
    display: flex;
    width: 80vw;
    margin-left: 20vw;
    height: 100%;
    @media (max-width: 1024px) {
        margin: 100px auto;
        width: 100%;
    }
    @media (max-width: 800px) {
        margin: 100px auto;
        width: 100%;
    }
`;

export const ProjectViewWrapper = styled(ProjectOverviewWrapper)`
    @media (max-width: 1024px) {
        margin-top: 0;
    }
    @media (max-width: 800px) {
        margin-top: 0;
        display: block;
    }
`;

export const EditVievWrapper = styled(ProjectViewWrapper)`
    @media (max-width: 1024px) {
        margin-top: 120px;
    }
    @media (max-width: 800px) {
        margin-top: 120px;
        display: block;
    }
`;

export const ProjectColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const LeftProjectColumn = styled(ProjectColumn)`
    flex: 2;
`;
export const RightProjectColumn = styled(ProjectColumn)`
    flex: 3;
    @media (max-width: 800px) {
        padding: 1rem;
    }
`;

export const DeletedProjectWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    :first-child {
        grid-column: span 2;
        text-align: center;
    }
`;
