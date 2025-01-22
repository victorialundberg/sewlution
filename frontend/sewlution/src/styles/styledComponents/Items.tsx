import styled from "styled-components";

export const ProjectOverviewItem = styled.li`
    list-style: none;
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
    p {
        margin: 0;
        font-size: 1.2rem;
    }
    button {
        padding: 0;
        margin: 0;
    }
    :first-child {
        padding-left: 2rem;
    }
    :nth-child(2),
    :nth-child(3) {
        justify-self: center;
    }
`;
