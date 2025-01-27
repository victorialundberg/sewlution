import styled from "styled-components";

export const StartContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 70vw;
    height: 80vh;
    border-radius: 75px;
    margin: auto;
    margin-top: 5%;
    > :first-child {
        margin: 2rem auto 0 auto;
    }
`;

export const AuthContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    margin: 6rem auto;
    align-items: center;
    button,
    a,
    span {
        font-size: 2rem;
    }
    a {
        &:hover {
            text-decoration: underline;
        }
    }
    a,
    span {
        color: #5c2332;
    }
    button {
        padding: 0.75rem 3.5rem;
        width: 100%;
    }
`;

export const AuthSubmitContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 6rem auto;
    form {
        display: grid;
        grid-template-columns: 20% 75%;
        gap: 5%;
        button {
            margin-top: 1rem;
            padding: 0.55rem 3.5rem;
            font-size: 1.5rem;
            grid-column: span 2;
            justify-self: center;
        }
    }
    p {
        margin-top: 3rem;
        text-align: center;
    }
    a {
        text-align: center;
        color: #3e3e3e;
        margin-top: 8rem;
        font-size: 2rem;
        &:hover {
            text-decoration: underline;
        }
    }
`;

export const ProjetContainer = styled.div`
    background-color: white;
    max-width: 100%;
    border-radius: 25px;
    padding: 2rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
`;

export const ProjectViewContainer = styled(ProjetContainer)`
    display: block;
    padding: 2rem;
    p {
        margin: 0;
        text-align: center;
    }
`;
export const ProjectOverviewContainer = styled(ProjectViewContainer)`
    width: 100%;
    margin: 4rem;
    padding: 1rem 0;
    ul {
        padding: 0;
        margin: 0;
        > :first-child {
            border-top: 1px solid #a8a8b0;
        }
    }
    .overviewHeader {
        height: 60px;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 40% 20% 20% 20%;
        background-color: #55736b;
        color: white;
        li {
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            text-align: center;
        }
        :first-child {
            padding-left: 2rem;
        }
        :nth-child(2),
        :nth-child(3),
        :nth-child(4) {
            justify-self: center;
        }
    }
    .overviewFooter {
        display: flex;
        > button {
            margin: 1rem auto;
            width: 20%;
        }
    }
`;

export const ProjectHeader = styled(ProjectViewContainer)`
    width: 30%;
    margin-left: 20vw;
    h1 {
        text-align: center;
        margin: 0;
    }
`;

export const DeletedProjectContainer = styled(ProjectViewContainer)`
    display: grid;
    color: white;
    background-color: #55736b;
    height: 119px;
    width: 285px;
    button {
        border-radius: 25px;
        padding: 0.5rem 1.5rem;
        justify-self: center;
        font-size: 1.5rem;
    }
`;

export const EditContainer = styled(ProjetContainer)`
    p {
        font-size: 2rem;
        margin: 0 auto;
    }
    div,
    p {
        padding-bottom: 1rem;
    }
    form {
        display: grid;
        grid-template-columns: 70% 30%;
        label,
        p {
            grid-column: span 2;
            text-align: center;
        }
        input {
            margin-right: 1rem;
        }
        > button {
            width: 100%;
        }
    }
    button {
        width: 154px;
        border-radius: 25px;
    }
`;
