import styled from "styled-components";
import { colors } from "../colors";

export const StartContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.white};
    width: 70vw;
    height: auto;
    border-radius: 75px;
    margin: auto;
    margin-top: 5%;
    > :first-child {
        margin: 2rem auto 0 auto;
    }
    @media (max-width: 575px) {
        width: 90%;
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
    @media (max-width: 840px) {
        width: 50%;
    }
    @media (max-width: 575px) {
        button,
        a,
        span {
            font-size: 1.5rem;
        }
    }
    @media (max-width: 360px) {
        width: 75%;
    }
`;

export const AuthFooter = styled.div`
    display: flex;
    a {
        margin: 0 auto;
        text-align: center;
        color: ${colors.grey};
        font-size: 2rem;
        &:hover {
            text-decoration: underline;
        }
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
            @media (max-width: 475px) {
                padding: 0.5rem 2rem;
            }
        }
    }
    p {
        margin-top: 3rem;
        text-align: center;
    }
    @media (max-width: 1024px) {
        width: 60%;
        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            label {
                display: block;
            }
        }
        a {
            margin-top: 2rem;
        }
    }
    @media (max-width: 260px) {
        width: 80%;
    }
`;

export const ProjectContainer = styled.div`
    background-color: ${colors.white};
    max-width: 100%;
    border-radius: 25px;
    padding: 2rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
`;

export const AboutContainer = styled(ProjectContainer)`
    h1 {
        padding: 1rem;
    }
    p {
        padding: 1rem;
        font-family: serif;
        font-size: 1.2rem;
        margin: 0;
        padding-bottom: 0.5rem;
        @media (max-width: 300px) {
            font-size: 1rem;
        }
    }
`;

export const ProjectViewContainer = styled(ProjectContainer)`
    display: block;
    padding: 2rem;
    p {
        margin: 0;
        text-align: center;
    }
    > :nth-child(2) {
        > p {
            font-size: 1.2rem;
            text-align: left;
        }
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
            @media (max-width: 575px) {
                border: none;
            }
        }
    }
    .overviewHeader {
        height: 60px;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 40% 20% 20% 20%;
        background-color: ${colors.green};
        color: ${colors.white};
        li {
            font-size: 1.7rem;
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
        @media (max-width: 1024px) {
            grid-template-columns: 35% 20% 20% 25%;
        }
        @media (max-width: 575px) {
            display: none;
        }
    }
    .overviewFooter {
        display: flex;
        > button {
            margin: 1rem auto;
            min-width: 20%;
        }
    }
    @media (max-width: 575px) {
        margin: 3rem;
    }
    @media (max-width: 350px) {
        margin: 1rem;
    }
`;

export const ProjectHeader = styled(ProjectViewContainer)`
    width: 30%;
    margin-left: 20vw;
    display: flex;
    flex-direction: column;
    h1,
    a {
        text-align: center;
    }
    h1 {
        margin: 0;
    }
    a {
        padding: 1rem 0;
        font-size: 1.5rem;
        color: ${colors.grey};
        &:hover {
            text-decoration: underline;
        }
    }
    @media (max-width: 1024px) {
        margin: 150px auto 0;
        width: 50%;
    }
    @media (max-width: 800px) {
        width: 80%;
        margin-left: 1rem;
        margin-right: 1rem;
        h1 {
            font-size: 2rem;
        }
        a {
            font-size: 1rem;
        }
    }
`;

export const DeletedProjectContainer = styled(ProjectViewContainer)`
    grid-column: span 2;
    text-align: center;
    color: ${colors.white};
    background-color: ${colors.green};
    height: auto;
    max-width: 285px;
    width: auto;
    display: flex;
    margin: 1rem;
    p {
        grid-column: span 2;
        text-align: center;
    }
    button {
        border-radius: 25px;
        padding: 0.5rem 1.5rem;
        justify-self: center;
        font-size: 1.5rem;
        margin: 1rem;
    }
`;

export const EditContainer = styled(ProjectContainer)`
    p {
        font-size: 2rem;
        margin: 0 auto;
    }
    div {
        .tox-tinymce {
            z-index: 0 !important;
        }
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

export const NavHeader = styled.div`
    height: 100px;
    position: fixed;
    width: 100vw;
    background-color: ${colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    div {
        width: 30%;
    }
    button {
        height: 40px;
    }
    :first-child {
        margin-left: 1rem;
    }
    :last-child {
        margin-right: 1rem;
    }
    transition: transform 0.3s ease;
    transform: translateY(0);
    @media (min-width: 1024px) {
        transform: translateY(-100%);
    }
`;

export const ProjectViewFooter = styled.div`
    justify-self: center;
    margin: 2rem 0 2rem 20vw;
    background-color: ${colors.white};
    width: 400px;
    border-radius: 25px;
    > a {
        display: flex;
        > button {
            font-size: 1.5rem;
            margin: 2rem auto;
            @media (max-width: 460px) {
                font-size: 1rem;
            }
        }
    }
    @media (max-width: 1024px) {
        margin: -4rem 5% 2rem 5%;
    }
    @media (max-width: 460px) {
        width: 90%;
        margin: -6rem 5% 2rem 5%;
    }
`;
